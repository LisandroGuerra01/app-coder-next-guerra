import ClientForm from "../../components/cart/ClientForm"

const ClientPage = () => {
    return (
        <div className="min-h-screen p-5 bg-gray-100">
            <div ><h3 className='text-indigo-600 text-2xl px-4'>Completa tus datos</h3></div>
            <br />
            <ClientForm />
        </div>
    )
}

export default ClientPage