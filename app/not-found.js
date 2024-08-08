'use client'
import Button from '../components/Button';
import { useRouter } from 'next/navigation';

export default function notFound() {
    const router = useRouter();
    return (
        <>
            <main className="min-h-screen bg-gray-100 text-black">
                <h1 className="text-4xl font-bold  pt-4">404 - Página no encontrada</h1>
                <hr />
                <p className="m-4">La página que buscas no existe.</p>
                <Button onClick={() => router.back()} className='mx-2'>Volver</Button>
                <Button onClick={() => router.push('/')}>Ir al inicio</Button>
            </main>
        </>
    )
}