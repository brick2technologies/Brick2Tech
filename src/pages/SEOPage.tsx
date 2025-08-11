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
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753338592/keywords-research-on-page-seo-technical_ovo1w4.webp",
    priority: "high",
  },
  {
    title: "Technical SEO Optimization",
    description: "Optimize site structure for better crawlability and speed.",
    image:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753338487/Technical-seo-website-optimization-1_lya1xj.webp",
    priority: "high",
  },
  {
    title: "On-Page SEO",
    description: "Enhance titles, meta tags, and content for higher rankings.",
    image:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753338402/On-Page-SEO_l8c4hy.jpg",
    priority: "high",
  },
  {
    title: "Backlink Building",
    description: "Build high-quality links to boost domain authority.",
    image:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753338327/Backlinks_mtmxru.jpg",
    priority: "medium",
  },
  {
    title: "Local SEO",
    description: "Optimize for local searches to attract nearby customers.",
    image:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753338256/Local-Seo-Tools-To-Improve-Your-Ranking_hev1js.png",
    priority: "optional",
  },
  {
    title: "SEO Audit & Analysis",
    description:
      "Uncover opportunities with detailed audits and competitor insights.",
    image:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1753336815/image_1_cmtdos.png",
    priority: "high",
  },
];

const SEOPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Best SEO Services in Hyderabad | Best SEO Agency in Hyderabad</title>
        <meta name="description" content="Rank higher on Google with Brick2Tech – the best SEO agency in Hyderabad. Custom SEO plans for traffic, leads & long-term search dominance." />
        <meta name="keywords" content="best seo services in hyderabad, seo agency in hyderabad, search engine optimization companies in hyderabad" />
        <meta name="canonical" content="https://brick2tech.com/services/seo" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brick2Tech Technologies" />
        <meta property="og:title" content="Best SEO Services in Hyderabad | Brick2Tech" />
        <meta
          property="og:description"
          content="Grow your Hyderabad business online with Brick2Tech’s results-driven SEO strategies. Get a free audit now!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brick2tech.com/services/seo" />
        <meta property="og:image" content="https://brick2tech.com/assets/seo-banner.png" />
        <meta property="og:site_name" content="Brick2Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hyderabad’s Leading SEO Agency - Brick2Tech" />
        <meta
          name="twitter:description"
          content="Rank higher, get more traffic & grow your business with Brick2Tech’s expert SEO services."
        />
        <meta name="twitter:image" content="https://brick2tech.com/assets/seo-banner.png" />
      </Helmet>


      <main
        className="bg-gradient-to-br from-white via-sky-100 to-blue-200 text-gray-800 overflow-x-hidden"
        aria-label="SEO Service Page"
      >
        <h1 className="sr-only">Best SEO Services in Hyderabad  </h1>
        {/* Hero Section */}
        <motion.section
          className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 py-20 text-center md:text-left overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          aria-label="SEO Hero Section"
        >
          {/* Image on the left */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-start mb-10 md:mb-0">
            <img
              src="https://res.cloudinary.com/diqux3y0a/image/upload/v1753336272/seo_bg_vni30o.png"
              alt="SEO Illustration"
              className="w-[300px] sm:w-[400px] md:w-[500px] h-auto object-contain rotate-90 md:rotate-0 transition-transform duration-500"
            />
          </div>


          {/* Content */}
          <div className="md:w-1/2 w-full max-w-2xl z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-blue-900">
              <span className="block">Trend Higher. <br /> Rank Smarter.</span>
              <span className="block text-[#0098d4]">Win Google.</span>
            </h2>
            <p className="mt-6 mb-8 text-lg sm:text-xl text-blue-900/90 max-w-xl mx-auto md:mx-0">
              We turn your website into a search engine magnet. With Brick2Tech’s expert SEO, traffic grows, rankings rise, and ROI follows.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0096d4] hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition"
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
                src="https://res.cloudinary.com/diqux3y0a/image/upload/v1753334810/image_vg1up9.png"
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
              src="https://res.cloudinary.com/diqux3y0a/image/upload/v1753338718/site-audit-dashboard_ogya82.jpg"
              alt="SEO report preview"
              className="w-full max-w-md mx-auto h-64 object-cover rounded-xl shadow-lg mb-8"
              loading="lazy"
            />
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#0096d4] text-blue-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition text-lg"
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
