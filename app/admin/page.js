import ProductsTable from '@/components/admin/ProductsTable';
import LogoutButton from '@/components/admin/LogoutButton';

const AdminPage = () => {
  return (
    <div className="p-5 bg-gray-100 items-center justify-center">
      <LogoutButton />
      <h3 className='text-indigo-600 text-2xl px-4'>Panel</h3>
      <br />
      <ProductsTable />
    </div>
  );
};

export default AdminPage;