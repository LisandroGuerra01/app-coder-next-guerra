'use client'
import EditForm from '@/components/admin/EditForm';

const EditPage = async ({ params }) => {
    const { slug } = params;

    try {
        // Realiza la solicitud a la API para obtener los datos del producto usando una ruta relativa
        const item = await fetch(`/api/productsSlug/${slug}`, {
            cache: 'no-cache', // 'no-store' evita el cacheo de la respuesta para obtener datos siempre frescos
        }).then(res => {
            if (!res.ok) {
                // Lanza un error si la respuesta no es exitosa
                throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
            }
            return res.json();
        });

        // Renderiza el formulario de edición con el item obtenido
        return (
            <div>
                <EditForm item={item} />
            </div>
        );
    } catch (error) {
        console.error('Error fetching data:', error);
        // Muestra un mensaje de error amigable si hay problemas con la solicitud
        return <div>Error al cargar el producto. Por favor, inténtelo de nuevo más tarde.</div>;
    }
};

export default EditPage;