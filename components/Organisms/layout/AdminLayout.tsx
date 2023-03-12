import { navItems } from 'constant';
import Link from 'next/link';
import { Children, FC, ReactNode } from 'react';
import NavAdmin from '../NavAdmin';
import { RiChatNewLine } from 'react-icons/ri';
import HeadSeo from 'components/Atoms/Head';
import { title } from 'process';

interface Props {
  children: ReactNode;
  title?: string;
}

const AdminLayout: FC<Props> = ({ children, title }): JSX.Element => {
  return (
    <>
      <HeadSeo title={title} />
      <div className='flex'>
        <NavAdmin navItems={navItems} />
        <div className='flex-1 p-4'>{children}</div>
        <Link
          href='/admin/posts/create'
          className='fixed bottom-4 right-4 bg-[#242424] rounded-full p-2 shadow-sm shadow-gray-600'
        >
          <RiChatNewLine className='text-white text-2xl shadow-sm transition' />
        </Link>
      </div>
    </>
  );
};

export default AdminLayout;
