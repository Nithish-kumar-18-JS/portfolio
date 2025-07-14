'use client'
import { useEffect } from 'react';

export function MouseTracker() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX + 'px';
      const y = e.clientY + 'px';
      document.documentElement.style.setProperty('--mouse-x', x);
      document.documentElement.style.setProperty('--mouse-y', y);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}
