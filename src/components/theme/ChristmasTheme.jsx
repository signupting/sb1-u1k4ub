import React from 'react';
import Snowflakes from './Snowflakes';
import ChristmasLights from './ChristmasLights';

export default function ChristmasTheme() {
  return (
    <>
      <Snowflakes />
      <ChristmasLights />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] z-0" />
    </>
  );
}