import ProductsTable from '@/components/admin/ProductsTable';

const Admin = () => {
  return (
    <div className="p-5 bg-gray-100 items-center justify-center">
      <h3 className='text-indigo-600 text-2xl px-4'>Dejanos tu mensaje</h3>
      <br />
      <ProductsTable />
    </div>
  );
};

export default Admin;
