import { navItems } from 'constant';
import Link from 'next/link';
import { Children, FC, ReactNode } from 'react';
import NavAdmin from '../NavAdmin';
import { RiChatNewLine } from 'react-icons/ri';

interface Props {
  children: ReactNode;
}

const AdminLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className='flex'>
      <NavAdmin navItems={navItems} />
      <div className='flex-1 p-4'>{children}</div>
      <Link
        href='/admin/post/create'
        className='fixed bottom-4 right-4 bg-[#242424] rounded-full p-2 shadow-sm shadow-gray-600'
      >
        <RiChatNewLine className='text-white text-2xl shadow-sm transition' />
      </Link>
    </div>
  );
};

export default AdminLayout;
