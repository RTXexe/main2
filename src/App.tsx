import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import Logo from './components/Logo';
import SocialMediaBar from './components/SocialMediaBar';
import ProductCard from './components/ProductCard';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    document.title = "RainBlade - Connect with us";
    
    return () => {
      document.title = "Vite + React + TS";
    };
  }, []);

  const products = [
    {
      name: "RainBlade Pro",
      price: 49.99,
      description: "Premium gaming sword with enhanced durability and special effects",
      link: "https://example.com/rainblade-pro"
    },
    {
      name: "Crown Edition",
      price: 99.99,
      description: "Limited edition sword with exclusive crown design and rare animations",
      link: "https://example.com/crown-edition"
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      <Background />
      
      <main className="z-10 w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'}`}>
            <Logo />
          </div>
          
          <div className={`transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'}`}>
            <h2 className="text-white/90 text-xl font-light">
              Connect with us across the digital realm
            </h2>
          </div>
          
          <div className={`w-full max-w-xl transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 transform-none' : 'opacity-0 scale-95'}`}>
            <SocialMediaBar />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                price={product.price}
                description={product.description}
                link={product.link}
              />
            ))}
          </div>
        </div>
      </main>
      
      <footer className="z-10 mt-12 text-white/60 text-sm text-center">
        <p>© 2025 RainBlade. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App