import ProductsTable from '@/components/admin/ProductsTable';
import LogoutButton from '@/components/admin/LogoutButton';
import Button from '@/components/Button';
import Link from 'next/link';

const AdminPage = () => {
  return (
    <div className="p-5 bg-gray-100 items-center justify-center">
      <LogoutButton />
      <Link className="flex justify-end mt-5" href={`/admin/create`}>
        <Button className="bg-gray-600 hover:bg-gray-800">Crear producto</Button>
      </Link>
      <h3 className='text-indigo-600 text-2xl px-4'>Panel</h3>
      <br />
      <ProductsTable />
    </div>
  );
};

export default AdminPage;