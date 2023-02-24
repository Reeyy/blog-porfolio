import { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface Props {
  label?: string | null;
  href: string;
  icon: JSX.Element;
}
const NavItems: FC<Props> = ({ label, href, icon }): JSX.Element => {
  const router = useRouter();
  const classes = clsx('nav-items rounded-l-md rounded-r-xl rounded-t-md', {
    'bg-[#000000]': href === router.pathname,
  });

  return (
    <li>
      <Link className={classes} href={href}>
        {icon}
        {label ? (
          <span className='ml-2  transition-all ease-in-out text-sm text-white font-semibold leading-none'>
            {label}
          </span>
        ) : null}
      </Link>
    </li>
  );
};

export default NavItems;
