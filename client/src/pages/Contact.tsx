import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { animate } from 'animejs';

export default function Contact() {
    const [, setLocation] = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const starsRef = useRef<HTMLDivElement>(null);

    // Social media links (these should be replaced with actual links)
    const socialLinks = {
        email: 'mailto:contact@clawnmediastudio.com',
        whatsapp: 'https://wa.me/918790813536?countryCode=91&countryName=IN&phoneNumber=8790813536',
        facebook: 'https://www.facebook.com/profile.php?id=61581383862272',
        instagram: 'https://www.instagram.com/eagle_s_call/',
        twitter: 'https://x.com/Eagle_s_call',
        linkedin: 'https://linkedin.com/company/clawnmediastudio',
        youtube: 'https://www.youtube.com/channel/UCm-Xk6NpDL2iPeVFoYg-6qg',
        pinterest: 'https://pinterest.com/clawnmediastudio'
    };

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitError('');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // In a real application, you would send the form data to your backend here
            console.log('Form submitted:', formData);

            setSubmitSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        } catch (error) {
            setSubmitError('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
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
                            onClick={() => setLocation('/')}
                        >
                            Home
                        </Button>
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
                            onClick={() => setLocation('/timeline')}
                        >
                            Timeline
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-8 relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-white">Get In Touch</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have questions or want to work with us? Reach out through any of our channels below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                        <h2 className="text-2xl font-semibold mb-6 text-white">Send us a message</h2>

                        {submitSuccess && (
                            <div className="mb-6 p-4 bg-green-900 bg-opacity-50 border border-green-700 rounded-lg text-green-300">
                                Thank you for your message! We'll get back to you soon.
                            </div>
                        )}

                        {submitError && (
                            <div className="mb-6 p-4 bg-red-900 bg-opacity-50 border border-red-700 rounded-lg text-red-300">
                                {submitError}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-md bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'
                                        } text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                    disabled={isSubmitting}
                                />
                                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-md bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'
                                        } text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                    disabled={isSubmitting}
                                />
                                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-md bg-gray-800 border ${errors.subject ? 'border-red-500' : 'border-gray-700'
                                        } text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                    disabled={isSubmitting}
                                />
                                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-md bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'
                                        } text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                    disabled={isSubmitting}
                                ></textarea>
                                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                            </div>

                            <Button
                                type="submit"
                                className="w-full px-4 py-3"
                                style={{
                                    background: '#f46b45',
                                    color: '#fff'
                                }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Sending...
                                    </div>
                                ) : (
                                    'Send Message'
                                )}
                            </Button>
                        </form>
                    </div>

                    {/* Contact Information & Social Media */}
                    <div>
                        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-8">
                            <h2 className="text-2xl font-semibold mb-6 text-white">Contact Information</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium text-white mb-2">Email Us</h3>
                                    <p className="text-gray-400">For general inquiries and support</p>
                                    <a
                                        href={socialLinks.email}
                                        className="text-purple-400 hover:text-purple-300 mt-1 inline-block"
                                    >
                                        contact@clawnmediastudio.com
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-white mb-2">WhatsApp</h3>
                                    <p className="text-gray-400">For quick responses and instant chat</p>
                                    <a
                                        href={socialLinks.whatsapp}
                                        className="text-purple-400 hover:text-purple-300 mt-1 inline-block"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Chat with us on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                            <h2 className="text-2xl font-semibold mb-6 text-white">Follow Us</h2>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <a
                                    href={socialLinks.facebook}
                                    className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-300 text-sm">Facebook</span>
                                </a>

                                <a
                                    href={socialLinks.instagram}
                                    className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-300 text-sm">Instagram</span>
                                </a>

                                <a
                                    href={socialLinks.twitter}
                                    className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-300 text-sm">X (Twitter)</span>
                                </a>

                                <a
                                    href={socialLinks.linkedin}
                                    className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-300 text-sm">LinkedIn</span>
                                </a>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                                <a
                                    href={socialLinks.youtube}
                                    className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-300 text-sm">YouTube</span>
                                </a>

                                <a
                                    href={socialLinks.pinterest}
                                    className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-300 text-sm">Pinterest</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

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