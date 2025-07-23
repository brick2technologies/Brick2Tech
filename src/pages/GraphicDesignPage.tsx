import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  SparklesIcon,
  DocumentTextIcon,
  Squares2X2Icon,
  BookOpenIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: <DocumentTextIcon className="h-8 w-8 text-indigo-500" />,
    title: "Corporate Brochure Design",
    desc: "Professionally crafted brochures that reflect your brand and engage potential clients.",
  },
  {
    icon: <Squares2X2Icon className="h-8 w-8 text-indigo-500" />,
    title: "E-Catalogue Design",
    desc: "Interactive and visually compelling e-catalogues optimized for digital distribution.",
  },
  {
    icon: <BookOpenIcon className="h-8 w-8 text-indigo-500" />,
    title: "Magazine Layouts",
    desc: "Creative and structured magazine designs for impactful storytelling and readability.",
  },
  {
    icon: <CubeIcon className="h-8 w-8 text-indigo-500" />,
    title: "Print & Packaging Design",
    desc: "Eye-catching packaging and printed materials that leave a lasting brand impression.",
  },
];

const GraphicDesignPage = () => {
  return (
    <>
      <Helmet>
        <title>Graphic Design Services | B2T Agency</title>
        <meta
          name="description"
          content="From logos to motion graphics, B2T delivers visually stunning branding that captivates, communicates, and converts. Explore our graphic design services."
        />
        <meta
          name="keywords"
          content="graphic design, branding, logo design, animation, motion graphics, packaging, B2T"
        />
        <meta property="og:title" content="Graphic Design Services | B2T" />
        <meta
          property="og:description"
          content="Craft visuals that inspire trust and drive growth. Check out our expert graphic design services."
        />
      </Helmet>

      <section
        className="pt-24 pb-16 px-6 sm:px-12 lg:px-24 bg-white text-gray-900 min-h-screen"
        aria-label="Graphic Design Services"
      >
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#142c4c] leading-tight">
            Elevate Your Brand with Powerful Visual Storytelling
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            From logos to motion graphics, we craft stunning visuals that
            inspire trust, increase impact, and grow your business.
          </p>
        </motion.header>

        {/* Services Section */}
        <motion.section
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
          aria-label="Design Services"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              className="p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 bg-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-6">{service.icon}</div>
              <h2 className="text-xl font-bold text-[#142c4c] mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.article>
          ))}
        </motion.section>

        {/* Motion Graphics Showcase */}
        <section
          className="mt-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
          aria-label="Motion Graphics Showcase"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <video
              className="rounded-xl shadow-lg w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label="Motion graphics sample video"
              title="Motion Graphics Preview"
            >
              <source
                src="https://res.cloudinary.com/diqux3y0a/video/upload/v1685972710/motion_sample.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#142c4c] mb-4">
              Motion Graphics That Move People
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Whether it's a product animation, brand intro, or UI demo, our
              motion graphics team brings ideas to life with stunning visual
              effects and transitions.
            </p>
            <ul className="space-y-2 text-gray-700">
              {[
                "Lottie animations & vector-based graphics",
                "Product explainer videos & reels",
                "YouTube intros & logo reveals",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <SparklesIcon
                    className="h-5 w-5 text-purple-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* Tools Section */}

        {/* Testimonials Section */}
        <motion.section
          className="mt-24 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          aria-label="Client Testimonials"
        >
          <h2 className="text-3xl font-bold text-[#142c4c] mb-6">
            What Our Clients Say
          </h2>
          <blockquote className="text-lg text-gray-700 italic max-w-2xl mx-auto">
            “B2T Studio transformed our online presence. From logo to
            animations, every element tells our story with clarity and
            creativity.”
            <span className="block mt-4 font-semibold text-[#0098d4]">
              — Ramesh Patel, CEO, AgroMitra
            </span>
          </blockquote>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="mt-24 py-12 px-8 bg-gradient-to-r from-[#0098d4] to-[#142c4c] rounded-3xl text-white text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label="Call to Action"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-lg mb-6">
            Let’s collaborate to create visuals that captivate and convert. Get
            in touch with our creative team today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0098d4] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            aria-label="Contact B2T Design Team"
          >
            Get Started
          </a>
        </motion.section>
      </section>
    </>
  );
};

export default GraphicDesignPage;
