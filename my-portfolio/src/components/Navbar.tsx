'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
// Import styles from global style library
import { navLink, socialLink, layout } from '@/lib/styles';

import { socialLinks } from './HomePage';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/page/services' },
  { name: 'Work', path: '/page/work' },
  { name: 'Resume', path: '/page/resume' },
  { name: 'Contact', path: '/page/contact' },
];


// NavLink using imported styles
interface NavLinkProps {
  name: string;
  path: string;
  onClick?: () => void;
}

function NavLink({ name, path, onClick }: NavLinkProps) {
  return (
    <Link href={path} className={navLink} onClick={onClick}>
      <span className="relative z-10">{name}</span>
    </Link>
  );
}

// Logo with animation
function Logo() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div {...fadeInLeft} className="text-2xl font-bold tracking-wide">
      <Link href="/" className="group flex items-center">
        <span className="text-emerald-600 group-hover:text-emerald-800 transition-colors duration-300">
          Sajjad
        </span>
      </Link>
    </motion.div>
  );
}

// Desktop Navigation
function DesktopNav() {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.2, duration: 0.5 },
  };

  return (
    <motion.nav {...fadeIn} className="hidden sm:flex space-x-4">
      {NAV_ITEMS.map((item) => (
        <NavLink key={item.name} {...item} />
      ))}
    </motion.nav>
  );
}

// Mobile Menu Drawer
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-lg z-40"
            onClick={onClose}
          />

          {/* Side drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className={`flex justify-between items-center ${layout.spacing.px.md} ${layout.spacing.py.sm} bg-white border-b border-gray-100`}>
              <Logo />
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <HiX className="text-2xl text-gray-700" />
              </button>
            </div>

            <nav className={`flex flex-col p-4 bg-white flex-grow ${layout.wrapper.section}`}>
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

            <div className={`${layout.spacing.px.md} ${layout.spacing.py.md} bg-gray-50 border-t border-gray-100`}>
              <p className="text-sm font-medium text-gray-600 mb-4">Connect with me:</p>
              <Social className={socialLink} />
            </div>
          </motion.div>

          {/* Background blur effect */}
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

// Social Icons Component
function Social({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-6 ${className}`}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow me on ${social.icon.type.displayName || 'Social Media'}`}
          className="text-gray-600 hover:text-emerald-600 transition-colors"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

// Main Navbar Component
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`absolute top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      } ${layout.wrapper.section}`}
    >
      <div className="2xl:px-[10%] px-6 w-full flex items-center justify-between h-12 ">
        {/* Left: Logo */}
        <div className="flex-1">
          <Logo />
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden sm:flex flex-1 justify-center">
          <DesktopNav />
        </div>

        {/* Right: Social Icons (Desktop) */}
        <div className="hidden sm:flex flex-1 justify-end">
          <Social className="text-gray-700" />
        </div>

        {/* Hamburger Menu (Mobile) */}
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

      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </header>
  );
}