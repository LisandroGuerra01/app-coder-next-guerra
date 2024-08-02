'use client'
import Button from '../components/Button';
import { useRouter } from 'next/navigation';

export default function notFound() {
    const router = useRouter();
    return (
        <>
            <main className="container m-auto">
                <h1 className="text-4xl font-bold text-grey-600 mt-4">404 - Página no encontrada</h1>
                <hr />
                <p className="text-base m-4">La página que buscas no existe.</p>
                <Button onClick={() => router.back()} className='mx-2'>Volver</Button>
                <Button onClick={() => router.push('/')}>Ir al inicio</Button>
            </main>
        </>
    )
}