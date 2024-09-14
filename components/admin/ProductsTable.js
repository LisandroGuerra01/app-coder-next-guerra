import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProductsTable = async () => {
    try {
        // Utiliza una ruta relativa para la solicitud fetch
        const items = await fetch('/api/products/all', {
            cache: "no-store",
        })
            .then((res) => {
                if (!res.ok) {
                    // Lanza un error si la respuesta no es exitosa
                    throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
                }
                return res.json();
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                return []; // Retorna un array vacío en caso de error
            });

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
                                        src={`/products${item.image}`}
                                        alt={item.title}
                                        width={80}
                                        height={80} />
                                </td>
                                <td className="p-2">{item.price}</td>
                                <td className="p-2">{item.stock}</td>
                                <td className="p-2">{item.slug}</td>
                                <td className="p-2">{item.description}</td>
                                <td className="p-2">
                                    <Link
                                        href={`/admin/edit/${item.slug}`}>
                                        <FaRegEdit className='text-3xl' />
                                    </Link>
                                </td>
                                <td className="p-2">
                                    <Link
                                        href={`/admin/delete/${item.slug}`}>
                                        <MdDelete className='text-3xl' />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table >
            </div >
        );
    } catch (error) {
        // Manejo de errores en caso de falla completa
        console.error('Error rendering ProductsTable:', error);
        return <p className="text-red-500">Error cargando los productos. Intente nuevamente más tarde.</p>;
    }
};

export default ProductsTable;