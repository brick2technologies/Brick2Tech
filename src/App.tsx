// App.tsx
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatBot from "./components/ChatBot";

// ✅ Optimized HomePage with SEO, AEO, GEO, Schemas
import HomePage from "./components/Homepage";
import SearchPage from "./components/Searchpage";   

// Other Pages
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Careers from "./components/Careers";
import ContactUs from "./components/ContactUs";
import BrandingPage from "./pages/BrandingPage";
import SEOPage from "./pages/SEOPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import SocialMediaMarketingPage from "./pages/SocialMediaPage";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import ArchitectureDesignPage from "./pages/ArchitectureDesign";
import WebDevelopmentPage from "./pages/WebDevelopment";
import AppDevelopmentPage from "./pages/AppDevelopmet";

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <ScrollToTop />
      <main className="relative">
        <AnimatePresence mode="wait">
          <Routes>
            {/* ✅ Use optimized HomePage */}
            <Route path="/" element={<HomePage />} />

            {/* ✅ Static Pages */}
            <Route path="/search" element={<SearchPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* ✅ Services Pages */}
            <Route path="/services/branding" element={<BrandingPage />} />
            <Route path="/services/seo" element={<SEOPage />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
            <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
            <Route path="/services/architecture-design" element={<ArchitectureDesignPage />} />
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/app-development" element={<AppDevelopmentPage />} />

            {/* ✅ 404 Fallback */}
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center min-h-screen">
                  <Helmet>
                    <title>Page Not Found | Brick2Tech</title>
                    <meta name="description" content="The page you are looking for does not exist." />
                  </Helmet>
                  <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
                </div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
