import { mockData } from '@/data/products'
import ProductCard from './ProductCard.js'

const ProductList = ({ category }) => {

    const items = category === 'all' ? mockData : mockData.filter(item => item.category === category)
    return (
        <div className="container m-auto flex justify-center items-center gap-12 flex-wrap p-5">
            {items.map(item => <ProductCard key={item.slug} item={item} category={category} />)}
        </div>
    )
}

export default ProductList