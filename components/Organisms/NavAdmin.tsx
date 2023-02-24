import Logo from 'components/Atoms/Logo';
import Link from 'next/link';
import { FC } from 'react';
import { RiDashboardFill, RiMailAddFill } from 'react-icons/ri';

import NavItems from './NavItems';

interface Props {
  navItems: {
    label: string;
    href: string;
    icon: JSX.Element;
  }[];
}

const NavAdmin: FC<Props> = ({ navItems }): JSX.Element => {
  return (
    <nav className='h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark'>
      {/* logo */}
      <Link className='flex items-center space-x-2 p-3 mb-10' href={'/admin'}>
        <Logo className=' fill-highlight-light dark:fill-highlight-dark w-5 h-5' />
        <span className='text-highlight-light dark:text-highlight-dark text-xl font-semibold'>
          Admin
        </span>
      </Link>
      {/*end logo */}
      {/* item navs */}
      <ul className='space-y-2'>
        {navItems.map((item, index) => (
          <NavItems
            key={index}
            href={item.href}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </ul>
      {/* end item navs */}
    </nav>
  );
};

export default NavAdmin;
