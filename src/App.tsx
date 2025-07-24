// App.tsx
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import HomeAbout from "./components/HomeAbout";
import HomeServices from "./components/HomeServices";
import HomeClients from "./components/HomeClients";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Careers from "./components/Careers";
import ContactUs from "./components/ContactUs";
import BrandingPage from "./pages/BrandingPage";
import SEOPage from "./pages/SEOPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import SocialMediaMarketingPage from "./pages/SocialMediaPage";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import ArchitectureDesignPage from "./pages/ArchitectureDesign";
import { Helmet } from "react-helmet-async";
import AppDevelopmentPage from "./pages/AppDevelopment";


function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <ScrollToTop />
      <main className="relative">
        <AnimatePresence mode="wait">
          <Routes>
            
            <Route
              path="/"
              element={
                <>
                  
                  <Hero mousePosition={mousePosition} />
                  <HomeAbout />
                  <HomeServices />
                  <HomeClients />
                  
                </>
              }
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services/branding" element={<BrandingPage />} />
            <Route path="/services/seo" element={<SEOPage />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
            <Route path="/services/graphic-design" element={<GraphicDesignPage />}/>
            <Route path="/services/architecture-design" element={<ArchitectureDesignPage/>} />
            <Route path="/services/mobile-app-development" element={<AppDevelopmentPage />} />
            
            {/* Fallback route */}
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center min-h-screen">
                  <Helmet>
                    <title>Page Not Found | Brick 2 Technologies</title>
                    <meta name="description" content="The page you are looking for does not exist." />
                  </Helmet>
                  <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
                </div>
              }
            />  
            


          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
