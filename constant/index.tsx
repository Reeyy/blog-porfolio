import {
  RiDashboardFill,
  RiMailAddFill,
  RiContactsBookFill,
} from 'react-icons/ri';
import { FaUserInjured } from 'react-icons/fa';
import { IoCreate } from 'react-icons/io5';

// ! Path: nav admin items
export const navItems = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: <RiDashboardFill style={{ color: 'white' }} size={24} />,
  },
  {
    label: 'Posts',
    href: '/admin/posts',
    icon: <IoCreate style={{ color: 'white' }} size={24} />,
  },
  {
    label: 'Users',
    href: '/admin/users',
    icon: <FaUserInjured style={{ color: 'white' }} size={24} />,
  },
  {
    label: 'Comments',
    href: '/admin/comments',
    icon: <RiMailAddFill style={{ color: 'white' }} size={24} />,
  },
  {
    label: 'Contacts',
    href: '/admin/contacts',
    icon: <RiContactsBookFill style={{ color: 'white' }} size={24} />,
  },
];
// * END Path: nav admin items
