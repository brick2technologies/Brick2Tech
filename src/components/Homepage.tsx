// src/components/HomePage.tsx
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

import About from "./HomeAbout";
import Clients from "./HomeClients";
import Hero from "./Hero";
import Services from "./HomeServices";

export default function HomePage() {
  // ✅ Mouse tracking state for Hero animations
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
    <>
      <Helmet>
        {/* ✅ Primary Meta Tags */}
        <title>Brick2Tech | Digital Marketing & Branding Agency in Hyderabad</title>
        <meta
          name="description"
          content="Brick2Tech helps businesses grow with expert digital marketing, branding, web development, and creative services. Based in Hyderabad, serving clients worldwide."
        />
        <meta
          name="keywords"
          content="Digital Marketing Hyderabad, Branding Agency Hyderabad, Web Development Hyderabad, SEO, Social Media Marketing, Brick2Tech"
        />
        <link rel="canonical" href="https://www.brick2tech.com/" />
        <meta name="author" content="Brick2Tech Technologies" />
        <meta name="publisher" content="Brick2Tech Technologies" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <html lang="en-IN" />

        {/* ✅ Open Graph (OG) Tags */}
        <meta property="og:title" content="Brick2Tech | Digital Marketing & Branding Agency" />
        <meta
          property="og:description"
          content="Grow your business with Brick2Tech – expert digital marketing, branding, and web development agency in Hyderabad."
        />
        <meta property="og:image" content="https://www.brick2tech.com/og-image.jpg" />
        <meta property="og:url" content="https://www.brick2tech.com/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brick2Tech | Digital Marketing & Branding Agency" />
        <meta
          name="twitter:description"
          content="Boost your brand with Brick2Tech – digital marketing & branding experts in Hyderabad."
        />
        <meta name="twitter:image" content="https://www.brick2tech.com/og-image.jpg" />

        {/* ✅ FAQ Schema (AEO) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does Brick2Tech offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Brick2Tech offers digital marketing, branding, web development, SEO, and creative design services tailored to grow your business."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Brick2Tech located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Brick2Tech is located in Hyderabad, India, and serves clients across the globe."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose Brick2Tech?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Brick2Tech combines creativity, strategy, and technology to help businesses build their brand, attract more customers, and grow sustainably."
                  }
                }
              ]
            }
          `}
        </script>

        {/* ✅ LocalBusiness Schema (GEO) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Brick2Tech",
              "image": "https://www.brick2tech.com/logo.png",
              "url": "https://www.brick2tech.com",
              "telephone": "+91 90000 35647",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Madhapur",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500081",
                "addressCountry": "IN"
              },
              "openingHours": "Mo-Fr 09:00-19:00",
              "priceRange": "$$",
              "sameAs": [
                "https://www.facebook.com/brick2tech",
                "https://www.instagram.com/brick2tech",
                "https://www.linkedin.com/company/brick2tech"
              ]
            }
          `}
        </script>

        {/* ✅ Organization Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Brick2Tech",
              "url": "https://www.brick2tech.com",
              "logo": "https://www.brick2tech.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/brick2tech",
                "https://www.instagram.com/brick2tech",
                "https://www.linkedin.com/company/brick2tech"
              ]
            }
          `}
        </script>

        {/* ✅ Breadcrumb Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.brick2tech.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://www.brick2tech.com/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Contact",
                  "item": "https://www.brick2tech.com/contact"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* ✅ Page Components */}
      <Hero mousePosition={mousePosition} />
      <About />
      <Services />
      <Clients />
    </>
  );
}
        