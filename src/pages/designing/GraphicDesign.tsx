import { motion } from 'framer-motion';
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
    Zap
} from 'lucide-react';
import { Helmet } from 'react-helmet';

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

const scaleOnHover = {
    whileHover: { scale: 1.05, y: -5 },
    transition: { duration: 0.3 }
};

const GraphicDesign = () => {
    return (
        <div className="min-h-screen bg-white">

            <Helmet>
                <title>Best Graphic Design Companies in Hyderabad | Brick2Tech</title>
                <meta
                    name="description"
                    content="Brick2Tech stands among the best graphic design companies in Hyderabad, delivering creative, impactful, and brand-focused designs to elevate your business."
                />
                <meta
                    name="keywords"
                    content="best graphic design companies in Hyderabad, graphic design companies in hyderabad, graphic designing agency in hyderabad, graphic design services in hyderabad, Brick2Tech graphic design"
                />
                <link rel="canonical" href="https://brick2tech.com/graphic-design" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center min-h-[90vh] flex items-center bg-blue-900"
            // Replace with your image path
            >
                <div className="absolute inset-0 bg-black/40"></div> {/* overlay for readability */}

                <div className="container mx-auto px-6 py-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:pr-8 text-left"
                        >
                            <motion.h2
                                className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                <span className="text-white">Transforming</span>{" "}
                                <span className="text-sky-400">Ideas</span>{" "}
                                <span className="text-white">into Visual Excellence</span>
                            </motion.h2>

                            <motion.p
                                className="text-lg mb-8 text-white/90 leading-relaxed"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                We create impactful designs that elevate your brand and connect with your audience.
                            </motion.p>

                            <motion.button
                                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md text-sm font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                Get Started
                            </motion.button>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            className="relative flex justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <img
                                src="/images/graphic-hero.png"
                                alt="Design showcase"
                                className="w-full h-auto   transform hover:scale-105 transition duration-500"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* About Section */}
            <section className="py-10 bg-gray-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-3xl font-bold text-gray-800 mb-8">Best Graphic Design Companies in Hyderabad</h1>
                        <p className="text-base text-gray-600 leading-relaxed">
                            In today’s visually-driven world, impactful design plays a vital role in creating a memorable brand experience. At Brick2Tech, we are recognized among the best graphic design companies in Hyderabad, offering creative solutions that bring your brand’s story to life.
                        </p>
                        <p className='mt-4 text-base text-gray-600 leading-relaxed'>
                            Our team of expert designers combines aesthetics with strategy to craft designs that engage your audience, build trust, and set you apart from the competition.
                            Whether you need branding materials, marketing collateral, or digital content, our graphic design services are tailored to meet your unique business needs and marketing goals. We focus on creating designs that not only look stunning but also communicate effectively.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
                        <p className="text-gray-600">Comprehensive design solutions tailored to your unique needs</p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8 mb-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                icon: Eye,
                                title: "Brand Identity & Logo Design",
                                description: "Create a distinctive brand identity that reflects your brand's values and resonates with your audience."
                            },
                            {
                                icon: FileText,
                                title: "Marketing & Promotional Materials",
                                description: "Eye-catching brochures, flyers, posters, and other marketing collaterals that effectively communicate your message."
                            },
                            {
                                icon: Instagram,
                                title: "Social Media & Digital Content",
                                description: "Engaging visual content optimized for various social platforms to boost your brand presence."
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-center"
                                variants={fadeInUp}
                                {...scaleOnHover}
                            >
                                <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <service.icon className="text-gray-600" size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3">{service.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                icon: Grid3X3,
                                title: "UI/UX Design for Apps & Websites",
                                description: "User-centered interface designs that enhance usability and create seamless digital experiences."
                            },
                            {
                                icon: Package,
                                title: "Packaging & Product Design",
                                description: "Creative packaging solutions that protect your products while making them stand out on shelves."
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-center"
                                variants={fadeInUp}
                                {...scaleOnHover}
                            >
                                <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <service.icon className="text-gray-600" size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3">{service.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Brick2Tech</h2>
                        <p className="text-gray-600">What sets us apart from the competition</p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Team Image Representation */}
                            <div className="rounded-2xl shadow-lg overflow-hidden">
                                <img
                                    src="/images/graphic-choose.png" // replace with your image path
                                    alt="Our Team"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
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
                                    title: "Experienced Design Team",
                                    description: "Our team consists of highly skilled designers with years of industry experience and a passion for creativity."
                                },
                                {
                                    icon: UserCheck,
                                    title: "Client-Centered Approach",
                                    description: "We listen carefully to your needs and work closely with you throughout the design process to ensure satisfaction."
                                },
                                {
                                    icon: Lightbulb,
                                    title: "Innovative Solutions",
                                    description: "We constantly explore new trends and technologies to deliver fresh, impactful design solutions."
                                },
                                {
                                    icon: Clock,
                                    title: "Timely Delivery",
                                    description: "We understand the importance of deadlines and ensure your projects are completed on time, every time."
                                },
                                {
                                    icon: DollarSign,
                                    title: "Affordable Pricing",
                                    description: "Quality design solutions that fit your budget without compromising on excellence."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4"
                                    variants={fadeInUp}
                                >
                                    <div className="bg-blue-600 p-2 rounded-full flex-shrink-0">
                                        <item.icon className="text-white" size={16} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Power of Great Design Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">The Power of Great Design</h2>
                        <p className="text-gray-600">How exceptional design impacts your business success</p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                icon: Award,
                                title: "Enhances Brand Recognition",
                                description: "Consistent, quality design builds trust and helps your audience recognize your brand instantly."
                            },
                            {
                                icon: TrendingUp,
                                title: "Builds Customer Trust",
                                description: "Professional design communicates reliability and professionalism to your audience."
                            },
                            {
                                icon: UserCheck,
                                title: "Improves User Experience",
                                description: "Thoughtful design enhances usability and creates positive interactions with your brand."
                            },
                            {
                                icon: Zap,
                                title: "Drives Engagement",
                                description: "Compelling visuals capture attention and motivate customers to take action."
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                                variants={fadeInUp}
                                {...scaleOnHover}
                            >
                                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <benefit.icon className="text-orange-600" size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3">{benefit.title}</h3>
                                <p className="text-sm text-gray-600">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Let’s Create Designs That Define Your Brand
                        </h2>
                        <p className="text-lg mb-6 text-blue-100 max-w-3xl mx-auto">
                            As one of the best graphic design companies in Hyderabad, Brick2Tech is committed to delivering
                            designs that inspire, engage, and transform your brand’s presence. Our creative solutions are
                            backed by strategy, research, and experience, ensuring that your brand stands out in every interaction.
                        </p>
                        <p className="text-md mb-8 text-blue-200">
                            📞 Contact us today to explore how our graphic design services can elevate your brand identity
                            and help you connect meaningfully with your audience.
                        </p>
                        <motion.button
                            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default GraphicDesign;