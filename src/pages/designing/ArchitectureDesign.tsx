import { motion, easeInOut } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  CubeIcon,
  BuildingOfficeIcon,
  MapIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";


const benefits = [
  {
    title: "Enhanced Project Communication",
    desc: "Clearly showcase your ideas to clients and investors.",
  },
  {
    title: "Improved Planning & Execution",
    desc: "Visual models help identify potential challenges before construction begins.",
  },
  {
    title: "Stronger Client Engagement",
    desc: "Interactive visuals and walkthroughs create excitement and foster collaboration.",
  },
  {
    title: "Better Marketing Materials",
    desc: "Use high-quality renders and animations in promotional campaigns and presentations.",
  },
  {
    title: "Reduced Costs & Time",
    desc: "Faster approvals and fewer revisions translate into streamlined project management.",
  },
];

const services = [
  {
    icon: <CubeIcon className="h-8 w-8 text-indigo-500" />,
    title: "3D Rendering & Visualization",
    desc: "Photorealistic renderings that bring your blueprints to life with accurate lighting, textures, and materials.",
  },
  {
    icon: <MapIcon className="h-8 w-8 text-indigo-500" />,
    title: "Architectural Walkthroughs",
    desc: "Interactive animated walkthroughs showcasing every angle and feature of your design.",
  },
  {
    icon: <BuildingOfficeIcon className="h-8 w-8 text-indigo-500" />,
    title: "Interior & Conceptual Design",
    desc: "Detailed visualizations of interiors and innovative concepts to explore design alternatives.",
  },
];

const fadeIn = (
    direction: "up" | "down" | "left" | "right",
    delay: number = 0
  ) => {
    return {
      hidden: {
        opacity: 0,
        x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
        y: direction === "up" ? -50 : direction === "down" ? 50 : 0,
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.8, delay, ease: easeInOut }, // ✅ use easing function
      },
    };
  };

const ArchitectureDesignPage = () => {
  return (
    <>
      <Helmet>
        <title>3D Architecture Services in Hyderabad | Brick2Tech</title>
        <meta
          name="description"
          content="Discover expert 3D architecture services in Hyderabad with Brick2Tech. Transform your designs with stunning visualizations, walkthroughs, and VR integrations."
        />
        <meta
          name="keywords"
          content="3d architecture services hyderabad, 3d walkthrough services hyderabad, architectural visualization hyderabad, 3d rendering hyderabad"
        />
        <meta property="og:title" content="3D Architecture Services | Brick2Tech" />
        <meta
          property="og:description"
          content="Elevate your architectural projects with Brick2Tech’s 3D visualization, walkthroughs, and innovative design solutions in Hyderabad."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brick2tech.com/architecture-design" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3D Architecture Services | Brick2Tech" />
        <meta
          name="twitter:description"
          content="Transform your architectural vision with expert 3D renderings, walkthroughs, and VR solutions in Hyderabad."
        />
        <meta name="author" content="Brick2Tech" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://brick2tech.com/architecture-design" />
      </Helmet>

      <main className="pt-24 pb-16 px-6 sm:px-12 lg:px-24 bg-white text-gray-900 min-h-screen">
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 max-w-5xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#142c4c] leading-tight">
            Bringing Your Designs to Life with Stunning Visualizations
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            At Brick2Tech, we offer expert 3D architecture services in Hyderabad, turning your ideas into immersive, photorealistic presentations for real estate and construction.
          </p>
        </motion.header>

        <section className="py-16 bg-gray-50 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              className="text-3xl font-bold mb-6 text-gray-900"
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
            >
              3D Architecture Services in Hyderabad
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed mb-6"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
            >
              In today’s fast-paced construction and real estate industry, clear, accurate, and visually engaging architectural designs are crucial to winning projects and impressing clients. At Brick2Tech, we are proud to offer expert 3D architecture services Hyderabad, helping architects, builders, developers, and interior designers showcase their projects with realistic renderings and immersive designs.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
            >
              Our advanced 3D modeling solutions turn ideas into visually captivating presentations that communicate the scope, aesthetics, and functionality of any project. Whether you’re designing residential complexes, commercial buildings, or interior spaces, our 3D architecture services add depth, clarity, and impact to your designs.
            </motion.p>
          </div>
        </section>

        {/* Services Section */}
        <section
          aria-label="Architectural Services"
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              className="p-8 rounded-xl shadow-md hover:shadow-xl border bg-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#142c4c] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.article>
          ))}
        </section>

        {/* 3D Walkthrough Section */}
        <section
          aria-label="3D Walkthrough"
          className="mt-24 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        >
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="rounded-xl shadow-lg w-full h-auto"
            src="https://res.cloudinary.com/diqux3y0a/video/upload/v1685972710/walkthrough_sample.mp4"
            title="3D Walkthrough Sample"
            aria-label="3D Walkthrough Video"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#142c4c]">
              Immersive 3D Walkthroughs & Visualizations
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                Photorealistic renderings with accurate lighting and textures
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                Interactive VR tours for real-time client feedback
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                Comprehensive visualizations for landscapes and urban planning
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section
          aria-label="Benefits"
          className="mt-24 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#142c4c] text-center mb-8">
              Why Choose Brick2Tech?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-[#142c4c] mb-2">Realistic Visualizations</h3>
                <p className="text-gray-600">High-quality, photorealistic 3D models that enhance client presentations.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-[#142c4c] mb-2">Tailored Solutions</h3>
                <p className="text-gray-600">Custom visualizations crafted to highlight your project’s unique strengths.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-[#142c4c] mb-2">Faster Approvals</h3>
                <p className="text-gray-600">Clear, immersive designs speed up client approvals and reduce revisions.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-[#142c4c] mb-2">Experienced Team</h3>
                <p className="text-gray-600">Our designers and architects ensure creativity and precision in every project.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#142c4c] text-center mb-12">
            Benefits of Professional 3D Architecture Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md border hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-[#142c4c] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-700 mt-10 max-w-3xl mx-auto">
            With 3D architecture services Hyderabad from Brick2Tech, you gain a
            powerful tool to communicate your vision, attract investors, and
            deliver exceptional designs with precision and style.
          </p>
        </section>



        {/* CTA Section */}
        <motion.section
          aria-labelledby="cta-heading"
          className="mt-24 py-12 px-8 bg-gradient-to-r from-[#0098d4] to-[#142c4c] rounded-3xl text-white text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Transform Your Architectural Vision
          </h2>
          <p className="text-lg mb-6">
            Partner with Brick2Tech for cutting-edge 3D architecture services in Hyderabad that elevate your projects and captivate clients.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0098d4] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
          >
            Book a Free Consultation
          </a>
        </motion.section>
      </main>
    </>
  );
};

export default ArchitectureDesignPage;