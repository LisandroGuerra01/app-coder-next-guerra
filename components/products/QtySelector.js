'use client'
import { useState } from "react"
import Counter from "../Counter"
import Button from "../Button"

const QtySelector = ({ item }) => {
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        console.log({
            ...item,
            quantity
        });
    }

    return (
        <div className="flex flex-col gap-5 mt-4">
            <Counter max={item.stock} counter={quantity} setCounter={setQuantity} />
            <Button className="w-full hover:bg-blue-600" onClick={handleAdd}>Agregar al carrito</Button>
        </div>
    )
}

export default QtySelector;