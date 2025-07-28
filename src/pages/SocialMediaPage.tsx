import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Users,
  Share2,
  ThumbsUp,
  TrendingUp,
  Clock,
  Zap,
  UserCheck,
  MessageSquare,
  Mic,
  Target,
} from "lucide-react";

const services = [
  {
    icon: <Share2 className="h-8 w-8 text-blue-500" />,
    title: "Content Strategy",
    description: "Crafting tailored content calendars and campaigns for maximum engagement.",
  },
  {
    icon: <Users className="h-8 w-8 text-green-500" />,
    title: "Community Management",
    description: "Engaging with followers, responding to comments, and managing brand presence.",
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-pink-500" />,
    title: "Social Ads & Boosting",
    description: "Driving leads and conversions through paid ad strategies on Meta, Instagram, LinkedIn, and Google Ads.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
    title: "Analytics & Reporting",
    description: "Providing performance reports with insights to optimize future campaigns.",
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-500" />,
    title: "Trend-Jacking Campaigns",
    description: "Capitalizing on real-time trends to create viral moments that boost visibility and engagement.",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-blue-600" />,
    title: "Influencer Collaborations",
    description: "Partnering with niche influencers to build trust, expand reach, and drive targeted engagement.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-emerald-500" />,
    title: "Brand Storytelling",
    description: "Creating compelling narratives that emotionally connect with your audience across platforms.",
  },
  {
    icon: <Mic className="h-8 w-8 text-red-500" />,
    title: "Reels & Shorts Production",
    description: "Producing scroll-stopping short-form videos optimized for Instagram Reels, YouTube Shorts and meta stories.",
  },
];

const stats = [
  { label: "Brands Managed", value: "10+" },
  { label: "Avg. Engagement Rate", value: "5.2%" },
  { label: "Ad ROI", value: "3X" },
  { label: "Followers Gained", value: "10K+" },
];

const SocialMediaMarketingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Social Media Marketing Services | Brick2Tech</title>
        <meta
          name="description"
          content="Boost your brand visibility with Brick2Tech's expert social media marketing services. We specialize in viral content, paid ads, and analytics-driven campaigns."
        />
        <meta name="keywords" content="Social Media Marketing, Content Strategy, Instagram Ads, Meta Ads, Community Management, Brick2Tech, Social Media Hyderabad, Influencer marketing, short-form video production, LinkedIn strategy, engagement campaigns" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brick2Tech" />
        <meta property="og:title" content="Social Media Marketing Experts in Hyderabad | Brick2Tech" />
        <meta
          property="og:description"
          content="Ready to elevate your social presence? Brick2Tech crafts content and campaigns that build engagement, awareness, and ROI. Get started today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brick2tech.com/social-media-marketing" />
        <meta property="og:image" content="https://brick2tech.com/assets/social-banner.png" />
        <meta property="og:site_name" content="Brick2Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hyderabad’s Best Social Media Marketing Agency - Brick2Tech" />
        <meta
          name="twitter:description"
          content="Strategic content, ad campaigns & influencer marketing that deliver results. Work with Brick2Tech, Hyderabad’s trusted social media experts."
        />
        <meta name="twitter:image" content="https://brick2tech.com/assets/social-banner.png" />
        <link rel="canonical" href="https://brick2tech.com/social-media-marketing" />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        className="text-center py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-pink-50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        aria-labelledby="hero-heading"
      >
        <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
          Smarter Social Media — Amplify Your Voice. Engage Your Audience. Grow Your Brand.
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We don’t just create content — at Brick2Tech, we build movements that connect, engage, and grow your digital tribe. From viral campaigns to targeted ads, our social media marketing services are designed to elevate your brand's presence and drive real results.
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
            Our Core Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.article
              key={service.title}
              className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
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
      <section className="py-20 bg-blue-50 px-6" aria-labelledby="impact-heading">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            id="impact-heading"
            className="text-3xl md:text-4xl font-bold text-blue-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Impact That Speaks for Itself
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
        className="py-20 px-6 bg-gradient-to-r from-pink-100 via-blue-50 to-purple-100 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        aria-labelledby="cta-heading"
      >
        <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Don’t Just Compete—Turn Scrolls Into Sales and Dominate the Feed.
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Our social media strategies make your brand trend, engage, and convert—building loyalty that lasts.
        </p>
        <Link to="/contact" className="inline-block mb-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg transition"
            aria-label="Schedule a free strategy call with Brick2Tech"
          >
            Get Free Strategy Call
          </button>
        </Link>
        <p className="text-sm text-gray-500 font-medium"> No strings attached, just smart strategy.</p>
      </motion.section>
    </div>
  );
};

export default SocialMediaMarketingPage;
