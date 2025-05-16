
import madleen_img from '@/assets/madleen-project.png';
import fenzacci_v_1 from '@/assets/fenzacci.jpeg';
import fenz from '@/assets/fenz.jpeg';


export const projectsInfo = [
  {
    title: "Modern E-Commerce Stack with Django, React",
    description: "A modern, full-featured e-commerce platform built with a Django REST API backend and a dynamic React/Redux frontend. Includes advanced functionality such as product  management , user authentication, admin dashboard, email notifications, and third-party payment gateway integration for secure transactions.",
    tags: ["Django", "Django REST Framework", "React", "Redux"],
    image:fenzacci_v_1,
    demoUrl: "#",
    // codeUrl: "#"  
  },
  {
    title: "Advanced E-Commerce Platform",
    description: "A fully customized e-commerce platform built with Django and Django REST Framework, featuring dynamic product filtering (by color, size), user authentication, shopping cart, wishlist, order management, payment integration and email notifications. Includes an admin panel for complete backend control and is deployed on a DigitalOcean server.",
    tags: ["Django", "Django REST Framework", "HTML", "CSS"],
    image:fenz, 
    demoUrl: "#",
    // codeUrl: "#"
  },
  {
    title: "E-Commerce Store",
    description: "A fully functional e-commerce website built by converting a custom PSD design into a responsive frontend using HTML and CSS, and integrating it with a Django backend for product management, cart functionality, and user authentication.",
    tags: ["Django", "HTML", "CSS", "PSD to HTML"],
    image: madleen_img,
    demoUrl: "#",
    // codeUrl: "#"
  }

];