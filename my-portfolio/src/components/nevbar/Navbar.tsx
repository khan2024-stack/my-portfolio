
'use client';
import { useState, useCallback} from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { header } from './header-style';

import { socialLinks } from '@/app/portfolio-content/home-content';

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
    <Link href={path} className={header.navLink} onClick={onClick}>
      <span className="relative z-10">{name}</span>
    </Link>
  );
}

// Logo with animation
function Logo() {
  return (
    <motion.div {...header.animations.logo} className={header.logo.container}>
      <Link href="/">
        <span className={header.logo.text}>Sajjad</span>
      </Link>
    </motion.div>
  );
}

// Desktop Navigation
function DesktopNav() {
  return (
    <motion.nav {...header.animations.desktopNav} className={header.nav.desktop.container}>
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
            className={header.mobileMenu.overlay}
            onClick={onClose}
          />

          {/* Side drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={header.animations.slideIn.transition}
            className={header.mobileMenu.blurOverlay}
          >
            <div className={header.mobileMenu.header}>
              <button
                onClick={onClose}
                className={header.nav.mobile.button}
                aria-label="Close menu"
              >
                <HiX className={header.nav.mobile.icon} />
              </button>
            </div>

            <nav className={header.mobileMenu.nav}>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={onClose}
                  className={header.mobileMenu.navItem}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className={header.mobileMenu.footer}>
              <p className={header.mobileMenu.footerText}>Connect with me:</p>
              <Social />
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

function Social({ className = '' }: { className?: string }) {
  return (
    <div className={`${header.social.container} ${className} `}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow me on ${social.icon.type.displayName || 'Social Media'}`}
          className={header.social.link}
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

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);


  return (
     <header className={header.base}>
   <div className={header.container}>
        {/* Left: Logo */}
        <div className={header.logo.container}>
          <Logo />
        </div>

        {/* Center: Desktop Nav */}
        <div className={header.nav.desktop.container}>
          <DesktopNav />
        </div>


        {/* Right: Social Icons (Desktop) */}
        <div className="hidden sm:flex flex-1 justify-end">
          <Social className="text-gray-700" />
        </div>
        
        {/* Hamburger Menu (Mobile) */}
        <div className={header.nav.mobile.container}>
          <button
            className={header.nav.mobile.button}
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <HiMenuAlt3 className={header.nav.mobile.icon} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </header>
  );
}