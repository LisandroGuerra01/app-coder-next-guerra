// import { mockData } from "@/data/products"
import ProductDetail from "@/components/products/ProductDetail"

const Detail = ({ params }) => {
    // console.log("params", params.slug)
    // const product = mockData.filter(item => item.slug === params.slug)
    // console.log(product);

    return (
        <div>
            <ProductDetail slug={params.slug} />
        </div>
    )

}

export default Detail