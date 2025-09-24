
import { easeInOut, motion, useScroll, useTransform } from 'framer-motion';
import {
    Eye,
    FileText,
    Instagram,
    Grid3X3,
    Package,
    Users,
    Clock,
    Lightbulb,
    DollarSign,
    Award,
    TrendingUp,
    UserCheck,
    Zap,
    Sparkles,
    Palette,
    ArrowRight,
    Star,
    Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GraphicDesign = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, -50]);
    const y2 = useTransform(scrollY, [0, 300], [0, 100]);

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
                ease: easeInOut
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 overflow-x-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
                {/* Floating Elements */}
                <motion.div
                    className="absolute top-20 left-10 text-purple-400/20"
                    variants={floatingAnimation}
                    animate="animate"
                >
                    <Palette size={40} />
                </motion.div>
                <motion.div
                    className="absolute top-1/3 right-20 text-blue-400/20"
                    variants={floatingAnimation}
                    animate="animate"
                    style={{ animationDelay: '2s' }}
                >
                    <Sparkles size={60} />
                </motion.div>
                <motion.div
                    className="absolute bottom-1/4 left-1/4 text-pink-400/20"
                    variants={floatingAnimation}
                    animate="animate"
                    style={{ animationDelay: '4s' }}
                >
                    <Eye size={50} />
                </motion.div>

                <div className="container mx-auto px-6 py-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center space-x-2 text-purple-400">
                                <Sparkles size={20} />
                                <span className="text-sm font-medium">Creative Excellence</span>
                            </div>

                            <motion.h1
                                className="text-6xl lg:text-7xl font-black leading-tight"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                                    Design
                                </span>
                                <br />
                                <span className="text-white">That</span>
                                <br />
                                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                    Captivates
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-xl text-gray-300 leading-relaxed max-w-lg"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                We transform your wildest ideas into breathtaking visual experiences that stop scrollers in their tracks and convert browsers into believers.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            >
                                <Link to="/contact">
                                <motion.button
                                    className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 rounded-full text-lg font-bold text-white transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>Start Your Project</span>
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </motion.button>
                                </Link>

                                <motion.button
                                    className="group border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-full text-lg font-semibold text-white backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-2"
                                    whileHover={{ scale: 1.02, y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Play size={20} />
                                    <span>Watch Our Work</span>
                                </motion.button>
                            </motion.div>

                            <div className="flex items-center space-x-8 pt-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">500+</div>
                                    <div className="text-gray-400 text-sm">Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">98%</div>
                                    <div className="text-gray-400 text-sm">Satisfaction</div>
                                </div>
                                <div className="text-center">
                                    <div className="flex space-x-1 justify-center mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="text-yellow-400 fill-current" size={16} />
                                        ))}
                                    </div>
                                    <div className="text-gray-400 text-sm">5-Star Rating</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Visual */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
                                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                                    <div className="grid grid-cols-2 gap-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <motion.div
                                                key={i}
                                                className="bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl p-4 h-20 flex items-center justify-center backdrop-blur-sm border border-white/10"
                                                whileHover={{ scale: 1.05, rotate: 5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg"></div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative">
                <motion.div
                    className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-500/10 to-transparent"
                    style={{ y: y1 }}
                ></motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        className="text-center max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-5xl font-bold mb-8"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 30 }}
                        >
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Hyderabad's Premier
                            </span>
                            <br />
                            <span className="text-white">Design Powerhouse</span>
                        </motion.h2>

                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <motion.p
                                className="text-lg text-gray-300 leading-relaxed"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                In a world where attention spans are measured in milliseconds, we create designs that don't just capture attention—they <span className="text-purple-400 font-semibold">demand it</span>. At Brick2Tech, we're not just another design agency; we're visual storytellers who turn your brand into an unforgettable experience.
                            </motion.p>
                            <motion.p
                                className="text-lg text-gray-300 leading-relaxed"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                Our award-winning team combines cutting-edge creativity with data-driven strategy to deliver designs that don't just look incredible—they <span className="text-pink-400 font-semibold">perform incredibly</span>. From brand identities that become cultural icons to digital experiences that convert at unprecedented rates.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-800 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-bold text-white mb-6">
                            Services That <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Wow</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Every pixel crafted with purpose, every color chosen with intention
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                icon: Eye,
                                title: "Brand Identity & Logo Design",
                                description: "Logos that become legendary. Brand identities that define entire industries.",
                                gradient: "from-purple-500 to-pink-500",
                                bgGradient: "from-purple-500/10 to-pink-500/10"
                            },
                            {
                                icon: FileText,
                                title: "Marketing Materials",
                                description: "Brochures that mesmerize. Posters that stop traffic. Materials that move mountains.",
                                gradient: "from-blue-500 to-cyan-500",
                                bgGradient: "from-blue-500/10 to-cyan-500/10"
                            },
                            {
                                icon: Instagram,
                                title: "Social Media Content",
                                description: "Content that goes viral. Visuals that break the internet. Posts that start conversations.",
                                gradient: "from-pink-500 to-orange-500",
                                bgGradient: "from-pink-500/10 to-orange-500/10"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="relative z-10">
                                    <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="text-white" size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Grid3X3,
                                title: "UI/UX Design",
                                description: "Interfaces so intuitive, they feel like magic. User experiences that create addiction.",
                                gradient: "from-green-500 to-teal-500",
                                bgGradient: "from-green-500/10 to-teal-500/10"
                            },
                            {
                                icon: Package,
                                title: "Packaging Design",
                                description: "Packaging that flies off shelves. Designs that make unboxing an event.",
                                gradient: "from-orange-500 to-red-500",
                                bgGradient: "from-orange-500/10 to-red-500/10"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="relative z-10">
                                    <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="text-white" size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative">
                <motion.div
                    className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"
                    style={{ y: y2 }}
                ></motion.div>

                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-bold text-white mb-6">
                            Why We're <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Unstoppable</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            The secret ingredients that make our designs irresistible
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl transform rotate-6"></div>
                                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                                    <div className="text-center">
                                        <div className="text-6xl font-black text-white mb-4">99%</div>
                                        <div className="text-purple-400 text-xl font-semibold mb-2">Client Retention</div>
                                        <div className="text-gray-300">Because excellence is addictive</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="space-y-6"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    icon: Users,
                                    title: "Visionary Team",
                                    description: "Award-winning designers who see the future before it happens"
                                },
                                {
                                    icon: Lightbulb,
                                    title: "Breakthrough Innovation",
                                    description: "We don't follow trends—we create them and watch the world catch up"
                                },
                                {
                                    icon: Clock,
                                    title: "Lightning Fast",
                                    description: "Rapid delivery without compromising on mind-blowing quality"
                                },
                                {
                                    icon: DollarSign,
                                    title: "ROI Maximizer",
                                    description: "Designs that pay for themselves through increased conversions"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                                    variants={fadeInUp}
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                                        <p className="text-gray-300">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-20 bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-bold text-white mb-6">
                            The <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Impact</span> of Great Design
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            When design meets strategy, magic happens
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Award,
                                title: "Brand Recognition Explosion",
                                description: "Turn unknown brands into household names overnight",
                                metric: "300%",
                                metricLabel: "increase"
                            },
                            {
                                icon: TrendingUp,
                                title: "Trust Building Machine",
                                description: "Professional design that screams credibility",
                                metric: "85%",
                                metricLabel: "trust boost"
                            },
                            {
                                icon: UserCheck,
                                title: "UX That Addicts",
                                description: "Interfaces so smooth, users can't stop coming back",
                                metric: "240%",
                                metricLabel: "retention"
                            },
                            {
                                icon: Zap,
                                title: "Engagement Explosion",
                                description: "Content that creates conversations and communities",
                                metric: "500%",
                                metricLabel: "engagement"
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -10 }}
                            >
                                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <benefit.icon className="text-white" size={24} />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                                <div className="text-orange-400 text-sm font-semibold mb-4">{benefit.metricLabel}</div>
                                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-gray-300 text-sm">{benefit.description}</p>

                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
                    <motion.div
                        className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-white/10 to-transparent rounded-full blur-3xl"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    ></motion.div>
                </div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-6xl font-black text-white mb-8 leading-tight"
                            whileInView={{ scale: [0.9, 1] }}
                            transition={{ duration: 0.5 }}
                        >
                            Ready to Create
                            <br />
                            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                Design History?
                            </span>
                        </motion.h2>

                        <p className="text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
                            Join the ranks of brands that don't just exist—they dominate.
                            Let's create designs that become legendary.
                        </p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Link to="/contact">
                            <motion.button
                                className="group bg-white text-purple-600 hover:bg-gray-100 px-12 py-5 rounded-full text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Get Started Now</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </motion.button>
                            </Link>

                            <motion.button
                                className="group border-2 border-white/20 hover:border-white/40 px-12 py-5 rounded-full text-lg font-semibold text-white backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FileText size={20} />
                                <span>View Portfolio</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default GraphicDesign;