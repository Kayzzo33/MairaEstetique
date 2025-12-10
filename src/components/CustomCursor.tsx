import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursorDot || !cursorOutline) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Direct movement for dot
      gsap.to(cursorDot, {
        x: clientX,
        y: clientY,
        duration: 0.1,
      });

      // Smooth movement for outline
      gsap.to(cursorOutline, {
        x: clientX,
        y: clientY,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const handleHover = () => {
      cursorOutline.classList.add('hovered');
    };

    const handleUnhover = () => {
      cursorOutline.classList.remove('hovered');
    };

    window.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  // Only render on desktop to avoid issues on touch devices
  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot fixed pointer-events-none z-[9999]"></div>
      <div ref={cursorOutlineRef} className="cursor-outline fixed pointer-events-none z-[9999]"></div>
    </>
  );
};

export default CustomCursor;