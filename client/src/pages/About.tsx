import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

export default function About() {
    const [, setLocation] = useLocation();

    return (
        <div className="w-full min-h-screen text-foreground overflow-y-auto relative flex flex-col">
            {/* Stars background */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, #0a0a1a 0%, #16213e 40%, #0f0f2e 70%, #000000 100%)',
                    zIndex: -1
                }}
            />

            {/* Responsive Transparent Header */}
            <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
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

            <div className="max-w-6xl mx-auto px-4 py-8 flex-grow">
                <h1 className="text-3xl font-semibold mb-8 text-center">About Clawn Media Studio</h1>

                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
                    {/* Introduction */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                        <p className="text-gray-300 mb-4">
                            Clawn Media Studio is a creative digital experience agency dedicated to transforming everyday emotions
                            into timeless digital memories. We specialize in crafting personalized gifts, event media, and short films
                            that capture the essence of life's most precious moments.
                        </p>
                        <p className="text-gray-300">
                            Our team of passionate designers, developers, and storytellers work together to create meaningful
                            digital experiences that resonate with your audience and leave a lasting impression.
                        </p>
                    </div>

                    {/* Vision Section */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                            <p className="text-xl text-gray-300 italic">
                                "To turn everyday emotions into timeless digital experiences by blending creativity, technology, and storytelling."
                            </p>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-300 mb-4">
                            Our mission is to bridge emotion and innovation through personalized digital gifts, event media,
                            and short films with authenticity, design, and heart. We strive to:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                            <li>Create meaningful connections between people through digital storytelling</li>
                            <li>Deliver exceptional quality in every project we undertake</li>
                            <li>Push creative boundaries while maintaining emotional authenticity</li>
                            <li>Provide personalized solutions tailored to each client's unique needs</li>
                            <li>Continuously innovate and evolve with emerging technologies</li>
                        </ul>
                    </div>

                    {/* Values Section */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                                <h3 className="text-lg font-semibold mb-2 text-purple-400">Creativity</h3>
                                <p className="text-gray-300">
                                    We believe in pushing boundaries and thinking outside the box to create unique experiences.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                                <h3 className="text-lg font-semibold mb-2 text-purple-400">Authenticity</h3>
                                <p className="text-gray-300">
                                    We stay true to our clients' stories and values, ensuring genuine emotional connections.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                                <h3 className="text-lg font-semibold mb-2 text-purple-400">Excellence</h3>
                                <p className="text-gray-300">
                                    We strive for the highest quality in every aspect of our work, from concept to delivery.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                                <h3 className="text-lg font-semibold mb-2 text-purple-400">Collaboration</h3>
                                <p className="text-gray-300">
                                    We believe in working closely with our clients to bring their vision to life.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                        <p className="text-gray-300 mb-4">
                            Our diverse team of creative professionals brings together expertise in design, development,
                            storytelling, and technology. Each member is passionate about creating meaningful digital experiences
                            that make a difference in people's lives.
                        </p>
                        <p className="text-gray-300">
                            From concept artists to motion designers, from developers to project managers, we collaborate
                            seamlessly to deliver exceptional results that exceed expectations.
                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center py-6">
                        <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h2>
                        <p className="text-gray-300 mb-6">
                            Let's create something amazing together. Get in touch with us to discuss your project.
                        </p>
                        <Button
                            onClick={() => setLocation('/timeline')}
                            className="px-6 py-3 text-lg"
                            style={{
                                background: '#f46b45',
                                color: '#fff'
                            }}
                        >
                            Get Started
                        </Button>
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
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
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