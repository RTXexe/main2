import React from 'react';
import { Sword, Crown } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Sword 
          size={48} 
          className="text-red-700 transform rotate-45 drop-shadow-lg" 
        />
        <Crown 
          size={24} 
          className="text-yellow-500 absolute -top-2 -right-2 transform rotate-12 drop-shadow-lg" 
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="w-1/2 h-1/2 bg-white/20 rounded-full blur-sm animate-pulse"></div>
        </div>
      </div>
      <span className="text-3xl font-bold text-white drop-shadow-md">RainBlade</span>
    </div>
  );
};

export default Logo;