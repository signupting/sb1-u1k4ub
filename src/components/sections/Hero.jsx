import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2,
            ease: "easeOut",
            delay: 0.2
          }}
          className="relative"
        >
          <motion.img
            src="/images/BLAK SANTA (1).svg"
            alt="BLAK SANTA"
            className="w-[80vw] md:w-[50vw] max-w-[800px] mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1,
              y: 0,
            }}
            transition={{ 
              duration: 1.5,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.5
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}