import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

export default function Pricing() {
    const [, setLocation] = useLocation();

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

    // Additional features (add-ons)
    const addOns = [
        {
            id: 1,
            title: "Event Media & Shoots",
            description: "Professional photo and video sessions for birthdays, reunions, farewells, or any personal event. Includes drone coverage, cinematic highlights, and color-graded edits."
        },
        {
            id: 2,
            title: "Personalized Reels & Short Films",
            description: "Cinematic storytelling tailored for personal moments or social media promos. Perfect for gifts, proposals, or creative showcases."
        },
        {
            id: 3,
            title: "QR Gift Delivery",
            description: "Custom QR cards linking directly to digital gifts or personalized pages. Ideal for surprise reveals, invitations, or keepsakes."
        }
    ];

    return (
        <div className="w-full min-h-screen bg-background text-foreground overflow-y-auto relative flex flex-col">
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

            <div className="max-w-6xl mx-auto px-4 py-8 flex-grow">
                <h1 className="text-3xl font-semibold mb-8 text-center">Pricing</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                            <h4 className="text-lg text-purple-400 mb-4">{pkg.subtitle}</h4>
                            <div className="text-3xl font-bold text-purple-400 mb-4">{pkg.price}</div>
                            <p className="mb-4 text-gray-300">{pkg.description}</p>

                            <ul className="mb-6 text-left space-y-2">
                                {pkg.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-purple-400 mr-2">•</span>
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {pkg.addons && (
                                <p className="text-sm text-gray-400 mb-2 italic">{pkg.addons}</p>
                            )}

                            {pkg.delivery && (
                                <p className="text-sm text-gray-400 mb-4 italic">{pkg.delivery}</p>
                            )}

                            <p className="font-semibold text-purple-300">Best for: {pkg.bestFor}</p>
                        </div>
                    ))}
                </div>

                {/* Additional Features (Add-Ons) Section */}
                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Additional Features (Add-Ons)</h2>
                    <p className="text-gray-300 mb-8 text-center">
                        We also offer additional services that can be added to any package to enhance your experience:
                    </p>

                    <div className="space-y-6">
                        {addOns.map((addon) => (
                            <div
                                key={addon.id}
                                className="bg-gray-800 rounded-lg p-5 border border-gray-700"
                            >
                                <h3 className="text-lg font-semibold mb-3 text-purple-400">{addon.id}. {addon.title}</h3>
                                <p className="text-gray-300">{addon.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-400 italic">
                            Add-ons can be purchased separately or added to any package at an additional cost.
                            Contact us for pricing details on add-on services.
                        </p>
                    </div>
                </div>
            </div>

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
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.196-4.354 2.618-6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.358-.2 6.78-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
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