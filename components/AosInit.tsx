'use client';

import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function AosInit() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({
        disable: false,
        offset: 60,
        delay: 50,
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        mirror: false,
      });
    });
  }, []);

  return null;
}
