import { useEffect, useState } from 'react';
import {
    BarChart3,
    Shield,
    Type,
    Settings,
    FileText,
    RefreshCw,
    Users,
    Package,
    FileCheck,
    CheckCircle,
    Send
} from 'lucide-react';

interface VisibilityState {
    hero: boolean;
    intro: boolean;
    services: boolean;
    'why-brick2tech': boolean;
    process: boolean;
    cta: boolean;
}

const LogoDesign = () => {
    const [isVisible, setIsVisible] = useState<VisibilityState>({
        hero: false,
        intro: false,
        services: false,
        'why-brick2tech': false,
        process: false,
        cta: false
    });

    const observeElement = (id: keyof VisibilityState) => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(prev => ({ ...prev, [id]: entry.isIntersecting }));
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        const element = document.getElementById(id);
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    };

    useEffect(() => {
        const cleanups = [
            'hero',
            'intro',
            'services',
            'why-brick2tech',
            'process',
            'cta'
        ].map(id => observeElement(id as keyof VisibilityState));

        return () => cleanups.forEach(cleanup => cleanup && cleanup());
    }, []);

    const services = [
        {
            icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
            title: "Custom Logo Creation",
            description: "Unique, memorable logos tailored to your brand identity and values."
        },
        {
            icon: <Shield className="w-12 h-12 text-blue-500" />,
            title: "Brand Identity Development",
            description: "Comprehensive brand systems that tell your story consistently."
        },
        {
            icon: <Type className="w-12 h-12 text-blue-500" />,
            title: "Typography & Congranny",
            description: "Sophisticated typography solutions for enhanced brand communication."
        },
        {
            icon: <Settings className="w-12 h-12 text-blue-500" />,
            title: "Typography & Iconography",
            description: "Custom iconography and typographic systems for your brand."
        },
        {
            icon: <FileText className="w-12 h-12 text-blue-500" />,
            title: "Versatile Formats Guidelines",
            description: "Comprehensive brand guidelines for consistent application."
        },
        {
            icon: <RefreshCw className="w-12 h-12 text-blue-500" />,
            title: "Logo Redesign & Refresh",
            description: "Modernizing existing logos while preserving brand equity."
        }
    ];

    const whyFeatures = [
        {
            icon: <Users className="w-16 h-16 text-blue-400" />,
            title: "Top-tier Composition",
            subtitle: "Expert Team",
            description: "Our highly experienced design team brings creativity and technical expertise to every project."
        },
        {
            icon: <Package className="w-16 h-16 text-blue-400" />,
            title: "Layout/Space Gamelte",
            subtitle: "Design Excellence",
            description: "Meticulous attention to layout, spacing, and visual hierarchy in every design."
        },
        {
            icon: <FileCheck className="w-16 h-16 text-blue-400" />,
            title: "Legislation Ablezum",
            subtitle: "Legal Compliance",
            description: "Ensuring all designs meet industry standards and legal requirements."
        },
        {
            icon: <CheckCircle className="w-16 h-16 text-blue-400" />,
            title: "Trusted Client Content",
            subtitle: "Proven Results",
            description: "Delivering exceptional results that exceed client expectations consistently."
        },
        {
            icon: <Send className="w-16 h-16 text-blue-400" />,
            title: "Termination of",
            subtitle: "Project Completion",
            description: "Professional project management ensuring timely delivery and client satisfaction."
        }
    ];

    const processSteps = [
        {
            number: "1",
            title: "Ray White Logo Ganhi",
            subtitle: "Discovery Phase",
            description: "Understanding your vision, values, and target audience through comprehensive research."
        },
        {
            number: "2",
            title: "Conkut loosing A Syclurf",
            subtitle: "Concept Development",
            description: "Creating initial concepts and exploring different design directions."
        },
        {
            number: "3",
            title: "Sophisticated Client SIXY",
            subtitle: "Design Refinement",
            description: "Refining chosen concepts with sophisticated design techniques and client feedback."
        },
        {
            number: "5",
            title: "Detailed Recommendation",
            subtitle: "Final Presentation",
            description: "Presenting the final design with detailed recommendations and implementation guidelines."
        },
        {
            number: "6",
            title: "Scalah impossible to",
            subtitle: "Delivery & Support",
            description: "Delivering final assets and providing ongoing support for brand implementation."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center py-24" style={{ backgroundImage: "url('/images/logo-bg.png')" }}>
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center transition-all duration-1000">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                        Logo Design Services by <span className="text-blue-500">Brick2Tech</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light mb-6">
                        Crafting Unique Identities That Define Your Brand
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                        Explore Our Work
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="animate-bounce">
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Introduction Section */}
            <section
                id="intro"
                className="py-20 px-4 bg-white"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div
                        className={`transition-all duration-1000 delay-200 ${isVisible.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                            Introduction
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            A logo is more than just a graphic—it’s the face of your brand, representing its values, vision, and personality. At Brick2Tech, we are recognized as the best logo design company in Hyderabad, offering creative and customized logo solutions that help businesses establish a strong and memorable brand identity. </p>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Whether you’re a startup launching a new venture or an established brand looking to refresh your image, our expert designers combine creativity, strategy, and industry insights to deliver logos that speak volumes and leave a lasting impression.
                        </p >
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section
                id="services"
                className="py-20 px-4 bg-gray-50"
            >
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-16 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Services Offered
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible.services
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-2xl mb-6">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Brick2Tech Section */}
            <section
                id="why-brick2tech"
                className="py-20 px-4 bg-white"
            >
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-16 transition-all duration-1000 ${isVisible['why-brick2tech'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Why Brick2Tech
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {whyFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className={`text-center transition-all duration-700 transform ${isVisible['why-brick2tech']
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="inline-flex items-center justify-center mb-6 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <h4 className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                                    {feature.subtitle}
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional Logo Design Process */}
            <section
                id="process"
                className="py-20 px-4 bg-gray-50"
            >
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-16 transition-all duration-1000 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Professional Logo Design
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${isVisible.process
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white text-2xl font-bold rounded-full mb-4">
                                        {step.number}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {step.title}
                                    </h3>
                                    <h4 className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                                        {step.subtitle}
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                id="cta"
                className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/20"></div>
                <div
                    className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        Tenets of Professional Logo Design
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Ready to transform your brand with exceptional design? Let's create something extraordinary together.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                        Call to Action
                    </button>
                </div>
            </section>

            <style>{`
        @keyframes animate-float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        .animate-float {
          animation: animate-float ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default LogoDesign;