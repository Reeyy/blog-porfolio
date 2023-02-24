import { FC } from 'react';
import Link from 'next/link';
import { AiOutlineDashboard } from 'react-icons/ai';
interface Props {
  label: string;
  href: string;
  icon: JSX.Element;
}

const NavItems: FC<Props> = ({
  label = 'Dashboard',
  href = '/admin',
  icon = <AiOutlineDashboard size={24} />,
}): JSX.Element => {
  return (
    <li>
      <Link className='nav-items' href={href}>
        {icon}
        <span className='ml-2'>{label}</span>
      </Link>
    </li>
  );
};

export default NavItems;
