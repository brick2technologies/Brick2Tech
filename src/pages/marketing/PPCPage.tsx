import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Target, Zap, PenTool, Calendar, Users, BarChart, CheckCircle } from "lucide-react";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const services = [
  {
    icon: <Target className="h-8 w-8 text-blue-500" />,
    title: "PPC Strategy Development",
    description: "We analyze your business goals, audience, and competitors to design a tailored PPC plan. This includes keyword research, competitor benchmarking, audience segmentation, and ad copy planning to reach your ideal customers.",
  },
  {
    icon: <PenTool className="h-8 w-8 text-green-500" />,
    title: "Ad Creation & Design",
    description: "From search ads and display banners to video and social media ads, we craft high-performing creatives that attract attention, drive clicks, and convert audiences.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-pink-500" />,
    title: "Campaign Management & Scheduling",
    description: " We manage campaigns across Google Ads, Bing, YouTube, Facebook, and Instagram—optimizing bid strategies, placements, and timing for maximum impact.",
  },
  {
    icon: <Users className="h-8 w-8 text-yellow-500" />,
    title: "Audience Targeting & Retargeting",
    description: "We reach the right audience using geo-targeting, demographic targeting, and retargeting campaigns to re-engage potential leads who didn’t convert initially.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-purple-500" />,
    title: "Performance Tracking & Optimization",
    description: "We monitor metrics like CTR, CPC, conversion rate, and ROAS—providing actionable insights and refining campaigns for higher efficiency and ROI.",
  },
];

const PPCPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Best PPC Company in Hyderabad | Brick2Tech</title>
        <meta
          name="description"
          content="Brick2Tech, the best PPC company in Hyderabad, offers data-driven PPC services to boost traffic, generate leads, and maximize ROI."
        />
        <meta
          name="keywords"
          content="best PPC company in Hyderabad, PPC services Hyderabad, search engine marketing, Brick2Tech PPC, pay per click advertising"
        />
        <meta
          name="canonical"
          content="https://brick2tech.com/services/social-engine-marketing"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brick2Tech Technologies" />
        <meta
          property="og:title"
          content="Best PPC Services in Hyderabad | Brick2Tech"
        />
        <meta
          property="og:description"
          content="Drive targeted traffic and maximize conversions with Brick2Tech’s expert PPC services in Hyderabad. Start optimizing your ad ROI today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://brick2tech.com/services/ppc"
        />
        <meta
          property="og:image"
          content="https://brick2tech.com/assets/ppc-banner.png"
        />
        <meta property="og:site_name" content="Brick2Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hyderabad’s #1 PPC Agency - Brick2Tech"
        />
        <meta
          name="twitter:description"
          content="Boost your brand with Brick2Tech’s ROI-focused PPC campaigns across Google, Bing, and social platforms."
        />
        <meta
          name="twitter:image"
          content="https://brick2tech.com/assets/ppc-banner.png"
        />
      </Helmet>

      {/* Hero Section */}
      <motion.section
  className="relative min-h-[80vh] flex items-center justify-center px-6 sm:px-12  text-center overflow-hidden"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  aria-labelledby="hero-heading"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: "url('https://res.cloudinary.com/diqux3y0a/image/upload/v1753336272/ppc_illustration.png')" }}
    aria-hidden="true"
  ></div>

  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-900/30 to-blue-900/50"></div>

  {/* Centered Content */}
  <div className="relative z-10 max-w-3xl flex flex-col items-center justify-center text-white">
    <h1
      id="hero-heading"
      className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
    >
      <span className="block">Drive Traffic. Boost Conversions.</span>
      <span className="block text-blue-400">Maximize ROI.</span>
    </h1>
    <p className="text-lg sm:text-xl mb-8">
      As the best PPC company in Hyderabad, Brick2Tech delivers customized PPC strategies that drive targeted traffic, generate high-quality leads, and accelerate business growth.
    </p>
    <Link
      to="/contact"
      className="inline-flex items-center justify-center gap-2 bg-blue-400 hover:bg-yellow-500 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition"
      aria-label="Get a free PPC consultation from Brick2Tech"
    >
      Free PPC Consultation <Zap className="w-5 h-5" />
    </Link>
  </div>
