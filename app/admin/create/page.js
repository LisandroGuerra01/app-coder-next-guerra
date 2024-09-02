import CreateForm from "@/components/admin/CreateForm"

const CreatePage = async () => {
    return (
        <div className="p-5 bg-gray-100 items-center justify-center">
            <div ><h3 className='text-indigo-600 text-2xl px-4'>Crear producto</h3></div>
            <br />
            <CreateForm />
        </div>
    )
}

export default CreatePage