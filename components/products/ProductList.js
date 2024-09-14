'use client'
import ProductCard from './ProductCard';

const ProductList = async ({ category }) => {
    try {
        const items = await fetch(`/api/products/${category}`, {
            cache: "no-cache",
            next: {
                tags: ["products"],
            }
        }).then(res => {
            if (!res.ok) {
                throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
            }
            return res.json();
        });

        return (
            <div className="container m-auto flex justify-center items-center gap-12 flex-wrap p-5">
                {items.map(item => <ProductCard key={item.slug} item={item} />)}
            </div>
        );
    } catch (error) {
        console.error('Error fetching data:', error);
        // Renderizar un estado vacío o de error según se necesite
        return <div>Error al cargar los productos. Por favor, inténtelo de nuevo más tarde.</div>;
    }
};

export default ProductList;