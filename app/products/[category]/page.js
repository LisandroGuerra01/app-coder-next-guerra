export async function generateMetadada ({params, searchParams, parent}) {
    return {
        title: `Productos de ${params.category}`
    }
}

const Products = ({params}) => {

    console.log(params)
    
    return (
        <div>
            Estás viendo: {params.category}
        </div>
    )
}

export default Products;