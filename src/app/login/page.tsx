'use client'

import { useState } from 'react';
import { useAuth } from '@/app/authContext';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const { login } = useAuth();

  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await login(username, password);

    router.push('/search');
  };

  return (
    <div className="container text-center mt-20">
      <h1 className="text-4xl font-bold mb-6">Connexion</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Nom d'utilisateur</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2"
        />
      </div>
      <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Connexion
      </button>
    </div>
  );
};

export default LoginPage;
