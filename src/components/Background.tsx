import React, { useEffect, useState } from 'react';

// Rain drop component
const RainDrop: React.FC<{delay: number, duration: number, left: string}> = ({ 
  delay, 
  duration, 
  left 
}) => {
  return (
    <div 
      className="absolute top-0 w-0.5 bg-red-600/70 rounded-full"
      style={{
        left,
        height: `${20 + Math.random() * 30}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity: 0,
        transform: 'translateY(-100%)',
        animation: `fallRain ${duration}s ${delay}s infinite linear`
      }}
    />
  );
};

// Snow flake component
const SnowFlake: React.FC<{delay: number, duration: number, left: string, size: number}> = ({ 
  delay, 
  duration, 
  left,
  size 
}) => {
  return (
    <div 
      className="absolute top-0 bg-white rounded-full opacity-80"
      style={{
        left,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity: 0.8,
        transform: 'translateY(-100%)',
        animation: `fallSnow ${duration}s ${delay}s infinite linear`
      }}
    />
  );
};

const Background: React.FC = () => {
  const [raindrops, setRaindrops] = useState<JSX.Element[]>([]);
  const [snowflakes, setSnowflakes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Generate rain drops
    const drops = Array.from({ length: 100 }, (_, i) => {
      const delay = Math.random() * 10;
      const duration = 0.5 + Math.random() * 0.5;
      const left = `${Math.random() * 100}%`;
      
      return (
        <RainDrop 
          key={`rain-${i}`} 
          delay={delay} 
          duration={duration} 
          left={left}
        />
      );
    });
    
    setRaindrops(drops);
    
    // Generate snow flakes
    const flakes = Array.from({ length: 60 }, (_, i) => {
      const delay = Math.random() * 15;
      const duration = 3 + Math.random() * 7;
      const left = `${Math.random() * 100}%`;
      const size = 1 + Math.random() * 4;
      
      return (
        <SnowFlake 
          key={`snow-${i}`} 
          delay={delay} 
          duration={duration} 
          left={left} 
          size={size}
        />
      );
    });
    
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-red-900 to-red-950 overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0">
        {raindrops}
        {snowflakes}
      </div>
    </div>
  );
};

export default Background;