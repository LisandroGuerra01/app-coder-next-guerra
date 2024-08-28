import ProductDetail from "@/components/products/ProductDetail"

const Detail = ({ params }) => {
    return (
        <div>
            <ProductDetail slug={params.slug} />
        </div>
    )

}

export default Detail