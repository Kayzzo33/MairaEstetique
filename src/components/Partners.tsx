import React from 'react';
import { GradientHeading } from './ui/gradient-heading';
import { PARTNER_LOGOS } from '../../constants';

const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
           <GradientHeading variant="pink" size="md">Nos Partenaires de Confiance</GradientHeading>
           <p className="text-gray-500 mt-2">Nous utilisons uniquement les meilleurs produits du marché</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
            {/* Logo 1: Cherry Lash */}
            <div className="w-40 md:w-56 h-auto transition-transform hover:scale-110 duration-300">
               <img 
                 src={PARTNER_LOGOS.cherry} 
                 alt="Cherry Lash Partner" 
                 className="w-full h-auto object-contain mix-blend-multiply"
               />
            </div>

             {/* Logo 2: Nagaraku */}
            <div className="w-40 md:w-56 h-auto transition-transform hover:scale-110 duration-300">
               <img 
                 src={PARTNER_LOGOS.nagaraku} 
                 alt="Nagaraku Partner" 
                 className="w-full h-auto object-contain mix-blend-multiply"
               />
            </div>

             {/* Logo 3: DeceMars */}
            <div className="w-40 md:w-56 h-auto transition-transform hover:scale-110 duration-300">
               <img 
                 src={PARTNER_LOGOS.decemars} 
                 alt="DeceMars Partner" 
                 className="w-full h-auto object-contain mix-blend-multiply"
               />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;