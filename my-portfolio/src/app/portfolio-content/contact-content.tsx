import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';



export  const contactInfo = [
  {
    icon: <FiPhone className="w-5 h-5" />,
    title: 'Phone',
    value: '+1 (555) 123-4567',
  },
  {
    icon: <FiMail className="w-5 h-5" />,
    title: 'Email',
    value: 'contact@example.com',
  },
  {
    icon: <FiMapPin className="w-5 h-5" />,
    title: 'Address',
    value: (
      <>
        123 Tech Street<br />
        San Francisco, CA 94107<br />
        United States
      </>
    ),
  },
];

export const formFields = [
  { id: 'name', type: 'text', label: 'Name', placeholder: 'Your name' },
  { id: 'email', type: 'email', label: 'Email', placeholder: 'your.email@example.com' },
  { id: 'subject', type: 'text', label: 'Subject', placeholder: "What's this about?" },
];