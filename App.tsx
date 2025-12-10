import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import FeaturedServices from './src/components/FeaturedServices';
import AllServices from './src/components/AllServices';
import Spaces from './src/components/Spaces';
import VideoSection from './src/components/VideoSection';
import About from './src/components/About';
import Partners from './src/components/Partners';
import CTASection from './src/components/CTASection';
import Footer from './src/components/Footer';
import CustomCursor from './src/components/CustomCursor';
import ServiceModal from './src/components/ServiceModal';
import { Service } from './types';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth reveal for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const openModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div ref={mainRef} className="relative w-full min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <FeaturedServices openModal={openModal} />
        <AllServices openModal={openModal} />
        <Spaces />
        <VideoSection />
        <About />
        <Partners />
        <CTASection />
      </main>

      <Footer />

      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;