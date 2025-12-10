import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../../constants';
import { Service } from '../../types';
import { Plus } from 'lucide-react';

interface AllServicesProps {
  openModal: (service: Service) => void;
}

const AllServices: React.FC<AllServicesProps> = ({ openModal }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    // Use context to clean up easily
    const ctx = gsap.context(() => {
        const getScrollAmount = () => {
            // Calculate how much we need to move left
            // (Total width of track) - (Viewport width)
            let amount = track.scrollWidth - window.innerWidth;
            return -amount;
        };

        const tween = gsap.to(track, {
            x: getScrollAmount,
            ease: "none",
        });

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: () => `+=${track.scrollWidth - window.innerWidth}`,
            pin: true, // This locks the container in place
            animation: tween,
            scrub: 1, // Smooth scrubbing
            invalidateOnRefresh: true, // Recalculate on resize
            anticipatePin: 1, // Helps prevent jitter
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="all-services" ref={sectionRef} className="bg-dark text-white relative h-screen w-full overflow-hidden">
      {/* Wrapper ensures vertical centering if needed, but here we fill screen */}
      <div className="w-full h-full flex items-center overflow-hidden">
        
        {/* Track that moves horizontally */}
        <div ref={trackRef} className="flex items-center px-12 md:px-24 h-full w-max">
          
          {/* Title Card */}
          <div className="w-[80vw] md:w-[40vw] flex-shrink-0 pr-12 md:pr-24">
             <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Catalogue</span>
             <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
               Tous nos <br/>
               <span className="text-secondary italic font-serif">Services</span>
             </h2>
             <p className="mt-6 text-gray-400 max-w-md text-lg">
               Une gamme complète de soins pour sublimer votre regard, des cils aux sourcils.
             </p>
             <div className="mt-8 flex items-center space-x-4">
               <div className="w-16 h-[1px] bg-secondary" />
               <span className="text-sm uppercase tracking-wider text-gray-500">Scroll pour explorer</span>
             </div>
          </div>

          {/* Service Cards */}
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className="w-[80vw] md:w-[35vw] lg:w-[25vw] h-[60vh] flex-shrink-0 relative group mx-4 md:mx-6 cursor-pointer interactive"
              onClick={() => openModal(service)}
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 transition-all duration-500 group-hover:border-secondary/50 group-hover:shadow-[0_0_30px_rgba(255,105,180,0.3)]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-secondary text-sm font-bold uppercase tracking-wider mb-2 block">{service.duration}</span>
                  <h3 className="text-3xl font-serif font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                  
                  <button className="flex items-center space-x-2 text-white text-sm font-medium border border-white/30 rounded-full px-4 py-2 hover:bg-white hover:text-dark transition-colors">
                    <Plus size={16} />
                    <span>Détails</span>
                  </button>
                </div>
              </div>
              
              {/* Number Index */}
              <div className="absolute -top-12 left-4 text-6xl font-serif font-bold text-white/5 group-hover:text-white/20 transition-colors">
                0{index + 1}
              </div>
            </div>
          ))}

          {/* Spacer at the end for comfortable scrolling */}
          <div className="w-24 flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default AllServices;