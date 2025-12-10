import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { NAV_LINKS, WHATSAPP_NUMBER } from '../../constants';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const navContainerRef = useRef<HTMLElement>(null);
  const navContentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const navContent = navContentRef.current;
    
    if (!navContent) return;

    // Estado Inicial (Topo):
    // Já começa flutuante (pill), com efeito glass, mas LARGURA MAIOR (elementos mais espaçados)
    gsap.set(navContent, {
        width: '95%', // Começa quase total, mas descolado
        maxWidth: '1400px',
        marginTop: '1.5rem',
        borderRadius: '9999px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Glass visível desde o início
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px 0 rgba(31, 38, 135, 0.1)',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        border: '1px solid rgba(255, 255, 255, 0.5)',
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 50) {
        // Estado Rolagem (Scroll Down):
        // Fica MAIS COMPACTO (Zoom-in), juntando os elementos
        gsap.to(navContent, {
          width: '75%', // Diminui a largura para juntar os elementos
          maxWidth: '1000px',
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // Mais opaco
          backdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          duration: 0.5,
          ease: 'power3.out',
        });
      } else {
        // Volta ao Estado Inicial (Topo):
        // Mais largo, elementos mais separados
        gsap.to(navContent, {
          width: '95%',
          maxWidth: '1400px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px 0 rgba(31, 38, 135, 0.1)',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          duration: 0.5,
          ease: 'power3.out',
        });
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
        ref={navContainerRef}
        className="fixed top-0 left-0 w-full z-50 flex justify-center items-start pointer-events-none"
      >
        <div 
            ref={navContentRef} 
            className="flex justify-between items-center px-6 md:px-10 pointer-events-auto transition-all"
        >
            <div ref={logoRef} className="flex flex-col">
            <a href="#home" className="interactive text-xl md:text-2xl font-serif font-bold text-dark tracking-wide">
                MAIRA STYLE
            </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_LINKS.map((link) => (
                <a
                key={link.label}
                href={link.href}
                className="interactive text-xs uppercase tracking-widest font-sans font-medium text-dark hover:text-secondary transition-colors relative group py-2"
                >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </a>
            ))}
            <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour!%20Je%20souhaite%20réserver%20un%20rendez-vous.`}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive bg-secondary text-white px-5 py-2 rounded-full font-medium text-xs uppercase tracking-wide hover:bg-dark transition-colors duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
                Réserver
            </a>
            </div>

            {/* Mobile Toggle */}
            <button onClick={toggleMobileMenu} className="md:hidden interactive text-dark p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${
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