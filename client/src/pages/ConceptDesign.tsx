import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

export default function ConceptDesign() {
    const [, setLocation] = useLocation();

    // Concept timeline data
    const conceptTimeline = [
        {
            id: 1,
            title: "Creative Vision",
            description: "We begin by understanding your unique story and creative aspirations.",
            icon: "🌟",
            color: "bg-purple-500"
        },
        {
            id: 2,
            title: "Concept Exploration",
            description: "Our team explores multiple creative directions and design possibilities.",
            icon: "🔍",
            color: "bg-blue-500"
        },
        {
            id: 3,
            title: "Design Development",
            description: "We refine the chosen concept into detailed visual designs and layouts.",
            icon: "🎨",
            color: "bg-pink-500"
        },
        {
            id: 4,
            title: "Motion Integration",
            description: "We add dynamic motion and interactive elements to bring concepts to life.",
            icon: "🎬",
            color: "bg-yellow-500"
        },
        {
            id: 5,
            title: "Final Presentation",
            description: "We present polished concepts ready for your feedback and approval.",
            icon: "✨",
            color: "bg-green-500"
        }
    ];

    // Studio values
    const studioValues = [
        {
            title: "Creative Excellence",
            description: "We strive for the highest quality in every visual element we create.",
            icon: "🏆"
        },
        {
            title: "Emotional Connection",
            description: "Our designs focus on creating meaningful connections with your audience.",
            icon: "❤️"
        },
        {
            title: "Innovation",
            description: "We embrace cutting-edge techniques to deliver unique experiences.",
            icon: "🚀"
        },
        {
            title: "Collaboration",
            description: "Your vision guides our process through continuous collaboration.",
            icon: "🤝"
        }
    ];

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
                <h1 className="text-3xl font-semibold mb-8">Concept Design</h1>

                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Our Creative Process</h2>
                    <p className="text-gray-300 mb-6">
                        At Clawn Media Studio, we believe that great design begins with a deep understanding of your vision.
                        Our concept design phase transforms ideas into tangible creative directions through exploration,
                        experimentation, and refinement.
                    </p>

                    {/* Studio Values Section */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold mb-6 text-center">What Defines Clawn Media Studio</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {studioValues.map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-purple-500 transition-all duration-300 text-center"
                                >
                                    <div className="text-3xl mb-3">{value.icon}</div>
                                    <h4 className="text-lg font-semibold mb-2 text-white">{value.title}</h4>
                                    <p className="text-gray-400 text-sm">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Concept Timeline Visualization */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold mb-6 text-center">Our Concept Design Journey</h3>
                        <p className="text-gray-300 mb-8 text-center">
                            We guide you through a structured process to ensure your vision becomes a compelling reality.
                        </p>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>

                            {/* Timeline items */}
                            <div className="space-y-12">
                                {conceptTimeline.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        {/* Timeline dot and icon */}
                                        <div className="relative z-10 flex items-center justify-center w-full md:w-1/2 mb-4 md:mb-0">
                                            <div className={`${index % 2 === 0 ? 'md:pl-8 md:justify-end' : 'md:pr-8 md:justify-start'} w-full flex`}>
                                                <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-lg`}>
                                                    {item.icon}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content card */}
                                        <div className="w-full md:w-1/2">
                                            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                                                <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
                                                <p className="text-gray-400">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Visual Concept Examples */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold mb-6 text-center">Visual Concept Examples</h3>
                        <p className="text-gray-300 mb-8 text-center">
                            Our approach combines artistic vision with technical expertise to create memorable experiences.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                                <div className="h-40 bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
                                    <div className="text-4xl">🎨</div>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2">Mood Boards</h4>
                                    <p className="text-gray-400 text-sm">Visual references to establish aesthetic direction</p>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                                <div className="h-40 bg-gradient-to-br from-pink-900 to-purple-900 flex items-center justify-center">
                                    <div className="text-4xl">📐</div>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2">Layout Concepts</h4>
                                    <p className="text-gray-400 text-sm">Initial design compositions and structure ideas</p>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                                <div className="h-40 bg-gradient-to-br from-blue-900 to-green-900 flex items-center justify-center">
                                    <div className="text-4xl">🎬</div>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2">Motion Previews</h4>
                                    <p className="text-gray-400 text-sm">Animated concepts showing interactive elements</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 mt-6">What We Deliver</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Mood boards and visual references</li>
                        <li>Initial design concepts and style directions</li>
                        <li>Color palettes and typography explorations</li>
                        <li>User experience flow diagrams</li>
                        <li>Creative brief documentation</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Collaboration Process</h3>
                    <p className="text-gray-300 mb-4">
                        We believe in collaborative design. Your feedback is crucial at this stage as we refine concepts and move toward a finalized creative direction.
                    </p>

                    <div className="flex justify-between mt-8">
                        <Button
                            variant="outline"
                            onClick={() => setLocation('/project-kickoff')}
                        >
                            Previous: Project Kickoff
                        </Button>
                        <Button
                            onClick={() => setLocation('/visual-build')}
                        >
                            Next: Visual Build
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}