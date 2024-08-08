import React from 'react';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Disco Solido SSD Team', quantity: 2, price: 42950 },
    { id: 2, name: 'Mother MSI B550M PRO-VDH', quantity: 1, price: 136630 },
    { id: 3, name: 'Placa de Video ASUS', quantity: 3, price: 709900 },
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Carrito de Compras</h1>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Producto</th>
              <th className="px-4 py-2 text-left text-gray-600">Cantidad</th>
              <th className="px-4 py-2 text-left text-gray-600">Precio</th>
              <th className="px-4 py-2 text-left text-gray-600">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2 text-gray-600">{item.name}</td>
                <td className="border px-4 py-2 text-gray-600">{item.quantity}</td>
                <td className="border px-4 py-2 text-gray-600">${item.price.toFixed(2)}</td>
                <td className="border px-4 py-2 text-gray-600">${(item.quantity * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right mt-4">
          <span className="text-lg font-bold text-gray-600 flex justify-end">Total: ${totalPrice.toFixed(2)}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;