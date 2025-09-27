import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { CheckCircle, Search, PenTool, Settings, Link, MapPin } from "lucide-react";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const seoFeatures = [
  {
    icon: <Search className="w-12 h-12 text-sky-500" />,
    title: "Comprehensive Keyword Research",
    description:
      "Identify high-volume, low-competition keywords relevant to your industry—helping your business attract the right audience at the right time.",
  },
  {
    icon: <PenTool className="w-12 h-12 text-green-500" />,
    title: "Quality Content Creation",
    description:
      "Create SEO-rich blogs, landing pages, and service content that attract traffic, build trust, and convert visitors into customers.",
  },
  {
    icon: <Settings className="w-12 h-12 text-purple-500" />,
    title: "On-Page SEO",
    description:
      "Optimize meta tags, headers, titles, URL structures, and internal linking to ensure your website is technically sound and content-rich.",
  },
  {
    icon: <Link className="w-12 h-12 text-pink-500" />,
    title: "Off-Page SEO & Link Building",
    description:
      "Enhance domain authority and search engine trust through ethical link-building and outreach campaigns.",
  },
  {
    icon: <Settings className="w-12 h-12 text-yellow-500" />,
    title: "Technical SEO",
    description:
      "Resolve crawl errors, boost site speed, improve mobile-friendliness, and implement structured data to maximize indexability.",
  },
  {
    icon: <MapPin className="w-12 h-12 text-blue-500" />,
    title: "Local SEO Expertise",
    description:
      "Optimize Google Business Profile, local citations, and location-based keywords to stand out in Hyderabad and surrounding areas.",
  },
];

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}> = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-sky-100 hover:border-sky-200"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">
      {title}
    </h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const SEOPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Best SEO Services in Hyderabad | Best SEO Agency in Hyderabad</title>
        <meta
          name="description"
          content="Rank higher on Google with Brick2Tech - the best SEO agency in Hyderabad. Custom SEO plans for traffic, leads & long-term search dominance."
        />
        <meta
          name="keywords"
          content="best seo services in hyderabad, seo agency in hyderabad, search engine optimization companies in hyderabad, seo company in hyderabad, top seo companies in hyderabad, affordable seo services in hyderabad, local seo services in hyderabad, professional seo services in hyderabad"
        />
        <meta name="canonical" content="https://brick2tech.com/seo-services-hyderabad" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brick2Tech Technologies" />
        <meta property="og:title" content="Best SEO Company in Hyderabad | Brick2Tech" />
        <meta
          property="og:description"
          content="Grow your business with Brick2Tech’s ethical, data-driven SEO strategies. Rated #1 SEO company in Hyderabad with 98.99% results guaranteed."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brick2tech.com/seo-services-hyderabad" />
        <meta property="og:image" content="https://brick2tech.com/images/seo-hero.webp" />
        <meta property="og:site_name" content="Brick2Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hyderabad’s #1 SEO Agency - Brick2Tech" />
        <meta
          name="twitter:description"
          content="Boost rankings, traffic, and conversions with Brick2Tech’s expert SEO services in Hyderabad."
        />
        <meta name="twitter:image" content="https://brick2tech.com/images/seo-hero.webp" />
        <style>
          {`
            html, body {
              overflow-x: hidden;
              width: 100%;
            }
          `}
        </style>
      </Helmet>

      <main
        className="bg-gradient-to-br from-white via-sky-100 to-blue-200 text-gray-800 overflow-x-hidden"
        aria-label="SEO Service Page"
      >
        {/* Hero Section */}
        <motion.section
          className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center overflow-hidden 
             pt-24 sm:pt-12 md:pt-16 lg:pt-20 
             px-4 sm:px-8 md:px-12 lg:px-20 pb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          role="region"
          aria-label="SEO Hero Section"
        >
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:items-start md:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Boost Your Visibility & Grow Your Business
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-xl">
              Drive more traffic, generate quality leads, and dominate search results with Brick2Tech’s expert SEO strategies.
              We combine data-driven insights with creative solutions to help your business reach the right audience at the right time.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Get Your Free SEO Audit
            </a>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
            <img
              src="/images/seo-hero.webp"
              alt="SEO Hero"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
        </motion.section>

        {/* SEO Content Section */}
        <motion.section
          className="relative py-10 px-6 sm:px-12 bg-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          role="region"
          aria-label="SEO Content Section"
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Best SEO Company in Hyderabad</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Brick2Tech, we specialize in delivering advanced SEO services that drive
              measurable growth and long-term success. As the <strong>best SEO company in Hyderabad</strong>,
              we help businesses improve search engine visibility, increase website traffic,
              and generate high-quality leads through ethical, data-driven strategies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you’re a startup or an established business, our tailored SEO approach
              ensures your brand reaches the right audience at the right time. From comprehensive
              keyword research and on-page optimization to high-quality link building and
              technical SEO, we cover every aspect of search engine optimization. Our team stays
              ahead of trends by continuously updating strategies to match Google’s evolving
              algorithms—improving rankings while enhancing engagement and conversions.
            </p>
          </div>
        </motion.section>

        {/* Core SEO Services Section */}
        <section
          className="py-10 px-6 bg-gradient-to-br from-sky-50 to-blue-50"
          role="region"
          aria-label="Core SEO Services"
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sm font-medium text-sky-800 mb-6">
                Our Core SEO Services
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-indigo-900 mb-6">
                End-to-End SEO Solutions for Growth
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                At Brick2Tech, we provide comprehensive SEO services to help your
                business rank higher, attract the right audience, and grow
                sustainably.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoFeatures.map((feature, index) => (
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
            <p className="text-center mt-16 text-lg font-semibold text-sky-700">
              ⭐ RATED #1 Best SEO Company in Hyderabad – 98.99% Results Guaranteed
            </p>
          </div>
        </section>

        {/* SEO Process Section */}
        <motion.section
          className="py-10 px-6 bg-sky-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          role="region"
          aria-label="SEO Process"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
              Our SEO Process at Brick2Tech
            </h2>
            <p className="text-center text-blue-800 max-w-3xl mx-auto mb-16 text-lg">
              Recognized as the best SEO company in Hyderabad, Brick2Tech follows a result-oriented approach to deliver measurable SEO success.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Keyword Strategy",
                  desc: "We start by identifying high-value, low-competition keywords aligned with your business goals. This strategic keyword research lays the foundation for improved visibility and higher rankings.",
                },
                {
                  title: "Optimized for Visibility",
                  desc: "From content optimization to technical SEO, we refine every aspect of your website to improve crawlability, relevance, and user experience—helping you dominate search results.",
                },
                {
                  title: "Targeted Traffic Generation",
                  desc: "Our SEO strategies attract organic traffic from users actively searching for your products or services, increasing the likelihood of conversions.",
                },
                {
                  title: "Search Engine Presence",
                  desc: "With over 95% of users relying on Google, Bing, and Yahoo, we ensure your website is fully optimized to appear where your audience is searching.",
                },
                {
                  title: "Measurable ROI",
                  desc: "With Brick2Tech, every aspect of your SEO investment is trackable—from rankings and traffic to leads and conversions—giving you a clear view of growth.",
                },
                {
                  title: "Boosted Brand Awareness",
                  desc: "Higher rankings mean increased brand recognition. Our SEO efforts position your business at the top of search results, building trust and awareness among your target market.",
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
              Why Choose Brick2Tech for SEO Services?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Experienced SEO Professionals",
                  desc: "Our team stays ahead of evolving algorithms and SEO trends, ensuring your website consistently ranks higher and performs better.",
                },
                {
                  title: "Ethical & White-Hat Strategies",
                  desc: "We follow only Google-approved SEO practices, guaranteeing long-term rankings without risking penalties.",
                },
                {
                  title: "Proven Track Record",
                  desc: "We’ve helped businesses across industries climb search engine rankings, drive organic traffic, and boost conversions.",
                },
                {
                  title: "Transparent Reporting",
                  desc: "From traffic trends to keyword rankings, you receive clear, actionable insights through regular performance reports.",
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
      </main>
    </>
  );
};

export default SEOPage;