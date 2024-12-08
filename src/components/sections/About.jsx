import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-32 bg-gradient-to-b from-green-900 via-red-900 to-green-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-garet mb-8 text-white"
          >
            Your Favorite Legend?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl"
          >
            <span className="font-garet text-white">Probably </span>
            <span className="brand-text">BLAK</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}