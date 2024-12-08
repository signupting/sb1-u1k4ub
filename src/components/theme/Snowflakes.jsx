import React from 'react';

export default function Snowflakes() {
  const snowflakes = Array(10).fill('❄');
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {snowflakes.map((_, i) => (
        <div 
          key={i} 
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * (30 - 10) + 10}px`
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}