import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ item }) => {
    return (
        <article className="basis-72 shadow-lg rounded bg-grey-600 rounded-xl transition ease-in-out delay-50 hover:translate-x-2 hover:scale-110 hover:bg-indigo-500 duration-300 hover:bg-gradient-to-r from-sky-500 to-indigo-500">
            <Link href={`/products/${item.category}/${item.slug}`} className='flex flex-col'>
                <Image
                    alt={item.title}
                    src={`/products${item.image}`}
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    className='p-5'
                />

                <div className="px-4 border-t border-gray-200 text-gray-300 bg-gradient-to-r from-sky-500 to-indigo-800">
                    <h4 className="text-lg font-bold my-4">{item.title}</h4>
                    <p className="text-2xl font-semibold text-lg mb-6 text-orange-300">$ {item.price}</p>
                </div>
            </Link>
        </article>
    )
}

export default ProductCard