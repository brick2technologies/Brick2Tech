import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { CheckCircle, Target, PenTool, Calendar, Megaphone, BarChart } from "lucide-react";

import ContentBG from "/images/contentBG.jpg"; // Ensure this path is correct

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const contentFeatures = [
  {
    icon: <Target className="w-12 h-12 text-sky-500" />,
    title: "Content Strategy Development",
    description:
      "Custom strategies built on keyword research, competitor insights, and audience behavior to align with your business goals.",
  },
  {
    icon: <PenTool className="w-12 h-12 text-green-500" />,
    title: "Content Creation",
    description:
      "High-quality blogs, articles, case studies, infographics, and social posts designed to engage and rank.",
  },
  {
    icon: <Calendar className="w-12 h-12 text-purple-500" />,
    title: "Content Planning & Scheduling",
    description:
      "Structured calendars to maintain consistency across platforms and campaigns, ensuring timely content delivery.",
  },
  {
    icon: <Megaphone className="w-12 h-12 text-pink-500" />,
    title: "Content Distribution & Promotion",
    description:
      "Smart promotion through SEO, email, social media, and influencer collaborations to maximize reach.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-yellow-500" />,
    title: "Content Performance Tracking",
    description:
      "Actionable insights from analytics—measuring reach, engagement, and conversions to optimize performance.",
  },
];

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}> = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 hover:border-blue-200"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const ContentMarketingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Best Content Marketing Services in Hyderabad | Brick2Tech</title>
        <meta
          name="description"
          content="Boost your brand visibility with Brick2Tech, offering the best content marketing services in Hyderabad. Drive traffic, engage audiences, and grow your business with strategic, result-driven content solutions."
        />
        <meta
          name="keywords"
          content="content marketing services in hyderabad, best content marketing services in hyderabad, content marketing agency in hyderabad, content marketing Services in hyderabad, digital marketing services in hyderabad, seo content marketing hyderabad, brick2tech content marketing"
        />
        <meta name="canonical" content="https://www.brick2tech.com/content-marketing" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brick2Tech Technologies" />
        <meta property="og:title" content="Best Content Marketing Services in Hyderabad | Brick2Tech" />
        <meta
          property="og:description"
          content="Elevate your brand with Brick2Tech’s strategic content marketing services in Hyderabad. Drive leads and authority with SEO-friendly, engaging content."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brick2tech.com/content-marketing" />
        <meta property="og:image" content="https://brick2tech.com/assets/content-banner.png" />
        <meta property="og:site_name" content="Brick2Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hyderabad’s #1 Content Marketing Agency - Brick2Tech" />
        <meta
          name="twitter:description"
          content="Boost engagement, leads, and brand authority with Brick2Tech’s expert content marketing services in Hyderabad."
        />
        <meta name="twitter:image" content="https://brick2tech.com/assets/content-banner.png" />
      </Helmet>

      <main
        className="bg-gradient-to-br from-white via-sky-100 to-blue-200 text-gray-800 overflow-x-hidden"
        aria-label="Content Marketing Service Page"
      >

        {/* Hero Section */}
        <motion.section
          className="relative min-h-[90vh] flex items-center justify-center px-6 sm:px-12 overflow-hidden text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          role="region"
          aria-label="Content Marketing Services Section"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${ContentBG})` }}
            aria-hidden="true"
          />
          {/* Content Marketing Services Content */}
          <div className="relative z-10 max-w-4xl flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Elevate Your Brand with Powerful Content Marketing
            </h2>
            <p className="text-lg text-white">
              From engaging blogs to impactful social media campaigns, Brick2Tech delivers content strategies that boost visibility, connect with your audience, and drive real business results.
            </p>
          </div>

        </motion.section>

        {/* Content Marketing Overview Section */}
        <motion.section
          className="relative py-10 px-6 sm:px-12 bg-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          role="region"
          aria-label="Content Marketing Overview Section"
        >
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Best Content Marketing Services in Hyderabad
          </h1>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src="/images/content-marketing-about.png" // replace with your actual image path
                alt="Content Marketing"
                className="w-full  h-auto object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6 text-center md:text-left">

              <p className="text-lg text-gray-700 leading-relaxed">
                In today’s digital-first world, content isn’t optional—it’s essential. At Brick2Tech, we believe content is more than just words; it’s a strategic asset that builds authority, drives leads, and fuels measurable business growth. As the <strong>Best Content Marketing Services in Hyderabad</strong>, we help businesses tell their story in a way that resonates with audiences and inspires action.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our content marketing experts combine creativity, data, and industry insights to craft content that informs, engages, and converts. From SEO-friendly blogs to engaging social media posts, our tailored content strategies boost visibility, generate leads, and strengthen brand credibility. From strategy to execution to promotion, we manage the entire content lifecycle—ensuring your brand stands out in the crowded digital landscape.
              </p>
            </div>
          </div>
        </motion.section>


        {/* Core Content Marketing Services Section */}
       <section
      className="py-24 px-6 bg-gradient-to-br from-blue-50 to-indigo-50"
      role="region"
      aria-label="Core Content Marketing Services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-800 mb-6">
            Our Core Content Marketing Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-indigo-900 mb-6">
            Engaging Content That Drives Growth
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            At Brick2Tech, we provide end-to-end content marketing services to help your business engage audiences, build authority, and drive sustainable growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentFeatures.map((feature, index) => (
            <ServiceCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-center mt-16 text-lg font-semibold text-blue-700">
          📈 RATED #1 Best Content Marketing Services in Hyderabad – Driving Measurable Impact
        </p>
      </div>
    </section>

        {/* Content Marketing Process Section */}
        <motion.section
          className="py-12 px-6 bg-blue-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          role="region"
          aria-label="Content Marketing Process"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Our Content Marketing Process at Brick2Tech
            </h2>
            <p className="text-center text-white max-w-3xl mx-auto mb-16 text-lg">
              Recognized as the best content marketing Services in Hyderabad, Brick2Tech follows a strategic, data-driven approach to deliver measurable content success.
            </p>
            <motion.section
              className="py-2 px-6 "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              role="region"
              aria-label="Content Marketing Features"
            >
              <div className="max-w-6xl mx-auto flex justify-center p-0">
                <img
                  src="/images/our-approch-content.png"
                  alt="Content marketing process illustration"
                  className="w-full max-w-4xl  "
                />
              </div>
            </motion.section>

          </div>
        </motion.section>

        {/* Why Choose Brick2Tech Section */}
        <motion.section
          className="py-24 px-6 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          role="region"
          aria-label="Why Choose Brick2Tech"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
              Why Choose Brick2Tech for Content Marketing Services?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "SEO-Focused Content",
                  desc: "Every piece is built to rank and drive traffic, optimized with the latest SEO best practices.",
                },
                {
                  title: "Multi-Format Expertise",
                  desc: "From blogs and visuals to videos and interactive content, we deliver across all formats.",
                },
                {
                  title: "Sustainable Growth",
                  desc: "Content that keeps delivering results long-term, building authority and engagement over time.",
                },
                {
                  title: "Tech-Powered Execution",
                  desc: "Leveraging the latest tools, CMS platforms, and analytics dashboards for efficient content management.",
                },
                {
                  title: "Hyderabad Roots, Global Standards",
                  desc: "Local expertise combined with global content quality to make your brand stand out.",
                },
              ].map((reason, index) => (
                <motion.article
                  key={reason.title}
                  className="bg-sky-50 rounded-xl p-6 shadow-md hover:shadow-xl transition"
                  variants={fadeUp}
                  custom={index + 1}
                  aria-label={reason.title}
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-sky-500 w-6 h-6 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-xl text-blue-900">{reason.title}</h3>
                      <p className="mt-2 text-blue-800">{reason.desc}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          className="py-10 px-6 bg-sky-100 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          role="region"
          aria-label="Call to Action"
        >
          <div className="max-w-4xl mx-auto text-center md:text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Let Your Content Work for You
            </h2>
            <p className="text-lg text-blue-800 mb-8">
              At Brick2Tech, we turn content into a brand builder, lead generator, and growth catalyst.
              Ready to elevate your digital strategy with content that delivers measurable impact?
            </p>
            <p className="text-lg font-medium text-blue-900 mb-8">
              Partner with Brick2Tech—the Best Content Marketing Services in Hyderabad today.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md 
               hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
               focus:ring-offset-2 transition duration-300"
            >
              Contact Us
            </a>
          </div>

        </motion.section>
      </main>
    </>
  );
};

export default ContentMarketingPage;