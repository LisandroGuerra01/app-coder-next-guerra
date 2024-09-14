'use client'
import { useState } from "react"
import Button from '@/components/Button'
import { db, storage } from '@/firebase/config'
import { doc, updateDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const updateProduct = async (slug, values, file) => {
    let fileURL = values.image

    if (file) {
        const storageRef = ref(storage, values.slug)
        const fileSnapShot = await uploadBytes(storageRef, file)
        const fileURL = await getDownloadURL(fileSnapShot.ref)
    }

    const docRef = doc(db, 'products', slug)
    return updateDoc(docRef, {
        title: values.title,
        description: values.description,
        stock: Number(values.stock),
        price: Number(values.price),
        category: values.category,
        image: fileURL
    }).then(() => {
        alert('Producto actualizado!')
    }).catch(error => {
        alert(error.message)
    })
}

const EditForm = ({ item }) => {
    const { title, description, stock, price, category, image } = item
    const [values, setValues] = useState({
        title, description, stock, price, category, image
    })
    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await updateProduct(item.slug, values, file)
        window.location.href = '/admin'
    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12 text-gray-700">
                <input type="text" name="title" value={values.title} required onChange={handleChange} className="p-2 rounded w-full border border-indigo-600 block my-4" />
                <input type="file" name="image" onChange={(e) => setFile(e.target.files[0])} className="p-2 rounded w-full border border-indigo-600 block my-4" />
                <textarea name="description" value={values.description} required onChange={handleChange} className="p-2 rounded w-full border border-indigo-600 block my-4" />
                <input type="number" name="stock" value={values.stock} required onChange={handleChange} className="p-2 rounded w-full border border-indigo-600 block my-4" />
                <input type="number" name="price" value={values.price} required onChange={handleChange} className="p-2 rounded w-full border border-indigo-600 block my-4" />
                <input type="text" name="category" value={values.category} required onChange={handleChange} className="p-2 rounded w-full border border-indigo-600 block my-4" />
                <Button type="submit" className="text-white">Editar Producto</Button>
            </form>
        </div>
    )
}

export default EditForm;