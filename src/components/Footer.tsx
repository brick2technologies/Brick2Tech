import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/brick2technologies", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/brick2tech", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/brick2technologies/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/brick-2-technologies/", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Branding", href: "/services/branding" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "SEO Services", href: "/services/seo" },
    { name: "Social Media", href: "/services/social-media-marketing" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "Architecture Design", href: "/services/Architecture-Design" },
    { name: "Graphic Design", href: "/services/Graphic-Design" },    
  ];

  return (
    <footer className="bg-gray-900 text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
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
                className="h-auto w-auto mr-2 sm:w-20 md:w-32"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Empowering Growth Through Data-Driven Marketing Strategies.
            </p>
            <div className="flex space-x-4" aria-label="Social media links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.label}`}
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* Quick Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            aria-label="Quick links"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Services */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            aria-label="Services offered"
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact Info */}
          <motion.address
            className="not-italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            aria-label="Contact information"
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" aria-hidden="true" />
                <p className="hover:text-white transition-colors text-[.875rem]">
                  Brick 2 Technologies<br />
                  Plot no: 893/1, Sree Ram Nagar,<br />
                  Manikonda, Hyderabad-500089<br />
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

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
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
