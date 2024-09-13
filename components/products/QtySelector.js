'use client'
import { useState } from "react"
import Counter from "../Counter"
import Button from "../Button"
import { useCartContext } from "../context/CartContext"

const QtySelector = ({ item }) => {
    const { addToCart } = useCartContext()

    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        addToCart({
            ...item,
            quantity
        }),quantity === 1 ? alert("Producto añadido") : alert("Productos añadidos")
    }

    return (
        <div className="flex flex-col gap-5 mt-4">
            <Counter max={item.stock} counter={quantity} setCounter={setQuantity} />
            <Button className="active:bg-indigo-400 transition duration-300" onClick={handleAdd}>Agregar al carrito</Button>
        </div>
    )
}

export default QtySelector;