import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

export default function ProjectTemplates() {
    const [, setLocation] = useLocation();

    // Template data organized by package level
    const templateCategories = [
        {
            id: 1,
            name: "Basic Templates",
            description: "Simple, elegant templates for quick projects",
            templates: [
                {
                    id: 1,
                    name: "Birthday Template",
                    description: "Celebrate special moments with our beautifully designed birthday template",
                    image: "/placeholder-template-image-1.jpg" // Placeholder - will be replaced with actual URLs
                },
                {
                    id: 2,
                    name: "Apology Template",
                    description: "Express heartfelt sentiments with our thoughtful apology template",
                    image: "/placeholder-template-image-2.jpg" // Placeholder - will be replaced with actual URLs
                }
            ]
        },
        {
            id: 2,
            name: "Premium Templates",
            description: "Enhanced templates with more features and customization options",
            templates: [
                {
                    id: 3,
                    name: "Anniversary Template",
                    description: "Commemorate milestones with our premium anniversary design",
                    image: "/placeholder-template-image-3.jpg"
                },
                {
                    id: 4,
                    name: "Friendship Template",
                    description: "Celebrate bonds with our friendship-themed template",
                    image: "/placeholder-template-image-4.jpg"
                },
                {
                    id: 5,
                    name: "Congratulations Template",
                    description: "Mark achievements with our vibrant congratulations template",
                    image: "/placeholder-template-image-5.jpg"
                },
                {
                    id: 6,
                    name: "Celebration Template",
                    description: "Versatile template for various celebratory occasions",
                    image: "/placeholder-template-image-6.jpg"
                }
            ]
        },
        {
            id: 3,
            name: "Pro Templates",
            description: "Advanced templates with full customization and premium features",
            templates: [
                {
                    id: 7,
                    name: "Valentine Template",
                    description: "Romantic design for Valentine's Day celebrations",
                    image: "/placeholder-template-image-7.jpg"
                },
                {
                    id: 8,
                    name: "Graduation Template",
                    description: "Commemorate academic achievements with our graduation template",
                    image: "/placeholder-template-image-8.jpg"
                },
                {
                    id: 9,
                    name: "Tribute Template",
                    description: "Honor special people with our tribute template",
                    image: "/placeholder-template-image-9.jpg"
                },
                {
                    id: 10,
                    name: "Custom Pro Design",
                    description: "Fully customizable template for unique projects",
                    image: "/placeholder-template-image-10.jpg"
                },
                {
                    id: 11,
                    name: "Professional Portfolio",
                    description: "Showcase work with our professional portfolio template",
                    image: "/placeholder-template-image-11.jpg"
                },
                {
                    id: 12,
                    name: "Event Showcase",
                    description: "Highlight events with our comprehensive showcase template",
                    image: "/placeholder-template-image-12.jpg"
                }
            ]
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
                <h1 className="text-3xl font-semibold mb-8">Project Templates</h1>

                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Template Development</h2>
                    <p className="text-gray-300 mb-4">
                        In this phase, we create reusable templates and frameworks that will serve as the foundation for your project.
                        These templates ensure consistency and efficiency throughout development.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Template Categories</h3>
                    <p className="text-gray-300 mb-6">
                        Our templates are organized into three categories based on complexity and features.
                        Each template is designed to help you create stunning digital experiences quickly and efficiently.
                    </p>

                    {/* Template Categories */}
                    <div className="space-y-12">
                        {templateCategories.map((category) => (
                            <div key={category.id}>
                                <h4 className="text-lg font-semibold mb-4 text-purple-400">{category.name}</h4>
                                <p className="text-gray-400 mb-6">{category.description}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.templates.map((template) => (
                                        <div
                                            key={template.id}
                                            className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer"
                                            onClick={() => console.log(`Template ${template.name} clicked`)}
                                        >
                                            <div className="h-40 bg-gray-700 flex items-center justify-center">
                                                <div className="bg-gray-600 border-2 border-dashed rounded-xl w-16 h-16" />
                                            </div>
                                            <div className="p-4">
                                                <h5 className="font-semibold text-lg mb-2">{template.name}</h5>
                                                <p className="text-gray-400 text-sm">{template.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-3 mt-8">Benefits</h3>
                    <p className="text-gray-300 mb-4">
                        Using templates streamlines our workflow, ensures quality consistency, and accelerates delivery
                        while maintaining creative flexibility. You can customize any template to match your specific needs.
                    </p>

                    <div className="flex justify-between mt-8">
                        <Button
                            variant="outline"
                            onClick={() => setLocation('/visual-build')}
                        >
                            Previous: Visual Build
                        </Button>
                        <Button
                            onClick={() => setLocation('/launch-day')}
                        >
                            Next: Launch Day
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}