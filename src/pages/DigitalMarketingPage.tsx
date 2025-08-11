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
  MailIcon,
  BarChart4Icon,
  DollarSignIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  Mail,
  SearchIcon,
  UserCheck as UserCheckIcon,

} from "lucide-react";
import { SparklesIcon, RocketLaunchIcon, BoltIcon } from "@heroicons/react/24/solid";

const floatingIcons = [
  { Icon: SparklesIcon, top: "10%", left: "5%" },        // Creativity
  { Icon: RocketLaunchIcon, top: "30%", right: "8%" },   // Campaign launch
  { Icon: BoltIcon, bottom: "15%", left: "10%" },        // Performance
  { Icon: MailIcon, top: "15%", right: "12%" },          // Email marketing
  { Icon: SearchIcon, bottom: "25%", right: "6%" },      // SEO
  { Icon: BarChart4Icon, top: "45%", left: "6%" },       // Analytics
  { Icon: DollarSignIcon, bottom: "20%", left: "15%" },  // ROI / Paid Ads
  { Icon: InstagramIcon, top: "5%", right: "25%" },      // Social Media
  { Icon: FacebookIcon, bottom: "10%", right: "20%" },   // Facebook Ads
  { Icon: YoutubeIcon, top: "40%", right: "30%" },       // Video Marketing
  { Icon: UserCheckIcon, bottom: "30%", left: "20%" },    // Lead Generation
  { Icon: SearchIcon, top: "20%", left: "30%" },          // Keyword Research
  { Icon: Mail, top: "50%", right: "20%" },               // Email Campaigns
  { Icon: UserCheck, bottom: "5%", left: "25%" },        // User Engagement
  { Icon: BarChart3, top: "60%", right: "10%" },        // Data Insights
  { Icon: TrendingUp, bottom: "15%", left: "5%" },
  // Growth Tracking  
  { Icon: Smartphone, top: "70%", right: "15%" },         // Mobile Marketing
  { Icon: Globe2, bottom: "25%", left: "30%" },           // Global Reach
  { Icon: Zap, top: "80%", right: "20%" },                // Innovation
  { Icon: BoltIcon, bottom: "40%", left: "10%" },         // Speed & Efficiency
  { Icon: RocketLaunchIcon, top: "10%", right: "20%" },   // Launch Success
  { Icon: SparklesIcon, bottom: "30%", right: "15%" },    // Creative Solutions
  { Icon: MailIcon, top: "50%", left: "20%" },            // Email Engagement
  { Icon: SearchIcon, bottom: "20%", right: "25%" },      // Search Visibility
  { Icon: UserCheckIcon, top: "30%", left: "15%" },       // Customer Trust
  { Icon: BarChart4Icon, bottom: "10%", right: "5%" },    // Performance Metrics
];

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
      <title>Top Digital Marketing Agency in Hyderabad | Brick2Tech</title>
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
      <meta name="canonical" content="https://brick2tech.com/services/digital-marketing" />
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

        <h1 className="sr-only">Top Digital Marketing agency in hyderabad  </h1>
    {/* Hero Section */}
    <motion.section
      className="relative w-full bg-gradient-to-br from-[#0098d4]/10 via-white to-[#142c4c]/10 overflow-hidden flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      aria-labelledby="hero-heading"
    >
      {/* Animated Floating Icons */}
      {floatingIcons.map(({ Icon, ...pos }, i) => (
        <motion.div
          key={i}
          className="absolute text-[#0098d4] opacity-30"
          style={{ ...pos }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="h-10 w-10 sm:h-12 sm:w-12" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="max-w-3xl z-10">
        <h2
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#142c4c] leading-tight"
        >
          Digital Marketing that Delivers. <br />
          <span className="text-[#0098d4]">
            Growth Obsessed. Results Guaranteed.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8">
          Your brand deserves more than just impressions. At Brick2Tech, we
          build digital marketing engines — SEO, ads, analytics, and conversion
          copywriting that transforms visibility into measurable business
          growth.
        </p>
        <a
          href="#services"
          className="inline-flex items-center justify-center gap-2 bg-[#0098d4] hover:bg-[#007ba3] text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg shadow-lg transition duration-300"
          aria-label="Contact Brick2Tech for Digital Marketing"
        >
          Explore Our Services
          <ArrowPathIcon className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </motion.section>
    {/* Services Section */}
    <section className="py-20 px-6 bg-white" aria-labelledby="services-heading" id="services">
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
            <div className="mb-4" aria-hidden="true">
              {service.icon}
            </div>
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
      <h2
        id="cta-heading"
        className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
      >
        Ready to Outrank, Outperform & Outgrow Your Competitors?
      </h2>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Partner with Brick2Tech and experience a marketing approach engineered
        for growth. Let’s turn big ambitions into digital impact — together.
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
