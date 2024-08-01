import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import CategoriesMenu from "@/app/components/products/CategoriesMenu";
import ProductList from "@/app/components/products/ProductList";

export async function generateMetadata({ params, searchParams }, parent) {

    return {
        title: `Productos - ${params.category}`
    }
}

const Products = ({ params }) => {
    const { category } = params;

    return (
        <>
            <Navbar />
            <main className="container m-auto">
                <h2 className="text-2x1 my-10 border-b pb-4">Productos</h2>
                <div className="flex gap-10">
                    <CategoriesMenu />
                    <ProductList category={category} />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Products;