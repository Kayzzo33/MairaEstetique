import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { NAV_LINKS, WHATSAPP_NUMBER } from '../constants';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    const logo = logoRef.current;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(nav, {
          paddingTop: '1rem',
          paddingBottom: '1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(logo, { scale: 0.9, duration: 0.3 });
      } else {
        gsap.to(nav, {
          paddingTop: '2rem',
          paddingBottom: '2rem',
          backgroundColor: 'rgba(255, 255, 255, 0)',
          backdropFilter: 'blur(0px)',
          boxShadow: 'none',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(logo, { scale: 1, duration: 0.3 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 transition-all px-6 md:px-12 flex justify-between items-center"
      >
        <div ref={logoRef} className="flex flex-col">
          <a href="#home" className="interactive text-2xl md:text-3xl font-serif font-bold text-dark tracking-wide">
            MAIRA STYLE
          </a>
          <span className="text-xs font-script text-secondary translate-x-1 -translate-y-1">Esthétique</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="interactive text-sm uppercase tracking-widest font-sans font-medium text-dark hover:text-secondary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour!%20Je%20souhaite%20réserver%20un%20rendez-vous.`}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive bg-secondary text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-dark transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Réserver
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMobileMenu} className="md:hidden interactive text-dark">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif text-dark hover:text-secondary"
          >
            {link.label}
          </a>
        ))}
        <div className="flex space-x-6 mt-8">
          <a href="https://www.instagram.com/maira_olliver_esthetique/" target="_blank" rel="noopener noreferrer">
            <Instagram className="text-dark hover:text-secondary" size={32} />
          </a>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour!%20Je%20souhaite%20réserver%20un%20rendez-vous.`}
          className="bg-secondary text-white px-8 py-3 rounded-full text-lg shadow-xl"
        >
          Réserver Maintenant
        </a>
      </div>
    </>
  );
};

export default Navbar;