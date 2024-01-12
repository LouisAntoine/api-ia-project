'use client'

import { useState } from 'react';
import { useAuth } from '@/app/authContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginPage = () => {
  const { logout } = useAuth();
  logout();

  const router = useRouter();

  const handleRedirect = async () => {
    router.push('/login');
  };

  return (
    <div className="container text-center mt-20 flex flex-col">
      <h1 className="text-4xl font-bold mb-6">Vous êtes déconnecté</h1>
      <button onClick={handleRedirect} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-auto">
        Reconnexion
      </button>
      <Link href="/" className="text-blue-500 hover:underline mt-5">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default LoginPage;
