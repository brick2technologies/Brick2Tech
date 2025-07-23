import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface HeroProps {
  mousePosition: { x: number; y: number };
}

const Hero: React.FC<HeroProps> = ({ mousePosition }) => {
  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-black"
      aria-label="Hero Section"
    >
      {/* Helmet for SEO */}
      <Helmet>
        <title>Empower Your Brand with Digital Innovation | B2T</title>
        <meta
          name="description"
          content="Transform your business with cutting-edge digital marketing, stunning web design, and strategic branding that drives real impact with B2T."
        />
        <link rel="canonical" href="https://brick2tech.com" />
      </Helmet>

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="https://res.cloudinary.com/diqux3y0a/video/upload/v1753261522/B2T-Background_bzddbx.mp4" type="video/mp4" />
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>

      {/* Mouse Hover Radial Light */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.2) 0%, transparent 20%)`,
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 px-6 text-center max-w-4xl mx-auto space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Empowering Brands Through{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Digital Innovation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100"
        >
          Transform your business with cutting-edge marketing, stunning web
          design, and smart strategies that drive real impact.
        </motion.p>

        <Link to="/contact" aria-label="Navigate to Contact Page">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-6 py-3 bg-white text-[#142c4c] rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-10 sm:mt-8 md:mt-10"
            aria-label="Get started with our services"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
// ✅ This is the Hero component for your website.
// It includes a background video, a radial light effect on mouse hover, and a call-to-action button.
// Make sure to replace the video source with your own video file.
// The component uses Framer Motion for animations and React Helmet for SEO management.
// Adjust the styles and content as needed to fit your design requirements.