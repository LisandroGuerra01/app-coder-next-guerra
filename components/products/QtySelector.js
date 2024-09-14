'use client'
import { useState } from "react"
import Counter from "../Counter"
import Button from "../Button"
import { useCartContext } from "../context/CartContext"
import Swal from 'sweetalert2'

const QtySelector = ({ item }) => {
    const { addToCart } = useCartContext()

    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        addToCart({
            ...item,
            quantity
        }), quantity === 1 ?
                Swal.fire({
                    position: "bottom-end",
                    icon: "success",
                    title: "Producto añadido al carrito",
                    showConfirmButton: false,
                    timer: 1500
                }) :
                Swal.fire({
                    position: "bottom-end",
                    icon: "success",
                    title: "Productos añadidos al carrito",
                    showConfirmButton: false,
                    timer: 1500
                })
    }

    return (
        <div className="flex flex-col gap-5 mt-4">
            <Counter max={item.stock} counter={quantity} setCounter={setQuantity} />
            <Button className="active:bg-indigo-400 transition duration-300" onClick={handleAdd}>Agregar al carrito</Button>
        </div>
    )
}

export default QtySelector;