import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Helmet } from "react-helmet";
import { CheckCircle, Users, Clipboard, PenTool, BarChart, Globe, Megaphone } from "lucide-react";

import InfluencerBG from "/images/InfluencerBG.jpg"; // Ensure this path is correct

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const influencerFeatures = [
  {
    icon: <Users className="w-8 h-8 text-sky-500" />,
    title: "Influencer Identification & Outreach",
    description: "We select influencers whose audience aligns with your brand for maximum relevance and engagement.",
  },
  {
    icon: <Clipboard className="w-8 h-8 text-green-500" />,
    title: "Campaign Strategy & Planning",
    description: "Goal-oriented plans with clear objectives, timelines, budgets, and KPIs for performance-driven campaigns.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-purple-500" />,
    title: "Creative Content Development",
    description: "Authentic, compelling content created with influencers to resonate with followers and reflect your brand.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-pink-500" />,
    title: "Performance Tracking & Optimization",
    description: "Data-driven insights to measure reach, engagement, and conversions, with continuous campaign refinements.",
  },
  {
    icon: <Globe className="w-8 h-8 text-yellow-500" />,
    title: "Cross-Platform Integration",
    description: "Seamless integration of influencer content across platforms like Instagram, YouTube, and more for maximum impact.",
  },
];

const InfluencerMarketingPage: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const circle1X = useTransform(mouseX, [0, 200], [0, -50]);
  const circle1Y = useTransform(mouseY, [0, 200], [0, -50]);
  const circle2X = useTransform(mouseX, [0, 200], [0, 50]);
  const circle2Y = useTransform(mouseY, [0, 200], [0, 30]);
  const circle3X = useTransform(mouseX, [0, 200], [0, -30]);
  const circle3Y = useTransform(mouseY, [0, 200], [0, 70]);

  return (
    <>
      <Helmet>
        <title>Best Influencer Marketing Agency in Hyderabad | Brick2Tech </title>
        <meta
          name="description"
          content="Partner with the best influencer marketing agency in Hyderabad. Brick2Tech drives brand growth with top social media influencers and campaigns."
        />
        <meta
          name="keywords"
          content="best influencer marketing agency in hyderabad, influencer marketing agency in Hyderabad, best influencer marketing company in Hyderabad"
        />
        <link rel="canonical" href="https://brick2tech.com/services/influencer-marketing" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brick2Tech Technologies" />
        <meta property="og:title" content="Best Influencer Marketing Agency in Hyderabad | Brick2Tech" />
        <meta
          property="og:description"
          content="Amplify your brand with Brick2Tech’s expert influencer marketing services in Hyderabad. Drive engagement and trust through strategic partnerships."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brick2tech.com/services/influencer-marketing" />
        <meta property="og:image" content="https://brick2tech.com/assets/influencer-banner.png" />
        <meta property="og:site_name" content="Brick2Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hyderabad’s #1 Influencer Marketing Agency - Brick2Tech" />
        <meta
          name="twitter:description"
          content="Boost brand awareness and conversions with Brick2Tech’s strategic influencer marketing services in Hyderabad."
        />
        <meta name="twitter:image" content="https://brick2tech.com/assets/influencer-banner.png" />
      </Helmet>

      <main
        className="bg-gradient-to-br from-white via-sky-100 to-blue-200 text-gray-800 overflow-x-hidden"
        aria-label="Influencer Marketing Service Page"
      >
        <h1 className="sr-only">Best Influencer Marketing Agency in Hyderabad</h1>
        {/* Interactive Hero Section */}
        <motion.section
          ref={ref}
          className="relative min-h-[50vh] flex items-center justify-center px-6 sm:px-12 overflow-hidden text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          onMouseMove={handleMouseMove}
          aria-label="Influencer Marketing Services Section"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${InfluencerBG})` }}
            aria-hidden="true"
          />
          {/* Interactive Vector Circles */}
          <motion.div
            className="absolute w-16 h-16 bg-sky-500 rounded-full mix-blend-multiply opacity-30"
            style={{ x: circle1X, y: circle1Y }}
          />
          <motion.div
            className="absolute w-12 h-12 bg-purple-500 rounded-full mix-blend-multiply opacity-30"
            style={{ x: circle2X, y: circle2Y }}
          />
          <motion.div
            className="absolute w-20 h-20 bg-yellow-500 rounded-full mix-blend-multiply opacity-30"
            style={{ x: circle3X, y: circle3Y }}
          />
          {/* Content */}
          <div className="relative z-10 max-w-4xl flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Influencer Marketing Services
            </h2>
            <p className="text-lg text-white">
              At Brick2Tech, we harness the power of influencers to create authentic connections, boost engagement, and drive measurable results.
            </p>
          </div>
        </motion.section>

        {/* Sticky Grid Layout for Remaining Sections */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sticky Sidebar */}
          <motion.aside
            className="md:sticky md:top-20 md:h-fit"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            role="navigation"
            aria-label="Section Navigation"
          >
            <div className="bg-sky-50 rounded-xl p-6 shadow-lg">
              {[
                { title: "Overview", icon: <Clipboard className="w-6 h-6 text-blue-900" /> },
                { title: "Services", icon: <Users className="w-6 h-6 text-blue-900" /> },
                { title: "Why Choose Us", icon: <CheckCircle className="w-6 h-6 text-blue-900" /> },
                { title: "Impact", icon: <BarChart className="w-6 h-6 text-blue-900" /> },
                { title: "Call to Action", icon: <Megaphone className="w-6 h-6 text-blue-900" /> },
              ].map((item) => (
                <a
                  key={item.title}
                  href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-3 py-2 text-blue-900 hover:text-sky-500 transition"
                >
                  {item.icon}
                  <span className="font-semibold">{item.title}</span>
                </a>
              ))}
            </div>
          </motion.aside>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Overview Section */}
            <motion.section
              id="overview"
              className="bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              role="region"
              aria-label="Influencer Marketing Overview"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Influencer Marketing Matters</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                In today’s digital ecosystem, authentic connections matter more than ever. Influencer marketing has become a powerful way for brands to reach targeted audiences, build trust, and drive conversions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Brick2Tech, recognized as the Best Influencer Marketing Agency in Hyderabad, we help businesses harness the power of influencers to create meaningful engagement and measurable results. Whether you’re launching a new product, growing brand awareness, or enhancing customer loyalty, our tailored strategies ensure your message resonates.
              </p>
            </motion.section>

            {/* Core Influencer Marketing Services Section */}
            <motion.section
              id="services"
              className="bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              role="region"
              aria-label="Core Influencer Marketing Services"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Core Influencer Marketing Services</h2>
              <p className="text-lg text-blue-800 mb-6">
                Our influencer marketing services are designed to amplify your brand’s voice through strategic partnerships and creative storytelling.
              </p>
              <div className="grid gap-6">
                {influencerFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    aria-label={feature.title}
                  >
                    {feature.icon}
                    <div>
                      <h3 className="font-semibold text-lg text-blue-900">{feature.title}</h3>
                      <p className="text-blue-800">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Why Choose Brick2Tech Section */}
            <motion.section
              id="why-choose-us"
              className="bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              role="region"
              aria-label="Why Choose Brick2Tech"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Choose Brick2Tech?</h2>
              <div className="grid gap-6">
                {[
                  {
                    title: "Proven Expertise & Network",
                    desc: "Our experience and access to top influencers across industries ensure authentic, effective campaigns.",
                  },
                  {
                    title: "Tailored Campaigns, Real Results",
                    desc: "Customized strategies designed to drive engagement, awareness, and conversions for your brand.",
                  },
                  {
                    title: "Transparent Reporting & Insights",
                    desc: "Clear, actionable reports to track performance and understand your campaign’s impact.",
                  },
                  {
                    title: "Ethical & Authentic Partnerships",
                    desc: "We prioritize organic partnerships that align with your brand values and foster trust.",
                  },
                  {
                    title: "End-to-End Support",
                    desc: "From planning to optimization, we manage every stage to ensure seamless, effective campaigns.",
                  },
                ].map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    className="flex items-start gap-4"
                    variants={fadeUp}
                    custom={index + 1}
                    aria-label={reason.title}
                  >
                    <CheckCircle className="text-sky-500 w-6 h-6 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-lg text-blue-900">{reason.title}</h3>
                      <p className="text-blue-800">{reason.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Impact Section */}
            <motion.section
              id="impact"
              className="bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              role="region"
              aria-label="Impact of Influencer Marketing"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">The Impact of Influencer Marketing</h2>
              <p className="text-lg text-blue-800 mb-6">
                Collaborating with influencers can transform your brand’s reach and reputation.
              </p>
              <div className="grid gap-4">
                {[
                  { desc: "Boost Brand Awareness: Reach larger, engaged audiences who trust their favorite creators." },
                  { desc: "Drive Engagement: Encourage conversations, shares, and interactions around your brand." },
                  { desc: "Increase Conversions: Inspire action through authentic recommendations and social proof." },
                  { desc: "Strengthen Brand Loyalty: Build long-term relationships with audiences who connect with your story." },
                ].map((impact, index) => (
                  <motion.div
                    key={impact.desc}
                    className="flex items-start gap-4"
                    variants={fadeUp}
                    custom={index + 1}
                    aria-label={`Impact ${index + 1}`}
                  >
                    <CheckCircle className="text-sky-500 w-6 h-6 mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-blue-800">{impact.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Call to Action Section */}
            <motion.section
              id="call-to-action"
              className="bg-white rounded-xl p-8 shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              role="region"
              aria-label="Call to Action"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Let’s Create Influencer Campaigns That Work
              </h2>
              <p className="text-lg text-blue-800 mb-6">
                As the Best Influencer Marketing Agency in Hyderabad, Brick2Tech designs campaigns that inspire, engage, and deliver exceptional growth.
              </p>
              <p className="text-lg font-medium text-blue-900">
                Contact us today to transform your brand’s reach with influencer marketing!
              </p>
            </motion.section>
          </div>
        </div>
      </main>
    </>
  );
};

export default InfluencerMarketingPage;