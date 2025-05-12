'use client';
import { useState, useCallback, Fragment } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/page/services' },
  { name: 'Resume', path: '/page/resume' },
  { name: 'Work', path: '/page/work' },
  { name: 'Contact', path: '/contact' },
];

const SOCIAL_LINKS = [
  { icon: <FaGithub />, url: 'https://github.com' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com' },
  { icon: <FaTwitter />, url: 'https://twitter.com' },
];

const navLinkClasses = `
  relative inline-block px-3 py-2 text-sm font-medium text-gray-700 transition-colors
  duration-300 hover:text-emerald-600
  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] 
  after:w-0 after:bg-emerald-500 after:transition-all after:duration-300 
  hover:after:w-full hover:after:left-0
`;

function NavLink({ name, path, onClick }: { name: string; path: string; onClick?: () => void }) {
  return (
    <Link href={path} className={navLinkClasses} onClick={onClick}>
      <span className="relative z-10">{name}</span>
    </Link>
  );
}

function Logo() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-bold text-gray-800 tracking-wide"
    >
      <Link href="/" className="group">
        <span className="text-emerald-600 group-hover:text-emerald-800 transition-colors duration-300">
          Sajjad
        </span>
      </Link>
    </motion.div>
  );
}

function DesktopNav() {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="hidden sm:flex space-x-1"
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
          {/* Semi-transparent overlay with strong blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-lg z-40"
            onClick={onClose}
          />
          
          {/* Mobile menu container - the only clearly visible element */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Menu header */}
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
            
            {/* Navigation links */}
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
            
            {/* Social links */}
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-600 mb-4">Connect with me:</p>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-700 hover:text-emerald-600 rounded-full transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Blur effect for the main content */}
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

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 10);
    });
  }

  return (
    <header className={`fixed top-0 w-full z-50 px-4 sm:px-8 lg:px-12 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="2xl:px-[10%] mx-auto flex items-center justify-between h-14">
        <Logo />
        <DesktopNav />
        <button
          className="sm:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <HiMenuAlt3 className="text-2xl text-gray-600" />
        </button>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </header>
  );
}