import React from 'react';
import { ExternalLink, Wallet } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, description, link }) => {
  return (
    <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Wallet className="text-yellow-500" size={20} />
          <span className="text-yellow-500 font-bold">${price}</span>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>Buy Now</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;