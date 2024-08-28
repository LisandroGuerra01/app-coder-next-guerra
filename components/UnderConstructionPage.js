'use client'
import React from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';

const UnderConstructionPage = () => {
    const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Página en Construcción</h1>
      <p className="text-lg text-gray-600 mb-6">¡Estamos trabajando duro para traerte algo increíble!</p>
      <Button className='text-gray-500' onClick={() => router.push('/products')}>Ir al catálogo</Button>
    </div>
  );
};

export default UnderConstructionPage;
