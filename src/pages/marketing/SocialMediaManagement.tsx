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
    icon: <Target className="w-6 h-6 text-sky-500" />,
    title: "In-Depth Brand Analysis",
    description: "We analyze your brand values, audience demographics, goals, and competitive landscape to build targeted social media strategies.",
  },
  {
    icon: <Image className="w-6 h-6 text-green-500" />,
    title: "Content Creation & Curation",
    description: "Eye-catching graphics, videos, and curated content optimized for engagement and brand storytelling across platforms.",
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-500" />,
    title: "Strategic Posting & Scheduling",
    description: "Structured posting calendars with optimal timing and frequency to maximize reach and maintain consistency.",
  },
  {
    icon: <Users className="w-6 h-6 text-pink-500" />,
    title: "Community Engagement & Management",
    description: "Active monitoring and authentic responses to foster trust, loyalty, and stronger customer relationships.",
  },
  {
    icon: <Megaphone className="w-6 h-6 text-yellow-500" />,
    title: "Paid Social Media Advertising",
    description: "Targeted ad campaigns to boost visibility, generate qualified leads, and maximize ROI with precise targeting.",
  },
  {
    icon: <BarChart className="w-6 h-6 text-blue-500" />,
    title: "Performance Tracking & Reporting",
    description: "Detailed analytics on reach, engagement, and conversions to optimize campaigns and ensure measurable results.",
  },
];

const SocialMediaManagementPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Best SMM Services in Hyderabad | Brick2Tech</title>
        <meta
          name="description"
          content="Brick2Tech offers top-rated Social Media Management Services in Hyderabad, delivering strategic campaigns to boost engagement, visibility, and growth."
        />
        <meta
          name="keywords"
          content="best SMM services in Hyderabad, social media management Hyderabad, social media marketing, Brick2Tech SMM, social media campaigns"
        />
        <meta name="canonical" content="https://brick2tech.com/services/smm" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brick2Tech Technologies" />
        <meta property="og:title" content="Best SMM Services in Hyderabad | Brick2Tech" />
        <meta
          property="og:description"
          content="Elevate your brand with Brick2Tech’s expert social media management services in Hyderabad. Drive engagement, leads, and loyalty with tailored campaigns."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brick2tech.com/services/smm" />
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
        <h1 className="sr-only">Best SMM Services in Hyderabad</h1>
        {/* Hero Section */}
        <motion.section
          className="relative min-h-[50vh] flex items-center justify-center px-6 sm:px-12 overflow-hidden text-center"
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
              Our Social Media Management Services
            </h2>
            <p className="text-lg text-white">
              At Brick2Tech, we deliver strategic social media campaigns to connect with your audience, build trust, and drive measurable growth.
            </p>
          </div>
        </motion.section>

        {/* SMM Overview Section */}
        <motion.section
          className="relative py-20 px-6 sm:px-12 bg-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          role="region"
          aria-label="Social Media Management Overview Section"
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              In today’s digital-first world, social media is more than just a communication platform—it’s a powerful tool for businesses to connect with their audience, build trust, and drive measurable growth. At Brick2Tech, we provide top-rated Social Media Management Services in Hyderabad, customized to suit your business needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our dedicated team blends creativity, data-driven strategies, and industry expertise to deliver impactful social media campaigns. From content creation and scheduling to engagement tracking and analytics, we manage your complete social media presence with precision and innovation. Social media marketing enhances brand visibility, fosters stronger customer engagement, drives website traffic, and provides a competitive advantage—all in a cost-effective way.
            </p>
          </div>
        </motion.section>

        {/* Core SMM Services Section */}
        <motion.section
          className="py-24 px-6 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          role="region"
          aria-label="Core Social Media Management Services"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            Our Core Social Media Management Services
          </h2>
          <p className="text-center text-blue-800 max-w-3xl mx-auto mb-16 text-lg">
            At Brick2Tech, we provide end-to-end social media management services to help your business engage audiences, build loyalty, and achieve sustainable growth.
          </p>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {smmFeatures.map((feature, index) => (
              <motion.article
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                aria-label={feature.title}
              >
                <div className="flex items-start gap-4">
                  {feature.icon}
                  <div>
                    <h3 className="font-semibold text-xl text-blue-900">{feature.title}</h3>
                    <p className="mt-2 text-blue-800">{feature.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="text-center mt-12 text-lg font-medium text-blue-900">
            RATED #1 Best SMM Services in Hyderabad – Turning Likes into Leads
          </p>
        </motion.section>

        {/* SMM Process Section */}
        <motion.section
          className="py-24 px-6 bg-sky-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          role="region"
          aria-label="Social Media Management Process"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
              Our Social Media Management Process at Brick2Tech
            </h2>
            <p className="text-center text-blue-800 max-w-3xl mx-auto mb-16 text-lg">
              Recognized as the best SMM agency in Hyderabad, Brick2Tech follows a strategic, results-oriented approach to deliver impactful social media success.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Enhanced Brand Awareness",
                  desc: "We amplify your brand presence by highlighting your unique strengths, ensuring visibility and differentiation from competitors.",
                },
                {
                  title: "Targeted Audience Engagement",
                  desc: "Leveraging advanced targeting to reach specific audiences based on demographics, interests, and behaviors for stronger connections.",
                },
                {
                  title: "Improved Customer Service",
                  desc: "Timely, professional interactions via social media to enhance customer satisfaction and build loyalty.",
                },
                {
                  title: "Increased Website Traffic",
                  desc: "Engaging content and optimized campaigns drive traffic to your website, boosting conversions and sales opportunities.",
                },
                {
                  title: "Insightful Analytics & Reporting",
                  desc: "Transparent reports on reach, engagement, and ROI to track campaign success and identify improvement opportunities.",
                },
                {
                  title: "Building Customer Loyalty",
                  desc: "Fostering long-term loyalty through consistent engagement, personalized communication, and meaningful interactions.",
                },
              ].map((step, index) => (
                <motion.article
                  key={step.title}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
                  variants={fadeUp}
                  custom={index + 1}
                  aria-label={step.title}
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-sky-500 w-6 h-6 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-xl text-blue-900">{step.title}</h3>
                      <p className="mt-2 text-blue-800">{step.desc}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
              Our Social Media Success Stories
            </h2>
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
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
                  variants={fadeUp}
                  custom={index + 1}
                  aria-label={caseStudy.title}
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-sky-500 w-6 h-6 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
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
          className="py-24 px-6 bg-sky-100 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          role="region"
          aria-label="Call to Action"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Turn Likes into Leads with Brick2Tech
            </h2>
            <p className="text-lg text-blue-800 mb-8">
              Partner with Brick2Tech, the best Social Media Management Services provider in Hyderabad, to transform your social media presence into a powerful growth engine.
            </p>
            <p className="text-lg font-medium text-blue-900">
              Ready to elevate your brand? Contact us today!
            </p>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default SocialMediaManagementPage;