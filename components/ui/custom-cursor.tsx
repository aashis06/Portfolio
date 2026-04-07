"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Check for touch device on mount
  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouch = 'ontouchstart' in window || 
                       navigator.maxTouchPoints > 0 || 
                       window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(hasTouch);
      if (hasTouch) {
        setIsVisible(false);
      }
    };

    checkTouchDevice();
    
    // Re-check on resize (for device rotation or window resize)
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  useEffect(() => {
    // Don't set up cursor on touch devices
    if (isTouchDevice) return;

    let animationFrameId: number;

    const moveCursor = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth animation
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        
        // Check if hovering over input/textarea
        const target = e.target as HTMLElement;
        if (target && (
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable
        )) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    // Mouse move
    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Hover detection for interactive elements (excluding inputs)
    const updateHoverListeners = () => {
      const hoverElements = document.querySelectorAll(
        "a, button, [role='button'], .cursor-hover"
      );

      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };

    // Initial setup
    updateHoverListeners();

    // Re-attach listeners when DOM changes (for dynamic content)
    const observer = new MutationObserver(updateHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isTouchDevice]);

  // Don't render anything on touch devices
  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Dot cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          willChange: 'transform',
        }}
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Ring cursor */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          willChange: 'transform',
        }}
      >
        <div
          className={`rounded-full border border-primary/40 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
            hovering ? "w-12 h-12 border-primary/60" : "w-8 h-8"
          }`}
        />
      </div>
    </>
  );
}
