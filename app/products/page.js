import CategoriesMenu from "@/components/products/CategoriesMenu";
import ProductList from "@/components/products/ProductList";

const Products = () => {
    return (
        <>
            <main className="container m-auto">
                <h2 className="text-2x1 my-10 border-b pb-4">Productos</h2>
                <div className="flex gap-10">
                    <CategoriesMenu />
                    <ProductList />
                </div>
            </main>
        </>
    )
}

export default Products;