import NavAdmin from 'components/Organisms/NavAdmin';
import { NextPage } from 'next';

interface Props {}

const AdminLayout: NextPage<Props> = () => {
  return (
    <div className=''>
      <NavAdmin />
    </div>
  );
};

export default AdminLayout;
