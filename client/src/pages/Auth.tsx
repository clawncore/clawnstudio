import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { animate } from 'animejs';

export default function Auth() {
  const [, setLocation] = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const starsRef = useRef<HTMLDivElement>(null);
  const galaxyRingRef = useRef<HTMLDivElement>(null);
  const galaxyCoreRef = useRef<HTMLDivElement>(null);
  const spiralArmsRef = useRef<HTMLDivElement>(null);

  // Create stars for background
  useEffect(() => {
    if (starsRef.current) {
      createStars();
    }

    // Create spiral arms
    if (spiralArmsRef.current) {
      createSpiralArms();
    }
  }, []);

  // Galaxy ring rotation animation
  useEffect(() => {
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

  const handleLogin = async () => {
    // Simple validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate login process
      // In a real app, you would validate credentials with a server
      if (username === 'admin' && password === 'password') {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('username', username);
        setLocation('/timeline');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async () => {
    // Simple validation
    if (!username || !password || !email) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Simple email validation
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate sign up process
      // In a real app, you would send this to a server
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', username);
      setSuccess('Account created successfully! Redirecting to timeline...');

      // Reset form after successful signup
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setEmail('');

      // Redirect to timeline after successful signup
      setTimeout(() => {
        setLocation('/timeline');
      }, 2000);
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    setError('');
    setSuccess('');

    // Simulate social login
    setTimeout(() => {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', `${provider}User`);
      setSuccess(`Successfully signed in with ${provider}! Redirecting...`);

      setTimeout(() => {
        setLocation('/timeline');
      }, 1500);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (isLogin) {
        handleLogin();
      } else {
        handleSignUp();
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-foreground px-4 relative overflow-hidden">
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

      {/* Responsive Transparent Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
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
              onClick={() => setLocation('/')}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setLocation('/timeline')}
            >
              Timeline
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
          </div>
        </div>
      </header>

      <div className="text-center w-full max-w-md relative z-10 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          {isLogin ? 'Login to Clawn Media Studio' : 'Create Account'}
        </h2>

        <div className="mb-4">
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError('');
            }}
            onKeyPress={handleKeyPress}
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md text-background bg-input border border-gray-600 outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
            disabled={isLoading}
          />

          {!isLogin && (
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              onKeyPress={handleKeyPress}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md text-background bg-input border border-gray-600 outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
              disabled={isLoading}
            />
          )}

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            onKeyPress={handleKeyPress}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md text-background bg-input border border-gray-600 outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
            disabled={isLoading}
          />

          {!isLogin && (
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError('');
              }}
              onKeyPress={handleKeyPress}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-md text-background bg-input border border-gray-600 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              disabled={isLoading}
            />
          )}
        </div>

        {error && (
          <p className="text-red-400 text-sm mb-4 text-left">
            {error}
          </p>
        )}

        {success && (
          <p className="text-green-400 text-sm mb-4 text-left">
            {success}
          </p>
        )}

        <Button
          onClick={isLogin ? handleLogin : handleSignUp}
          className="w-full px-4 py-3 mb-4"
          style={{
            background: '#f46b45',
            color: '#fff'
          }}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              {isLogin ? 'Logging in...' : 'Signing up...'}
            </div>
          ) : (
            isLogin ? 'Login' : 'Sign Up'
          )}
        </Button>

        {!isLogin && (
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-900 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>
        )}

        {!isLogin && (
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50"
              aria-label="Sign up with Google"
              disabled={isLoading}
            >
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
              </svg>
            </button>

            <button
              onClick={() => handleSocialLogin('Microsoft')}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50"
              aria-label="Sign up with Microsoft"
              disabled={isLoading}
            >
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
              </svg>
            </button>

            <button
              onClick={() => handleSocialLogin('Facebook')}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50"
              aria-label="Sign up with Facebook"
              disabled={isLoading}
            >
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
          </div>
        )}

        <div className="text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
              setSuccess('');
            }}
            className="text-purple-400 hover:text-purple-300 text-sm"
            disabled={isLoading}
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </button>
        </div>

        <p className="text-gray-400 text-xs mt-4">
          {isLogin ? 'Demo credentials: admin / password' : 'Create your account to get started'}
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 w-full absolute bottom-0 left-0 right-0">
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