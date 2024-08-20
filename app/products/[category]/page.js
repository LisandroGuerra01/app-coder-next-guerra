import CategoriesMenu from "@/components/products/CategoriesMenu";
import ProductList from "@/components/products/ProductList";
import { Suspense } from "react";

export async function generateMetadata({ params, searchParams }, parent) {

    return {
        title: `Productos - ${params.category}`
    }
}

export function generateStaticParams() {
    return [
        { category: 'all' },
        { category: 'monitores' },
        { category: 'gabinetes' },
        { category: 'mouse' },
        { category: 'teclados' },
        { category: 'auriculares' },
        { category: 'mandos' },
        { category: 'placas' },
        { category: 'motherboards' },
        { category: 'ram' },
        { category: 'discos' },
        { category: 'fuentes' },
    ]
}

export const revalidate = 3600

const Products = ({ params }) => {
    const { category } = params;

    return (
        <>
            <main className="container m-auto">
                <h2 className="text-2xl my-10 border-b pb-4">Productos: {params.category.toUpperCase()}</h2>
                <div className="flex gap-10 ">
                    <CategoriesMenu />
                    <Suspense fallback={<div>Cargando...</div>}>
                        <ProductList category={category} />
                    </Suspense>
                </div>
            </main>
        </>
    )
}

export default Products;