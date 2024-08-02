import { mockData } from "@/data/products";
import Image from "next/image";
import QtySelector from "./QtySelector.js";
import GoBack from "../GoBack.js/index.js";

const ProductDetail = ({ slug }) => {
    const item = mockData.find(p => p.slug === slug);

    return (
        <div className="max-w-4xl m-auto">
            <GoBack className="text-sm text-blue-500 underline mb-6" />
            <section className="flex gap-8">
                <div className="relative basis-1/2">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={860}
                        height={860}
                    />
                </div>
                <div className="basis-1/2">
                    <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
                    <p className="text-lg font-bold mb-4">${item.price}</p>
                    <QtySelector item={item} />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Add to Cart</button>
                </div>
            </section>
            <section className="mt-12">
                <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">Descripción</h3>
                <p className="text-gray-600">{item.description}</p>"
            </section>
        </div>
    )
}

export default ProductDetail;