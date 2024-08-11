'use client'
import { useRouter } from "next/navigation"

const GoBack = ({ ...args }) => {
    const router = useRouter()

    return (
        <button onClick={() => router.back()} {...args} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-3 w-full">
            Volver
        </button>
    )
}

export default GoBack;