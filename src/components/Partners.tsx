import React, { useEffect, useRef } from 'react';
import { PARTNERS } from '../constants';
import { gsap } from 'gsap';

const Partners: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Random fade animation
    const logos = gridRef.current?.children;
    if (!logos) return;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * logos.length);
      const logo = logos[randomIndex];

      gsap.to(logo, { opacity: 0.3, duration: 1, yoyo: true, repeat: 1 });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-serif font-bold text-dark mb-12">Nos Partenaires de Confiance</h3>
        
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-80">
          {PARTNERS.map((partner, index) => (
            <div 
              key={index}
              className="w-full h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              {/* Using text placeholder for logos as direct image links are not available, styled to look like logos */}
              <span className="text-xl md:text-2xl font-bold font-serif text-gray-400 border border-gray-200 px-6 py-2 rounded-lg block w-full">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;