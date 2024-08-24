'use client'

import { useCartContext } from "@/components/context/CartContext"
import Image from "next/image"
import Button from "@/components/Button"
import Link from "next/link"
import { MdDelete } from "react-icons/md";

const CartPage = () => {
    const { cart, totalQty, removeFromCart, emptyCart } = useCartContext()

    if (totalQty() === 0) return (
        <div className="min-h-screen bg-indigo-100 p-6">
            <div className="w-1/2 p-4 shadow-md bg-gray-100 rounded-lg">
                <h3 className="text-2xl font-bold text-indigo-800 mb-6">No hay productos en tu carrito</h3>
                <hr className="my-4" />
                <Link href="/products" className="text-indigo-600 hover:underline">Ir a comprar</Link>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-indigo-100 p-6">
            <div className="w-1/2 p-4 shadow-md bg-gray-100 rounded-lg">
                <h3 className="text-2xl font-bold text-indigo-800 mb-6">Tu carrito</h3>
                <hr className="my-4" />
                <table className="text-gray-600">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.slug}>
                                <td>
                                    <Link href={`/products/${item.category}/${item.slug}`}>
                                        <Image
                                            src={`/products${item.image}`}
                                            alt={item.title}
                                            width={100}
                                            height={100} />
                                    </Link>
                                </td>
                                <td className="text-gray-600">
                                    <Link href={`/products/${item.category}/${item.slug}`}>{item.title}</Link>
                                </td>
                                <td className="text-gray-600">
                                    <Button className="mx-2 bg-gray-400">-</Button>
                                    {item.quantity}
                                    <Button className="mx-2 bg-gray-400">+</Button>
                                </td>
                                <td className="text-gray-600">${(item.quantity * item.price).toFixed(2)}</td>
                                <td>
                                    <MdDelete className="text-3xl" onClick={removeFromCart} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-9 flex justify-between">
                    <div>
                        <span className="text-lg font-bold text-gray-600">Total: ${totalQty}</span>
                        <Button className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">Ir a pagar</Button>
                    </div>
                </div>
                <div className="mt-4">
                    <Link href="/products" className="text-indigo-600 hover:underline">Seguir comprando</Link>
                </div>
                <div className="mt-4 flex justify-between">
                    <Link href="/" className="text-indigo-600 hover:underline">Volver al inicio</Link>
                    <button className="text-sm text-gray-800 hover:underline hover:text-red-600 flex" onClick={emptyCart}>
                        <MdDelete size={20} />
                        <p>Vaciar carrito</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartPage