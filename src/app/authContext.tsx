'use client'

import { createContext, useContext, ReactNode, useState } from 'react';
import { authenticateUser } from '@/app/services/auth.service';

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextType {
  loggedIn: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async (username: string, password: string) => {
    try {
      const user = await authenticateUser(username, password);

      if (user) {
        setLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        // Gère l'échec de l'authentification (peut-être affiche un message d'erreur)
        console.error('Identifiants incorrects');
      }
    } catch (error) {
      console.error('Une erreur est survenue lors de l\'authentification', error);
      // Gère l'erreur d'authentification
    }
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem('user');
  };

  const contextValue: AuthContextType = {
    loggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
