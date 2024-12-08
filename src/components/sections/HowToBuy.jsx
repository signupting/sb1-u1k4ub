import React from 'react';
import { motion } from 'framer-motion';

export default function HowToBuy() {
  const steps = [
    {
      title: "Pick $BLAKKK on Pump.fun",
      description: "Navigate to Pump.fun and search for $BLAKKK",
      emoji: "🔍",
      emojiAnimation: {
        y: [-2, 2, -2],
        rotate: [-10, 10, -10],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    {
      title: "Buy on the bonding curve",
      description: "Get in early for the best price",
      emoji: "📈",
      emojiAnimation: {
        scale: [1, 1.2, 1],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    {
      title: "Sell anytime",
      description: "Lock in profits or losses whenever you want",
      emoji: "💎",
      emojiAnimation: {
        rotate: [-15, 15, -15],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    {
      title: "Market cap hits $100k",
      description: "Liquidity is added to Raydium & burned",
      emoji: "🚀",
      emojiAnimation: {
        y: [-4, 4, -4],
        x: [-2, 2, -2],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-green-900 via-red-900 to-green-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-white"
        >
          How to Get Your Hands on <span className="brand-text">$BLAKKK</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
            >
              <motion.div 
                className="text-4xl mb-6 flex justify-center"
                animate={step.emojiAnimation}
              >
                {step.emoji}
              </motion.div>
              <div className="text-4xl mb-4 text-white/60">{index + 1}</div>
              <h3 className="text-xl font-bold mb-2 content-text">{step.title}</h3>
              <p className="text-white/80 content-text">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}