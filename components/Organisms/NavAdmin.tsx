import Logo from 'components/Atoms/Logo';
import Link from 'next/link';
import { FC, useEffect, useRef, useState } from 'react';
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
const NAV_CLOSE = 'w-16';
const NAV_VISIBLITY = 'nav-toogle';

const NavAdmin: FC<Props> = ({ navItems }): JSX.Element => {
  const [toggleNav, setToggleNav] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const onToggleNav = (visibility: boolean) => {
    const { current } = navRef;
    if (!current) return;
    const { classList } = current;
    if (visibility) {
      classList.remove(NAV_OPEN);
      classList.add(NAV_CLOSE);
    } else {
      classList.add(NAV_OPEN);
      classList.remove(NAV_CLOSE);
    }
  };

  const upDateNavState = () => {
    onToggleNav(toggleNav);
    const newState = !toggleNav;
    setToggleNav(newState);
    localStorage.setItem(NAV_VISIBLITY, JSON.stringify(newState));
  };

  useEffect(() => {
    const navState = localStorage.getItem(NAV_VISIBLITY);
    if (navState !== null) {
      const newState = JSON.parse(navState);
      setToggleNav(newState);
      onToggleNav(!newState);
    } else {
      setToggleNav(true);
    }
  }, []);
  return (
    <nav
      ref={navRef}
      className='h-[60vh] rounded-br-2xl shadow-sm shadow-gray-600  w-60  bg-[#242424]
    flex flex-col justify-between transition-width duration-100 ease-in-out overflow-hidden sticky top-0
    '
    >
      <ul>
        {/* logo */}
        <Link className='flex items-center space-x-2 p-3 mb-10' href={'/admin'}>
          <Logo className='w-6 h-6' />
          {toggleNav && (
            <span className=' leading-none  text-white text-xl font-semibold'>
              REY
            </span>
          )}
        </Link>
        {/*end logo */}
        {/* item navs */}
        {
          <ul className='space-y-2'>
            {navItems.map((item) => (
              <NavItems
                key={item.href}
                href={item.href}
                label={toggleNav ? item.label : null}
                icon={item.icon}
              />
            ))}
          </ul>
        }

        {/* end item navs */}
      </ul>

      {/* nav toogle */}
      <button
        onClick={upDateNavState}
        className='mb-6  p-3
      hover:scale-110 transform transition duration-300 ease-in-out self-end justify-self-start
      '
      >
        {toggleNav ? (
          <CgMenuRight style={{ color: 'white' }} size={25} />
        ) : (
          <CgMenuRightAlt style={{ color: 'white' }} size={25} />
        )}
      </button>
    </nav>
  );
};

export default NavAdmin;
