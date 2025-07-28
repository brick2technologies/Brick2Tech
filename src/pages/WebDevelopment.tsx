import React from "react";
import { motion } from "framer-motion";
import {
    Code,
    MonitorSmartphone,
    Brush,
    Layers,
    ArrowRight,
    Lightbulb,
    Shield,
    TrendingUp,
    Users,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

interface Service {
    title: string;
    description: string;
    icon: JSX.Element;
    alt: string;
}

const services: Service[] = [
    {
        title: "Custom Web Development",
        description:
            "We build scalable, high-performing websites tailored to your business needs.",
        icon: <Code className="w-10 h-10 text-skyblue" />, alt: "Developer writing code for web development",
    },
    {
        title: "Responsive Design",
        description:
            "Mobile-first and cross-browser compatible layouts for a seamless user experience.",
        icon: <MonitorSmartphone className="w-10 h-10 text-skyblue" />, alt: "Smartphone and tablet with responsive UI layouts",
    },
    {
        title: "UI/UX Design",
        description:
            "Modern, intuitive, and accessible interfaces that keep users engaged.",
        icon: <Brush className="w-10 h-10 text-skyblue" />, alt: "Design team planning user experience",
    },
    {
        title: "Full Stack Integration",
        description:
            "Seamless integration of frontend with secure and scalable backend solutions.",
        icon: <Layers className="w-10 h-10 text-skyblue" />, alt: "Backend and frontend integration visualization",
    },
    {
        title: "Full Stack Development",
        description:
            "End-to-end development with React, Node.js, MongoDB, and Express for dynamic applications.",
        icon: <TrendingUp className="w-10 h-10 text-skyblue" />, alt: "Full stack application development flow",
    },
    {
        title: "Database Management",
        description:
            "Design, optimize, and manage databases with MongoDB, MySQL, and PostgreSQL.",
        icon: <Users className="w-10 h-10 text-skyblue" />, alt: "Database servers and data visualization",
    },
    {
        title: "Payment Gateway Integration",
        description:
            "Secure and seamless integration with Razorpay, Stripe, or PayPal to enable transactions.",
        icon: <Shield className="w-10 h-10 text-skyblue" />, alt: "Payment processing system online",
    },
    {
        title: "SEO Optimization",
        description:
            "Structured data, metadata, and performance enhancements to boost search rankings.",
        icon: <ArrowRight className="w-10 h-10 text-skyblue" />, alt: "SEO strategy with graphs and charts",
    },
    {
        title: "Performance Optimization",
        description:
            "Boost site speed and Core Web Vitals with lazy loading, caching, and minification.",
        icon: <TrendingUp className="w-10 h-10 text-skyblue" />, alt: "Speed optimization tools and performance chart",
    },
    {
        title: "CMS Integration",
        description:
            "Empower your team with headless CMS or WordPress for streamlined content management.",
        icon: <Users className="w-10 h-10 text-skyblue" />, alt: "Content management dashboard view",
    },
    {
        title: "API Development & Integration",
        description:
            "Secure, well-documented RESTful and GraphQL APIs for modern web architectures.",
        icon: <Shield className="w-10 h-10 text-skyblue" />, alt: "API documentation and network flow",
    },
    {
        title: "Maintenance & Support",
        description:
            "Ongoing updates, bug fixes, and uptime monitoring for a worry-free website.",
        icon: <Lightbulb className="w-10 h-10 text-skyblue" />, alt: "Maintenance checklist and support headset",
    },
];

const stats = [
    { title: "20+", description: "Web Projects Delivered" },
    { title: "4.9/5", description: "Client Satisfaction" },
    { title: "18%", description: "Avg Increase in Conversions" },
];

const WebDevelopmentPage: React.FC = () => {
    return (
        <div className="bg-white text-darkblue font-sans">
            <Helmet>
                <title>Web Development Services in India | Brick2Tech Digital</title>
                <meta
                    name="description"
                    content="Custom web development services by Brick2Tech. Get responsive, SEO-optimized websites powered by full stack technologies."
                />
                <meta
                    name="keywords"
                    content="web development India, custom websites, full stack web apps, UI/UX, MongoDB, Node.js, React, Express"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Brick2Tech" />
                <link rel="canonical" href="https://brick2tech.com/services/web-development" />
                <meta property="og:title" content="Top Web Development Services | Brick2Tech India" />
                <meta
                    property="og:description"
                    content="Modern, scalable web solutions crafted by Brick2Tech. Improve UX, performance, and SEO rankings."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://brick2tech.com/services/web-development" />
                <meta property="og:image" content="https://brick2tech.com/assets/web-dev-banner.png" />
                <meta property="og:site_name" content="Brick2Tech" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Custom Web Development by Brick2Tech" />
                <meta name="twitter:description" content="Scalable, responsive, SEO-ready websites built for growth." />
                <meta name="twitter:image" content="https://brick2tech.com/assets/web-dev-banner.png" />
            </Helmet>

            <main className="space-y-24">
                {/* Hero */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[90vh] px-6 py-24 gap-12"

                >
                    <div className="lg:w-1/2 text-center lg:text-left space-y-6 sm:pl-28">
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 5, 0], y: [0, 10, -10, 10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="flex justify-center lg:justify-start"
                        >
                            <Lightbulb className="w-16 h-16 text-skyblue drop-shadow-md" />
                        </motion.div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold">
                            Smart, Efficient Web Architecture
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
                            Transform your digital presence with modern, scalable, and user-centric web solutions.
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="#services"
                            className="inline-flex items-center gap-3 bg-darkblue text-gray-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-skyblue hover:text-darkblue transition"
                        >
                            Discover Our Services <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </div>
                    <motion.div
                        animate={{ rotate: [0, 2, -2, 2, 0], y: [0, 4, -4, 4, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="lg:w-1/2 flex justify-center"
                    >
                        <img
                            src="https://res.cloudinary.com/diqux3y0a/image/upload/v1753517395/4421964_bnz92m.jpg"
                            alt="Modern desktop web design preview"
                            className="w-full max-w-md lg:max-w-lg object-contain rounded-xl"
                            loading="lazy"
                        />
                    </motion.div>
                </motion.section>

                {/* Services */}
                <motion.section
                    id="services"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="px-6 max-w-7xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <motion.article
                                key={service.title}
                                whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                                transition={{ duration: 0.3 }}
                                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl"
                            >
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </motion.section>

                {/* Why Choose Us */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gray-100 px-6"
                >
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                        <img
                            src="https://res.cloudinary.com/diqux3y0a/image/upload/v1753692898/bst228_qwes5r.png"
                            alt="Web development team collaborating in a modern office"
                            className="w-full lg:w-1/2 rounded-2xl shadow-xl object-cover"
                            loading="lazy"
                        />
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-4xl font-bold">Why Partner with Us?</h2>
                            <p className="text-gray-600">
                                Our team combines expertise, innovation, and a client-first approach to deliver exceptional web solutions.
                            </p>
                            <ul className="space-y-3 text-darkblue">
                                <li className="flex items-start gap-3"><span className="text-skyblue">✓</span> Agile development for fast, iterative results</li>
                                <li className="flex items-start gap-3"><span className="text-skyblue">✓</span> SEO-optimized and performance-driven code</li>
                                <li className="flex items-start gap-3"><span className="text-skyblue">✓</span> Built-in analytics and CMS integration</li>
                                <li className="flex items-start gap-3"><span className="text-skyblue">✓</span> Ongoing support and maintenance</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Stats */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="px-6 max-w-7xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold mb-12">Our Achievements</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.title}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md"
                            >
                                <p className="text-5xl font-extrabold text-skyblue">{stat.title}</p>
                                <p className="text-gray-600 mt-2 font-medium">{stat.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white text-gray-700 px-6 py-24 text-center relative overflow-hidden"
                >
                    <div className="max-w-4xl mx-auto relative z-10 space-y-6">
                        <h2 className="text-4xl sm:text-4xl font-semibold">
                            Built for bold ideas. Your business’s digital launchpad is ready—are you?
                        </h2>
                        <a
                            href="/contact"
                            className="inline-block bg-skyblue text-darkblue font-bold px-8 py-4 rounded-full shadow-lg hover:bg-white/50 transition text-gray-700 bg-white"
                        >
                            Start Your Project Today
                        </a>
                    </div>
                </motion.section>
            </main>
        </div>
    );
};

export default WebDevelopmentPage;
