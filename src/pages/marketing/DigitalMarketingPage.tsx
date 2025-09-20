import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
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
  Mail,
  BarChart4,
  DollarSign,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { SparklesIcon, RocketLaunchIcon, BoltIcon } from "@heroicons/react/24/solid";

// Deduplicated and organized floating icons for better variety and distribution
const floatingIcons = [
  { Icon: SparklesIcon, top: "10%", left: "5%" },        // Creativity
  { Icon: RocketLaunchIcon, top: "30%", right: "8%" },   // Campaign launch
  { Icon: BoltIcon, bottom: "15%", left: "10%" },        // Performance
  { Icon: Mail, top: "15%", right: "12%" },              // Email marketing
  { Icon: Search, bottom: "25%", right: "6%" },          // SEO
  { Icon: BarChart4, top: "45%", left: "6%" },           // Analytics
  { Icon: DollarSign, bottom: "20%", left: "15%" },      // ROI / Paid Ads
  { Icon: Instagram, top: "5%", right: "25%" },          // Social Media
  { Icon: Facebook, bottom: "10%", right: "20%" },       // Facebook Ads
  { Icon: Youtube, top: "40%", right: "30%" },           // Video Marketing
  { Icon: UserCheck, bottom: "30%", left: "20%" },       // Lead Generation
  { Icon: TrendingUp, bottom: "15%", left: "5%" },       // Growth Tracking  
  { Icon: Smartphone, top: "70%", right: "15%" },        // Mobile Marketing
  { Icon: Globe2, bottom: "25%", left: "30%" },          // Global Reach
  { Icon: Zap, top: "80%", right: "20%" },               // Innovation
];

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
      ease: 'easeOut',
    },
  },
};

