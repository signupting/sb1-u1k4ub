import React from 'react';
import { motion } from 'framer-motion';

function NavLink({ href, children }) {
  return (
    <motion.a 
      href={href} 
      className="text-white hover:text-white/80 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl brand-text cursor-pointer"
          >
            BLAK
          </motion.div>
          
          <div className="flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#merch">Merch</NavLink>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Buy $BLAK
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}