'use client'
import { useState } from 'react';
import Button from '../Button';
import { useCartContext } from '../context/CartContext';
import { db } from '@/firebase/config';
import { setDoc, doc, Timestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

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

const CheckoutForm = () => {
    const { cart, emptyCart } = useCartContext()
    const router = useRouter()

    const [values, setValues] = useState({
        email: '',
        direccion: '',
        telefono: '',
        nombre: '',
    })
    console.log("values", values);


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handeSubmit = async (e) => {
        e.preventDefault()
        const result = await createOrder(values, cart)
        console.log("result", result)
        Swal.fire({
            title: "¡Gracias por tu compra, Que lo disfrutes!",
            text: `El número de tu orden es: ${result}`,
            icon: "success",
            confirmButtonColor: "#7B341E",
            confirmButtonText: "Volver al inicio",
        }).then(() => {
            emptyCart()
            router.push('/')
        })
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

export default CheckoutForm;