import Image from "next/image";
import QtySelector from "./QtySelector.js";
import GoBack from "../GoBack.js";

const ProductDetail = async ({ slug }) => {
  try {
    // Utiliza una ruta relativa para la solicitud fetch
    const item = await fetch(`/api/productsSlug/${slug}`, {
      cache: "no-store",
      next: {
        revalidate: 0,
        tags: ["products"],
      },
    })
      .then((res) => {
        if (!res.ok) {
          // Lanza un error si la respuesta no es exitosa
          throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        return null; // Retorna null en caso de error para manejarlo posteriormente
      });

    // Verifica si el item es null (indica un error durante la obtención de datos)
    if (!item) {
      return <p className="text-red-500">Error cargando el producto. Intente nuevamente más tarde.</p>;
    }

    return (
      <div className="max-w-4xl m-auto p-5">
        <section className="flex gap-8">
          <div className="relative basis-1/2">
            <Image
              src={/products${item.image}} // Ajusta la ruta relativa de la imagen
              alt={item.title}
              width={700}
              height={700}
              className="object-cover"
            />
          </div>
          <div className="basis-1/2">
            <h1 className="text-3xl font-bold mb-4 text-gray-300">{item.title}</h1>
            <p className="text-lg font-bold mb-4 text-orange-300">${item.price}</p>
            <p className="text-gray-600 text-xl mb-4">{item.description}</p>
            <QtySelector item={item} />
            <GoBack />
          </div>
        </section>
      </div>
    );
  } catch (error) {
    // Manejo de errores en caso de falla completa
    console.error("Error rendering ProductDetail:", error);
    return <p className="text-red-500">Error cargando el producto. Intente nuevamente más tarde.</p>;
  }
};

export default ProductDetail;