import React from 'react';
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
    Star,
    Play,
    CheckCircle,
    Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WebHosting = () => {

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-sky-50 via-white to-sky-100 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
                    
                    {/* Circuit pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
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
                
                <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sm font-medium text-sky-800 mb-6">
                                <Star className="w-4 h-4 mr-2 fill-current" />
                                Premier Web Hosting in Hyderabad
                            </div>
                            
                            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                                <span className="bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-transparent">Brick2Tech</span>
                                <br />
                                Web Hosting Solutions
                            </h1>
                            
                            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                                Experience blazing-fast, secure, and reliable web hosting with 99.9% uptime guarantee. Perfect for businesses of all sizes in Hyderabad and beyond.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link to="/contact">
                                <button className="group bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                                    Get Started Today
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                </Link>
                                
                                <button className="group bg-white border-2 border-sky-200 hover:border-sky-300 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center">
                                    <Play className="mr-2 w-5 h-5" />
                                    View Plans
                                </button>
                            </div>
                            
                            <div className="flex items-center space-x-8 pt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-slate-900">99.9%</div>
                                    <div className="text-sm text-slate-600">Uptime Guarantee</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-slate-900">24/7</div>
                                    <div className="text-sm text-slate-600">Expert Support</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-slate-900">5000+</div>
                                    <div className="text-sm text-slate-600">Happy Clients</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Server Illustration */}
                        <div className="relative">
                            <div className="relative bg-gradient-to-br from-sky-400 to-blue-700 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-500">
                                <div className="bg-white rounded-2xl p-8 transform -rotate-3">
                                    <div className="flex flex-col items-center space-y-6">
                                        <Server className="w-24 h-24 text-sky-600" />
                                        <div className="grid grid-cols-3 gap-4 w-full">
                                            <div className="h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                                            <div className="h-6 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full"></div>
                                            <div className="h-6 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"></div>
                                        </div>
                                        <div className="w-full space-y-2">
                                            <div className="h-3 bg-gradient-to-r from-sky-100 to-blue-200 rounded w-full"></div>
                                            <div className="h-3 bg-gradient-to-r from-sky-50 to-blue-100 rounded w-3/4"></div>
                                            <div className="h-3 bg-gradient-to-r from-sky-100 to-blue-200 rounded w-5/6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Floating elements */}
                            <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-400 rounded-full animate-bounce flex items-center justify-center">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-sky-400 rounded-full animate-pulse flex items-center justify-center">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Image */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl p-12 shadow-lg">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="h-24 bg-white rounded-2xl shadow-md flex items-center justify-center">
                                            <Database className="w-8 h-8 text-sky-600" />
                                        </div>
                                        <div className="h-32 bg-white rounded-2xl shadow-md flex items-center justify-center">
                                            <Cloud className="w-10 h-10 text-blue-700" />
                                        </div>
                                    </div>
                                    <div className="space-y-4 pt-8">
                                        <div className="h-32 bg-white rounded-2xl shadow-md flex items-center justify-center">
                                            <Monitor className="w-10 h-10 text-sky-600" />
                                        </div>
                                        <div className="h-24 bg-white rounded-2xl shadow-md flex items-center justify-center">
                                            <Globe className="w-8 h-8 text-blue-700" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sm font-medium text-sky-800 mb-6">
                                    About Brick2Tech
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                                    Best Web Hosting Company in 
                                    <span className="text-sky-600"> Hyderabad</span>
                                </h2>
                            </div>
                            
                            <p className="text-lg text-slate-600 leading-relaxed">
                                At Brick2Tech, we are recognized as one of the best web hosting companies in Hyderabad, offering premium hosting services at affordable prices. With our user-friendly control panel, managing your hosting-related tasks becomes simple and effective.
                            </p>
                            
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We combine high configurations, advanced technologies, and 99.9% uptime assurance to ensure your website always performs at its best. Connect with us today and experience blazing-fast and secure hosting solutions that help your business stay ahead.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                    <span className="text-slate-700 font-medium">99.9% Uptime</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                    <span className="text-slate-700 font-medium">24/7 Support</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                    <span className="text-slate-700 font-medium">Fast Loading</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                    <span className="text-slate-700 font-medium">Secure Hosting</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why You Need Web Hosting */}
            <section className="py-24 px-6 bg-gradient-to-br from-sky-50 to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sm font-medium text-sky-800 mb-6">
                            Why Choose Us
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                            Why You Need Professional Web Hosting
                        </h2>
                        <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            In today's digital-first world, having a strong online presence is no longer optional—it's a necessity. Most customers find businesses through search engines, and without a reliable website, your brand risks falling behind competitors.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<Shield className="w-8 h-8 text-sky-600" />}
                            title="Data Protection"
                            description="Comprehensive security measures to protect your valuable data and ensure business continuity with advanced firewalls."
                        />
                        <FeatureCard
                            icon={<Award className="w-8 h-8 text-blue-700" />}
                            title="Service & Reliability"
                            description="99.9% uptime guarantee with 24/7 monitoring and professional support services from certified experts."
                        />
                        <FeatureCard
                            icon={<Zap className="w-8 h-8 text-sky-600" />}
                            title="Speed & Performance"
                            description="Lightning-fast servers optimized for maximum performance and exceptional user experience worldwide."
                        />
                        <FeatureCard
                            icon={<Globe className="w-8 h-8 text-blue-700" />}
                            title="Business Growth"
                            description="Scalable solutions that grow with your business needs and expanding requirements seamlessly."
                        />
                    </div>
                </div>
            </section>

            {/* Web Hosting Services */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sm font-medium text-sky-800 mb-6">
                            Our Services
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                            Comprehensive Web Hosting Services
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            From basic hosting to enterprise solutions, we provide everything you need for online success
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={<Server className="w-12 h-12 text-sky-600" />}
                            title="Web Hosting"
                            description="Reliable and secure web hosting solutions with 99.9% uptime guarantee and 24/7 technical support for peace of mind."
                        />
                        <ServiceCard
                            icon={<Monitor className="w-12 h-12 text-blue-700" />}
                            title="Domain Registration"
                            description="Register your perfect domain name with competitive pricing and easy management tools for complete control."
                        />
                        <ServiceCard
                            icon={<Database className="w-12 h-12 text-sky-600" />}
                            title="VPS Hosting & Dedicated"
                            description="Powerful VPS and dedicated server solutions for high-traffic websites and resource-intensive applications."
                        />
                        <ServiceCard
                            icon={<Shield className="w-12 h-12 text-blue-700" />}
                            title="SSL Certificate Setup"
                            description="Secure your website with premium SSL certificates and professional installation service for enhanced security."
                        />
                        <ServiceCard
                            icon={<Cloud className="w-12 h-12 text-sky-600" />}
                            title="Cloud Hosting Service"
                            description="Scalable cloud hosting infrastructure with automatic scaling and load balancing for optimal performance."
                        />
                        <ServiceCard
                            icon={<Globe className="w-12 h-12 text-blue-700" />}
                            title="Website Development"
                            description="Professional website development services from concept to deployment and ongoing maintenance support."
                        />
                    </div>
                </div>
            </section>

            {/* Additional Features */}
            <section className="py-24 px-6 bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-sky-900/50 rounded-full text-sm font-medium text-sky-300 mb-6">
                            Additional Features
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Premium Features Included
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Every hosting plan comes with these powerful features at no extra cost
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <AdditionalFeatureCard
                            icon={<Database className="w-8 h-8 text-sky-400" />}
                            title="Daily Backup"
                            description="Automated daily backups to ensure your data is always safe and recoverable with one-click restore functionality for complete peace of mind."
                        />
                        <AdditionalFeatureCard
                            icon={<Monitor className="w-8 h-8 text-blue-400" />}
                            title="Website Builder"
                            description="Easy-to-use drag-and-drop website builder with professional templates and mobile-responsive designs for quick deployment."
                        />
                        <AdditionalFeatureCard
                            icon={<Cloud className="w-8 h-8 text-sky-400" />}
                            title="Cloud Storage"
                            description="Secure cloud storage solutions with unlimited bandwidth and high-speed global CDN integration for faster loading times."
                        />
                        <AdditionalFeatureCard
                            icon={<Lock className="w-8 h-8 text-blue-400" />}
                            title="Enhanced Security"
                            description="Advanced security measures including DDoS protection, malware scanning, and SSL certificates for complete protection."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-gradient-to-br from-sky-500 via-sky-600 to-blue-700 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative max-w-4xl mx-auto text-center text-white">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white mb-6">
                        Ready to Get Started?
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Ready to Launch Your Website?
                    </h2>
                    
                    <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who trust Brick2Tech for their hosting needs. Get started today with our premium hosting solutions.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                        <button className="group bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                            Start Your Journey
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        </Link>
                        
                        <a href="tel:+919000035647" aria-label="Call us at +91 9000035647">
                        <button className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center">
                            Contact Support
                        </button>
                        </a>
                    </div>
                    
                    <p className="text-sm opacity-75 mt-8">
                        30-day money-back guarantee • Free migration • No setup fees
                    </p>
                </div>
            </section>
        </div>
    );
};

const ServiceCard: React.FC<{icon: React.ReactNode; title: string; description: string}> = ({ icon, title, description }) => (
    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-sky-100 hover:border-sky-200">
        <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);

const FeatureCard: React.FC<{icon: React.ReactNode; title: string; description: string}> = ({ icon, title, description }) => (
    <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-sky-100 hover:border-sky-300">
        <div className="flex items-center mb-6">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-3 rounded-xl mr-4 group-hover:from-sky-100 group-hover:to-blue-100 transition-all duration-300">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{title}</h3>
        </div>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);

const AdditionalFeatureCard: React.FC<{icon: React.ReactNode; title: string; description: string}> = ({ icon, title, description }) => (
    <div className="group bg-slate-800 hover:bg-slate-700 transition-all duration-300 p-8 rounded-2xl border border-slate-700 hover:border-sky-500">
        <div className="flex items-center gap-4 mb-6">
            <div className="bg-slate-700 group-hover:bg-slate-600 p-3 rounded-xl transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">{title}</h3>
        </div>
        <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
);

export default WebHosting;