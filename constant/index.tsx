import {
  AiOutlineContainer,
  AiOutlineMail,
  AiOutlineTeam,
  AiOutlineDashboard,
} from 'react-icons/ai';

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
    icon: <AiOutlineMail size={24} />,
  },
];
// * END Path: nav admin items
