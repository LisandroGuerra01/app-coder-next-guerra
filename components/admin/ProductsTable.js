import Image from "next/image";
import Link from "next/link";

const ProductsTable = async () => {
    const items = await fetch(
        `http://localhost:3000/api/products/all`,
        {
            cache: "no-store",
        }).then(r => r.json())
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
                        <tr>
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
                                    href={`/admin/edit/${item.slug}`}
                                    className="rounded bg-green-400 p-2 text-white">
                                    Editar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsTable;