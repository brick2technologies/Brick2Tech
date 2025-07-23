import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  FileDown,
  Sparkles,
  CheckCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

/* ----------  Animation Variant ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

/* ----------  Data ---------- */
const services = [
  {
    title: "Strategic Brand Identity Development",
    description:
      "Craft a unique visual identity that resonates with your audience.",
    image:
      "https://images.unsplash.com/photo-1516321310762-479e93c1e39e?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Emotionally Engaging Brand Messaging",
    description:
      "Create compelling narratives that connect emotionally with customers.",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Data-Driven Market Positioning Strategies",
    description:
      "We use real-time analytics and proven frameworks to craft strategies that put your brand ahead of the curve.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Digital Branding & Social Media Presence",
    description: "Amplify your brand online with cohesive digital strategies.",
    image:
      "https://images.unsplash.com/photo-1611162617210-7d673f284f83?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Rebranding & Growth Acceleration",
    description: "Revitalize your brand to drive growth and market expansion.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=60",
  },
];

const faqs = [
  {
    question: "What is branding?",
    answer:
      "Branding is the process of creating a unique identity for your business—including your logo, messaging, and customer experience. A strong brand builds trust, recognition, and loyalty.",
  },
  {
    question: "How long does a branding project take?",
    answer:
      "Timelines vary based on project scope, but a typical branding project takes 4-8 weeks, including strategy, design, and implementation phases.",
  },
  {
    question: "What makes Brick2Tech different?",
    answer:
      "Brick2Tech combines creativity, data-driven insights, and a client-centric approach to deliver branding solutions that are both innovative and effective.",
  },
];

