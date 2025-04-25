import React from 'react';
import SocialMediaButton from './SocialMediaButton';
import { 
  Twitter, 
  Instagram, 
  Facebook, 
  Twitch, 
  Youtube, 
  Github 
} from 'lucide-react';

const SocialMediaBar: React.FC = () => {
  const socialMedia = [
    { 
      icon: Twitter, 
      label: 'Twitter', 
      url: 'https://twitter.com', 
      color: 'text-blue-400' 
    },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      url: 'https://instagram.com', 
      color: 'text-pink-500' 
    },
    { 
      icon: Facebook, 
      label: 'Facebook', 
      url: 'https://facebook.com', 
      color: 'text-blue-600' 
    },
    { 
      icon: Youtube, 
      label: 'YouTube', 
      url: 'https://youtube.com', 
      color: 'text-red-500' 
    },
    { 
      icon: Twitch, 
      label: 'Twitch', 
      url: 'https://twitch.tv', 
      color: 'text-purple-500' 
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      url: 'https://github.com', 
      color: 'text-gray-200' 
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8 md:mt-10">
      {socialMedia.map((platform) => (
        <SocialMediaButton 
          key={platform.label}
          icon={platform.icon}
          label={platform.label}
          url={platform.url}
          color={platform.color}
        />
      ))}
    </div>
  );
};

export default SocialMediaBar;