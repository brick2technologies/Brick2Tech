import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    setShowServicesDropdown(false);
  }, [location.pathname]);

  const services = [
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "Branding", path: "/services/branding" },
    { name: "SEO", path: "/services/seo" },
    { name: "Social Media Marketing", path: "/services/social-media-marketing" },
    { name: "Web Development", path: "/services/web-development" },
    { name: "Mobile App Development", path: "/services/app-development" },
    { name: "Graphic Design", path: "/services/graphic-design" },
  ];

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center sm:left-0"
          >
            <Link to="/" aria-label="Go to homepage">
              <img
                loading="lazy"
                src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752840311/B2T_logo_wsxdog.png"
                alt="Brick2Tech Technologies Logo"
                className="h-[70px] w-auto left-0"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-6"
            role="navigation"
            aria-label="Main navigation"
          >
            {menuItems.map((item) => (
              <div key={item.path} className="relative">
                {!item.hasDropdown ? (
                  <Link
                    to={item.path}
                    aria-label={item.name}
                    aria-current={location.pathname === item.path ? "page" : undefined}
                    className={`px-3 py-2 rounded-md text-[14px] lg:text-[16px] font-normal transition-all duration-300 ${
                      location.pathname === item.path
                        ? "bg-[#142c4c] text-white"
                        : "hover:bg-[#142c4c] hover:text-white hover:shadow-lg text-[#142c4c]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                      onMouseEnter={() => setShowServicesDropdown(true)}
                      onMouseLeave={() => setShowServicesDropdown(false)}
                      aria-haspopup="true"
                      aria-expanded={showServicesDropdown}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-[14px] lg:text-[16px] font-normal transition-all duration-300 ${
                        location.pathname === item.path
                          ? "bg-[#142c4c] text-white"
                          : "hover:bg-[#142c4c] hover:text-white hover:shadow-lg text-[#142c4c]"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>

                    <AnimatePresence>
                      {showServicesDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-[#142c4c] text-white py-2 z-50"
                          onMouseEnter={() => setShowServicesDropdown(true)}
                          onMouseLeave={() => setShowServicesDropdown(false)}
                        >
                          <ul>
                            {services.map((service) => (
                              <li key={service.name}>
                                <Link
                                  to={service.path}
                                  onClick={() => setShowServicesDropdown(false)}
                                  className="flex items-center px-4 py-3 mx-2 hover:bg-[#142c4c] text-white transition-colors duration-200 rounded-md"
                                  aria-label={service.name}
                                >
                                  <span className="text-[#0098d4] font-normal hover:text-[#ffffff]">
                                    {service.name}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            to="/services"
                            onClick={() => setShowServicesDropdown(false)}
                            className="block text-center px-4 py-2 font-normal text-[#0489c2] hover:bg-[#142c4c] transition-colors duration-200"
                          >
                            View All Services
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            ))}

            {/* WhatsApp Contact - Icon Only on md */}
            <a
              href="https://wa.me/919000035647"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-[#25D366] font-medium hover:text-[#128C7E] transition-colors duration-200"
              aria-label="Chat with Brick2Tech on WhatsApp"
              title="Chat with Brick2Tech on WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                role="img"
                focusable="false"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="hidden lg:inline-block">+91 90000 35647</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-[#142c4c] hover:text-[#ffffff] hover:bg-[#142c4c] transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-2 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-label={item.name}
                  aria-current={location.pathname === item.path ? "page" : undefined}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "bg-[#142c4c] text-white"
                      : "text-[#0098d4] hover:bg-[#142c4c] hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <a
                href="https://wa.me/919000035647"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 rounded-md text-normal font-medium text-[#25D366] hover:bg-[#142c4c] hover:text-white"
                aria-label="Chat with Brick2Tech on WhatsApp"
                title="Chat with Brick2Tech on WhatsApp"
              >
                WhatsApp: +91 90000 35647
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
