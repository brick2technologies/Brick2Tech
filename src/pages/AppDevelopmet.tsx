import React from "react";
import { motion } from "framer-motion";
import {
    Smartphone,
    LayoutDashboard,
    Cpu,
    Cloud,
    ShieldCheck,
    TrendingUp,
    Link,
    UserCheck,
    Settings,
    Zap,
    ArrowRight,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const appServices = [
    {
        title: "Mobile App Development",
        description: "Native and cross-platform apps for iOS and Android built for performance and scalability.",
        icon: <Smartphone className="w-10 h-10 text-blue-500" />,

        alt: "Mobile app development with code and devices"
    },
    {
        title: "UI/UX App Design",
        description: "Custom, engaging mobile interfaces and flows designed for conversion and retention.",
        icon: <LayoutDashboard className="w-10 h-10 text-blue-500" />,

        alt: "App designers creating user flows"
    },
    {
        title: "API Integration",
        description: "Robust integration with third-party APIs, cloud services, authentication, and more.",
        icon: <Link className="w-10 h-10 text-blue-500" />,

        alt: "API connections and network integrations"
    },
    {
        title: "Cloud Backend & Databases",
        description: "Serverless, scalable, and secure backend with Firebase, AWS, or custom cloud solutions.",
        icon: <Cloud className="w-10 h-10 text-blue-500" />,

        alt: "Cloud architecture and backend dashboard"
    },
    {
        title: "App Performance Optimization",
        description: "Speed, battery, and data-use optimizations to delight your end-users.",
        icon: <TrendingUp className="w-10 h-10 text-blue-500" />,

        alt: "Performance chart and mobile speed"
    },
    {
        title: "Security & Compliance",
        description: "From secure logins to GDPR, we ensure your apps are protected and compliant.",
        icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,

        alt: "App security shield and compliance symbols"
    },
    {
        title: "App Store Deployment",
        description: "End-to-end support for launch, submit, and update processes on Google Play & App Store.",
        icon: <UserCheck className="w-10 h-10 text-blue-500" />,

        alt: "App published on App Store"
    },
    {
        title: "IoT & Wearables",
        description: "Connect mobile apps to IoT devices and wearables for the next generation of digital experiences.",
        icon: <Zap className="w-10 h-10 text-blue-500" />,

        alt: "IoT and wearable integration"
    },
    {
        title: "Enterprise App Solutions",
        description: "Custom applications for business process automation and internal operations.",
        icon: <Cpu className="w-10 h-10 text-blue-500" />,

        alt: "Enterprise app dashboard"
    },
    {
        title: "Maintenance & Support",
        description: "Ongoing updates, enhancements, and technical support for your published apps.",
        icon: <Settings className="w-10 h-10 text-blue-500" />,

        alt: "Mobile maintenance analyst"
    }
];

const appStats = [
    { title: "5+", description: "Apps Launched" },
    { title: "4.95/5", description: "Client Rating" },
    { title: "92.9%", description: "Crash-Free Sessions" }
];

const AppDevelopmentPage = () => (
    <div className="bg-white text-blue-900 font-sans">
        <Helmet>
            <title>App Development Services | Brick 2 Technologies </title>
            <meta
                name="description"
                content="Discover our mobile app development services: iOS, Android, UI/UX, API integrations, and enterprise digital solutions. Launch fast and scale with confidence."
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://brick2tech.com/services/app-development" />
        </Helmet>
        <main>
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[90vh] px-6 py-24 gap-12 bg-white"
                aria-label="App Development Hero Section"
            >
                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left space-y-6 sm:pl-28">
                    {/* Icon with swing */}
                    <motion.div
                        animate={{ rotate: [0, 5, -5, 5, 0], y: [0, 10, -10, 10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="flex justify-center lg:justify-start"
                    >
                        <Smartphone className="w-16 h-16 text-indigo-600 drop-shadow-lg" />
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                         Next-Gen Mobile Apps. Built to Blow Up.
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
                        From concept to launch, we craft fast, intuitive, and beautiful apps tailored to your users.
                    </p>

                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#app-services"
                        className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-indigo-500 transition"
                    >
                        Explore Services <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </div>

                {/* Floating App Image */}
                <motion.div
                    animate={{ y: [0, -10, 0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="lg:w-1/2 flex justify-center"
                >
                    <img
                        src="https://res.cloudinary.com/diqux3y0a/image/upload/v1753692495/Lovepik_com-450098993-Flat_app_development_illustration_hy1q73.png"
                        alt="App development illustration"
                        className="w-full max-w-md lg:max-w-lg object-contain rounded-xl"
                        loading="lazy"
                    />
                </motion.div>
            </motion.section>




            {/* Services Section */}
            <motion.section
                id="services"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="px-6 py-24 max-w-7xl mx-auto bg-white"
                aria-labelledby="services-heading"
            >
                <h2
                    id="services-heading"
                    className="text-4xl font-bold text-center mb-12 text-blue-900"
                >
                    Our App Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {appServices.map((service) => (
                        <motion.article
                            key={service.title}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                            }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl relative overflow-hidden border border-gray-200"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-10"
                                role="presentation"
                                aria-hidden="true"
                            />
                            <div className="relative z-10">
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-blue-900">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
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
                className="bg-gray-100 px-6 py-24"
                aria-label="Why choose us"
            >
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <img
                        src="https://res.cloudinary.com/diqux3y0a/image/upload/v1753693247/why-choose-us_mkfmhr.png"
                        alt="Mobile app development team collaborating"
                        className="w-full lg:w-1/2 rounded-2xl shadow-xl object-cover"
                        loading="lazy"
                    />
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-4xl font-bold text-blue-900">
                            Why choose Us?
                        </h2>
                        <p className="text-gray-700">
                            We specialize in mobile-first thinking, crystal-clear UI/UX, and reliable code to deliver apps that users love.
                        </p>
                        <ul className="space-y-4 text-blue-900 list-none">
                            <li className="flex items-start gap-3"><span className="text-blue-500">✓</span> Native & hybrid app expertise</li>
                            <li className="flex items-start gap-3"><span className="text-blue-500">✓</span> End-to-end integration & support</li>
                            <li className="flex items-start gap-3"><span className="text-blue-500">✓</span> App analytics, performance, and A/B testing</li>
                            <li className="flex items-start gap-3"><span className="text-blue-500">✓</span> Rapid prototyping and go-live cycles</li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="px-6 py-24 max-w-7xl mx-auto text-center bg-white"
                aria-labelledby="stats-heading"
            >
                <h2
                    id="stats-heading"
                    className="text-4xl font-bold mb-12 text-blue-900"
                >
                    Our Track Record
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {appStats.map((stat) => (
                        <motion.div
                            key={stat.title}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
                        >
                            <p className="text-5xl font-extrabold text-blue-500">
                                {stat.title}
                            </p>
                            <p className="text-gray-700 mt-3 font-medium">
                                {stat.description}
                            </p>
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
                className="bg-cover bg-center text-blue-900 text-center px-6 py-24 relative"
                role="region"
                aria-label="Call to action"
            >
                <div className="absolute inset-0 bg-white bg-opacity-10" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl sm:text-4xl font-semibold mb-6 text-center">
                        Launch your boldest mobile ideas with us.
                    </h2>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-500 text-blue-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-800 text-white transition"
                    >
                        Get Started Today
                    </a>
                </div>
            </motion.section>
        </main>
    </div>
);

export default AppDevelopmentPage;
