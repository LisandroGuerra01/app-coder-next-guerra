'use client'

import { useCartContext } from "@/components/context/CartContext"

const CartPage = () => {
    const { cart, totalQty } = useCartContext()

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Carrito de Compras</h1>
            <div className="bg-white p-4 shadow-md rounded-lg">
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left text-gray-600">Producto</th>
                            <th className="px-4 py-2 text-left text-gray-600">Cantidad</th>
                            <th className="px-4 py-2 text-left text-gray-600">Precio</th>
                            <th className="px-4 py-2 text-left text-gray-600">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.slug}>
                                <td className="border px-4 py-2 text-gray-600">{item.title}</td>
                                <td className="border px-4 py-2 text-gray-600">{item.quantity}</td>
                                <td className="border px-4 py-2 text-gray-600">${item.price.toFixed(2)}</td>
                                <td className="border px-4 py-2 text-gray-600">${(item.quantity * item.price).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="text-right mt-4">
                    <span className="text-lg font-bold text-gray-600 flex justify-end">Total: ${totalQty}</span>
                </div>
            </div>
        </div>
    )
}

export default CartPage