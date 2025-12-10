import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../constants';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial Animation
    tl.fromTo(
      textRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 }
    )
    .fromTo(
      imageRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' },
      '-=1'
    );

    // Parallax on scroll
    gsap.to(imageInnerRef.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Text parallax
    gsap.to(textRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

  }, []);

  return (
    <section 
      id="home"
      ref={containerRef} 
      className="relative min-h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-hero-gradient pt-24 lg:pt-0"
    >
      {/* Left Content */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-6 md:px-12 lg:pl-24 lg:pr-12 relative z-10 py-12 lg:py-0">
        <div ref={textRef} className="space-y-6">
          <div className="flex items-center space-x-2 text-secondary font-medium tracking-widest uppercase text-sm">
            <Sparkles size={16} />
            <span>Artiste du Regard</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-dark leading-[1.1]">
            Je révèle ta <br/>
            <span className="text-secondary italic">beauté naturelle</span>
          </h1>
          
          <p className="text-3xl md:text-4xl font-script text-gray-500 transform -rotate-2 origin-left">
            Sans exagération
          </p>
          
          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            Spécialiste en extensions de cils et soins du regard. 
            Une approche délicate pour sublimer vos traits sans les masquer.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour!%20Je%20souhaite%20réserver%20un%20rendez-vous.`}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive group bg-gradient-to-r from-secondary to-pink-600 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-secondary/50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Réserver Maintenant</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#prestations"
              className="interactive group border border-dark/20 hover:border-dark text-dark px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 flex items-center justify-center hover:bg-white"
            >
              Nos Prestations
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div 
        ref={imageRef} 
        className="w-full lg:w-[55%] h-[60vh] lg:h-screen relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 z-10 pointer-events-none" />
        {/* Curved Mask for bottom transition */}
        <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1">
           <svg viewBox="0 0 1440 120" className="w-full h-auto text-white fill-current">
             <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
           </svg>
        </div>
        
        {/* Client Image: Hero Woman */}
        <img 
          ref={imageInnerRef}
          src="https://drive.google.com/uc?export=view&id=1AtzACGnWe-SJQf67tLVIN14Ybpt-4tNi" 
          alt="Maira Olliver Hero" 
          className="w-full h-[120%] object-cover object-top"
        />
        
        {/* Floating Badge */}
        <div className="absolute top-1/2 left-12 lg:left-0 transform -translate-y-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur-md p-6 rounded-full shadow-2xl hidden lg:block animate-pulse-slow">
           <div className="text-center">
             <span className="block text-3xl font-serif font-bold text-dark">5+</span>
             <span className="text-xs uppercase tracking-wider text-gray-500">Années<br/>d'expérience</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;