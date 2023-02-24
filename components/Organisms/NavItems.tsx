import { FC } from 'react';
import Link from 'next/link';
import { AiOutlineDashboard } from 'react-icons/ai';
interface Props {
  name: string;
  href: string;
  icon: JSX.Element;
}

const NavItems: FC<Props> = ({
  name = 'Dashboard',
  href = '/admin',
  icon = <AiOutlineDashboard size={24} />,
}): JSX.Element => {
  return (
    <li>
      <Link
        className='flex item-center text-highlight-light dark:text-highlight-dark text-xl p-3 hover:scale-[0.98] transition '
        href={href}
      >
        {icon}
        <span className='ml-2'>{name}</span>
      </Link>
    </li>
  );
};

export default NavItems;
