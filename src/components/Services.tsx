import { memo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Search,
  Smartphone,
  Globe,
  ShoppingCart,
  Palette,
  BarChart3,
  Camera,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Branding",
    icon: Palette,
    description: "Create a memorable brand identity...",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Typography",
      "Trademark Registration",
    ],
    link: "/services/branding",
  },
  {
    name: "SEO",
    icon: Search,
    description: "Boost your online visibility...",
    features: [
      "Keyword Research",
      "On-page SEO",
      "Technical SEO",
      "Link Building",
    ],
    link: "/services/seo",
  },
  {
    name: "Digital Marketing",
    icon: BarChart3,
    description: "Holistic marketing Approaches...",
    features: [
      "PPC Advertising",
      "Email Marketing",
      "Content Marketing",
      "Analytics",
    ],
    link: "/services/digital-marketing",
  },
  {
    name: "Social Media Marketing",
    icon: Smartphone,
    description: "Engage your audience...",
    features: [
      "Content Creation",
      "Community Management",
      "Social Advertising",
      "Influencer Marketing",
    ],
    link: "/services/social-media-marketing",
  },
  {
    name: "Virtual Walkthrough",
    icon: Camera,
    description: "Immersive VR & 3D experiences ...",
    features: [
      "Virtual Reality(VR) Tours",
      "3D Visualization",
      "Interactive Presentations",
      "Interactive Experiences",
    ],
    link: "/services/Architecture-Design",
  },
  {
    name: "Business Websites",
    icon: Globe,
    description: "Professional websites that represent your brand...",
    features: [
      "Custom Design",
      "Mobile Responsive",
      "CMS Integration",
      "Performance Optimization",
    ],
    link: "/services/web-development",
  },
  {
    name: "E-commerce Websites",
    icon: ShoppingCart,
    description: "Powerful online stores that provide seamless shopping...",
    features: [
      "Shopping Cart",
      "Payment Integration",
      "Inventory Management",
      "Order Tracking",
    ],
    link: "/services/web-development",
  },
  {
    name: "Brochure Design",
    icon: FileText,
    description: "Eye-catching brochures that communicate your message...",
    features: [
      "Print Design",
      "Digital Brochures",
      "Infographics",
      "Marketing Materials",
    ],
    link: "/services/Graphic-Design",
  },
];

const Services = () => {
  return (
    <section className="pt-20 pb-12 bg-white">
      <Helmet>
        <title>Our Services | Brick2Tech</title>
        <meta
          name="description"
          content="Explore a wide range of professional services from branding, digital marketing, SEO, to e-commerce solutions and 3D walkthroughs. Boost your business with Brick2Tech."
        />
        <meta
          name="keywords"
          content="branding, SEO, digital marketing, e-commerce websites, virtual walkthroughs, web development, UI UX, Hyderabad digital marketing company, Brick2Tech services"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://brick2tech.com/services" />
        <meta property="og:title" content="Our Services | Brick2Tech" />
        <meta
          property="og:description"
          content="Discover our full suite of digital services—branding, marketing, SEO, web development, and more—to grow your business online."
        />
        <meta property="og:url" content="https://brick2tech.com/services" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://brick2tech.com/seo/services-preview.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Brick2Tech" />
        <meta
          name="twitter:description"
          content="Explore Brick2Tech's expert branding, development, SEO, and marketing services designed to accelerate your growth."
        />
        <meta
          name="twitter:image"
          content="https://brick2tech.com/seo/services-preview.jpg"
        />
        <meta name="author" content="Brick2Tech" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0096d4] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of digital marketing and web
            development services designed to help your business thrive in the
            digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 text-center flex flex-col justify-between"
              >
                <div
                  className="w-16 h-16 mx-auto bg-[#142c4c] rounded-lg flex items-center justify-center mb-6"
                  aria-hidden="true"
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-[#0096d4] mb-3">
                  {service.name}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 text-left mx-auto max-w-xs">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <span className="w-1.5 h-1.5 bg-[#0096d4] rounded-full mr-2 shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.link}
                  className="w-full mt-6 block"
                  aria-label={`Learn more about ${service.name}`}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#142c4c] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#142c4c/60] transition-colors duration-300"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 bg-[#142c4c] rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4 text-[#0098d4]">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business
            goals and drive sustainable growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#142c4c] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
            aria-label="Get free consultation"
          >
            Let’s catch up over coffee
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Services);
