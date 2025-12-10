import React from 'react';
import { NAV_LINKS, WHATSAPP_NUMBER } from '../../constants';
import { Instagram, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-serif font-bold text-white">MAIRA STYLE</h3>
              <p className="text-sm font-script text-secondary text-xl">Esthétique</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Je révèle ta beauté naturelle, sans exagération.
            </p>
            <a href="https://www.instagram.com/maira_olliver_esthetique/" target="_blank" rel="noopener noreferrer" className="inline-block p-3 bg-gray-900 rounded-full hover:bg-secondary transition-colors interactive">
              <Instagram size={20} />
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-bold mb-2">Navigation</h4>
            {NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} className="text-gray-400 hover:text-white transition-colors interactive w-fit">
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-bold mb-2">Contact</h4>
            <div className="flex items-start space-x-3 text-gray-400">
              <MapPin size={20} className="mt-1 flex-shrink-0" />
              <span>95320 Saint-Leu-la-Forêt<br/>Île-de-France, France</span>
            </div>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-center space-x-3 text-gray-400 hover:text-secondary transition-colors interactive">
              <Phone size={20} />
              <span>+55 73 8802-7104</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Maira Style Esthétique. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;