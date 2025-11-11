import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { CheckCircle, Target, Image, Clock, Users, Megaphone, BarChart } from "lucide-react";

import SmmBG from "/images/smmBG.jpg"; // Ensure this path is correct

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const smmFeatures = [
  {
    icon: <Target className="w-12 h-12 text-sky-500" />,
    title: "In-Depth Brand Analysis",
    description:
      "We analyze your brand values, audience demographics, goals, and competitive landscape to build targeted social media strategies.",
  },
  {
    icon: <Image className="w-12 h-12 text-green-500" />,
    title: "Content Creation & Curation",
    description:
      "Eye-catching graphics, videos, and curated content optimized for engagement and brand storytelling across platforms.",
  },
  {
    icon: <Clock className="w-12 h-12 text-purple-500" />,
    title: "Strategic Posting & Scheduling",
    description:
      "Structured posting calendars with optimal timing and frequency to maximize reach and maintain consistency.",
  },
  {
    icon: <Users className="w-12 h-12 text-pink-500" />,
    title: "Community Engagement & Management",
    description:
      "Active monitoring and authentic responses to foster trust, loyalty, and stronger customer relationships.",
  },
  {
    icon: <Megaphone className="w-12 h-12 text-yellow-500" />,
    title: "Paid Social Media Advertising",
    description:
      "Targeted ad campaigns to boost visibility, generate qualified leads, and maximize ROI with precise targeting.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-blue-500" />,
    title: "Performance Tracking & Reporting",
    description:
      "Detailed analytics on reach, engagement, and conversions to optimize campaigns and ensure measurable results.",
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

const SocialMediaManagementPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Best Social Media Management Services in Hyderabad | Brick2Tech</title>
        <meta
          name="description"
          content="Brick2Tech is a leading social media Media mangement services in Hyderabad specializing in result-driven strategies to grow your brand. Engage audiences, increase followers, and boost conversions with our expert SMM services."
        />
        <meta
          name="keywords"
          content="social media companies in hyderabad, social media management agency in hyderabad, social media management company in hyderabad, social media agency hyderabad, social media marketing company in hyderabad, social media marketing agency in hyderabad, best social media agency in hyderabad, top social media companies in hyderabad"
        />
        <meta name="canonical" content="https://www.brick2tech.com/social-media-management" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brick2Tech Technologies" />
        <meta property="og:title" content="Best SMM Services in Hyderabad | Brick2Tech" />
        <meta
          property="og:description"
          content="Elevate your brand with Brick2Tech’s expert social media management services in Hyderabad. Drive engagement, leads, and loyalty with tailored campaigns."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brick2tech.com/social-media-management" />
        <meta property="og:image" content="https://brick2tech.com/assets/smm-banner.png" />
        <meta property="og:site_name" content="Brick2Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hyderabad’s #1 SMM Agency - Brick2Tech" />
        <meta
          name="twitter:description"
          content="Boost engagement, visibility, and conversions with Brick2Tech’s strategic social media management services in Hyderabad."
        />
        <meta name="twitter:image" content="https://brick2tech.com/assets/smm-banner.png" />
      </Helmet>

      <main
        className="bg-gradient-to-br from-white via-sky-100 to-blue-200 text-gray-800 overflow-x-hidden"
        aria-label="Social Media Management Service Page"
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
          aria-label="Social Media Management Services Section"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${SmmBG})` }}
            aria-hidden="true"
          />
          {/* SMM Services Content */}
          <div className="relative z-10 max-w-4xl flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Elevate Your Social Media Presence
            </h2>
            <p className="text-lg text-white">
              Brick2Tech crafts impactful social media strategies that engage your audience, strengthen your brand, and drive measurable business results.
            </p>
          </div>

        </motion.section>

        {/* SMM Overview Section */}
        <motion.section
          className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-6 sm:px-12 md:px-16 lg:px-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          role="region"
          aria-label="Social Media Management Overview Section"
        >
          {/* Heading Above Grid */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            Best Social Media Management Services in Hyderabad
          </h1>

          {/* Content + Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center items-start text-left space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                In today’s digital-first world, social media is more than just a communication platform—it’s a powerful tool for businesses to connect with their audience, build trust, and drive measurable growth. At Brick2Tech, we provide top-rated Social Media Management Services in Hyderabad, customized to suit your business needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our dedicated team blends creativity, data-driven strategies, and industry expertise to deliver impactful social media campaigns. From content creation and scheduling to engagement tracking and analytics, we manage your complete social media presence with precision and innovation. Social media marketing enhances brand visibility, fosters stronger customer engagement, drives website traffic, and provides a competitive advantage—all in a cost-effective way.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 mt-4"
              >
                Get Started Today
              </a>
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center">
              <img
                src="/images/social-media-management.png"
                alt="Social Media Management"
                className="w-full  h-auto object-contain"
              />
            </div>
          </div>
        </motion.section>



        {/* Core SMM Services Section */}
       <section
      className="py-10 px-6 bg-gradient-to-br from-indigo-50 to-blue-50"
      role="region"
      aria-label="Core Social Media Management Services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-800 mb-6">
            Our Core Social Media Management Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Building Engagement, Loyalty & Growth
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            At Brick2Tech, we provide end-to-end social media management services to help your business engage audiences, build loyalty, and achieve sustainable growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {smmFeatures.map((feature, index) => (
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
          🚀 RATED #1 Best SMM Services in Hyderabad – Turning Likes into Leads
        </p>
      </div>
    </section>

        {/* SMM Process Section */}
        <motion.section
          className="relative bg-sky-50 py-6 sm:py-20 md:py-10 lg:py-18 px-6 sm:px-6 md:px-16 lg:px-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          role="region"
          aria-label="Social Media Management Process"
        >
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Heading */}
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
                Our Process
              </h2>
              <p className="text-lg sm:text-xl text-blue-800 max-w-3xl mx-auto">
                In a crowded digital space, effective social media management can be the game-changer for businesses. For companies in Hyderabad, investing in professional SMM services is essential to stand out and grow. Here’s what our process delivers:
              </p>
            </div>

            {/* Process Steps */}
            <motion.div
              className="relative  px-6 sm:px-12 flex justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              role="region"
              aria-label="Social Media Management Process Section"
            >
              <img
                src="/images/smm-process-overview.png" // replace with your single process image
                alt="Social Media Management Process Overview"
                className="w-full max-w-4xl h-auto object-contain "
              />
            </motion.div>
          </div>
        </motion.section>


        {/* Why Choose Brick2Tech Section */}
        <motion.section
          className="py-24 px-6 sm:px-12 bg-sky-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          role="region"
          aria-label="Why Choose Brick2Tech"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
              Why Choose Brick2Tech for SMM Services?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Expertise & Experience",
                  desc: "Years of digital marketing experience with strategies aligned to the latest industry trends and platform updates.",
                },
                {
                  title: "Customized Solutions",
                  desc: "Personalized SMM solutions tailored to your specific goals, audience, and industry for maximum impact.",
                },
                {
                  title: "Data-Driven Approach",
                  desc: "Analytics and insights drive informed decisions, ensuring campaigns deliver measurable value.",
                },
                {
                  title: "Results-Oriented",
                  desc: "Focused on tangible outcomes—brand visibility, lead generation, engagement, and revenue growth.",
                },
                {
                  title: "Comprehensive Digital Services",
                  desc: "Integrated solutions with SEO, PPC, Email Marketing, and Web Development for a cohesive online strategy.",
                },
                {
                  title: "Transparent Communication",
                  desc: "Regular performance reports and open discussions keep you informed at every stage of your campaigns.",
                },
              ].map((reason, index) => (
                <motion.article
                  key={reason.title}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
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


        {/* Case Studies Section */}
        <motion.section
          className="py-24 px-6 bg-sky-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          role="region"
          aria-label="Case Studies"
        >
          <div className="max-w-6xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-4xl font-bold mb-12 text-blue-900">
              Our Social Media Success Stories
            </h2>

            {/* Grid Content */}
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "E-Commerce Brand Growth",
                  desc: "An online retail brand saw a +200% increase in engagement, +150% growth in website traffic, and +120% rise in online sales through tailored campaigns, influencer tie-ups, and performance ads.",
                },
                {
                  title: "Local Service Business Expansion",
                  desc: "A Hyderabad-based service provider achieved 3x growth in inquiries within 90 days with creative campaigns and audience-targeted promotions.",
                },
              ].map((caseStudy, index) => (
                <motion.article
                  key={caseStudy.title}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition hover:scale-105 duration-300"
                  variants={fadeUp}
                  custom={index + 1}
                  aria-label={caseStudy.title}
                >
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <CheckCircle className="text-sky-500 w-6 h-6 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div className="text-left">
                      <h3 className="font-semibold text-xl text-blue-900">{caseStudy.title}</h3>
                      <p className="mt-2 text-blue-800">{caseStudy.desc}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>


        {/* Call to Action Section */}
        <motion.section
  className="py-24 px-6 bg-gradient-to-r from-sky-100 to-sky-200 text-center rounded-2xl shadow-lg"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  role="region"
  aria-label="Call to Action"
>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-blue-900 mb-6 leading-snug">
      Turn <span className="text-sky-600">Likes</span> into Leads with <span className="text-sky-700">Brick2Tech</span>
    </h2>
    <p className="text-lg text-blue-800 mb-6">
      Partner with <strong>Brick2Tech</strong>, the best Social Media Management Services provider in Hyderabad, 
      and transform your social media presence into a powerful growth engine 🚀
    </p>
    <p className="text-lg font-medium text-blue-900 mb-10">
      Ready to elevate your brand? Let’s make it happen.
    </p>

    <motion.a
      href="/contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block bg-blue-900 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-blue-800 transition-colors"
      aria-label="Contact Brick2Tech"
    >
      Contact Us Today
    </motion.a>
  </div>
</motion.section>

      </main>
    </>
  );
};

export default SocialMediaManagementPage;