</motion.section>



      {/* Services Section */}
      <motion.section
        className="py-20 px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        aria-labelledby="services-heading"
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-blue-900"
          >
            Our PPC Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Our PPC specialists combine data-driven insights, competitive research, and creative ad design to target the right audience at the right time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.article
              key={service.title}
              className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={fadeUp}
              custom={idx + 1}
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
      </motion.section>

      {/* PPC Process Section */}
      <motion.section
        className="py-20 px-6 bg-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        aria-labelledby="process-heading"
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl font-bold text-blue-900"
          >
            Our PPC Process at Brick2Tech
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Every business is unique—so is every PPC campaign. We ensure your ads deliver measurable results through a strategic, data-driven approach.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Audience-Focused Campaigns",
              desc: "Every ad targets your ideal customers, addressing their intent and search behavior with precision.",
            },
            {
              title: "Keyword & Competitor Strategy",
              desc: "We select high-performing keywords and monitor competitors to ensure your ads stay ahead in the digital space.",
            },
            {
              title: "Brand Awareness & Lead Generation",
              desc: "Our campaigns are designed to attract clicks, strengthen brand presence, and generate qualified leads.",
            },
            {
              title: "Conversion-Centric Campaigns",
              desc: "Through optimized landing pages, ad funnels, and call-to-action strategies, we turn traffic into measurable business outcomes.",
            },
            {
              title: "Data-Driven Optimization",
              desc: " Continuous performance analysis ensures campaigns improve over time—reducing wasteful spend and increasing profitability.",
            },
          ].map((step, idx) => (
            <motion.article
              key={step.title}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={fadeUp}
              custom={idx + 1}
              aria-label={step.title}
            >
              <div className="mb-4 text-blue-500" aria-hidden="true">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Brick2Tech Section */}
      <motion.section
        className="py-20 px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        aria-labelledby="why-choose-heading"
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2
            id="why-choose-heading"
            className="text-3xl md:text-4xl font-bold text-blue-900"
          >
            Why Choose Brick2Tech for PPC Services?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "ROI-Focused Advertising",
              desc: "Every campaign is designed to deliver measurable results, maximizing your ad spend and driving revenue.",
            },
            {
              title: "Multi-Platform Expertise",
              desc: "We run PPC campaigns across Google, Bing, Meta, LinkedIn, and YouTube—leveraging each platform’s strengths.",
            },
            {
              title: "Long-Term Growth Strategy",
              desc: "Our campaigns are built to deliver sustainable results, generating leads and visibility well beyond short-term campaigns.",
            },
            {
              title: "Advanced Tools & Technology",
              desc: " We leverage AI-driven analytics, bid management platforms, and conversion tracking to optimize every campaign.",
            },
            {
              title: "Local Expertise + Global Standards",
              desc: "Based in Hyderabad, we combine local market insights with global PPC best practices for diverse industries.",
            },
          ].map((reason, idx) => (
            <motion.article
              key={reason.title}
              className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={fadeUp}
              custom={idx + 1}
              aria-label={reason.title}
            >
              <div className="mb-4 text-blue-500" aria-hidden="true">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        aria-labelledby="cta-heading"
      >
        <h2
          id="cta-heading"
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
        >
          Ready to Drive Targeted Traffic and Maximize Conversions?
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Let Brick2Tech, Hyderabad’s best PPC company, turn your campaigns into lead-generating machines and growth accelerators.
        </p>
        <Link to="/contact" className="inline-block mb-4">
          <button
            className="bg-[#0096d4] hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg transition"
            aria-label="Get a free PPC consultation with Brick2Tech"
          >
            Get Free PPC Consultation
          </button>
        </Link>
        <p className="text-sm text-gray-500 font-medium">
          No commitments, just smarter advertising.
        </p>
      </motion.section>
    </div>
  );
};

export default PPCPage;