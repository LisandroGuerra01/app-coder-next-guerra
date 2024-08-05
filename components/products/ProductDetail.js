import { mockData } from "@/data/products";
import Image from "next/image";
import QtySelector from "./QtySelector.js";
import GoBack from "../GoBack.js";

const ProductDetail = ({ slug }) => {
    const item = mockData.find(p => p.slug === slug);

    return (
        <div className="max-w-4xl m-auto p-5">
            <section className="flex gap-8">
                <div className="relative basis-1/2">
                    <Image
                        src={`/products${item.image}`}
                        alt={item.title}
                        width={700}
                        height={700}
                    />
                </div>
                <div className="basis-1/2">
                    <h1 className="text-3xl font-bold mb-4 text-gray-300">{item.title}</h1>
                    <p className="text-lg font-bold mb-4 text-orange-300">${item.price}</p>
                    <p className="text-gray-600 text-xl mb-4">{item.description}</p>
                    <QtySelector item={item} />
                    <GoBack className="w-full hover:bg-blue-600" />
                </div>
            </section>
            <section className="mt-12">
                <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">Descripción</h3>
                <p className="text-gray-600">{item.description}</p>
            </section>
        </div>
    )
}

export default ProductDetail;