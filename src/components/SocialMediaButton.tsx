import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SocialMediaButtonProps {
  icon: LucideIcon;
  label: string;
  url: string;
  color: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ 
  icon: Icon, 
  label, 
  url, 
  color 
}) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center justify-center p-3 rounded-full bg-white/10 
                 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 
                 transform hover:scale-110 hover:shadow-lg group relative`}
      aria-label={label}
    >
      <Icon 
        size={24} 
        className={`${color} transition-transform duration-300 group-hover:animate-pulse`} 
      />
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300
                       text-xs text-white bg-black/50 px-2 py-1 rounded-full whitespace-nowrap">
        {label}
      </span>
    </a>
  );
};

export default SocialMediaButton;