const services = [
  {
    icon: <Search className="h-8 w-8 text-blue-600" />,
    title: "SEO Optimization",
    description:
      "Boost your organic traffic with robust on-page and off-page SEO, content, and technical audits.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-green-600" />,
    title: "Paid Ads (PPC)",
    description:
      "Maximize ROI with Google Ads, Meta (Facebook/Instagram) Ads, and laser-focused targeting.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-purple-500" />,
    title: "Analytics & Reporting",
    description:
      "Advanced Google Analytics & Data Studio dashboards to measure and optimize every campaign.",
  },
  {
    icon: <MousePointerClick className="h-8 w-8 text-yellow-500" />,
    title: "Conversion Rate Optimization",
    description:
      "A/B and multivariate testing to turn your visitors into loyal customers.",
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-emerald-600" />,
    title: "Ecommerce Marketing",
    description:
      "Scalable digital strategies for online stores — from product feed optimization to retargeting.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-pink-500" />,
    title: "Mobile Marketing",
    description:
      "SMS, app store, and push notification campaigns that get you noticed on every device.",
  },
  {
    icon: <Globe2 className="h-8 w-8 text-blue-700" />,
    title: "Web Presence Management",
    description:
      "Directory listings, review management, and online reputation elevation for your brand.",
  },
  {
    icon: <Zap className="h-8 w-8 text-orange-500" />,
    title: "Growth Hacking Campaigns",
    description:
      "Unconventional, creative strategies for faster digital growth and viral traction.",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-indigo-600" />,
    title: "Lead Generation",
    description:
      "Landing pages, funnels, and automation to fill your pipeline with quality prospects.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
    title: "Content Marketing",
    description:
      "Blogs, guides, infographics, and videos to position you as a thought leader in your niche.",
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
      <title>Top Digital Marketing agency in hyderabad | Brick2Tech</title>
      <meta name="description" content="Brick2Tech is your top digital marketing agency in Hyderabad for powerful strategies in SEO, social media, PPC, and performance-driven growth." />
      <meta name="keywords" content="top digital marketing agency in hyderabad, advertising agency in hyderabad, online marketing companies in hyderabad" />

      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://brick2tech.com/services/digital-marketing" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://brick2tech.com/services/digital-marketing" />
      <meta property="og:title" content="Digital Marketing Services | Brick2Tech" />
      <meta
        property="og:description"
        content="Crush your digital goals with Brick2Tech. SEO, Ads, CRO, Analytics — full-funnel marketing services that scale."
      />
      <meta property="og:image" content="https://brick2tech.com/images/og-digital-marketing.jpg" />
      
      <meta property="og:site_name" content="Brick2Tech" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://brick2tech.com/services/digital-marketing" />
      <meta name="twitter:title" content="Digital Marketing Services | Brick2Tech" />
      <meta
        name="twitter:description"
        content="Full-stack digital marketing for scale: SEO, ads, CRO, analytics and more with Brick2Tech."
      />
      <meta name="twitter:image" content="https://brick2tech.com/images/og-digital-marketing.jpg" />

      {/* Structured Data - Organization + Social Links */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Brick2Tech",
          "url": "https://brick2tech.com",
          "logo": "https://brick2tech.com/logo.png",
          "sameAs": [
            "https://www.facebook.com/brick2technologies",
            "https://www.instagram.com/brick2technologies/",
            "https://www.youtube.com/@brick2technologies",
            "https://x.com/brick2tech",
            "https://in.pinterest.com/brick2technologies/",
            "https://www.linkedin.com/company/brick-2-technologies/"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "info@brick2tech.com",
            "url": "https://brick2tech.com/contact"
          }
        })}
      </script>
    </Helmet>

    <h1 className="sr-only">Top Digital Marketing agency in hyderabad</h1>
    
    {/* Hero Section - Enhanced with softer gradients, better padding, and refined animations */}
    <motion.section
      className="relative w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      aria-labelledby="hero-heading"
    >
      {/* Animated Floating Icons - Smoother animation and reduced opacity for subtlety */}
      {floatingIcons.map(({ Icon, ...pos }, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-500 opacity-20"
          style={{ ...pos }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
        </motion.div>
      ))}

      {/* Main Content - Improved typography and spacing */}
      <div className="max-w-4xl z-10">
        <h2
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-indigo-900 leading-tight tracking-tight"
        >
          Digital Marketing that Delivers. <br />
          <span className="text-blue-600">
            Growth Obsessed. Results Guaranteed.
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Your brand deserves more than just impressions. At Brick2Tech, we
          build digital marketing engines — SEO, ads, analytics, and conversion
          copywriting that transforms visibility into measurable business
          growth.
        </p>
        <a
          href="#services"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-xl transition duration-300 transform hover:scale-105"
          aria-label="Contact Brick2Tech for Digital Marketing"
        >
          Explore Our Services
          <ArrowPathIcon className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </motion.section>

    {/* Intro Section - Refined styles for better flow and visual hierarchy */}
    <motion.div
      className="relative z-10 mx-4 sm:mx-8 lg:mx-16 -mt-12 sm:-mt-16 lg:-mt-20 top-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto 40px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
        borderRadius: '20px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      }}
    >
      <motion.h1
        variants={sectionVariants}
        className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-4"
      >
        Digital Marketing Solutions by Brick2Tech
      </motion.h1>
      <motion.h2
        variants={sectionVariants}
        className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-6"
      >
        Grow Your Brand with Expert Strategies and Proven Results
      </motion.h2>
      <motion.h3
        className="text-xl sm:text-2xl font-medium text-blue-600 mb-8 sr-only"
      >
        Digital Marketing Agency in Hyderabad
      </motion.h3>
      <motion.p
        variants={sectionVariants}
        className="text-base sm:text-lg text-gray-700 line-height-7 mb-6 max-w-3xl mx-auto"
      >
        In an increasingly competitive online landscape, having a strong digital presence is essential to drive growth and connect with your audience. At Brick2Tech, we are proud to be recognized as a leading digital marketing agency in Hyderabad, helping businesses of all sizes achieve their goals through customized, data-driven strategies.
      </motion.p>
      <motion.p
        variants={sectionVariants}
        className="text-base sm:text-lg text-gray-700 line-height-7 max-w-3xl mx-auto mb-8"
      >
        Our team combines creativity, technology, and analytical insights to deliver campaigns that increase visibility, generate leads, and maximize ROI. Whether you’re a startup building your brand or an enterprise scaling your digital efforts, we offer comprehensive marketing solutions designed to make your brand stand out and thrive in today’s fast-paced digital world.
      </motion.p>
      <motion.a
        href="#contact"
        variants={buttonVariants}
        className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg shadow-lg transition duration-300 hover:bg-blue-700 hover:scale-105"
      >
        Get Started with Brick2Tech
      </motion.a>
    </motion.div>

    {/* Services Section - Improved grid spacing and card designs */}
    <section className="py-20 px-6 bg-white" aria-labelledby="services-heading" id="services">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          id="services-heading"
          className="text-4xl sm:text-5xl font-bold text-indigo-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What We Do Best
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <motion.article
            key={service.title}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            aria-label={service.title}
          >
            <div className="mb-4 flex justify-center" aria-hidden="true">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center text-sm">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>

    {/* Stats Section - Enhanced with larger fonts and better shadows */}
    <section className="py-20 bg-blue-50 px-6" aria-labelledby="impact-heading">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          id="impact-heading"
          className="text-4xl sm:text-5xl font-bold text-indigo-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Digital Results, Real Impact
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="bg-white p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-blue-600">{stat.value}</h3>
            <p className="text-gray-600 mt-2 text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA Section - Softer gradient and bolder typography */}
    <motion.section
      className="py-20 px-6 bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      aria-labelledby="cta-heading"
    >
      <h2
        id="cta-heading"
        className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-6"
      >
        Ready to Outrank, Outperform & Outgrow Your Competitors?
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Partner with Brick2Tech and experience a marketing approach engineered
        for growth. Let’s turn big ambitions into digital impact — together.
      </p>
      <Link to="/contact" className="inline-block mb-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-xl transition duration-300 transform hover:scale-105"
          aria-label="Request your digital marketing audit from Brick2Tech"
        >
          Get Free Digital Audit
        </button>
      </Link>
      <p className="text-base text-gray-500 font-medium">
        Your custom growth roadmap — no cost, no obligation.
      </p>
    </motion.section>
  </div>
);

export default DigitalMarketingPage;