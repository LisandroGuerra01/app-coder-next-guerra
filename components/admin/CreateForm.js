'use client'
import { useState } from 'react';
import Button from '../Button';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "@/firebase/config";

const createProduct = async (values, file) => {
    const storafeRef = ref(storage, values.slug)
    const fileSnapshot = await uploadBytes(storafeRef, file)
    const fileUrl = await getDownloadURL(fileSnapshot.ref)


    const docRef = doc(db, "products", values.slug)
    return setDoc(docRef, {
        ...values,
        image: fileUrl
    })
        .then(() => console.log("Producto agregado!")
        )
}

const CreateForm = () => {
    const [values, setValues] = useState({
        title: '',
        description: '',
        stock: 0,
        price: 0,
        slug: '',
        category: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(values)
    }

    return (
        <form onSubmit={handleSubmit} className='p-4 md:w-1/2 text-gray-700'>
            <label>Slug: </label>
            <input
                type="text"
                value={values.slug}
                required
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                name="slug"
                onChange={handleChange}
            />

            <label>Nombre: </label>
            <input
                type='text'
                value={values.title}
                required
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                name='title'
                onChange={handleChange}
            />

            <label>Precio: </label>
            <input
                type='number'
                value={values.price}
                required
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                name='price'
                onChange={handleChange}
            />

            <label>Stock: </label>
            <input
                type='number'
                value={values.stock}
                required
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                name='stock'
                onChange={handleChange}
            />

            <label>Categoría: </label>
            <input
                type='text'
                value={values.category}
                required
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                name='category'
                onChange={handleChange}
            />

            <label>Descripción: </label>
            <input
                type='text'
                value={values.description}
                required
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                name='description'
                onChange={handleChange}
            />

            <Button
                type='submit'
                className="mt-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Enviar
            </Button>
        </form>
    )
}

export default CreateForm;