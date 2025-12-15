// App.tsx
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// import ChatBot from "./components/ChatBot";

// ✅ Optimized HomePage with SEO, AEO, GEO, Schemas
import HomePage from "./components/Homepage";
import SearchPage from "./components/Searchpage";

// Other Pages
import AboutUs from "./components/AboutUs";
// import Services from "./components/Services";
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
import WebHosting from "./pages/development/WebHosting";
import AppDevelopment from "./pages/development/AppDevelopment";

{/* Designing imports*/ }
import BrochureDesign from "./pages/designing/BrochureDesign";
import GraphicDesign from "./pages/designing/GraphicDesign";
import LogoDesign from "./pages/designing/LogoDesign1.tsx";
import SocialMediaBar from "./components/SocialMediaBar.tsx";

{/* Speed Insights Vercel*/ }
import { SpeedInsights } from "@vercel/speed-insights/react";

{/* web analytics vercel */ }
import { Analytics } from "@vercel/analytics/react"

{/* Metapixel Analytics */ }
import MetaPixel, { MetaPixelRouteTracker } from "./components/MetaPixel";

import BlogPage from "./components/Blogs.tsx";
import FirstBlog from "./components/FirstBlog.tsx";
import SecondBlog from "./components/SecondBlog.tsx";
import EnquiryForm from "./components/EnquiryForm";


function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <ScrollToTop />
      
      <SocialMediaBar />
      <EnquiryForm />
      <main className="relative">
        <MetaPixel />
        <MetaPixelRouteTracker />
        <SpeedInsights />
        <Analytics />
        <AnimatePresence mode="wait">
          <Routes>
            {/* ✅ Use optimized HomePage */}
            <Route path="/" element={<HomePage />} />

            {/* ✅ Static Pages */}
            <Route path="/search" element={<SearchPage />} />
            <Route path="/about" element={<AboutUs />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/blogs" element={<BlogPage />} />          
            <Route path="/contact" element={<ContactUs />} />

            {/* Blogs */}
            <Route path="/blog/digital-marketing-agency-in-hyderabad" element={<FirstBlog />} />
            <Route path="/blog/social-media-marketing-agency-in-hyderabad" element={<SecondBlog />} />

            {/* Marketing pages */}
            <Route path="/services/marketing/branding" element={<BrandingPage />} />
            <Route path="/services/marketing/seo" element={<SEOPage />} />
            <Route
              path="/digital-marketing-companies"
              element={<DigitalMarketingPage />}
            />
            <Route path="/seo-services-hyderabad" element={<SEOPage />} />
            <Route
              path="/content-marketing"
              element={<ContentMarketingPage />}
            />
            <Route
              path="/social-media-management"
              element={<SocialMediaManagement />}
            />
            <Route
              path="/social-media-marketing-services"
              element={<SocialMediaMarketingPage />}
            />
            <Route
              path="/search-engine-marketing"
              element={<PPCPage />}
            />
            <Route
              path="/email-marketing"
              element={<EmailMarketing />}
            />
            <Route
              path="/influencer-marketing"
              element={<InfluencerMarketing />}
            />

            {/* Web Development Pages */}
            <Route
              path="/ecommerce-website-services"
              element={<EcommerceWebsite />}
            />
            <Route
              path="/web-development-services"
              element={<WebDevelopmentPage />}
            />
            <Route
              path="/web-hosting-services"
              element={<WebHosting />}
            />

            <Route
              path="/app-development-services"
              element={<AppDevelopment />}
            />

            {/* Designing Pages */}
            <Route
              path="/brochure-design-services"
              element={<BrochureDesign />}
            />

            <Route
              path="/graphic-design"
              element={<GraphicDesign />}
            />

            <Route
              path="/logo-design"
              element={<LogoDesign />}
            />

            <Route
              path="/architecture-design"
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
      {/* <ChatBot /> */}
      <Footer />
    </div>
  );
}

export default App;
