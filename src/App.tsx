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
import BrandingPage from "./pages/marketing/BrandingPage.tsx";
import SEOPage from "./pages/marketing/SEOPage.tsx";
import DigitalMarketingPage from "./pages/marketing/DigitalMarketingPage";
import SocialMediaMarketingPage from "./pages/marketing/SocialMediaPage";

import ArchitectureDesignPage from "./pages/designing/ArchitectureDesign";



{/* Marketing imports*/ }
import PPCPage from "./pages/marketing/PPCPage";
import ContentMarketingPage from "./pages/marketing/ContentMarketing";
import SocialMediaManagement from "./pages/marketing/SocialMediaManagement";
import EmailMarketing from "./pages/marketing/EmailMarketing";
import InfluencerMarketing from "./pages/marketing/InfluencerMarketing";

{/* Web Development imports*/ }
import EcommerceWebsite from "./pages/development/EcommerceWebsite";
import WebDevelopmentPage from "./pages/development/WebDevelopment";
import WebHoisting from "./pages/development/WebHoisting";
import AppDevelopment from "./pages/development/AppDevelopment";

{/* Designing imports*/ }
import BrochureDesign from "./pages/designing/BrochureDesign";
import GraphicDesign from "./pages/designing/GraphicDesign";
import LogoDesign from "./pages/designing/LogoDesign1.tsx";

{/* Speed Insights Vercel*/ }
import { SpeedInsights } from "@vercel/speed-insights/react";

{/* web analytics vercel */ }
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <ScrollToTop />
      <main className="relative">
        <SpeedInsights />
        <Analytics />
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







            {/* Marketing pages */}
            <Route path="/services/marketing/branding" element={<BrandingPage />} />
            <Route path="/services/marketing/seo" element={<SEOPage />} />
            <Route
              path="/services/marketing/digital-marketing"
              element={<DigitalMarketingPage />}
            />
            <Route path="/services/marketing/seo" element={<SEOPage />} />
            <Route
              path="/services/marketing/content-marketing"
              element={<ContentMarketingPage />}
            />
            <Route
              path="/services/marketing/social-media-management"
              element={<SocialMediaManagement />}
            />
            <Route
              path="/services/marketing/social-media-marketing"
              element={<SocialMediaMarketingPage />}
            />
            <Route
              path="/services/marketing/social-engine-marketing"
              element={<PPCPage />}
            />
            <Route
              path="/services/marketing/email-marketing"
              element={<EmailMarketing />}
            />
            <Route
              path="/services/marketing/influencer-marketing"
              element={<InfluencerMarketing />}
            />

            {/* Web Development Pages */}
            <Route
              path="/services/development/ecommerce-website"
              element={<EcommerceWebsite />}
            />
            <Route
              path="/services/development/web-development"
              element={<WebDevelopmentPage />}
            />
            <Route
              path="/services/web-hoisting"
              element={<WebHoisting />}
            />

            <Route
              path="/services/development/app-development"
              element={<AppDevelopment />}
            />

            {/* Designing Pages */}
            <Route
              path="/services/designing/brochure-design"
              element={<BrochureDesign />}
            />

            <Route
              path="/services/designing/graphic-design"
              element={<GraphicDesign />}
            />

            <Route
              path="/services/designing/logo-design"
              element={<LogoDesign />}
            />

            <Route
              path="/services/designing/architecture-design"
              element={<ArchitectureDesignPage />}
            />

            {/* ✅ 404 Fallback */}
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center min-h-screen">
                  <Helmet>
                    <title>Page Not Found | Brick2Tech</title>
                    <meta
                      name="description"
                      content="The page you are looking for does not exist."
                    />
                  </Helmet>
                  <h1 className="text-4xl font-bold text-gray-800">
                    404 - Page Not Found
                  </h1>
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
