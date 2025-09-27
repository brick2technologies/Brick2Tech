import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { CheckCircle, Target, PenTool, Clock, Users, BarChart } from "lucide-react";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const emailFeatures = [
  {
    icon: <Target className="w-8 h-8 text-sky-500" />,
    title: "Email Marketing Strategy Development",
    description: "Customized strategies based on your business goals, audience, and competitors to maximize campaign results.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-green-500" />,
    title: "Creative & Personalized Content",
    description: "Engaging promotional emails, newsletters, and drip campaigns tailored to resonate with your audience.",
  },
  {
    icon: <Clock className="w-8 h-8 text-purple-500" />,
    title: "Campaign Planning & Automation",
    description: "Structured campaigns with automated workflows to deliver timely, relevant messages to your audience.",
  },
  {
    icon: <Users className="w-8 h-8 text-pink-500" />,
    title: "Segmentation & Targeting",
    description: "Audience segmentation based on behavior and demographics to boost open rates and conversions.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-yellow-500" />,
    title: "Performance Tracking & Optimization",
    description: "Analytics-driven insights to track open rates, clicks, and ROI, with continuous campaign refinements.",
  },
];

const EmailMarketingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Best EMail Marketing Services in Hyderabad | Brick2Tech</title>
        <meta
          name="description"
          content="Drive engagement and conversions with Brick2Tech, offering the best email marketing services in Hyderabad. We craft targeted campaigns that nurture leads, build relationships, and grow your business effectively."
        />
        <meta
          name="keywords"
          content="best email marketing services in Hyderabad, email marketing agency in Hyderabad, email marketing company in Hyderabad, email marketing services Hyderabad, email marketing Hyderabad, email marketing experts in Hyderabad, Brick2Tech email marketing"
        />
        <meta name="canonical" content="https://brick2tech.com/email-marketing" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brick2Tech Technologies" />
        <meta property="og:title" content="Best Email Marketing Services in Hyderabad | Brick2Tech" />
        <meta
          property="og:description"
          content="Grow your business with Brick2Tech’s strategic email marketing services in Hyderabad. Boost engagement, retention, and ROI with personalized campaigns."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brick2tech.com/email-marketing" />
        <meta property="og:image" content="https://brick2tech.com/assets/email-banner.png" />
        <meta property="og:site_name" content="Brick2Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hyderabad’s #1 Email Marketing Agency - Brick2Tech" />
        <meta
          name="twitter:description"
          content="Drive engagement, leads, and conversions with Brick2Tech’s expert email marketing services in Hyderabad."
        />
        <meta name="twitter:image" content="https://brick2tech.com/assets/email-banner.png" />
        {/* Add global CSS reset to prevent default margin/padding issues */}
        <style>
          {`
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }
            html, body {
              overflow-x: hidden;
            }
          `}
        </style>
      </Helmet>

      <main
        className="bg-gradient-to-br from-white via-sky-100 to-blue-200 text-gray-800 overflow-x-hidden"
        aria-label="Email Marketing Service Page"
      >
        {/* Hero Section */}
        <motion.section
          className="relative min-h-[90vh] flex items-center justify-center px-6 sm:px-12 text-center w-full h-screen bg-[radial-gradient(circle_349px_at_0.3%_48.6%,_rgba(0,0,0,1)_0%,_rgba(87,124,253,0.89)_100.7%)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          aria-label="Email Marketing Services Section"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/80"></div>
          <div className="relative z-10 max-w-4xl flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-950 mb-6">
              Your inbox is powerful—crafted messages can turn readers into loyal customers.
            </h2>
            <p className="text-lg text-blue-950 max-w-3xl">
              Drive conversions and build stronger customer relationships with Brick2Tech’s email marketing solutions. We craft targeted campaigns, engaging newsletters, and automated workflows that keep your audience informed, connected, and ready to take action.
            </p>
          </div>
        </motion.section>

        {/* Email Marketing Overview Section */}
        <motion.section
          className="py-24 px-6 bg-sky-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          role="region"
          aria-label="Email Marketing Overview Section"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 md:px-8 overflow-x-hidden">
            {/* Left Content */}
            <div className="p-6 md:p-8">
              <h1 className="text-3xl font-bold text-blue-900 mb-6">
                Best Email Marketing Services in Hyderabad
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                In today’s digital landscape, email remains one of the most effective
                channels to nurture leads, engage customers, and drive conversions. At
                Brick2Tech, we deliver the best Email Marketing services in Hyderabad,
                designed to help businesses grow, retain customers, and generate
                measurable results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our email marketing experts combine strategic planning, personalized
                content, and advanced analytics to ensure your campaigns resonate with
                your audience and achieve maximum ROI. Whether your goal is to increase
                sales, improve customer retention, or enhance brand awareness, we manage
                every stage of your email marketing journey.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center p-4 md:p-8">
              <img
                src="/images/Email-Marketing-about.jpg"
                alt="Email Marketing Strategy"
                className="rounded-xl shadow-lg w-full max-w-md object-cover "
                style={{ maxWidth: "100%" }} // Ensure image doesn't overflow
              />
            </div>
          </div>
        </motion.section>

        {/* Core Email Marketing Services Section */}
        <motion.section
          className="py-20 px-6 bg-sky-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          role="region"
          aria-label="Email Marketing Services and Process"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start overflow-x-hidden">
            {/* Left - Core Services */}
            <div>
              <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-8">
                Our Core Email Marketing Services
              </h2>
              <p className="text-center md:text-left text-blue-800 mb-8 text-lg">
                We treat email as a growth engine, focusing on personalization,
                automation, and optimization to drive engagement and conversions.
              </p>
              {emailFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 mb-6 shadow-md hover:shadow-xl transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={feature.title}
                >
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <div>
                      <h3 className="font-semibold text-xl text-blue-900">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-blue-800">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right - Process */}
            <div>
              <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
                Our Email Marketing Process
              </h2>
              <p className="text-center md:text-left text-blue-800 mb-8 text-lg">
                Every business has unique communication needs—our process ensures your
                emails deliver maximum impact.
              </p>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                {[
                  {
                    title: "Audience Segmentation & Targeting",
                    desc: "We segment your audience to send tailored messages that resonate and drive engagement.",
                  },
                  {
                    title: "Personalized Campaigns",
                    desc: "Customized email content that speaks directly to each segment, boosting conversions.",
                  },
                  {
                    title: "Automated Workflows",
                    desc: "From welcome series to abandoned cart reminders, we automate workflows to nurture leads.",
                  },
                  {
                    title: "Lead Nurturing & Conversion",
                    desc: "Campaigns designed to turn subscribers into customers and keep them engaged.",
                  },
                  {
                    title: "Analytics & Continuous Optimization",
                    desc: "Regular reports and insights to improve campaign performance and maximize ROI.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    className="flex items-start gap-4 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    aria-label={step.title}
                  >
                    <CheckCircle
                      className="text-sky-500 w-6 h-6 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-blue-900">{step.title}</h3>
                      <p className="text-blue-800">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Brick2Tech Section */}
        <motion.section
          className=" px-6 bg-sky-100 overflow-x-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          role="region"
          aria-label="Why Choose Brick2Tech"
        >
          <div className="max-w-5xl mx-auto p-8 flex justify-center">
            <motion.img
              src="/images/email-why-choose.png"
              alt="Email-marketing illustration showing growth and engagement"
              className="w-full  object-cover max-w-full"
              loading="lazy"
              variants={fadeUp}
              custom={1}
              style={{ maxWidth: "100%" }} // Ensure image doesn't overflow
            />
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          className="relative py-24 px-6 bg-gradient-to-r from-sky-50 via-white to-sky-100 text-center overflow-x-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          role="region"
          aria-label="Call to Action"
        >
          {/* Decorative glowing orbs constrained to prevent overflow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-10 left-10 w-40 h-40 bg-sky-200 rounded-full blur-3xl opacity-40 max-w-[40vw]"></div>
            <div className="absolute bottom-10 right-10 w-52 h-52 bg-blue-200 rounded-full blur-3xl opacity-40 max-w-[40vw]"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
              Let Your Emails Drive Results 🚀
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Transform your campaigns into a{" "}
              <span className="font-semibold text-blue-800">lead-generating engine</span>,
              customer engagement platform, and growth catalyst.
            </p>
            <p className="text-lg md:text-xl font-medium text-blue-900 mb-10">
              Ready to boost engagement and revenue?
              Contact <span className="font-bold">Brick2Tech</span>, the best Email Marketing
              services provider in Hyderabad, today!
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition"
            >
              Get Started Today
            </motion.a>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default EmailMarketingPage;