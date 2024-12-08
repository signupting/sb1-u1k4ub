import React from 'react';
import { motion } from 'framer-motion';

export default function AboutContent() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="christmas-title text-5xl font-bold mb-8 text-white">Unwrapping the Truth</h2>
        <p className="text-xl mb-6 leading-relaxed text-white/90">
          We've been lied to, frens. The mainstream media keeps shilling the same old narrative: 
          Santa Claus is a jolly white dude from the North Pole. But here's the alpha they 
          don't want you to know—<span className="text-white font-bold">Santa was Black</span>.
        </p>
        <p className="text-xl mb-6 leading-relaxed text-white/90">
          The original Saint Nicholas, a 4th-century bishop from Myra (modern-day Turkey), 
          had a darker complexion. Historians have the receipts, but over time, Western culture 
          rugged the narrative.
        </p>
        <p className="text-xl leading-relaxed text-white/90">
          It's time to DYOR and acknowledge the true origins of this iconic figure. Let's appreciate 
          the rich, multicultural history that has shaped our modern celebrations.
        </p>
      </motion.div>
      <div className="absolute -inset-4 blur-3xl bg-white/5 -z-10 rounded-3xl" />
    </div>
  );
}