/* ----------  Page Component ---------- */
const Brick2TechBrandingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Brick2Tech Branding",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80",
    description:
      "Hyderabad’s leading branding agency helping businesses build high-impact, unforgettable brands.",
    url: "https://brick2tech.com",
    telephone: "+91-9876543210",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Road No 36, Jubilee Hills",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500033",
      addressCountry: "IN",
    },
    serviceType: [
      "Branding",
      "Graphic Design",
      "Rebranding",
      "Digital Branding",
    ],
  };

  return (
    <>
      <Head>
        <title>
          Build an Unstoppable Brand with Hyderabad’s Best – Brick2Tech Branding
        </title>
        <meta
          name="description"
          content="Brick2Tech Branding crafts high-impact, data-driven brand strategies for startups & enterprises in Hyderabad. Get noticed, grow faster."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://brick2tech.com" />
        <meta
          property="og:title"
          content="Build an Unstoppable Brand with Hyderabad’s Best – Brick2Tech Branding"
        />
        <meta
          property="og:description"
          content="Brick2Tech Branding crafts high-impact, data-driven brand strategies for startups & enterprises in Hyderabad. Get noticed, grow faster."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
        />
        <meta property="og:url" content="https://brick2tech.com/branding" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-white via-sky-100 to-sky-300 text-gray-800 py-16 px-6 overflow-x-hidden">
        {/* Hero Section */}
        <motion.section
          className="text-center py-24 px-6 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          aria-labelledby="hero-heading"
        >
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl font-bold mb-6 text-blue-900"
          >
            Is Your Brand Ready to Make Some Noise? <br />
            <span className="text-[#0098d4]">Let’s Build It Together.</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Your brand is more than a logo—it’s your voice, your value, and your
            vision. At <strong>Brick2Tech</strong>, we empower it with strategic
            insights to lead—not follow.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-flex items-center justify-center gap-2 bg-[#0098d4] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#0098d4] transition"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.section>

        {/* Services Section */}
        <section
          aria-labelledby="services-heading"
          className="py-20 px-6 max-w-7xl mx-auto"
        >
          <h2
            id="services-heading"
            className="text-4xl font-bold text-center mb-12 text-blue-900"
          >
            Our Branding Capabilities
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <motion.article
                key={idx}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
                variants={fadeUp}
                custom={idx + 1}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-44 rounded-lg object-cover mb-5"
                  loading="lazy"
                />
                <div className="flex items-start space-x-4">
                  <CheckCircle
                    className="text-[#0098d4] mt-1 w-6 h-6"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-xl text-blue-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mt-1">{service.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Why Graphic Design */}
        <section aria-labelledby="why-heading" className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <h2
                id="why-heading"
                className="text-4xl font-bold text-blue-900 mb-6"
              >
                Why Professional Graphic Design Matters
              </h2>
              <p className="text-gray-700 mb-6">
                Graphic design shapes perceptions, strengthens identity, and
                drives engagement. It’s your visual voice in a competitive
                world.
              </p>
              <ul className="space-y-4">
                {[
                  "Logo Design & Visual Identity",
                  "Data Driven Brand Strategy & Positioning",
                  "Digital Branding & Social Presence",
                  "Rebranding for Growth",
                  "Trademark & Copyright Protection",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center"
                    variants={fadeUp}
                    custom={i + 1}
                  >
                    <Sparkles
                      className="mr-3 text-[#0098d4] w-5 h-5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div variants={fadeUp} custom={1}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
                alt="Graphic design mockup on a desk"
                className="w-full h-80 rounded-xl object-cover shadow-md"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        {/* Impact Section */}
        <section
          aria-labelledby="impact-heading"
          className="py-20 px-6 max-w-7xl mx-auto text-center"
        >
          <h2
            id="impact-heading"
            className="text-4xl font-bold mb-8 text-blue-900"
          >
            Building Brands That Last
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-12">
            From startups to enterprises, our team delivers fast, affordable,
            and results-driven branding strategies that scale and evolve.
          </p>
          <motion.img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
            alt="Happy client team celebrating after a successful rebrand"
            className="w-full max-w-lg mx-auto h-72 rounded-xl object-cover shadow-lg"
            variants={fadeUp}
            custom={1}
            loading="lazy"
          />
        </section>

        {/* Why Brick2Tech Section */}
        <section
          aria-labelledby="why-Brick2Tech-heading"
          className="bg-gradient-to-br from-sky-50 via-white to-purple-50 py-16 px-6"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2
                id="why-Brick2Tech-heading"
                className="text-4xl font-bold mb-6 text-blue-900"
              >
                Why Choose Brick2Tech?
              </h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="mb-6 text-lg text-gray-700"
              >
                At <strong>Brick2Tech</strong>, we blend creativity, data, and
                innovation to craft brand experiences that connect and convert.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mb-6 text-lg text-gray-700"
              >
                Our scalable solutions suit startups and enterprises, with{" "}
                <strong>100+ successful brand transformations</strong>.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={3}
                className="text-lg text-gray-700"
              >
                Let’s bring your brand vision to life with Hyderabad’s leading
                experts.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} custom={1}>
              <img
                src="https://images.unsplash.com/photo-1516321310762-479e93c1e39e?auto=format&fit=crop&w=700&q=80"
                alt="Brick2Tech creative team collaborating in a modern workspace"
                className="w-full h-80 rounded-xl object-cover shadow-md"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          aria-labelledby="faq-heading"
          className="py-16 px-6 max-w-7xl mx-auto"
        >
          <h2
            id="faq-heading"
            className="text-4xl font-bold mb-12 text-center text-blue-900"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-md"
                variants={fadeUp}
                custom={index + 1}
              >
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-[#0098d4] rounded-md p-3 font-semibold text-lg"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-6 h-6 transform transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-700 mt-4 text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Download Brochure Section */}
        <section
          aria-labelledby="brochure-heading"
          className="bg-gradient-to-br from-[#1565c0] to-[#66e0ff] text-white py-16 px-6 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 id="brochure-heading" className="text-4xl font-bold mb-8">
              Download Our Branding Brochure
            </h2>
            <p className="mb-8 text-lg font-semibold max-w-xl mx-auto">
              Discover how Brick2Tech can elevate your brand. Get our brochure
              now.
            </p>
            <motion.img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=700&q=80"
              alt="Brick2Tech branding brochure mockup"
              className="w-full max-w-lg h-72 mx-auto rounded-xl object-cover shadow-lg mb-10"
              loading="lazy"
              variants={fadeUp}
              custom={1}
            />
            <motion.a
              href="/brochure.pdf"
              download
              variants={fadeUp}
              custom={2}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition text-lg"
            >
              <FileDown className="w-6 h-6" aria-hidden="true" />
              Download Brochure
            </motion.a>
          </div>
        </section>
      </main>
    </>
  );
};

export default React.memo(Brick2TechBrandingPage);
