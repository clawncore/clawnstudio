import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { animate } from 'animejs';
import { Button } from '@/components/ui/button';

export default function Landing() {
  const [, setLocation] = useLocation();
  const circleRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<HTMLDivElement>(null);
  const squareRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const galaxyRingRef = useRef<HTMLDivElement>(null);
  const galaxyCoreRef = useRef<HTMLDivElement>(null);
  const spiralArmsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Circle animation - anime.js v4 API
    if (circleRef.current) {
      animate(circleRef.current, {
        x: '15rem',
        duration: 1000,
        ease: 'inOutQuad',
        alternate: true,
        loop: true
      });
    }

    // Triangle animation - anime.js v4 API
    if (triangleRef.current) {
      animate(triangleRef.current, {
        x: '15rem',
        rotate: '1turn',
        duration: 800,
        delay: 300,
        ease: 'inOutSine',
        loop: true,
        alternate: true
      });
    }

    // Square animation - anime.js v4 API
    if (squareRef.current) {
      animate(squareRef.current, {
        x: '15rem',
        duration: 900,
        delay: 600,
        ease: 'inOutQuad',
        loop: true,
        alternate: true
      });
    }

    // Galaxy ring rotation animation
    if (galaxyRingRef.current) {
      animate(galaxyRingRef.current, {
        rotate: '360deg',
        duration: 30000,
        easing: 'linear',
        loop: true
      });
    }

    // Galaxy core pulsing animation
    if (galaxyCoreRef.current) {
      animate(galaxyCoreRef.current, {
        scale: [1, 1.1, 1],
        opacity: [0.7, 0.9, 0.7],
        duration: 3000,
        easing: 'easeInOutQuad',
        loop: true
      });
    }

    // Create stars for galaxy background
    if (starsRef.current) {
      createStars();
    }

    // Create spiral arms
    if (spiralArmsRef.current) {
      createSpiralArms();
    }
  }, []);

  const createStars = () => {
    if (!starsRef.current) return;

    // Clear any existing stars
    starsRef.current.innerHTML = '';

    // Create 300 stars (increased from 150)
    for (let i = 0; i < 300; i++) {
      const star = document.createElement('div');
      star.className = 'absolute rounded-full bg-white';

      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      // Random size (0.5px to 4px) - increased max size
      const size = Math.random() * 3.5 + 0.5;

      // Random opacity (0.2 to 1) - slightly reduced minimum
      const opacity = Math.random() * 0.8 + 0.2;

      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = `${opacity}`;

      // Add glow effect to more stars
      if (Math.random() > 0.6) {
        star.style.boxShadow = `0 0 ${size * 4}px ${size * 2}px rgba(255, 255, 255, 0.4)`;
      }

      // Animate more stars to twinkle
      if (Math.random() > 0.5) {
        animate(star, {
          opacity: [opacity, opacity * 0.2, opacity],
          duration: Math.random() * 4000 + 2000,
          loop: true,
          easing: 'easeInOutQuad'
        });
      }

      starsRef.current.appendChild(star);
    }
  };

  const createSpiralArms = () => {
    if (!spiralArmsRef.current) return;

    // Clear any existing spiral elements
    spiralArmsRef.current.innerHTML = '';

    // Create spiral arms with irregular shapes
    for (let arm = 0; arm < 4; arm++) {
      const armGroup = document.createElement('div');
      armGroup.className = 'absolute top-1/2 left-1/2';

      // Rotate each arm differently
      const armRotation = arm * 90 + Math.random() * 30 - 15; // Add some irregularity
      armGroup.style.transform = `translate(-50%, -50%) rotate(${armRotation}deg)`;

      // Create stars along spiral path
      for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.className = 'absolute rounded-full';

        // Spiral parameters with more pronounced spiral
        const angle = 0.4 * i;
        const radius = 30 + i * 4 + Math.random() * 30; // More irregular radius

        // Position along spiral with more randomness for irregular shape
        const x = radius * Math.cos(angle) + (Math.random() * 50 - 25);
        const y = radius * Math.sin(angle) + (Math.random() * 50 - 25);

        // Size and color variation
        const size = Math.random() * 3 + 1;
        const colors = [
          'rgba(255, 255, 255, 0.9)',    // White
          'rgba(139, 92, 246, 0.8)',     // Purple
          'rgba(96, 165, 250, 0.8)',     // Blue
          'rgba(251, 191, 36, 0.8)'      // Yellow
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.background = color;

        // Add glow to more stars
        if (Math.random() > 0.6) {
          star.style.boxShadow = `0 0 ${size * 4}px ${size * 2}px ${color.replace('0.8', '0.5')}`;
        }

        armGroup.appendChild(star);
      }

      spiralArmsRef.current.appendChild(armGroup);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Galaxy background with stars */}
      <div
        ref={starsRef}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, #0a0a1a 0%, #16213e 40%, #0f0f2e 70%, #000000 100%)'
        }}
      />

      {/* Spiral Galaxy Arms */}
      <div
        ref={spiralArmsRef}
        className="absolute inset-0"
      />

      {/* Rolling Galaxy Ring - Increased radius */}
      <div
        ref={galaxyRingRef}
        className="absolute inset-0"
      >
        {/* Outer galaxy ring - Increased size */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-purple-500 opacity-20"
          style={{
            boxShadow: '0 0 40px 15px rgba(139, 92, 246, 0.4)',
            animation: 'rotate 45s linear infinite'
          }}
        ></div>

        {/* Middle galaxy ring - Increased size */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-blue-500 opacity-30"
          style={{
            boxShadow: '0 0 30px 10px rgba(96, 165, 250, 0.4)',
            animation: 'rotateReverse 35s linear infinite'
          }}
        ></div>

        {/* Inner galaxy ring - Increased size */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border border-indigo-400 opacity-40"
          style={{
            boxShadow: '0 0 25px 8px rgba(129, 140, 248, 0.4)',
            animation: 'rotate 25s linear infinite'
          }}
        ></div>
      </div>

      {/* Galaxy Core - Larger and more prominent */}
      <div
        ref={galaxyCoreRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(139, 92, 246, 0.9) 30%, rgba(96, 165, 250, 0.7) 60%, transparent 80%)',
          boxShadow: '0 0 50px 25px rgba(139, 92, 246, 0.9)',
          animation: 'pulse 3s ease-in-out infinite'
        }}
      ></div>

      {/* Additional irregular galaxy elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[25%] left-[15%] w-96 h-96 rounded-full bg-purple-900 opacity-15 blur-3xl transform rotate-12"></div>
        <div className="absolute top-[35%] right-[20%] w-112 h-112 rounded-full bg-blue-900 opacity-15 blur-3xl transform -rotate-6"></div>
        <div className="absolute bottom-[25%] left-[30%] w-80 h-80 rounded-full bg-indigo-900 opacity-15 blur-3xl transform rotate-45"></div>
        <div className="absolute top-[15%] right-[15%] w-72 h-72 rounded-full bg-pink-900 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[25%] w-64 h-64 rounded-full bg-teal-900 opacity-10 blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1
            className="text-3xl font-semibold cursor-pointer text-white"
            onClick={() => setLocation('/')}
          >
            Clawn Media Studio
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 relative z-10 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Creative Motion. Minimal Flow.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            We turn everyday emotions into timeless digital experiences.
          </p>

          <div className="flex justify-center items-center gap-8 mb-16">
            {/* Triangle */}
            <div ref={triangleRef} className="relative">
              <div
                className="border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px]"
                style={{
                  width: 0,
                  height: 0,
                  borderBottomColor: '#89cff0'
                }}
              />
            </div>

            {/* Square */}
            <div
              ref={squareRef}
              className="rounded-[8px]"
              style={{
                width: '80px',
                height: '80px',
                background: '#f4a261'
              }}
            />

            {/* Circle */}
            <div
              ref={circleRef}
              className="rounded-full"
              style={{
                width: '80px',
                height: '80px',
                background: '#c77dff'
              }}
            />
          </div>

          <Button
            onClick={() => setLocation('/timeline')}
            className="px-8 py-4 text-xl rounded-full"
            style={{
              background: '#f46b45',
              color: '#fff'
            }}
          >
            Get Started
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 w-full mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Clawn Media Studio</h3>
              <p className="text-gray-400">
                Creative motion. Minimal flow. We turn everyday emotions into timeless digital experiences.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=6158138362272" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/eagle_s_call/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="https://x.com/Eagle_s_call" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="https://linkedin.com/company/clawnmediastudio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCm-Xk6NpDL2iPeVFoYg-6qg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setLocation('/')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLocation('/timeline')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Timeline
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLocation('/pricing')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLocation('/about')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLocation('/contact')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => console.log('Privacy Policy clicked')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => console.log('Terms of Service clicked')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => console.log('Cookie Policy clicked')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full"
                />
                <button className="px-4 py-2 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Clawn Media Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
