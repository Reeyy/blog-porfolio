import NavAdmin from 'components/Organisms/NavAdmin';
import { navItems } from 'constant';
import { NextPage } from 'next';

interface Props {}

const AdminLayout: NextPage<Props> = () => {
  return (
    <div>
      <NavAdmin navItems={navItems} />
    </div>
  );
};

export default AdminLayout;
