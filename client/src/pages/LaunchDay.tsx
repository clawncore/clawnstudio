import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function LaunchDay() {
    const [, setLocation] = useLocation();

    // Set launch date to 20 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 20);

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [isLaunched, setIsLaunched] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate.getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                setIsLaunched(true);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, [launchDate]);

    return (
        <div className="w-full min-h-screen bg-background text-foreground overflow-y-auto relative">
            {/* Stars background */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, #0a0a1a 0%, #16213e 40%, #0f0f2e 70%, #000000 100%)',
                    zIndex: -1
                }}
            />

            {/* Responsive Transparent Header */}
            <header className="sticky top-0 z-50 bg-background bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                    <h1
                        className="text-xl font-semibold cursor-pointer"
                        onClick={() => setLocation('/')}
                    >
                        Clawn Media Studio
                    </h1>

                    <div className="flex gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setLocation('/')}
                        >
                            Home
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setLocation('/timeline')}
                        >
                            Timeline
                        </Button>
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold mb-8">Launch Day</h1>

                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Project Launch Countdown</h2>
                    <p className="text-gray-300 mb-6">
                        Get ready for the big reveal! Your project will be launched in:
                    </p>

                    {/* Countdown Timer */}
                    {isLaunched ? (
                        <div className="text-center py-12">
                            <h3 className="text-3xl font-bold text-green-400 mb-4">Project Launched!</h3>
                            <p className="text-xl text-gray-300">Your project is now live and ready for the world to see.</p>
                            <Button
                                className="mt-6"
                                onClick={() => console.log('View Project clicked')}
                            >
                                View Live Project
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
                                <div className="text-3xl font-bold text-purple-400">{timeLeft.days}</div>
                                <div className="text-gray-400 mt-2">Days</div>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
                                <div className="text-3xl font-bold text-purple-400">{timeLeft.hours}</div>
                                <div className="text-gray-400 mt-2">Hours</div>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
                                <div className="text-3xl font-bold text-purple-400">{timeLeft.minutes}</div>
                                <div className="text-gray-400 mt-2">Minutes</div>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
                                <div className="text-3xl font-bold text-purple-400">{timeLeft.seconds}</div>
                                <div className="text-gray-400 mt-2">Seconds</div>
                            </div>
                        </div>
                    )}

                    <div className="bg-gray-800 rounded-lg p-6 mb-8">
                        <h3 className="text-xl font-semibold mb-4">What Happens on Launch Day</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Final quality assurance and testing</li>
                            <li>Deployment to production environment</li>
                            <li>Performance optimization and monitoring setup</li>
                            <li>User access and permissions configuration</li>
                            <li>Launch documentation and user guides</li>
                        </ul>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">Post-Launch Support</h3>
                    <p className="text-gray-300 mb-4">
                        Our relationship doesn't end at launch. We provide ongoing support, maintenance, and optimization to ensure your project continues to succeed.
                    </p>

                    <div className="flex justify-between mt-8">
                        <Button
                            variant="outline"
                            onClick={() => setLocation('/project-templates')}
                        >
                            Previous: Project Templates
                        </Button>
                        <Button
                            onClick={() => setLocation('/')}
                        >
                            Back to Home
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}