import { useState, useEffect } from 'react';
import {
    Shield,
    Zap,
    Globe,
    Award,
    Server,
    Monitor,
    Database,
    Cloud,
    ArrowRight,
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const WebHosting = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const staggerChildren = (delay = 0) => ({
        style: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0px)' : 'translateY(30px)',
            transition: `all 0.6s ease-out ${delay}s`
        }
    });

    return (
        <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
            <Helmet>
                <title>Best Web Hosting Company in Hyderabad | Brick2Tech</title>
                <meta
                    name="description"
                    content="Get reliable web hosting services from the best web hosting company in Hyderabad. Brick2Tech ensures fast, secure, and scalable hosting for your website."
                />
                <meta
                    name="keywords"
                    content="web hosting services in hyderabad, best web hosting company in hyderabad, best web hosting agency in hyderabad Brick2Tech web hosting"
                />
                <link rel="canonical" href="https://brick2tech.com/services/web-hosting" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-4">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                    {/* Circuit pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M 0 10 L 10 10 M 10 0 L 10 20 M 10 10 L 20 10" stroke="currentColor" strokeWidth="0.5" fill="none" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#circuit)" />
                        </svg>
                    </div>
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <div {...staggerChildren(0)}>
                        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            Brick2Tech
                        </h2>
                    </div>

                    <div {...staggerChildren(0.2)}>
                        <p className="text-xl md:text-2xl text-blue-200 mb-8">
                            Premier Web Hosting in Hyderabad
                        </p>
                    </div>

                    <div {...staggerChildren(0.4)}>
                        <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-20 px-4 bg-slate-800">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div {...staggerChildren(0)}>
                            <h1 className="text-4xl font-bold mb-6 text-blue-400">Best Web Hosting Company in Hyderabad</h1>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                At Brick2Tech, we are recognized as one of the best web hosting companies in Hyderabad, offering premium hosting services at affordable prices. With our user-friendly control panel, managing your hosting-related tasks becomes simple and effective.

                            </p>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                We combine high configurations, advanced technologies, and 99.9% uptime assurance to ensure your website always performs at its best. Connect with us today and experience blazing-fast and secure hosting solutions that help your business stay ahead.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div {...staggerChildren(0.2)} className="flex justify-center">
                            <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
                                <Server className="w-32 h-32 text-blue-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why You Need Web Hosting */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div {...staggerChildren(0)} className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-blue-400">Why You Need Web Hosting</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed flex justify-center">
                        In today’s digital-first world, having a strong online presence is no longer optional—it’s a necessity. Most customers find businesses through Google, Bing, Yahoo, and other search engines. Without a reliable website, your brand risks falling behind competitors.
                        With professional web hosting from Brick2Tech, you gain complete control over your website—customization, advanced features, and scalability that free hosting platforms simply cannot offer. Choosing Brick2Tech means choosing dedicated support, uncompromised speed, and rock-solid security for your business website.
                    </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: "Data Protection",
                                description: "Comprehensive security measures to protect your valuable data and ensure business continuity."
                            },
                            {
                                icon: <Award className="w-8 h-8" />,
                                title: "Service & Reliability",
                                description: "99.9% uptime guarantee with 24/7 monitoring and professional support services."
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Speed & Performance",
                                description: "Lightning-fast servers optimized for maximum performance and user experience."
                            },
                            {
                                icon: <Globe className="w-8 h-8" />,
                                title: "Business Growth",
                                description: "Scalable solutions that grow with your business needs and expanding requirements."
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                {...staggerChildren(index * 0.1)}
                                className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700"
                            >
                                <div className="text-blue-400 mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Plans */}
           

            {/* Web Hosting Services */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div {...staggerChildren(0)} className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-blue-400">Web Hosting Services</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Server className="w-12 h-12" />,
                                title: "Web Hosting",
                                description: "Reliable and secure web hosting solutions with 99.9% uptime guarantee and 24/7 technical support."
                            },
                            {
                                icon: <Monitor className="w-12 h-12" />,
                                title: "Domain Registration",
                                description: "Register your perfect domain name with competitive pricing and easy management tools."
                            },
                            {
                                icon: <Database className="w-12 h-12" />,
                                title: "VPS Hosting & Dedicated",
                                description: "Powerful VPS and dedicated server solutions for high-traffic websites and applications."
                            },
                            {
                                icon: <Shield className="w-12 h-12" />,
                                title: "SSL Certificate Setup",
                                description: "Secure your website with premium SSL certificates and professional installation service."
                            },
                            {
                                icon: <Cloud className="w-12 h-12" />,
                                title: "Cloud Hosting Service",
                                description: "Scalable cloud hosting infrastructure with automatic scaling and load balancing."
                            },
                            {
                                icon: <Globe className="w-12 h-12" />,
                                title: "Website Development",
                                description: "Professional website development services from concept to deployment and maintenance."
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                {...staggerChildren(index * 0.1)}
                                className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700 group"
                            >
                                <div className="text-blue-400 mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Features */}
            <section className="py-20 px-4 bg-slate-800">
                <div className="max-w-6xl mx-auto">
                    <div {...staggerChildren(0)} className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-blue-400">Additional Features</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Database className="w-8 h-8" />,
                                title: "Daily Backup",
                                description: "Automated daily backups to ensure your data is always safe and recoverable with one-click restore functionality."
                            },
                            {
                                icon: <Monitor className="w-8 h-8" />,
                                title: "Website Builder",
                                description: "Easy-to-use drag-and-drop website builder with professional templates and mobile-responsive designs."
                            },
                            {
                                icon: <Cloud className="w-8 h-8" />,
                                title: "Cloud Storage",
                                description: "Secure cloud storage solutions with unlimited bandwidth and high-speed global CDN integration."
                            },
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: "Enhanced Security",
                                description: "Advanced security measures including DDoS protection, malware scanning, and SSL certificates."
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                {...staggerChildren(index * 0.1)}
                                className="bg-slate-900 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-blue-400">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div {...staggerChildren(0)}>
                        <h2 className="text-4xl font-bold mb-6 text-blue-400">Ready to Get Started?</h2>
                        <p className="text-xl text-gray-300 mb-8">Join thousands of satisfied customers who trust BrickTech for their hosting needs.</p>
                        <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebHosting;