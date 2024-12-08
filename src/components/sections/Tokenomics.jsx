import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Tokenomics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-red-900 to-green-900 text-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="christmas-title text-5xl font-bold mb-12">Tokenomics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4">Total Supply</h3>
              <p className="text-3xl font-bold text-white">{formatNumber(1000000000)}</p>
              <p className="text-lg mt-2 text-white/80">BLAS Tokens</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4">Liquidity Pool</h3>
              <p className="text-4xl font-bold text-white">1%</p>
              <p className="text-lg mt-2 text-white/80">Tax</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4">Marketing</h3>
              <p className="text-4xl font-bold text-white">1%</p>
              <p className="text-lg mt-2 text-white/80">Community Rewards</p>
            </motion.div>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-xl text-white/90"
          >
            Fair Launch: No presales, no team wallets. Just pure holiday spirit and community power.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}