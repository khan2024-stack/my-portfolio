'use client';
import { useState, useCallback, Fragment, useEffect } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/page/services' },
  { name: 'Resume', path: '/page/resume' },
  { name: 'Work', path: '/page/work' },
  { name: 'Contact', path: '/page/contact' },
];

const SOCIAL_LINKS = [
  { icon: <FaGithub />, url: 'https://github.com' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com' },
  { icon: <FaTwitter />, url: 'https://twitter.com' },
];


function Socail({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-6 ${className}`}>
      {SOCIAL_LINKS.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-emerald-600 transition-colors"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}



const navLinkClasses = `
  relative inline-block px-3 py-2 text-sm font-bold text-gray-700 transition-colors
  duration-300 hover:text-emerald-600
  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] 
  after:w-0 after:bg-emerald-500 after:transition-all after:duration-300 
  hover:after:w-full hover:after:left-0
`;

interface NavLinkProps {
  name: string;
  path: string;
  onClick?: () => void;
}

function NavLink({ name, path, onClick }: NavLinkProps) {
  return (
    <Link href={path} className={navLinkClasses} onClick={onClick}>
      <span className="relative z-10">{name}</span>
    </Link>
  );
}

function Logo() {

  const fadeInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      {...fadeInLeft}
      className="text-2xl font-bold text-gray-800 tracking-wide">
      <Link href="/" className="group">
        <span className="text-emerald-600 group-hover:text-emerald-800 transition-colors duration-300">
          Sajjad
        </span>
      </Link>
    </motion.div>
  );
}

function DesktopNav() {

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.2, duration: 0.5 },
  };

  return (
    <motion.nav
      {...fadeIn}
      className="hidden sm:flex space-x-4 "
    >
      {NAV_ITEMS.map((item) => (
        <NavLink key={item.name} {...item} />
      ))}
    </motion.nav>
  );
}


function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-lg z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="flex justify-between items-center p-6 bg-white border-b border-gray-100">
              <Logo />
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <HiX className="text-2xl text-gray-700" />
              </button>
            </div>
            <nav className="flex flex-col p-4 flex-grow bg-white">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={onClose}
                  className="px-4 py-4 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-600 mb-4">Connect with me:</p>
              <Socail className="p-3 text-gray-700" />

            </div>
          </motion.div>
          <motion.div
            initial={{ filter: 'blur(0px)' }}
            animate={{ filter: 'blur(8px)' }}
            exit={{ filter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 pointer-events-none z-30"
          />
        </>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 !== scrolled) {
        setScrolled(window.scrollY > 10);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`fixed top-0 w-full z-50 px-4 sm:px-8 lg:px-12 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="2xl:px-[10%] mx-auto flex items-center justify-between h-14">
        <div className="flex-1">
          <Logo />
        </div>

        <div className="hidden sm:flex flex-1 justify-center ">
          <DesktopNav />
        </div>

        <div className="hidden sm:flex flex-1 justify-end ">
          <Socail />
        </div>

        <div className="sm:hidden">
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <HiMenuAlt3 className="text-2xl text-gray-600" />
          </button>
        </div>
      </div>


      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </header>
  );
}