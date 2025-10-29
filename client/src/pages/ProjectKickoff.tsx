import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

export default function ProjectKickoff() {
    const [, setLocation] = useLocation();

    // Services data for pictorial representation
    const services = [
        {
            id: 1,
            title: "Birthday Celebrations",
            description: "Create memorable birthday experiences with our beautifully designed templates and personalized messages",
            icon: "🎂"
        },
        {
            id: 2,
            title: "Apology Expressions",
            description: "Craft heartfelt apologies with our thoughtful templates that convey sincerity and emotion",
            icon: "💬"
        },
        {
            id: 3,
            title: "Anniversary Milestones",
            description: "Commemorate special anniversaries with elegant designs that celebrate your journey together",
            icon: "💍"
        },
        {
            id: 4,
            title: "Friendship Tributes",
            description: "Honor meaningful friendships with our dedicated friendship-themed templates",
            icon: "🤝"
        },
        {
            id: 5,
            title: "Graduation Achievements",
            description: "Mark academic accomplishments with our celebratory graduation templates",
            icon: "🎓"
        },
        {
            id: 6,
            title: "Custom Storytelling",
            description: "Bring any story to life with our fully customizable templates for unique occasions",
            icon: "📖"
        }
    ];

    // Package data
    const packages = [
        {
            id: 1,
            name: "Basic Package",
            subtitle: "Moments That Matter",
            description: "For quick, simple, and heartfelt web gifts.",
            price: "₹199",
            features: [
                "2 ready templates: Birthday 🎂 and Apology 💬",
                "Up to 5 photos or 1 short video",
                "Basic anime.js motion and transitions",
                "Custom message + background music",
                "Shareable link or QR code",
                "1-day delivery"
            ],
            bestFor: "Small surprises, instant personalized gifts"
        },
        {
            id: 2,
            name: "Premium Package",
            subtitle: "The Story Set",
            description: "For deeper, emotional storytelling through motion and music.",
            price: "₹599",
            features: [
                "4 themed templates: 🎉 Birthday • ❤️ Anniversary • 🤝 Friendship • 💫 Congratulations",
                "Up to 15 photos + 3 videos",
                "Interactive scroll or timeline layout",
                "Background music synced with transitions",
                "Custom colors, optional subdomain (yourname.clawn.studio)",
                "View analytics + QR gift card"
            ],
            bestFor: "People who want their memories to play like a mini story",
            addons: "Add-ons: voice narration, soundtrack, or extra video slots"
        },
        {
            id: 3,
            name: "Pro Package",
            subtitle: "The Dream Set",
            description: "Full cinematic experience — design, shoot, and story combined.",
            price: "₹1499",
            features: [
                "6 premium templates: 💖 Valentine • 🎂 Personalized Birthday • 💍 Anniversary • 🎓 Graduation • 🎤 Tribute • ✨ Custom Pro Design",
                "Drone & camera shoot integration",
                "4K cinematic video editing + voiceovers",
                "Custom React web experience",
                "Branded domain + project dashboard",
                "Physical QR gift box"
            ],
            bestFor: "Once-in-a-lifetime events and creative showcase projects",
            delivery: "Priority delivery (5–7 days, express available)"
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
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setLocation('/contact')}
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Welcome to Clawn Media Studio
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Transform your precious moments into timeless digital experiences
                    </p>
                </div>

                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Project Kickoff</h2>
                            <p className="text-gray-300 mb-4">
                                At Clawn Media Studio, we specialize in creating meaningful digital experiences that capture life's most precious moments.
                                Our Project Kickoff is the first step in our collaborative journey to bring your vision to life through creative storytelling and innovative design.
                            </p>
                            <p className="text-gray-300 mb-6">
                                During this initial phase, we'll get to know you, understand your goals, and establish the foundation for a successful project.
                                This is where we align our creative expertise with your unique story to create something truly special.
                            </p>
                            <div className="bg-purple-900 bg-opacity-30 border border-purple-700 rounded-lg p-4">
                                <h3 className="text-lg font-semibold mb-2 text-purple-300">What to Expect</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                    <li>Initial consultation to understand your project goals</li>
                                    <li>Review of your creative brief and reference materials</li>
                                    <li>Timeline and milestone planning</li>
                                    <li>Team introductions and role assignments</li>
                                </ul>
                            </div>
                        </div>

                        {/* Video Player Section */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                                {/* Video placeholder - replace with actual video player */}
                                <div className="aspect-video bg-gray-700 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-5xl mb-3">▶️</div>
                                        <p className="text-gray-300 text-lg font-medium">Project Introduction Video</p>
                                        <p className="text-gray-500 text-sm mt-2">Click to play</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm mt-2">
                                Watch this video to understand our complete project workflow and what to expect during collaboration.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What We Offer Section */}
                <div className="mb-12">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4 text-white">What We Offer</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Our creative services are designed to transform your ideas into memorable digital experiences
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                            >
                                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                                <p className="text-gray-400 text-center">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-8 border border-purple-700 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Create Something Special?</h3>
                        <p className="text-lg mb-6 max-w-2xl mx-auto">
                            Let us help you turn your moments into lasting memories with our expertly crafted digital experiences
                        </p>
                        <Button
                            onClick={() => setLocation('/contact')}
                            className="px-8 py-3 text-lg bg-white text-purple-900 hover:bg-gray-200"
                        >
                            Get in Touch
                        </Button>
                    </div>
                </div>

                {/* Service Packages Section */}
                <div className="mb-12">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4 text-white">Our Service Packages</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Choose the perfect package to bring your vision to life
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 flex flex-col"
                            >
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                                    <h4 className="text-lg text-purple-400 mb-3">{pkg.subtitle}</h4>
                                    <div className="text-3xl font-bold text-purple-400 mb-3">{pkg.price}</div>
                                    <p className="text-gray-300 mb-4">{pkg.description}</p>
                                </div>

                                <div className="flex-grow">
                                    <ul className="mb-6 space-y-2">
                                        {pkg.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-purple-400 mr-2">✓</span>
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {pkg.addons && (
                                        <p className="text-sm text-gray-400 mb-3 italic">{pkg.addons}</p>
                                    )}

                                    {pkg.delivery && (
                                        <p className="text-sm text-gray-400 mb-4 italic">{pkg.delivery}</p>
                                    )}
                                </div>

                                <div className="mt-auto">
                                    <p className="font-semibold text-purple-300 mb-4">Best for: {pkg.bestFor}</p>
                                    <Button
                                        onClick={() => setLocation('/contact')}
                                        className="w-full py-2"
                                        style={{
                                            background: '#f46b45',
                                            color: '#fff'
                                        }}
                                    >
                                        Choose Package
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Steps Section */}
                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-8 text-center">
                    <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
                    <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                        After the kickoff, we move into the Concept Design phase where we'll begin developing initial ideas and creative directions for your project.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            variant="outline"
                            onClick={() => setLocation('/timeline')}
                            className="px-6 py-3"
                        >
                            Back to Timeline
                        </Button>
                        <Button
                            onClick={() => setLocation('/concept-design')}
                            className="px-6 py-3"
                            style={{
                                background: '#f46b45',
                                color: '#fff'
                            }}
                        >
                            Next: Concept Design
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}