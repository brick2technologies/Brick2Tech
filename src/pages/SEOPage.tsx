import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { CheckCircle, ArrowRight } from "lucide-react";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const features = [
  {
    title: "Keyword Research & Strategy",
    description: "Identify high-impact keywords to drive targeted traffic.",
    image:
      "https://images.unsplash.com/photo-1551288049-b1f3a0c3f3f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    priority: "high",
  },
  {
    title: "Technical SEO Optimization",
    description: "Optimize site structure for better crawlability and speed.",
    image:
      "https://images.unsplash.com/photo-1516321310762-479e93c1e39e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    priority: "high",
  },
  {
    title: "On-Page SEO",
    description: "Enhance titles, meta tags, and content for higher rankings.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    priority: "high",
  },
  {
    title: "Backlink Building",
    description: "Build high-quality links to boost domain authority.",
    image:
      "https://images.unsplash.com/photo-1611162617210-7d673f284f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    priority: "medium",
  },
  {
    title: "Local SEO",
    description: "Optimize for local searches to attract nearby customers.",
    image:
      "https://images.unsplash.com/photo-1596526131083-5f1f4e1e43c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    priority: "optional",
  },
  {
    title: "SEO Audit & Analysis",
    description:
      "Uncover opportunities with detailed audits and competitor insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-b1f3a0c3f3f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    priority: "high",
  },
];

const SEOPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SEO Services in Hyderabad | Brick2Tech Digital</title>
        <meta
          name="description"
          content="Boost your rankings, traffic, and revenue with expert SEO services from Brick2Tech — Hyderabad’s top SEO agency. Get a free SEO audit today."
        />
        <meta
          name="keywords"
          content="SEO Hyderabad, SEO services, technical SEO, local SEO, keyword strategy, backlink building"
        />
        <meta property="og:title" content="Top SEO Services in Hyderabad | Brick2Tech" />
        <meta
          property="og:description"
          content="Rank higher on Google with proven SEO strategies tailored for Hyderabad businesses."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main
        className="bg-gradient-to-br from-white via-sky-100 to-blue-200 text-gray-800 overflow-x-hidden"
        aria-label="SEO Service Page"
      >
        {/* Hero Section */}
        <motion.section
          className="relative min-h-[90vh] flex items-center justify-center px-6 sm:px-12 py-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          aria-label="SEO Hero Section"
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-300 to-white opacity-40 -z-10" />
          {/* Content */}
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-blue-900">
              <span className="block">Trend Higher. Rank Smarter.</span>
              <span className="block text-[#0098d4]">Win Google.</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:text-xl text-blue-900/90 max-w-xl mx-auto">
              We turn your website into a search engine magnet. With Brick2Tech’s expert SEO, traffic grows, rankings rise, and ROI follows.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition"
              aria-label="Get a free SEO audit from Brick2Tech"
            >
              Free SEO Audit <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="py-24 px-6 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          aria-label="SEO Features"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            Why Choose Brick2Tech for SEO?
          </h2>
          <p className="text-center text-blue-800 max-w-3xl mx-auto mb-16 text-lg">
            We combine smart strategy and creative thinking to boost your visibility, attract more traffic, and drive real business results.
          </p>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
                variants={fadeUp}
                custom={index + 1}
                aria-label={feature.title}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-44 object-cover rounded-lg mb-6"
                  loading="lazy"
                />
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-sky-500 w-6 h-6 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-xl text-blue-900">{feature.title}</h3>
                    <p className="mt-2 text-blue-800">{feature.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Results Section */}
        <motion.section
          className="py-24 px-6 bg-sky-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          aria-label="SEO Results"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
                Proven SEO Results
              </h2>
              <p className="text-blue-800 text-lg mb-8 max-w-xl">
                Our SEO strategies drive measurable outcomes, from traffic growth to lead generation.
              </p>
              <ul className="space-y-6 text-blue-700">
                {[
                  {
                    title: "+250% Traffic Growth",
                    desc: "Rank for competitive keywords and double your website visitors.",
                  },
                  {
                    title: "3X Leads",
                    desc: "Convert organic visitors into customers with optimized funnels.",
                  },
                  {
                    title: "First Page Rankings",
                    desc: "Appear on Google’s first page for your niche in Hyderabad & beyond.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 w-6 h-6 flex-shrink-0 text-sky-500" />
                    <div>
                      <h4 className="font-bold text-xl">{item.title}</h4>
                      <p className="mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1611162617210-7d673f284f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Dashboard showing SEO metrics"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="bg-gradient-to-br from-sky-100 to-blue-200 text-blue-900 py-24 px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          aria-label="Call to Action"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Dominate Search Results?
            </h2>
            <p className="mb-8 text-lg max-w-xl mx-auto text-blue-100">
              Let Brick2Tech’s SEO experts help you climb Google rankings and grow your business.
            </p>
            <img
              src="https://images.unsplash.com/photo-1596526131083-5f1f4e1e43c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="SEO report preview"
              className="w-full max-w-md mx-auto h-64 object-cover rounded-xl shadow-lg mb-8"
              loading="lazy"
            />
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-yellow-400 text-blue-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition text-lg"
              aria-label="Get your free SEO consultation"
            >
              Get a Free SEO Audit <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default SEOPage;
