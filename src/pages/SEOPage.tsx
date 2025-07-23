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
        <meta
          property="og:title"
          content="Top SEO Services in Hyderabad | Brick2Tech"
        />
        <meta
          property="og:description"
          content="Rank higher on Google with proven SEO strategies tailored for Hyderabad businesses."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main
        className="bg-white text-gray-800 overflow-x-hidden"
        aria-label="SEO Service Page"
      >
        {/* Hero Section */}
        <motion.section
  className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 text-white px-4 sm:px-6 md:px-8 py-16"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  custom={0}
  aria-label="SEO Hero Section"
>
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1551288049-b1f3a0c3f3f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      alt="SEO analytics dashboard background"
      className="w-full h-full object-cover opacity-30"
      loading="lazy"
    />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl w-full text-center px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-snug">
      <span className="block">Trend Higher.Rank Smarter.</span>
      
      <span className="block">Win Google.</span>
    </h1>

    <p className="text-base sm:text-lg md:text-xl mt-4 text-white/90">
      We turn your website into a search engine magnet. <br /> With Brick2Tech’s expert SEO,
      traffic grows, rankings rise, and ROI follows.
    </p>

    <a
      href="/contact"
      className="mt-6 inline-flex items-center px-6 py-3 bg-yellow-400 text-blue-900 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
      aria-label="Get a free SEO audit from Brick2Tech"
    >
      Free SEO Audit
      <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  </div>
</motion.section>


        {/* Features Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          aria-label="SEO Features"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Why Choose Brick2Tech for SEO?
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
            We combine smart strategy and creative thinking to boost your visibility, attract more traffic, and drive real business results.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                variants={fadeUp}
                custom={index + 1}
                aria-label={feature.title}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 h-5 w-5 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Results Section */}
        <motion.section
          className="bg-gray-50 py-20 px-4 sm:px-6 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          aria-label="SEO Results"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Proven SEO Results</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Our SEO strategies drive measurable outcomes, from traffic
                growth to lead generation.
              </p>
              <ul className="space-y-5">
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
                    <CheckCircle className="text-green-500 h-5 w-5 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
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
          className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          aria-label="Call to Action"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Dominate Search Results?
            </h2>
            <p className="mb-6 text-lg">
              Let Brick2Tech’s SEO experts help you climb Google rankings and grow your
              business.
            </p>
            <img
              src="https://images.unsplash.com/photo-1596526131083-5f1f4e1e43c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="SEO report preview"
              className="w-full max-w-md mx-auto h-64 object-cover rounded-xl shadow-lg mb-6"
              loading="lazy"
            />
            <a
              href="/contact"
              className="inline-flex items-center bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
              aria-label="Get your free SEO consultation"
            >
              Get a Free SEO Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default SEOPage;
