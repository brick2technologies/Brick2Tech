import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

const XIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
);

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/brick2technologies/", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/brick2technologies", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/brick-2-technologies/", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/brick2tech", label: "X" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Digital Marketing", path: "/digital-marketing-agency" },
  { name: "Branding", path: "/services/marketing/branding" },
  { name: "SEO", path: "/seo-services-hyderabad" },
  { name: "Social Media Marketing", path: "/social-media-marketing-services" },
  { name: "Web Development", path: "/web-development-services" },
  { name: "Mobile App Development", path: "/app-development-services" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Company information"
          >
            <div className="flex items-center mb-6">
              <img
                src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752839930/B2T_logo_white_zo4oxt.png"
                alt="Brick2Tech Digital Agency logo"
                className="h-auto w-30 sm:w-32 md:w-40 lg:w-48 xl:w-56 mr-2"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 mb-4 text-center sm:text-justify">
              Empowering Growth Through <br />
              Data-Driven Marketing Strategies.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start" aria-label="Social media links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.section>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            aria-label="Quick links"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            aria-label="Services offered"
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.address
            className="not-italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            aria-label="Contact information"
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-semibold text-gray-400 ">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" aria-hidden="true" />
                <p className="hover:text-white transition-colors ">
                  Brick 2 Technologies<br />
                  Plot no: 38/201, MIG - 6 <br />
                  Sunrise Residency,<br />
                  Manikonda, Hyderabad - 500 089<br />
                  Telangana, India.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" aria-hidden="true" />
                <a href="tel:+919000035647" className="hover:text-white transition-colors">
                  +91 90000 35647
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" aria-hidden="true" />
                <a
                  href="mailto:brick2tech@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  brick2technologies@gmail.com
                </a>
              </div>
            </div>
          </motion.address>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-4 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Brick2Technologies. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
