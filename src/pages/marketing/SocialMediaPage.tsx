import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import socialMediaBg from "/images/smm-banner.png";

import {
  Users,
  ThumbsUp,
  TrendingUp,
  Clock,
  UserCheck,
  MessageSquare,
  Target,
} from "lucide-react";

const services = [
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
    title: "Content Creation & Design",
    description: "Visually stunning graphics, videos, reels, and stories that resonate with your audience.",
  },
  {
    icon: <Clock className="h-8 w-8 text-green-500" />,
    title: "Content Calendar & Strategy",
    description: "Planned posts with optimized timings to maximize reach and engagement.",
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-pink-500" />,
    title: "Paid Social Media Advertising",
    description: "Targeted campaigns on Facebook, Instagram, and LinkedIn to generate leads and conversions.",
  },
  {
    icon: <Users className="h-8 w-8 text-yellow-500" />,
    title: "Community Management",
    description: "Engaging with followers, responding to queries, and building brand trust.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
    title: "Performance Tracking & Analytics",
    description: "Detailed insights into impressions, clicks, engagement, and ROI.",
  },
  {
    icon: <Target className="h-8 w-8 text-blue-600" />,
    title: "Platform-Specific Growth",
    description: "Tailored strategies for Instagram reels, LinkedIn B2B marketing, Twitter trends, and Facebook groups.",
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
        <title>Best social media marketing agency hyderabad | Brick2Tech</title>
        <meta
          name="description"
          content="Engage your audience with a leading and best social media marketing agency in Hyderabad. Brick2Tech offers full-service SMM to build your brand online."
        />
        <meta
          name="keywords"
          content="social media marketing agency hyderabad, social media marketing hyderabad, social media marketing companies in hyderabad, social media marketing agency in hyderabad"
        />
        <meta
          name="canonical"
          content="https://brick2tech.com/social-media-marketing-services"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brick2Tech Technologies" />
        <meta
          property="og:title"
          content="Best Social Media Marketing Agency in Hyderabad | Brick2Tech"
        />
        <meta
          property="og:description"
          content="Elevate your brand with Brick2Tech’s expert social media marketing services in Hyderabad. Connect, engage, and grow with our tailored strategies."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://brick2tech.com/social-media-marketing-services"
        />
        <meta
          property="og:image"
          content="https://brick2tech.com/assets/social-banner.png"
        />
        <meta property="og:site_name" content="Brick2Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hyderabad’s #1 SMM Agency - Brick2Tech"
        />
        <meta
          name="twitter:description"
          content="Build a powerful social media presence with Brick2Tech’s creative storytelling and ROI-focused campaigns in Hyderabad."
        />
        <meta
          name="twitter:image"
          content="https://brick2tech.com/assets/social-banner.png"
        />
      </Helmet>

      {/* Hero Section */}
      <motion.section
  className="relative flex flex-col justify-center items-center text-center py-44 min-h-[90vh] px-6 bg-gradient-to-br from-blue-50 via-white to-pink-50 overflow-hidden"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  aria-labelledby="hero-heading"
>
  {/* Background Image with overlay */}
  <div
    className="absolute inset-0 bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: `url(${socialMediaBg})` }}
    aria-hidden="true"
  ></div>

  {/* Content */}
  <h2
    id="hero-heading"
    className="relative z-10 text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm"
  >
    Connect. Engage. Grow.
  </h2>
</motion.section>


      {/* Paragraph Section (below hero) */}
      <motion.section
  className="relative min-h-[80vh] flex flex-col items-center justify-center py-20 px-6 bg-white"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  role="region"
  aria-label="Social Media Marketing Overview Section"
>
  {/* Heading: Top & Center */}
  <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 text-center">
    Best Social Media Marketing Agency in Hyderabad
  </h1>

  {/* Grid: Left Image, Right Content */}
  <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mt-24 md:mt-32 gap-12">
    {/* Left Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="/images/social-media-marketing-about.jpg"
        alt="Social Media Marketing"
        className="w-full h-auto object-contain p-4"
      />
    </div>

    {/* Right Content */}
    <div className="w-full md:w-1/2 flex flex-col justify-center text-left space-y-6">
      <p className="text-lg text-gray-700 leading-relaxed">
        At Brick2Tech, we help brands build a powerful presence on social media
        platforms like Instagram, Facebook, LinkedIn, and Twitter with strategies
        that drive engagement, visibility, and conversions. Our goal is not just to
        grow followers but to create meaningful interactions that build long-term
        brand loyalty.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Social media is more than posting—it’s about storytelling, consistency, and
        data-driven campaigns. Our expert team combines creative design, engaging
        content, and precise audience targeting to ensure your brand stands out in
        the crowded digital space. Whether you’re launching a product, scaling your
        online footprint, or running seasonal campaigns, we’ve got you covered.
      </p>  
    </div>
  </div>
</motion.section>



      {/* Services Section */}
      <section
        className="py-10 px-6 bg-white"
        aria-labelledby="services-heading"
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-blue-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Core SMM Services
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            From startups to established brands, our tailored SMM services ensure your brand stands out in the crowded digital space.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
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
              <div className="mb-4" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SMM Process Section */}
      <section
        className="py-20 px-6 bg-blue-50"
        aria-labelledby="process-heading"
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            id="process-heading"
            className="text-3xl md:text-4xl font-bold text-blue-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our SMM Process at Brick2Tech
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Our result-oriented approach ensures your brand connects, engages, and grows with measurable success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Research & Strategy",
              desc: "Audience analysis, competitor study, and content planning to align with your goals.",
            },
            {
              title: "Creative Content Development",
              desc: "Engaging visuals, captions, and storytelling that resonate with your audience.",
            },
            {
              title: "Campaign Execution",
              desc: "Posting, ad launches, and community engagement to maximize reach.",
            },
            {
              title: "Optimization & Reporting",
              desc: "Tracking results and refining strategies for maximum ROI.",
            },
          ].map((step, idx) => (
            <motion.article
              key={step.title}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              aria-label={step.title}
            >
              <div className="mb-4 text-blue-500" aria-hidden="true">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Why Choose Brick2Tech Section */}
      <section
        className="py-20 px-6 bg-white"
        aria-labelledby="why-choose-heading"
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            id="why-choose-heading"
            className="text-3xl md:text-4xl font-bold text-blue-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Brick2Tech for Social Media Marketing?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Creative Storytelling Experts",
              desc: "Turning ideas into engaging social media content that connects with your audience.",
            },
            {
              title: "ROI-Focused Campaigns",
              desc: "Designed to generate leads and conversions, not just likes.",
            },
            {
              title: "Proven Track Record",
              desc: "Helped brands across industries achieve rapid growth on social media.",
            },
            {
              title: "Data-Driven Insights",
              desc: "Regular reporting with clear performance metrics to track success.",
            },
            {
              title: "Dedicated Support",
              desc: "Personalized strategies tailored to your business goals.",
            },
          ].map((reason, idx) => (
            <motion.article
              key={reason.title}
              className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              aria-label={reason.title}
            >
              <div className="mb-4 text-blue-500" aria-hidden="true">
                <UserCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-20 bg-blue-50 px-6"
        aria-labelledby="impact-heading"
      >
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
        className="py-20 px-6 bg-gradient-to-r from-sky-100 via-blue-50 to-indigo-100 text-center"
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
          Ready to Build a Powerful Social Media Presence?
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Let Brick2Tech, Hyderabad’s best SMM Agency, help you connect, engage, and grow with tailored social media strategies.
        </p>
        <Link to="/contact" className="inline-block mb-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg transition"
            aria-label="Schedule a free strategy call with Brick2Tech"
          >
            Get Free Strategy Call
          </button>
        </Link>
        <p className="text-sm text-gray-500 font-medium">
          No strings attached, just smart strategy.
        </p>
      </motion.section>
    </div>
  );
};

export default SocialMediaMarketingPage;