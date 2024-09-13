import EditForm from '@/components/admin/EditForm'

const EditPage = async ({ params }) => {
    const { slug } = params
    const item = await fetch(`http://${process.env.NEXT_PUBLIC_URL}/api/productsSlug/${slug}`, {
        cache: 'no-store'
    }).then(res => res.json())

    return (
        <div>
            <EditForm item={item} />
        </div>
    )
}

export default EditPage