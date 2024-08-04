import Image from 'next/image'
import Link from 'next/link'

const  ProductCard = ({ item, category }) => {
    return (
        <article className="basis-72 shadow-lg rounded bg-grey-600">
            <Link href={`/products/${category}/${item.slug}`} className='flex flex-col'>
                <Image
                    alt={item.title}
                    src={item.image}
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                />

                <div className="px-4 border-t border-gray-200 text-gray-300 bg-gradient-to-r from-sky-500 to-indigo-500">
                    <h4 className="text-lg font-bold my-4">{item.title}</h4>
                    <p className="text-2xl font-semibold text-lg mb-6 text-orange-300">$ {item.price}</p>
                </div>
            </Link>
        </article>
    )
}

export default ProductCard