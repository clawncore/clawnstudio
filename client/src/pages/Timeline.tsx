import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { Clapperboard, Lightbulb, Brush, Music, Rocket } from 'lucide-react';

const events = [
  { id: 1, Icon: Clapperboard, text: 'Project Kickoff' },
  { id: 2, Icon: Lightbulb, text: 'Concept Design' },
  { id: 3, Icon: Brush, text: 'Visual Build' },
  { id: 4, Icon: Music, text: 'Motion Integration' },
  { id: 5, Icon: Rocket, text: 'Launch Day' }
];

export default function Timeline() {
  const [, setLocation] = useLocation();
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('auth') === 'true';
    if (!isAuthenticated) {
      setLocation('/auth');
      return;
    }

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
  }, [setLocation]);

  return (
    <div className="w-full min-h-screen bg-background text-foreground p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-[2.5rem] font-semibold mb-8"
          style={{ letterSpacing: '-0.02em' }}
          data-testid="heading-timeline"
        >
          Event Timeline
        </h1>

        <div className="flex flex-col gap-8">
          {events.map((event, index) => {
            const Icon = event.Icon;
            return (
              <div
                key={event.id}
                ref={el => eventRefs.current[index] = el}
                className="rounded-lg p-4 text-[1.1rem] font-normal flex items-center gap-3"
                style={{
                  background: '#222',
                  borderLeft: '4px solid #f46b45',
                  borderRadius: '8px'
                }}
                data-testid={`event-card-${event.id}`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" style={{ color: '#f46b45' }} />
                <span>{event.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
