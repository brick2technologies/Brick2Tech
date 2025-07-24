import React from "react";
import { motion, easeInOut } from "framer-motion";
import { Lightbulb, Rocket, Settings, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const fadeIn = (direction: "up" | "left" = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : 0,
    x: direction === "left" ? 40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: easeInOut,
    },
  },
});

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white shadow-md rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
  >
    <div className="flex items-center justify-center mb-4">{icon}</div>
    <h3 className="text-xl text-center font-semibold text-gray-800 mb-2">
      {title}
    </h3>
    <p className="text-center text-gray-600">{description}</p>
  </motion.div>
);

const HomeAbout: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-b from-white to-gray-50 py-10 px-6 md:px-16 lg:px-24"
      id="about"
      aria-labelledby="about-heading"
    >
      {/* Helmet for SEO */}
      <Helmet>
        <title>About Brick 2 Technologies | Business Transformation Experts</title>
        <meta
          name="description"
          content="Discover how B2T empowers businesses through tailored strategies, digital innovation, and scalable transformation services. Partner with us for real results."
        />
        <link rel="canonical" href="https://brick2tech.com/about" />
      </Helmet>

      {/* Heading */}
      <motion.h2
        id="about-heading"
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4 hover:scale-105 transition-transform duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn("up")}
      >
        About{" "}
        <span className="text-[#0098d4]">Brick 2 Technologies</span>
      </motion.h2>

      {/* Image & Text */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.2)}
      >
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752147269/aboutUs_yllmow.webp"
            alt="Team discussing strategy at B2T"
            loading="lazy"
            className="rounded-xl w-full h-auto max-h-[400px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Paragraphs */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          {[
            "Brick2Tech is a results-driven company committed to helping businesses bridge the gap between ideas and execution.",
            "We specialize in delivering end-to-end solutions that empower organizations to scale, transform, and thrive in today’s digital landscape.",
            "At B2T, our mission is to be the catalyst for meaningful business transformation. We collaborate closely with our clients to understand their goals and challenges, crafting custom strategies that drive measurable success.",
            "From digital innovation to operational efficiency, we bring the right blend of creativity, technology, and expertise to every project.",
          ].map((text) => (
            <p
              key={text}
              className="text-md md:text-lg text-gray-700 hover:text-[#142c4c] hover:scale-105 transition-transform duration-300"
            >
              {text}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.4)}
      >
        <Feature
          icon={<Lightbulb className="text-blue-600 w-8 h-8" />}
          title="Tailored Solutions"
          description="We create custom strategies based on your unique business goals."
        />
        <Feature
          icon={<Rocket className="text-blue-600 w-8 h-8" />}
          title="End-to-End Services"
          description="From concept to execution, we handle the full digital journey."
        />
        <Feature
          icon={<TrendingUp className="text-blue-600 w-8 h-8" />}
          title="Strategy to Optimization"
          description="We ensure your transformation is measurable, scalable, and successful."
        />
        <Feature
          icon={<Settings className="text-blue-600 w-8 h-8" />}
          title="Continuous Support"
          description="Innovation doesn’t stop — and neither do we."
        />
      </motion.div>

      {/* Final Quote */}
      <motion.p
        className="mt-10 text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 transition-transform duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.6)}
      >
        <span className="text-[#142c4c]">At B2T,</span> we don't just consult —
        we partner with you to transform your vision into value.
      </motion.p>
    </section>
  );
};

export default HomeAbout;
