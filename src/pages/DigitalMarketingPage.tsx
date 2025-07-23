import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Search,
  MousePointerClick,
  ShoppingCart,
  BarChart3,
  PieChart,
  Smartphone,
  Globe2,
  Zap,
  UserCheck,
} from "lucide-react";

const services = [
  {
    icon: <Search className="h-8 w-8 text-blue-600" />,
    title: "SEO Optimization",
    description: "Boost your organic traffic with robust on-page and off-page SEO, content, and technical audits.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-green-600" />,
    title: "Paid Ads (PPC)",
    description: "Maximize ROI with Google Ads, Meta (Facebook/Instagram) Ads, and laser-focused targeting.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-purple-500" />,
    title: "Analytics & Reporting",
    description: "Advanced Google Analytics & Data Studio dashboards to measure and optimize every campaign.",
  },
  {
    icon: <MousePointerClick className="h-8 w-8 text-yellow-500" />,
    title: "Conversion Rate Optimization",
    description: "A/B and multivariate testing to turn your visitors into loyal customers.",
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-emerald-600" />,
    title: "Ecommerce Marketing",
    description: "Scalable digital strategies for online stores — from product feed optimization to retargeting.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-pink-500" />,
    title: "Mobile Marketing",
    description: "SMS, app store, and push notification campaigns that get you noticed on every device.",
  },
  {
    icon: <Globe2 className="h-8 w-8 text-blue-700" />,
    title: "Web Presence Management",
    description: "Directory listings, review management, and online reputation elevation for your brand.",
  },
  {
    icon: <Zap className="h-8 w-8 text-orange-500" />,
    title: "Growth Hacking Campaigns",
    description: "Unconventional, creative strategies for faster digital growth and viral traction.",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-indigo-600" />,
    title: "Lead Generation",
    description: "Landing pages, funnels, and automation to fill your pipeline with quality prospects.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
    title: "Content Marketing",
    description: "Blogs, guides, infographics, and videos to position you as a thought leader in your niche.",
  },
];

const stats = [
  { label: "Clients Served", value: "50+" },
  { label: "Avg. ROI", value: "4.2X" },
  { label: "Campaigns Launched", value: "120+" },
  { label: "Traffic Growth", value: "210%" },
];

const DigitalMarketingPage = () => (
  <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
    <Helmet>
      <title>Digital Marketing Services | Brick2Tech</title>
      <meta
        name="description"
        content="Take your growth digital with Brick2Tech! We deliver cutting-edge SEO, PPC, analytics, ecommerce, mobile, and results-driven strategy."
      />
      <meta
        name="keywords"
        content="Digital Marketing, SEO, PPC, Analytics, Conversion Rate, Lead Generation, Brick2Tech"
      />
      <link rel="canonical" href="https://brick2tech.com/digital-marketing" />
    </Helmet>

    {/* Hero Section */}
    <motion.section
      className="text-center py-24 px-6 bg-gradient-to-br from-sky-50 via-white to-purple-50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      aria-labelledby="hero-heading"
    >
      <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
        Digital Marketing that Delivers. <br /> Growth Obsessed. Results Guaranteed.
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Your brand deserves more than just impressions. At Brick2Tech, we build digital marketing engines — SEO, ads, analytics, and conversion copywriting that transforms visibility into measurable business growth.
      </p>
    </motion.section>

    {/* Services Section */}
    <section className="py-20 px-6 bg-white" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          id="services-heading"
          className="text-3xl md:text-4xl font-bold text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What We Do Best
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <motion.article
            key={service.title}
            className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            viewport={{ once: true }}
            aria-label={service.title}
          >
            <div className="mb-4" aria-hidden="true">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-20 bg-sky-50 px-6" aria-labelledby="impact-heading">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          id="impact-heading"
          className="text-3xl md:text-4xl font-bold text-blue-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Digital Results, Real Impact
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center max-w-4xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-blue-700">{stat.value}</h3>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <motion.section
      className="py-20 px-6 bg-gradient-to-r from-purple-100 via-sky-50 to-pink-100 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      aria-labelledby="cta-heading"
    >
      <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
        Ready to Outrank, Outperform & Outgrow Your Competitors?
      </h2>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Partner with Brick2Tech and experience a marketing approach engineered for growth. Let’s turn big ambitions into digital impact — together.
      </p>
      <Link to="/contact" className="inline-block mb-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg transition"
          aria-label="Request your digital marketing audit from Brick2Tech"
        >
          Get Free Digital Audit
        </button>
      </Link>
      <p className="text-sm text-gray-500 font-medium">
        Your custom growth roadmap — no cost, no obligation.
      </p>
    </motion.section>
  </div>
);

export default DigitalMarketingPage;
