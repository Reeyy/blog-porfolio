import AdminLayout from 'components/Organisms/layout/AdminLayout';
import { NextPage } from 'next';

interface Props {}

const AdminPage: NextPage<Props> = () => {
  return (
    <AdminLayout title='Admin Dashboard'>
      <div>Admin</div>
    </AdminLayout>
  );
};

export default AdminPage;
