import {
  AiOutlineContainer,
  AiOutlineMail,
  AiOutlineTeam,
  AiOutlineDashboard,
} from 'react-icons/ai';
import { RiDashboardFill, RiMailAddFill } from 'react-icons/ri';

// ! Path: nav admin items
export const navItems = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: <AiOutlineDashboard size={24} />,
  },
  {
    label: 'Users',
    href: '/admin/users',
    icon: <AiOutlineTeam size={24} />,
  },
  {
    label: 'Comments',
    href: '/admin/comments',
    icon: <RiMailAddFill size={24} />,
  },
  {
    label: 'Contacts',
    href: '/admin/contacts',
    icon: <RiDashboardFill size={24} />,
  },
];
// * END Path: nav admin items
