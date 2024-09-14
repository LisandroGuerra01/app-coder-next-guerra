'use client'
import { useState } from "react"
import Button from '@/components/Button'
import { db, storage } from '@/firebase/config'
import { doc, updateDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useRouter } from 'next/navigation'

const updateProduct = async (slug, values, file) => {
    let fileURL = values.image;

    if (file) {
        try {
            const storageRef = ref(storage, `products/${slug}`);
            const fileSnapShot = await uploadBytes(storageRef, file);
            fileURL = await getDownloadURL(fileSnapShot.ref);
        } catch (error) {
            console.error('Error al subir el archivo:', error);
            alert('Error al subir la imagen.');
            return;
        }
    }

    const docRef = doc(db, 'products', slug);
    return updateDoc(docRef, {
        title: values.title,
        description: values.description,
        stock: Number(values.stock),
        price: Number(values.price),
        category: values.category,
        image: fileURL,
    })
    .then(() => {
        alert('Producto actualizado!');
    })
    .catch(error => {
        console.error('Error al actualizar el producto:', error);
        alert('Error al actualizar el producto.');
    });
}

const EditForm = ({ item }) => {
    const { title, description, stock, price, category, image } = item;
    const [values, setValues] = useState({
        title, description, stock, price, category, image
    });
    const [file, setFile] = useState(null);
    
    const router = useRouter();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProduct(item.slug, values, file);
        router.push('/admin'); // Redireccionar después de la actualización
    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12 text-gray-700">
                <input type="text" name="title" value={values.title} onChange={handleChange} className="p-2 rounded w-full border border-indigo-600 block my-4" />
                <input type="file" name="image" onChange={handleFileChange} className="p-2 rounded w-full border border-indigo-600 block my-4" />
                <textarea name="description" value={values.description} onChange={handleChange} className="p-2 rounded w-full border border-indigo-600 block my-4" />
                <input type="number" name="stock" value={values.stock} onChange={handleChange} className="p-2 rounded w-full border border-indigo-600 block my-4" />
                <input type="number" name="price" value={values.price} onChange={handleChange} className="p-2 rounded w-full border border-indigo-600 block my-4" />
                <input type="text" name="category" value={values.category} onChange={handleChange} className="p-2 rounded w-full border border-indigo-600 block my-4" />
                <Button type="submit" className="text-white">Editar Producto</Button>
            </form>
        </div>
    );
}

export default EditForm;