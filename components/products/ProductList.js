import ProductCard from './ProductCard'

const ProductList = async ({ category }) => {

    const { data: items } = await fetch(
        `http://localhost:3000/api/products/${category}`, {
        cache: "force-cache",
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