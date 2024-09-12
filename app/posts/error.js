'use client'
import Button from "@/components/Button"
import { useEffect } from "react"

export default function Error({ error, reset }) {

    return (
        <div className="container m-auto mt-6">
            <h2>Algo salió mal</h2>
            <hr />
            <Button onClick={() => reset()}>Intenta nuevamente</Button>
        </div>
    )
}