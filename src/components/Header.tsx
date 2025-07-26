import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";


const Header: React.FC = () => {
  const location = useLocation();
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: "Digital Marketing",  path: "/services/digital-marketing" },
    { name: "Branding",  path: "/services/branding" },
    { name: "SEO",  path: "/services/seo" },  
    { name: "Social Media Marketing",  path: "/services/social-media-marketing" }, 
    { name: "Web Development", path: "/services/web-development" },
    { name: "Mobile App Development", path: "/services/mobile-app-development" },
    { name: "Architecture Design", path: "/services/architecture-design" },
    { name: "Graphic Design", path: "/services/graphic-design" },
  ];

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "About Us", path: "/about" },
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
            className="flex items-center"
          >
            <img
              loading="lazy"
              src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752756464/B2T_logo_01_ojopos.svg"
              alt="Brick2Tech Logo"
              className="h-[200px] w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {menuItems.map((item) => (
              <div key={item.path} className="relative">
                {!item.hasDropdown ? (
                  <Link
                    to={item.path}
                    aria-label={item.name}
                    className={`px-3 py-2 rounded-md text-sm font-bold transition-all duration-300 ${
                      location.pathname === item.path
                        ? "bg-[#142c4c] text-white"
                        : " hover:bg-[#142c4c] hover:text-white hover:shadow-lg text-[#000000]"
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
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-bold transition-all duration-300 ${
                        location.pathname === item.path
                          ? "bg-[#142c4c] text-white"
                          : " hover:bg-[#142c4c] hover:text-white hover:shadow-lg text-[#142c4c] "
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>

                    {/* Dropdown */}
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
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              onClick={() => setShowServicesDropdown(false)}
                              className="flex items-center px-4 py-3 mx-2 hover:bg-[#142c4c]/90 text-white transition-colors duration-200 rounded-md"
                              aria-label={service.name}
                            >
                              
                              <span className="text-[#0098d4] font-semibold hover:text-[#ffffff]">
                                {service.name}
                              </span>
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            onClick={() => setShowServicesDropdown(false)}
                            className="block text-center px-4 py-2 font-medium text-[#0489c2] hover:bg-[#142c4c] transition-colors duration-200"
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
          </nav>

          {/* Mobile Menu Button */}
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
          >
            <div className="px-4 py-2 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "bg-[#142c4c] text-white"
                      : "text-[#0098d4] hover:bg-[#142c4c] hover:text-white"
                  }`}
                  aria-label={item.name}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
// ✅ This is the Header component for your website.
// It includes a responsive navigation menu with dropdowns for services.  