import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Globe, Smartphone, Megaphone, Monitor, Brush, BarChart2, Mail, Users, Search, ShoppingCart, Code, Server, Palette, FileText, PenTool, Building } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    setShowServicesDropdown(false);
  }, [location.pathname]);

  const services = {
  marketing: [
    {
      icon: <Monitor className="text-[#0098d4] w-5 h-5" />,
      title: "Digital Marketing",
      path: "/digital-marketing-agency",
    },
    {
      icon: <Search className="text-[#0098d4] w-5 h-5" />,
      title: "SEO",
      path: "/seo-services-hyderabad",
    },
    {
      icon: <BarChart2 className="text-[#0098d4] w-5 h-5" />,
      title: "Content Marketing",
      path: "/content-marketing",
    },
    {
      icon: <Users className="text-[#0098d4] w-5 h-5" />,
      title: "Social Media Management",
      path: "/social-media-management",
    },
    {
      icon: <Smartphone className="text-[#0098d4] w-5 h-5" />,
      title: "Social Media Marketing",
      path: "/social-media-marketing-services",
    },
    {
      icon: <Megaphone className="text-[#0098d4] w-5 h-5" />,
      title: "Search Engine Marketing",
      path: "/search-engine-marketing",
    },
    {
      icon: <Mail className="text-[#0098d4] w-5 h-5" />,
      title: "Email Marketing",
      path: "/email-marketing",
    },
    {
      icon: <Globe className="text-[#0098d4] w-5 h-5" />,
      title: "Influencer Marketing",
      path: "/influencer-marketing",
    },
  ],
  development: [
    {
      icon: <ShoppingCart className="text-[#0098d4] w-5 h-5" />,
      title: "Ecommerce Website",
      path: "/ecommerce-website-services",
    },
    {
      icon: <Code className="text-[#0098d4] w-5 h-5" />,
      title: "Web Development",
      path: "/web-development-services",
    },
    {
      icon: <Server className="text-[#0098d4] w-5 h-5" />,
      title: "Web Hosting",
      path: "/web-hosting-services",
    },
    {
      icon: <Smartphone className="text-[#0098d4] w-5 h-5" />,
      title: "App Development",
      path: "/app-development-services",
    },
  ],
  designing: [
    {
      icon: <FileText className="text-[#0098d4] w-5 h-5" />,
      title: "Brochure Design",
      path: "/brochure-design-services",
    },
    {
      icon: <Palette className="text-[#0098d4] w-5 h-5" />,
      title: "Graphic Design",
      path: "/graphic-design",
    },
    {
      icon: <Brush className="text-[#0098d4] w-5 h-5" />,
      title: "Logo Design",
      path: "/logo-design",
    },
    {
      icon: <Building className="text-[#0098d4] w-5 h-5" />,
      title: "Architecture Design",
      path: "/architecture-design",
    },
    {
      icon: <PenTool className="text-[#0098d4] w-5 h-5" />,
      title: "UI/UX Design",
      path: "/uiux-design", // keep if you have a page
    },
  ],
};


  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", hasDropdown: true },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setShowServicesDropdown(!showServicesDropdown);
    }
  };

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
            <Link to="/" aria-label="Go to homepage">
              <img
                loading="lazy"
                src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752840311/B2T_logo_wsxdog.png"
                alt="Brick2Tech Technologies Logo"
                className="h-[70px] w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-6"
            role="navigation"
            aria-label="Main navigation"
          >
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                {!item.hasDropdown ? (
                  <Link
                    to={item.path!}
                    aria-label={item.name}
                    aria-current={location.pathname === item.path ? "page" : undefined}
                    className={`px-3 py-2 rounded-md text-[16px] font-normal transition-all duration-300 ${
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
                      onKeyDown={handleKeyDown}
                      onMouseEnter={() => setShowServicesDropdown(true)}
                      onMouseLeave={() => setShowServicesDropdown(false)}
                      aria-haspopup="true"
                      aria-expanded={showServicesDropdown}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-[16px] font-normal transition-all duration-300 ${
                        showServicesDropdown
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
                          className="absolute top-full right-0 translate-x-0 mt-2 w-[90vw] min-w-[320px] max-w-[740px]  bg-white rounded-lg shadow-xl border border-[#142c4c] py-6 z-50"
                          onMouseEnter={() => setShowServicesDropdown(true)}
                          onMouseLeave={() => setShowServicesDropdown(false)}
                        >
                          <div className="flex flex-row flex-wrap gap-6 px-8">
                            {/* Marketing Section */}
                            <div className="flex flex-col min-w-[200px]">
                              <h3 className="text-[#142c4c] font-semibold mb-3 text-lg">Marketing</h3>
                              {services.marketing.map((service) => (
                                <Link
                                  key={service.title}
                                  to={service.path}
                                  onClick={() => setShowServicesDropdown(false)}
                                  className="flex items-center space-x-3 px-3 py-2 hover:bg-[#142c4c] hover:text-white rounded-md transition-colors duration-200 group min-w-[200px]"
                                  aria-label={service.title}
                                >
                                  {service.icon}
                                  <span className="text-[#0098d4] font-medium group-hover:text-white text-sm">
                                    {service.title}
                                  </span>
                                </Link>
                              ))}
                            </div>

                            {/* Development Section */}
                            <div className="flex flex-col min-w-[200px]">
                              <h3 className="text-[#142c4c] font-semibold mb-3 text-lg">Development</h3>
                              {services.development.map((service) => (
                                <Link
                                  key={service.title}
                                  to={service.path}
                                  onClick={() => setShowServicesDropdown(false)}
                                  className="flex items-center space-x-3 px-3 py-2 hover:bg-[#142c4c] hover:text-white rounded-md transition-colors duration-200 group min-w-[200px]"
                                  aria-label={service.title}
                                >
                                  {service.icon}
                                  <span className="text-[#0098d4] font-medium group-hover:text-white text-sm">
                                    {service.title}
                                  </span>
                                </Link>
                              ))}
                            </div>

                            {/* Designing Section */}
                            <div className="flex flex-col min-w-[200px]">
                              <h3 className="text-[#142c4c] font-semibold mb-3 text-lg">Designing</h3>
                              {services.designing.map((service) => (
                                <Link
                                  key={service.title}
                                  to={service.path}
                                  onClick={() => setShowServicesDropdown(false)}
                                  className="flex items-center space-x-3 px-3 py-2 hover:bg-[#142c4c] hover:text-white rounded-md transition-colors duration-200 group min-w-[200px]"
                                  aria-label={service.title}
                                >
                                  {service.icon}
                                  <span className="text-[#0098d4] font-medium group-hover:text-white text-sm">
                                    {service.title}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* View All Services Button */}
                          <div className="border-t border-gray-200 mt-4 pt-4 px-8">
                            <button
                              onClick={() => {
                                setShowServicesDropdown(false);
                                navigate("/services");
                              }}
                              className="flex items-center justify-center w-full px-4 py-2 bg-[#0098d4] text-white rounded-md hover:bg-[#142c4c] transition-colors duration-200 font-medium"
                              aria-label="View all services"
                            >
                              View All Services
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            ))}

            {/* WhatsApp Contact */}
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
              <span className="hidden xl:inline-block">+91 90000 35647</span>
            </a>
          </nav>

          {/* Mobile and Tablet Menu Toggle */}
          <button
            className="md:flex lg:hidden p-2 rounded-md text-[#142c4c] hover:text-[#ffffff] hover:bg-[#142c4c] transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile and Tablet Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-2 space-y-1">
              {menuItems.map((item) =>
                !item.hasDropdown ? (
                  <Link
                    key={item.name}
                    to={item.path!}
                    aria-label={item.name}
                    aria-current={location.pathname === item.path ? "page" : undefined}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "bg-[#142c4c] text-white"
                        : "text-[#0098d4] hover:bg-[#142c4c] hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div key="services-mobile" className="space-y-2">
                    <button
                      onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                      onKeyDown={handleKeyDown}
                      aria-haspopup="true"
                      aria-expanded={showServicesDropdown}
                      className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        showServicesDropdown
                          ? "bg-[#142c4c] text-white"
                          : "text-[#0098d4] hover:bg-[#142c4c] hover:text-white"
                      }`}
                    >
                      Services
                      <ChevronDown className={`inline-block h-4 w-4 ml-2 transform ${showServicesDropdown ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {showServicesDropdown && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 space-y-2"
                        >
                          {/* Marketing Services */}
                          <div>
                            <div className="text-sm font-semibold text-[#142c4c] mb-2">Marketing</div>
                            {services.marketing.map((service) => (
                              <Link
                                key={service.title}
                                to={service.path}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setShowServicesDropdown(false);
                                }}
                                className="flex items-center space-x-2 px-3 py-2 text-sm text-[#0098d4] hover:bg-[#142c4c] hover:text-white rounded-md ml-2 mb-1"
                              >
                                {service.icon}
                                <span>{service.title}</span>
                              </Link>
                            ))}
                          </div>

                          {/* Development Services */}
                          <div>
                            <div className="text-sm font-semibold text-[#142c4c] mb-2">Development</div>
                            {services.development.map((service) => (
                              <Link
                                key={service.title}
                                to={service.path}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setShowServicesDropdown(false);
                                }}
                                className="flex items-center space-x-2 px-3 py-2 text-sm text-[#0098d4] hover:bg-[#142c4c] hover:text-white rounded-md ml-2 mb-1"
                              >
                                {service.icon}
                                <span>{service.title}</span>
                              </Link>
                            ))}
                          </div>

                          {/* Designing Services */}
                          <div>
                            <div className="text-sm font-semibold text-[#142c4c] mb-2">Designing</div>
                            {services.designing.map((service) => (
                              <Link
                                key={service.title}
                                to={service.path}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setShowServicesDropdown(false);
                                }}
                                className="flex items-center space-x-2 px-3 py-2 text-sm text-[#0098d4] hover:bg-[#142c4c] hover:text-white rounded-md ml-2 mb-1"
                              >
                                {service.icon}
                                <span>{service.title}</span>
                              </Link>
                            ))}
                          </div>

                          <div>
                            <button
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setShowServicesDropdown(false);
                                navigate("/services");
                              }}
                              className="block w-full text-center px-3 py-2 text-sm font-medium bg-[#0098d4] text-white hover:bg-[#142c4c] rounded-md"
                              aria-label="View all services"
                            >
                              View All Services
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}

              <a
                href="https://wa.me/919000035647"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-normal font-medium text-[#25D366] hover:bg-[#142c4c] hover:text-white"
                aria-label="Chat with Brick2Tech on WhatsApp"
                title="Chat with Brick2Tech on WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>WhatsApp: +91 90000 35647</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;