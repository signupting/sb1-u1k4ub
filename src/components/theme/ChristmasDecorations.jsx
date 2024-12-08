import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ChristmasDecorations() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Desktop version */}
      <motion.div 
        style={{ opacity, scale }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [-10, 10, -10],
          rotate: [-5, 5, -5],
        }}
        transition={{ 
          opacity: { duration: 0.5 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-[15%] right-[15%] text-6xl md:text-8xl hidden md:block"
      >
        🎅🏿
      </motion.div>

      {/* Mobile version - positioned higher and more to the right */}
      <motion.div 
        style={{ opacity, scale }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [-5, 5, -5],
          rotate: [-3, 3, -3],
        }}
        transition={{ 
          opacity: { duration: 0.5 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-[20%] right-[10%] text-5xl md:hidden"
      >
        🎅🏿
      </motion.div>
    </div>
  );
}