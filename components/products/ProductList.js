import ProductCard from './ProductCard'

const ProductList = async ({ category }) => {
    const items = await fetch(
        `https://${process.env.VERCEL_URL}/api/products/${category}`, {
        cache: "no-cache",
        next: {
            tags: ["products"],
        }
    }
    ).then(res => res.json())
    
    return (
        <div className="container m-auto flex justify-center items-center gap-12 flex-wrap p-5">
            {items.map(item => <ProductCard key={item.slug} item={item} />)}
        </div>
    )
}

export default ProductList