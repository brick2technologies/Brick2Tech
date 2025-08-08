import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  CubeIcon,
  BuildingOfficeIcon,
  MapIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";


const services = [
  {
    icon: <CubeIcon className="h-8 w-8 text-indigo-500" />,
    title: "3D Walkthroughs & Visualization",
    desc: "Immersive 3D renders and walkthroughs that showcase every detail before construction begins.",
  },
  {
    icon: <MapIcon className="h-8 w-8 text-indigo-500" />,
    title: "Plot Planning & Vastu Mapping",
    desc: "Efficient, vastu-compliant plot layouts with smart zoning for residential and commercial use.",
  },
  {
    icon: <BuildingOfficeIcon className="h-8 w-8 text-indigo-500" />,
    title: "Architectural Design",
    desc: "Innovative, sustainable architectural blueprints for homes, villas, and real estate ventures.",
  },
];



const ArchitectureDesignPage = () => {
  return (
    <>
      <Helmet>
        <title>3D Architecture Services in Hyderabad | Brick2Tech</title>
        <meta name="description" content="Experience advanced 3D walkthroughs & visualizations with Brick2Tech – leading 3D architecture service provider in Hyderabad." />
          <meta name="keywords" content="3darchitecture services hyderabad, 3d walkthrough services hyderabad, architectural visualization hyderabad" />


            <meta property="og:title" content="Graphic Design Services | Brick2Tech" />
            <meta
              property="og:description"
              content="Craft visuals that inspire trust and drive growth. Check out our expert graphic design services."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://brick2tech.com/graphic-design" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Graphic Design Services | Brick2Tech" />
            <meta name="twitter:description" content="Expert graphic design that inspires, engages, and drives brand growth." />
            <meta name="author" content="Brick2Tech" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://brick2tech.com/graphic-design" />
          </Helmet>

          <main className="pt-24 pb-16 px-6 sm:px-12 lg:px-24 bg-white text-gray-900 min-h-screen">
            {/* Hero Section */}
            <motion.header
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 max-w-5xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#142c4c] leading-tight">
                3DArchitecture Meets Innovation
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Bring your vision to life with cutting-edge 3D walkthroughs, intelligent plot planning, and iconic architectural design.
              </p>
            </motion.header>

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
                  Realistic 3D Walkthroughs That Sell Before You Build
                </h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                    Cinematic walkthroughs & aerial flythroughs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                    Interior visualization with lighting & textures
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                    Virtual tours for marketing real estate
                  </li>
                </ul>
              </motion.div>
            </section>

            {/* Tools Section */}


            {/* Testimonial Section */}
            <section
              aria-labelledby="testimonial-heading"
              className="mt-24 max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2
                  id="testimonial-heading"
                  className="text-3xl font-bold text-[#142c4c] mb-6"
                >
                  Client Experience
                </h2>
                <blockquote className="text-lg text-gray-700 italic max-w-2xl mx-auto">
                  “Brick2Tech's 3D walkthrough made our villa project go viral before the
                  first brick was laid. Outstanding detailing and futuristic planning.”
                  <span className="block mt-4 font-semibold text-[#0098d4]">
                    — Sunitha Rao, MD, Elite Estates
                  </span>
                </blockquote>
              </motion.div>
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
                Let’s Design Something Timeless
              </h2>
              <p className="text-lg mb-6">
                Partner with Brick2Tech for innovative architectural planning, immersive
                visuals, and powerful 3D experiences.
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
