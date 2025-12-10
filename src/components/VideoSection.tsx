import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VIDEOS } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

const VideoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0.8 },
      {
        opacity: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Client Video: Lash Video 1 - Rotated and Muted (Cloudinary) */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80 transform rotate-90 scale-150 md:rotate-0 md:scale-100" 
      >
        <source src={VIDEOS.lashProcess} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div ref={overlayRef} className="absolute inset-0 bg-dark z-10 pointer-events-none" />

      <div className="relative z-20 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-wide drop-shadow-xl">
          L'Art de la Précision
        </h2>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wider uppercase">
          Une expérience unique pour un résultat inoubliable
        </p>
      </div>
    </section>
  );
};

export default VideoSection;