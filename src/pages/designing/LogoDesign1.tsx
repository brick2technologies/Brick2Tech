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
import { motion, Transition } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

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

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const floatingAnimation = {
        animate: {
            y: [-20, 20, -20],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1], // or use a cubic bezier array
                repeatType: "loop",
            } as Transition,
        },
    };

    const services = [
        {
            icon: <BarChart3 className="w-8 h-8 text-white" />,
            title: "Custom Logo Creation",
            description: "Unique, memorable logos tailored to your brand identity and values."
        },
        {
            icon: <Shield className="w-8 h-8 text-white" />,
            title: "Brand Identity Development",
            description: "Comprehensive brand systems that tell your story consistently."
        },
        {
            icon: <Type className="w-8 h-8 text-white" />,
            title: "Typography & Congranny",
            description: "Sophisticated typography solutions for enhanced brand communication."
        },
        {
            icon: <Settings className="w-8 h-8 text-white" />,
            title: "Typography & Iconography",
            description: "Custom iconography and typographic systems for your brand."
        },
        {
            icon: <FileText className="w-8 h-8 text-white" />,
            title: "Versatile Formats Guidelines",
            description: "Comprehensive brand guidelines for consistent application."
        },
        {
            icon: <RefreshCw className="w-8 h-8 text-white" />,
            title: "Logo Redesign & Refresh",
            description: "Modernizing existing logos while preserving brand equity."
        }
    ];

    const whyFeatures = [
        {
            icon: <Users className="w-6 h-6 text-white" />,
            title: "Top-tier Composition",
            subtitle: "Expert Team",
            description: "Our highly experienced design team brings creativity and technical expertise to every project."
        },
        {
            icon: <Package className="w-6 h-6 text-white" />,
            title: "Layout/Space Gamelte",
            subtitle: "Design Excellence",
            description: "Meticulous attention to layout, spacing, and visual hierarchy in every design."
        },
        {
            icon: <FileCheck className="w-6 h-6 text-white" />,
            title: "Legislation Ablezum",
            subtitle: "Legal Compliance",
            description: "Ensuring all designs meet industry standards and legal requirements."
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-white" />,
            title: "Trusted Client Content",
            subtitle: "Proven Results",
            description: "Delivering exceptional results that exceed client expectations consistently."
        },
        {
            icon: <Send className="w-6 h-6 text-white" />,
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
        <div className="min-h-screen bg-gray-900 overflow-x-hidden">
            <Helmet>
                <title>Best Logo Design Company in Hyderabad | Brick2Tech</title>
                <meta
                    name="description"
                    content="Create a powerful brand identity with Brick2Tech, the best logo design company in Hyderabad. We craft creative, unique, and memorable logo designs."
                />
                <meta
                    name="keywords"
                    content="best logo design company in Hyderabad, logo design services in Hyderabad, custom logo design Hyderabad, brand identity design Hyderabad, professional logo designers Hyderabad, Brick2Tech logo design,best logo design company in hyderabad, logo makers in hyderabad, logo design services in hyderabad"
                />
                <link rel="canonical" href="https://brick2tech.com/logo-design" />
                <meta name="robots" content="index, follow" />
            </Helmet>

            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Hero Section */}
            <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
                <motion.div
                    className="absolute top-20 left-10 text-blue-400/20"
                    variants={floatingAnimation}
                    animate="animate"
                >
                    <BarChart3 size={40} />
                </motion.div>
                <motion.div
                    className="absolute top-1/3 right-20 text-purple-400/20"
                    variants={floatingAnimation}
                    animate="animate"
                    style={{ animationDelay: '2s' }}
                >
                    <Shield size={60} />
                </motion.div>
                <motion.div
                    className="absolute bottom-1/4 left-1/4 text-pink-400/20"
                    variants={floatingAnimation}
                    animate="animate"
                    style={{ animationDelay: '4s' }}
                >
                    <Type size={50} />
                </motion.div>

                <div className="container mx-auto px-4 py-20 relative z-10">
                    <motion.div
                        className={`text-center transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <motion.h2
                            className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Logo Design Services by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Brick2Tech</span>
                        </motion.h2>
                        <motion.p
                            className="text-lg md:text-xl text-gray-300 font-light mb-6 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Crafting Unique Identities That Define Your Brand
                        </motion.p>
                        <motion.button
                            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center space-x-2 mx-auto"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Explore Our Work</span>
                            <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section id="intro" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative">
                <motion.div
                    className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent"
                    initial={{ y: 0 }}
                    animate={{ y: -50 }}
                    transition={{ duration: 0.8 }}
                ></motion.div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className={`text-center transition-all duration-1000 ${isVisible.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <motion.h1
                            className="text-2xl md:text-3xl font-bold text-white mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Best Logo Design Company in Hyderabad
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            A logo is more than just a graphic—it’s the face of your brand, representing its values, vision, and personality. At <span className="text-blue-400 font-semibold">Brick2Tech</span>, we are recognized as the best logo design company in Hyderabad, offering creative and customized logo solutions that help businesses establish a strong and memorable brand identity.
                        </motion.p>
                        <motion.p
                            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Whether you’re a startup launching a new venture or an established brand looking to refresh your image, our expert designers combine creativity, strategy, and industry insights to deliver logos that speak volumes and leave a lasting impression.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-800 relative">
                <div className="container mx-auto px-4">
                    <motion.div
                        className={`text-center mb-16 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Services Offered
                        </motion.h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -10 }}
                            >
                                <div className="relative z-10 text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Brick2Tech Section */}
            <section id="why-brick2tech" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 relative">
                <motion.div
                    className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl"
                    initial={{ y: 0 }}
                    animate={{ y: 100 }}
                    transition={{ duration: 0.8 }}
                ></motion.div>

                <div className="container mx-auto px-4">
                    <motion.div
                        className={`text-center mb-16 transition-all duration-1000 ${isVisible['why-brick2tech'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Why Brick2Tech
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {whyFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="group text-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="inline-flex items-center justify-center mb-6 p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                                <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">{feature.subtitle}</h4>
                                <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Professional Logo Design Process */}
            <section id="process" className="py-20 bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "2s" }}
                    ></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className={`text-center mb-16 transition-all duration-1000 ${isVisible.process
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Professional Logo Design
                        </motion.h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -10 }}
                            >
                                <div className="relative z-10 text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl font-bold rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {step.number}
                                    </div>
                                    {/* Removed title and made subtitle the main heading */}
                                    <h3 className="text-lg font-bold text-white mb-3">
                                        {step.subtitle}
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="benefits" className="py-20 bg-gray-800 relative overflow-hidden">
                {/* Background blobs */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-1/3 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-10 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "2s" }}
                    ></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Heading */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Benefits of a Professional Logo Design
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            A powerful logo not only defines your brand visually but also strengthens
                            your overall identity in the market.
                        </p>
                    </motion.div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Establish Brand Recognition",
                                desc: "A strong logo helps customers identify and remember your brand.",
                            },
                            {
                                title: "Communicate Brand Values",
                                desc: "Effective designs convey your mission, personality, and industry focus.",
                            },
                            {
                                title: "Build Trust & Credibility",
                                desc: "A polished, professional logo fosters customer confidence and loyalty.",
                            },
                            {
                                title: "Support Marketing Efforts",
                                desc: "A well-designed logo enhances all marketing channels and promotional materials.",
                            },
                            {
                                title: "Stay Ahead of the Competition",
                                desc: "Unique logos differentiate your brand and help you stand out in the market.",
                            },
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -8 }}
                            >
                                <div className="relative z-10">
                                    <h3 className="text-lg font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2 flex items-center">
                                        <span className="text-green-400 mr-2">✔</span>
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {benefit.desc}
                                    </p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section id="cta" className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
                    <motion.div
                        className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-white/10 to-transparent rounded-full blur-3xl"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        className={`transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            Tenets of Professional Logo Design
                        </motion.h2>
                        <motion.p
                            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Ready to transform your brand with exceptional design? Let's create something extraordinary together.
                        </motion.p>
                        <Link to="/contact">
                        <motion.button
                            className="group bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center space-x-2 mx-auto"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Call to Action</span>
                            <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                        </motion.button>
                        </Link>
                    </motion.div>
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