'use client'
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";

const ProductsTable = () => {
    const [items, setItems] = useState([]);

    // Función para obtener todos los productos
    const fetchProducts = async () => {
        try {
            const res = await fetch('/api/products/all', {
                cache: "no-store",
            });
            if (!res.ok) {
                throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
            }
            const data = await res.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Función para eliminar un producto
    const handleDelete = async (slug) => {
        const confirmed = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
        if (!confirmed) return;

        try {
            const res = await fetch(`/api/products/delete/${slug}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                // Actualiza la lista de productos después de eliminar
                setItems(items.filter(item => item.slug !== slug));
            } else {
                console.error("Error deleting product");
            }
        } catch (error) {
            console.error("Failed to delete product:", error);
        }
    };

    // Cargar productos al montar el componente
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-xs text-gray-700 text-left">
                <thead className="uppercase">
                    <tr>
                        <th className="px-4 py-2">Nombre</th>
                        <th className="px-4 py-2">Categoría</th>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2">Precio</th>
                        <th className="px-4 py-2">Stock</th>
                        <th className="px-4 py-2">Slug</th>
                        <th className="px-4 py-2">Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td className="p-2">{item.title}</td>
                            <td className="p-2">{item.category}</td>
                            <td className="p-2">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={80}
                                    height={80}
                                />
                            </td>
                            <td className="p-2">{item.price}</td>
                            <td className="p-2">{item.stock}</td>
                            <td className="p-2">{item.slug}</td>
                            <td className="p-2">{item.description}</td>
                            <td className="p-2">
                                <Link href={`/admin/edit/${item.slug}`}>
                                    <FaRegEdit className='text-3xl' />
                                </Link>
                            </td>
                            <td className="p-2">
                                <MdDelete
                                    className='text-3xl cursor-pointer'
                                    onClick={() => handleDelete(item.slug)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsTable;