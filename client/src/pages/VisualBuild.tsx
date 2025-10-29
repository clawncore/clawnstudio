import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

export default function VisualBuild() {
    const [, setLocation] = useLocation();

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
                <h1 className="text-3xl font-semibold mb-8">Visual Build</h1>

                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Design Implementation</h2>
                    <p className="text-gray-300 mb-4">
                        During the visual build phase, we bring the approved concepts to life. This is where design becomes tangible as we create detailed visual elements and layouts.
                    </p>

                    {/* Interactive Visual Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-105">
                            <div className="h-40 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                                <div className="text-4xl">🎨</div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold mb-2">Design Mockups</h4>
                                <p className="text-gray-400 text-sm">High-fidelity visual representations of your project</p>
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-105">
                            <div className="h-40 bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
                                <div className="text-4xl">📱</div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold mb-2">Interactive Prototypes</h4>
                                <p className="text-gray-400 text-sm">Clickable models to test user experience</p>
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-105">
                            <div className="h-40 bg-gradient-to-br from-pink-900 to-red-900 flex items-center justify-center">
                                <div className="text-4xl">🧩</div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold mb-2">Component Systems</h4>
                                <p className="text-gray-400 text-sm">Reusable design elements for consistency</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Our Visual Process</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-105">
                                <div className="h-40 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                                    <div className="text-4xl">🎨</div>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2">Design Mockups</h4>
                                    <p className="text-gray-400 text-sm">High-fidelity visual representations of your project</p>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-105">
                                <div className="h-40 bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
                                    <div className="text-4xl">📱</div>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2">Interactive Prototypes</h4>
                                    <p className="text-gray-400 text-sm">Clickable models to test user experience</p>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-105">
                                <div className="h-40 bg-gradient-to-br from-pink-900 to-red-900 flex items-center justify-center">
                                    <div className="text-4xl">🧩</div>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2">Component Systems</h4>
                                    <p className="text-gray-400 text-sm">Reusable design elements for consistency</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 mt-6">What We Create</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>High-fidelity design mockups</li>
                        <li>Interactive prototypes</li>
                        <li>Visual asset libraries</li>
                        <li>Component design systems</li>
                        <li>Responsive design specifications</li>
                    </ul>

                    {/* Quality Assurance Section with Visual Elements */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
                        <p className="text-gray-300 mb-4">
                            We conduct thorough design reviews to ensure visual consistency, accessibility standards, and brand alignment before moving to the next phase.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                        <span className="text-white font-bold">✓</span>
                                    </div>
                                    <h4 className="text-lg font-semibold">Visual Consistency</h4>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    Ensuring all design elements follow established guidelines and maintain brand identity throughout the project.
                                </p>
                            </div>

                            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                                        <span className="text-white font-bold">♿</span>
                                    </div>
                                    <h4 className="text-lg font-semibold">Accessibility Standards</h4>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    Implementing WCAG guidelines to ensure your project is usable by everyone, including those with disabilities.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between mt-8">
                        <Button
                            variant="outline"
                            onClick={() => setLocation('/concept-design')}
                        >
                            Previous: Concept Design
                        </Button>
                        <Button
                            onClick={() => setLocation('/project-templates')}
                        >
                            Next: Project Templates
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}