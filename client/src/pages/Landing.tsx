import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { animate } from 'animejs';
import { Button } from '@/components/ui/button';

export default function Landing() {
  const [, setLocation] = useLocation();
  const circleRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<HTMLDivElement>(null);
  const squareRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
      <div className="text-center">
        <h1 
          className="text-[2.5rem] font-semibold mb-3"
          style={{ letterSpacing: '-0.02em' }}
          data-testid="heading-title"
        >
          Clawn Media Studio
        </h1>
        
        <p 
          className="text-[1.1rem] font-light mb-12"
          style={{ lineHeight: '1.6' }}
          data-testid="text-tagline"
        >
          Creative motion. Minimal flow.
        </p>

        <div className="flex justify-center items-center gap-6 mb-12">
          {/* Triangle */}
          <div ref={triangleRef} className="relative" data-testid="shape-triangle">
            <div 
              className="border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[86px]"
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
            className="rounded-[10px]"
            style={{ 
              width: '100px',
              height: '100px',
              background: '#f4a261'
            }}
            data-testid="shape-square"
          />

          {/* Circle */}
          <div 
            ref={circleRef} 
            className="rounded-full"
            style={{ 
              width: '100px',
              height: '100px',
              background: '#c77dff'
            }}
            data-testid="shape-circle"
          />
        </div>

        <Button
          onClick={() => setLocation('/auth')}
          className="px-8 py-3"
          style={{
            background: '#f46b45',
            color: '#fff'
          }}
          data-testid="button-get-started"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
