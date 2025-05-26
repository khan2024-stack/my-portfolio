import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export  const contactInfo = [
  {
    icon: <FiPhone className="w-5 h-5" />,
    title: 'Phone',
    value: '+971 547610315',
  },
  {
    icon: <FiMail className="w-5 h-5" />,
    title: 'Email',
    value: 'sajjadk546@gmail.com',
  },
  {
    icon: <FiMapPin className="w-5 h-5" />,
    title: 'Address',
    value: " Baghbanan road phandu chock , khattak pul ,peshawar",
  },
];

export const formFields = [
  { id: 'name', type: 'text', label: 'Name', placeholder: 'Your name' },
  { id: 'email', type: 'email', label: 'Email', placeholder: 'Your email' },
  { id: 'message', type: 'textarea', label: 'Message', placeholder: 'Your message here...' },
];