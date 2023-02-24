import Logo from 'components/Atoms/Logo';
import Link from 'next/link';
import { FC } from 'react';
import { RiDashboardFill, RiMailAddFill } from 'react-icons/ri';
import {
  AiOutlineContainer,
  AiOutlineMail,
  AiOutlineTeam,
  AiOutlineDashboard,
} from 'react-icons/ai';
import NavItems from './NavItems';

interface Props {}

const NavAdmin: FC<Props> = (props): JSX.Element => {
  return (
    <nav className='h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark'>
      {/* logo */}
      <Link className='flex items-center space-x-2 p-3 mb-2' href={'/admin'}>
        <Logo className=' fill-highlight-light dark:fill-highlight-dark w-5 h-5' />
        <span className='text-highlight-light dark:text-highlight-dark text-xl font-semibold'>
          Admin
        </span>
      </Link>
      {/*end logo */}
      {/* item navs */}
      <ul>
        <NavItems
          href='/admin'
          name='Dashboard'
          icon={<AiOutlineDashboard size={24} />}
        />

        <NavItems
          href='/admin/user'
          name='User'
          icon={<AiOutlineTeam size={24} />}
        />
        <NavItems
          href='/admin/comments'
          name='Comennts'
          icon={<AiOutlineMail size={24} />}
        />
      </ul>
      {/* end item navs */}
    </nav>
  );
};

export default NavAdmin;
