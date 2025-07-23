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
    icon: <Code className="w-10 h-10 text-skyblue" />,

    alt: "Developer writing code for web development",
  },
  {
    title: "Responsive Design",
    description:
      "Mobile-first and cross-browser compatible layouts for a seamless user experience.",
    icon: <MonitorSmartphone className="w-10 h-10 text-skyblue" />,

    alt: "Smartphone and tablet with responsive UI layouts",
  },
  {
    title: "UI/UX Design",
    description:
      "Modern, intuitive, and accessible interfaces that keep users engaged.",
    icon: <Brush className="w-10 h-10 text-skyblue" />,

    alt: "Design team planning user experience",
  },
  {
    title: "Full Stack Integration",
    description:
      "Seamless integration of frontend with secure and scalable backend solutions.",
    icon: <Layers className="w-10 h-10 text-skyblue" />,

    alt: "Backend and frontend integration visualization",
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end development with React, Node.js, MongoDB, and Express for dynamic applications.",
    icon: <TrendingUp className="w-10 h-10 text-skyblue" />,

    alt: "Full stack application development flow",
  },
  {
    title: "Database Management",
    description:
      "Design, optimize, and manage databases with MongoDB, MySQL, and PostgreSQL.",
    icon: <Users className="w-10 h-10 text-skyblue" />,

    alt: "Database servers and data visualization",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Secure and seamless integration with Razorpay, Stripe, or PayPal to enable transactions.",
    icon: <Shield className="w-10 h-10 text-skyblue" />,

    alt: "Payment processing system online",
  },
  {
    title: "SEO Optimization",
    description:
      "Structured data, metadata, and performance enhancements to boost search rankings.",
    icon: <ArrowRight className="w-10 h-10 text-skyblue" />,

    alt: "SEO strategy with graphs and charts",
  },

  {
    title: "Performance Optimization",
    description:
      "Boost site speed and Core Web Vitals with lazy loading, caching, and minification.",
    icon: <TrendingUp className="w-10 h-10 text-skyblue" />,

    alt: "Speed optimization tools and performance chart",
  },
  {
    title: "CMS Integration",
    description:
      "Empower your team with headless CMS or WordPress for streamlined content management.",
    icon: <Users className="w-10 h-10 text-skyblue" />,

    alt: "Content management dashboard view",
  },
  {
    title: "API Development & Integration",
    description:
      "Secure, well-documented RESTful and GraphQL APIs for modern web architectures.",
    icon: <Shield className="w-10 h-10 text-skyblue" />,

    alt: "API documentation and network flow",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, bug fixes, and uptime monitoring for a worry-free website.",
    icon: <Lightbulb className="w-10 h-10 text-skyblue" />,
    alt: "Maintenance checklist and support headset",
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
        <title>Web Development Services | Modern, Scalable Solutions</title>
        <meta
          name="description"
          content="Explore our custom web development services including UI/UX design, responsive layouts, and full stack solutions. Drive conversions with cutting-edge websites."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/web-development" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 py-24 text-center bg-[#142c4c] bg-center"
          aria-label="Hero section"
        >
          <div className="absolute inset-0 bg-darkblue bg-opacity-70" />
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
              Smart, Efficient Web Architecture
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto text-white mb-8">
              Transform your digital presence with modern, scalable, and
              user-centric web solutions.
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#services"
              className="mt-10 inline-flex items-center gap-3 bg-white text-[#142c4c] px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-darkblue transition"
            >
              Discover Our Services <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
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
            className="text-4xl font-bold text-center mb-12 text-darkblue"
          >
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
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
                  <h3 className="text-xl font-semibold mb-3 text-darkblue">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
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
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
              alt="Web development team collaborating in a modern office"
              className="w-full lg:w-1/2 rounded-2xl shadow-xl object-cover"
              loading="lazy"
            />
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold text-darkblue">
                Why Partner with Us?
              </h2>
              <p className="text-gray-600">
                Our team combines expertise, innovation, and a client-first
                approach to deliver exceptional web solutions.
              </p>
              <ul className="space-y-4 text-darkblue list-none">
                <li className="flex items-start gap-3">
                  <span className="text-skyblue">✓</span> Agile development for
                  fast, iterative results
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-skyblue">✓</span> SEO-optimized and
                  performance-driven code
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-skyblue">✓</span> Built-in analytics and
                  CMS integration
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-skyblue">✓</span> Ongoing support and
                  maintenance
                </li>
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
          className="px-6 py-24 max-w-7xl mx-auto text-center bg-white"
          aria-labelledby="stats-heading"
        >
          <h2
            id="stats-heading"
            className="text-4xl font-bold mb-12 text-darkblue"
          >
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <p className="text-5xl font-extrabold text-skyblue">
                  {stat.title}
                </p>
                <p className="text-gray-600 mt-3 font-medium">
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
          className="bg-cover bg-center text-[#142c4c] text-center px-6 py-24 relative"
          role="region"
          aria-label="Call to action"
        >
          <div className="absolute inset-0 bg-darkblue bg-opacity-75" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
              Built for bold ideas. Your business’s digital launchpad is
              ready—are you?
            </h2>

            <a
              href="/contact"
              className="inline-block bg-skyblue text-[#142c4c] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-darkblue transition"
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
