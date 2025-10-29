import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { Clapperboard, Lightbulb, Brush, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { animate } from 'animejs';

const events = [
  { id: 1, Icon: Clapperboard, text: 'Project Kickoff', path: '/project-kickoff' },
  { id: 2, Icon: Lightbulb, text: 'Concept Design', path: '/concept-design' },
  { id: 3, Icon: Brush, text: 'Visual Build', path: '/visual-build' },
  { id: 4, Icon: Rocket, text: 'Project Templates', path: '/project-templates' },
  { id: 5, Icon: Rocket, text: 'Launch Day', path: '/launch-day' }
];

export default function Timeline() {
  const [, setLocation] = useLocation();
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial opacity to 0
    eventRefs.current.forEach(el => {
      if (el) {
        el.style.opacity = '0';
      }
    });

    const handleScroll = () => {
      eventRefs.current.forEach(el => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 50) {
            el.style.transition = 'opacity 0.8s ease-out';
            el.style.opacity = '1';
          }
        }
      });
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create stars for background
  useEffect(() => {
    if (starsRef.current) {
      createStars();
    }
  }, []);

  const createStars = () => {
    if (!starsRef.current) return;

    // Clear any existing stars
    starsRef.current.innerHTML = '';

    // Create 300 stars
    for (let i = 0; i < 300; i++) {
      const star = document.createElement('div');
      star.className = 'absolute rounded-full bg-white';

      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      // Random size (0.5px to 4px)
      const size = Math.random() * 3.5 + 0.5;

      // Random opacity (0.2 to 1)
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-foreground px-4 relative overflow-hidden">
      {/* Stars background */}
      <div
        ref={starsRef}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, #0a0a1a 0%, #16213e 40%, #0f0f2e 70%, #000000 100%)',
          zIndex: -1
        }}
      />

      {/* Responsive Transparent Header */}
      <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 w-full">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1
            className="text-xl font-semibold cursor-pointer text-white"
            onClick={() => setLocation('/')}
          >
            Clawn Media Studio
          </h1>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setLocation('/about')}
            >
              About
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setLocation('/pricing')}
            >
              Pricing
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setLocation('/contact')}
            >
              Contact Us
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setLocation('/auth')}
            >
              Login
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-8 relative z-10">
        <h1
          className="text-[2.5rem] font-semibold mb-8 text-center"
          style={{ letterSpacing: '-0.02em' }}
          data-testid="heading-timeline"
        >
          Welcome to Clawn Media Studio
        </h1>

        {/* Redesigned Timeline Section */}
        <div className="mb-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {events.map((event, index) => {
                const Icon = event.Icon;
                return (
                  <div
                    key={event.id}
                    className={`flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                  >
                    {/* Content card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div
                        className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer"
                        onClick={() => setLocation(event.path)}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-6 h-6 flex-shrink-0" style={{ color: '#f46b45' }} />
                          <h3 className="text-xl font-semibold">{event.text}</h3>
                        </div>
                        <p className="text-gray-400">
                          {event.text === 'Project Kickoff' && 'Begin your journey with us by sharing your vision and goals.'}
                          {event.text === 'Concept Design' && 'We transform your ideas into creative concepts and visual directions.'}
                          {event.text === 'Visual Build' && 'Our designers bring concepts to life with stunning visuals and layouts.'}
                          {event.text === 'Project Templates' && 'Choose from our carefully crafted templates for your specific needs.'}
                          {event.text === 'Launch Day' && 'Your project goes live with our full support and optimization.'}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="w-2/12 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-purple-600 border-4 border-gray-900 flex items-center justify-center z-10">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Empty column for spacing */}
                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 w-full">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Clawn Media Studio</h3>
              <p className="text-gray-400">
                Creative motion. Minimal flow. We turn everyday emotions into timeless digital experiences.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61581383862272" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/eagle_s_call/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.667-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
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
                <a
                  href="https://www.youtube.com/channel/UCm-Xk6NpDL2iPeVFoYg-6qg"
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm sr-only">YouTube</span>
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

      {/* Twinkling animation styles */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}