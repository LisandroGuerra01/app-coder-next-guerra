'use client'
import { useState } from 'react';
import Button from '../Button';
import { useCartContext } from '../context/CartContext';
import { db } from '@/firebase/config';
import { setDoc, doc, Timestamp } from 'firebase/firestore';

const createOrder = async (values, items) => {
    const order = {
        client: values,
        items: items.map(item => ({
            title: item.title,
            price: item.price,
            slug: item.slug,
            quantity: item.quantity,
        })),
        date: new Date().toISOString()
    }

    const docId = Timestamp.fromDate(new Date()).toMillis()
    const orderRef = doc(db, 'orders', String(docId))
    await setDoc(orderRef, order)
    return docId
}

const ClientForm = () => {
    const { cart } = useCartContext()

    const [values, setValues] = useState({
        email: '',
        direccion: '',
        telefono: '',
        nombre: '',
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handeSubmit = async (e) => {
        e.preventDefault()
        const result = await createOrder(values, cart)
        console.log(result)
    }

    return (
        <form onSubmit={handeSubmit} className="p-4 md:w-1/4 text-gray-700">
            <input type="nombre" name="nombre" placeholder="Nombre" onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
            <input type="direccion" name="direccion" placeholder="Dirección" onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
            <input type="number" name="telefono" placeholder="Teléfono" onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
            <Button type="submit" className='mt-5'>Finalizar compra</Button>
        </form>
    )
}

export default ClientForm;