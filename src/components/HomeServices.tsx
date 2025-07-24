import React from "react";
import { Helmet } from "react-helmet-async";
import { motion, easeInOut } from "framer-motion";
import {
  Brush,
  Megaphone,
  Globe,
  Monitor,
  Smartphone,
  Eye,
  CheckCircle,
  BrainCircuit,
  BarChart2,
  LucideFigma,
} from "lucide-react";

interface ServiceProps {
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

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white shadow-md rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
    aria-label={title}
  >
    <div className="flex items-center justify-center mb-4" aria-hidden="true">
      {icon}
    </div>
    <h3 className="text-xl text-center font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </motion.div>
);

const HomeServices: React.FC = () => {
  return (
    <section
      className="bg-[#142c4c]/95 py-20 px-6 md:px-16 lg:px-24 text-white"
      id="services"
    >
      <Helmet>
        <title>Our Services | Brick2Tech Digital Agency</title>
        <meta
          name="description"
          content="Discover Brick2Tech's full suite of services including branding, SEO, digital marketing, web development, and more to transform your business."
        />
      </Helmet>

      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn("up")}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300 text-[#0098d4]">
          Our Services
        </h2>
        <p className="text-lg leading-relaxed hover:scale-105 transition-transform duration-300">
          At Brick2Tech, we offer a comprehensive suite of services designed to drive
          growth, efficiency, and digital transformation. Whether you're a
          startup, SME, or enterprise, our solutions are tailored to meet your
          unique needs and business goals.
        </p>
      </motion.div>

      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.2)}
      >
        <ServiceCard icon={<Brush className="text-[#0098d4] w-8 h-8" />} title="Branding" description="Crafting powerful brand stories that resonate with lasting impression." />
        <ServiceCard icon={<BrainCircuit className="text-[#0098d4] w-8 h-8" />} title="Strategy & Consulting" description="Strategic insights to elevate your business and drive results." />
        <ServiceCard icon={<Megaphone className="text-[#0098d4] w-8 h-8" />} title="Digital Marketing" description="Data-driven campaigns that connect, engage, and convert." />
        <ServiceCard icon={<Monitor className="text-[#0098d4] w-8 h-8" />} title="Web Development" description="Building responsive, user-friendly websites that perform." />
        <ServiceCard icon={<Globe className="text-[#0098d4] w-8 h-8" />} title="Search Engine Optimization" description="Optimizing your online presence for maximum visibility and traffic." />
        <ServiceCard icon={<Smartphone className="text-[#0098d4] w-8 h-8" />} title="Social Media Marketing" description="Engaging your audience through impactful social media strategies." />
        <ServiceCard icon={<BarChart2 className="text-[#0098d4] w-8 h-8" />} title="Performance Marketing" description="Driving measurable results with targeted campaigns." />
        <ServiceCard icon={<Eye className="text-[#0098d4] w-8 h-8" />} title="3D Walkthroughs" description="Immersive 3D experiences that showcase your projects in detail." />
        <ServiceCard icon={<LucideFigma className="text-[#0098d4] w-8 h-8" />} title="Graphic Design" description="Creating stunning visuals that communicate your brand's message effectively." />
      </motion.div>

      <motion.div
        className="mt-20 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.4)}
      >
        <h3 className="text-3xl font-bold text-[#0098d4] mb-8 text-center hover:scale-105 transition-transform duration-300">
          Why Choose <span className="text-[#0098d4]">Brick2Tech?</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              {
                title: "Tailored, results-oriented solutions",
                desc: "We analyze your needs and build solutions that align with your vision and goals.",
              },
              {
                title: "Cross-functional team of experts",
                desc: "Our professionals bring deep experience across development, marketing, and design.",
              },
              {
                title: "Scalable strategies for growing businesses",
                desc: "We design with growth in mind — every solution is built to evolve with you.",
              },
              {
                title: "Transparent communication & timely delivery",
                desc: "Clear updates, honest feedback, and punctual project milestones.",
              },
            ].map((point, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-[#0098d4] w-6 h-6 mt-1" aria-hidden="true" />
                <div className="hover:scale-105 transition-transform duration-300">
                  <h4 className="font-semibold text-lg">{point.title}</h4>
                  <p>{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752139630/whychoose-B2T_e6mivd.png"
              alt="Illustration of reasons to choose Brick2Tech"
              className="w-full h-auto object-contain rounded-xl hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.p
          className="mt-10 text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Let <span className="text-[#0098d4]">Brick2Tech</span> be your transformation partner. Together, we turn bold ideas into powerful results.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HomeServices;
// ✅ This is the HomeServices component for your website.
// It showcases the services offered by Brick2Tech with animations and SEO optimization using React Helmet.