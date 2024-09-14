// const OrderDetail = async ({ order }) => {
//     try {
//         const orderDetail = await fetch(`/api/orders/${order}`, {
//             cache: "no-cache",
//             next: {
//                 tags: ["orders"]
//             },
//         })
//             .then((res) => {
//                 if (!res.ok) {
//                     // Lanza un error si la respuesta no es exitosa
//                     throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
//                 }
//                 return res.json();
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//                 return null; // Retorna null en caso de error para manejarlo posteriormente
//             });

//         // Verifica si el item es null (indica un error durante la obtención de datos)
//         if (!orderDetail) {
//             return <p className="text-red-500">Error cargando el producto. Intente nuevamente más tarde.</p>;
//         }

//         return (
//             <div>
//                 <h3>Tu compra</h3>
//                 <br/>
//                 <p>{orderDetail.items}</p>
//                 <br/>
//                 <h3>Tus datos</h3>
//                 <p>{orderDetail.nombre}</p>
//                 <p>{orderDetail.email}</p>
//                 <p>{orderDetail.direccion}</p>
//                 <p>{orderDetail.telefono}</p>
//             </div>
//         )
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return <p className="text-gray-500">Error cargando la orden. Intente nuevamente más tarde.</p>;
//     }
// }

// export default OrderDetail;