'use client'
import { useState } from 'react';
import Button from '../Button';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "@/firebase/config";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'

const createProduct = async (values) => {
    const id = uuidv4();
    const price = parseFloat(values.price);
    const stock = parseInt(values.stock);

    const docRef = doc(db, "products", id.toString());

    return setDoc(docRef, {
        ...values,
        id,
        price,
        stock,
        image: values.image
    })
        .then(() => alert("Producto agregado!")
        )
}

const CreateForm = () => {
    const router = useRouter();
    const [values, setValues] = useState({
        title: '',
        description: '',
        stock: 10,
        price: 0,
        slug: '',
        category: '',
        image: null
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleImageChange = async (e) => {
        const storageRef = ref(storage, uuidv4());
        const fileSnapshot = await uploadBytes(storageRef, e.target.files[0]);
        const fileURL = await getDownloadURL(fileSnapshot.ref);
        setValues({
            ...values,
            image: fileURL
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(values)
        router.push('/admin')
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

            <label>Imagen: </label>
            <input
                type="file"
                // value={values.image}
                required
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                name="image"
                onChange={handleImageChange}
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
            <select
                type='text'
                value={values.category}
                required
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                name='category'
                onChange={handleChange}
            >
                <option value="monitores">Monitores</option>
                <option value="gabinetes">Gabinetes</option>
                <option value="mouse">Mouse</option>
                <option value="teclados">Teclados</option>
            </select>

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