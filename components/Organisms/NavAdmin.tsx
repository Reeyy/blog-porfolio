import Logo from 'components/Atoms/Logo';
import Link from 'next/link';
import { FC, useRef, useState } from 'react';
import { CgMenuRight, CgMenuRightAlt } from 'react-icons/cg';

import NavItems from './NavItems';

interface Props {
  navItems: {
    label: string;
    href: string;
    icon: JSX.Element;
  }[];
}
const NAV_OPEN = 'w-60';
const NAV_CLOSE = 'w-14';
const NavAdmin: FC<Props> = ({ navItems }): JSX.Element => {
  const [toogleNav, setToogleNav] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  /**
   * If the navRef is not current, return; if the navRef is current, remove the NAV_OPEN class and add
   * the NAV_CLOSE class; otherwise, add the NAV_OPEN class and remove the NAV_CLOSE class.
   * @returns The function onToogleNav is being returned.
   */
  const onToogleNav = () => {
    const { current } = navRef;
    if (!current) return;
    const { classList } = current;
    if (toogleNav) {
      classList.remove(NAV_OPEN);
      classList.add(NAV_CLOSE);
    } else {
      classList.add(NAV_OPEN);
      classList.remove(NAV_CLOSE);
    }
    setToogleNav(!toogleNav);
  };
  return (
    <nav
      ref={navRef}
      className='h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark
    flex flex-col justify-between
    '
    >
      <ul>
        {/* logo */}
        <Link className='flex items-center space-x-2 p-3 mb-10' href={'/admin'}>
          <Logo className=' fill-highlight-light dark:fill-highlight-dark w-5 h-5' />
          {toogleNav && (
            <span className='text-highlight-light dark:text-highlight-dark text-xl font-semibold'>
              Admin
            </span>
          )}
        </Link>
        {/*end logo */}
        {/* item navs */}
        {toogleNav && (
          <ul className='space-y-2'>
            {navItems.map((item) => (
              <NavItems
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </ul>
        )}

        {/* end item navs */}
      </ul>

      {/* nav toogle */}
      <button
        onClick={onToogleNav}
        className=' text-highlight-light dark:text-highlight-dark p-3
      hover:scale-110 transform transition duration-300 ease-in-out self-end 
      '
      >
        {toogleNav ? <CgMenuRight size={25} /> : <CgMenuRightAlt size={25} />}
      </button>
    </nav>
  );
};

export default NavAdmin;
