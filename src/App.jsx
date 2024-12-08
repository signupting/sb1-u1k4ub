import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import HowToBuy from './components/sections/HowToBuy';
import ImageGenerator from './components/sections/ImageGenerator';
import Community from './components/sections/Community';
import ChristmasTheme from './components/theme/ChristmasTheme';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-red-900 to-green-900">
      <ChristmasTheme />
      <Layout>
        <Hero />
        <About />
        <HowToBuy />
        <ImageGenerator />
        <Community />
      </Layout>
    </div>
  );
}