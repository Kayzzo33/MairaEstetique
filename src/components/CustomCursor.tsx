import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

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

    // Dynamic listener for interactive elements
    const addListeners = () => {
       const interactiveElements = document.querySelectorAll('a, button, .interactive');
       interactiveElements.forEach((el) => {
         el.addEventListener('mouseenter', handleHover);
         el.addEventListener('mouseleave', handleUnhover);
       });
       return interactiveElements;
    }

    let interactiveElements = addListeners();

    // Re-check for new elements occasionally (simple observer alternative)
    const observer = new MutationObserver(() => {
       interactiveElements.forEach((el) => {
         el.removeEventListener('mouseenter', handleHover);
         el.removeEventListener('mouseleave', handleUnhover);
       });
       interactiveElements = addListeners();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
      observer.disconnect();
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