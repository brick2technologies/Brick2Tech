import { Helmet } from "react-helmet";
import { useEffect, useState, useRef } from "react";
import { motion, easeInOut, AnimatePresence } from "framer-motion";
import { Lightbulb, Rocket, Settings, TrendingUp, Brush, Megaphone, Globe, Monitor, Smartphone, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "./Hero";


const fadeIn = (direction: "up" | "left" = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : 0,
    x: direction === "left" ? 40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: easeInOut,
    },
  },
});

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface ServiceProps {
  icon: JSX.Element;
  title: string;
  description: string;
  path: string;
}

const faqs = [
  {
    question: "What services does Brick2Tech offer?",
    answer:
      "We provide a full suite of digital marketing solutions, including SEO, content marketing, paid advertising (Google & Meta Ads), social media management, website design and development, branding, creative design, and analytics-driven performance optimization.",
  },
  {
    question: "Who can benefit from Brick2Tech’s services?",
    answer:
      "We work with startups, small and medium businesses, and enterprises across industries such as e-commerce, real estate, healthcare, education, travel, and food & beverage. Our solutions are tailored to meet the unique goals of each client.",
  },
  {
    question: "How do you create strategies for different businesses?",
    answer:
      "We start with an in-depth analysis of your audience, competitors, and goals. Based on this research, we craft customized strategies that align with your brand’s voice and deliver measurable results.",
  },
  {
    question: "Do you offer affordable plans for small businesses?",
    answer:
      "Yes! We offer flexible pricing models designed to fit different budgets. Our focus is on delivering ROI-driven solutions, whether you're just starting out or looking to scale your business.",
  },
  {
    question: "What makes Brick2Tech different from other agencies?",
    answer:
      "We combine creativity, strategy, and technology to deliver tailored solutions that prioritize ROI. Our team of experts stays updated with the latest trends and tools, ensuring your campaigns are data-driven and future-ready.",
  },
];

const clients = [
  { name: 'Tact Advertising', logo: '/images/clients/Tact-logo.svg' },
  { name: 'Shubha', logo: '/images/clients/Shubha-logo.svg' },
  { name: 'HK Gatro ', logo: '/images/clients/HKGastro-logo.svg' },

];

const testimonials = [
  {
    quote: "Working with Brick2Tech was a game-changer. They didn’t just build our website — they brought our entire vision to life. Their creativity, professionalism, and timely delivery truly impressed us.",
    author: 'Suresh Kumar, Director',
  },
  {
    quote: "Brick2Tech helped us define our brand and grow our digital presence from scratch. Their team understood our goals and gave us a strategy that delivered real results.",
    author: 'Priya Mehta, Founder',
  },
  {
    quote: "From logo to launch, Brick2Tech guided us through every step. The 3D walkthroughs they created for our real estate project blew our clients away.",
    author: 'Rahul Verma, Marketing Head',
  },
  {
    quote: "What sets Brick2Tech apart is their attention to detail and client-first approach. Their design and tech teams worked like an extension of our own.",
    author: 'Dr. Anjali Rao, Founder',
  },
  {
    quote: "Brick2Tech isn’t just a service provider — they’re a strategic partner. Their branding and marketing efforts helped us reach a much larger audience.",
    author: 'Vikram Desai, CEO',
  },
];

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

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

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth / 2
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 20);
    return () => clearInterval(scrollInterval);
  }, []);

  const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-md rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
      role="article"
      aria-labelledby={`${title}-title`}
    >
      <div className="flex items-center justify-center mb-4" aria-hidden="true">{icon}</div>
      <h3 id={`${title}-title`} className="text-xl text-center font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-center text-gray-600">{description}</p>
    </motion.div>
  );

  const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, path }) => (
    <Link to={path} className="group" aria-label={`Navigate to ${title} services page`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-md rounded-2xl p-6 transition-all duration-300 hover:shadow-lg h-full flex flex-col"
        role="article"
        aria-labelledby={`${title}-service-title`}
      >
        <div className="flex items-center justify-center mb-4" aria-hidden="true">
          {icon}
        </div>
        <h3 id={`${title}-service-title`} className="text-xl text-center font-semibold text-gray-800 mb-2 group-hover:text-[#0098d4] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-center text-gray-600">{description}</p>
      </motion.div>
    </Link>
  );

  const services = [
    {
      icon: <Globe className="text-[#0098d4] w-8 h-8" />,
      title: "Search Engine Optimization",
      description: "Boost your search rankings, drive organic traffic, and make sure your brand gets discovered.",
      path: "/services/seo",
    },
    {
      icon: <Smartphone className="text-[#0098d4] w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Build a strong brand presence on Instagram, Facebook, LinkedIn, and more with creative campaigns.",
      path: "/services/social-media-marketing",
    },
    {
      icon: <Megaphone className="text-[#0098d4] w-8 h-8" />,
      title: "Google Ads & Paid Campaigns",
      description: "Get maximum ROI with high-performing ad campaigns across Google, YouTube, Facebook, and Instagram.",
      path: "/services/paid-ads",
    },
    {
      icon: <Monitor className="text-[#0098d4] w-8 h-8" />,
      title: "Website Design & Development",
      description: "Deliver fast, responsive, and visually compelling websites that turn visitors into customers.",
      path: "/services/web-development",
    },
    {
      icon: <Brush className="text-[#0098d4] w-8 h-8" />,
      title: "Branding & Creative Design",
      description: "Shape your brand identity with professional logo design, impactful messaging, and storytelling.",
      path: "/services/branding",
    },
    {
      icon: <BarChart2 className="text-[#0098d4] w-8 h-8" />,
      title: "Content Marketing & Analytics",
      description: "Craft engaging content and leverage analytics to drive conversions and growth.",
      path: "/services/content-marketing",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Best Digital Marketing Agency in Hyderabad | Brick2Tech</title>
        <meta
          name="description"
          content="Brick2Tech – Best Digital Marketing Agency in Hyderabad offering 360° digital marketing services to boost your online presence, branding, generating leads, and drive ROI."
        />
        <link rel="icon" href="https://brick2tech.com/logo.png" />
        <meta property="og:title" content="Brick2Tech | Best Digital Marketing Agency in Hyderabad" />
        <meta property="og:description" content="Brick2Tech, the best digital marketing company in Hyderabad, offers SEO, social media marketing, web development, and branding to drive business growth." />
        <meta property="og:image" content="https://brick2tech.com/logo.png" />
        <meta property="og:url" content="https://www.brick2tech.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brick2Tech | Best Digital Marketing Agency in Hyderabad" />
        <meta name="twitter:description" content="Brick2Tech, the best digital marketing company in Hyderabad, offers SEO, social media marketing, web development, and branding to drive business growth." />
        <meta name="twitter:image" content="https://brick2tech.com/logo.png" />
        <meta
          name="keywords"
          content="best digital marketing agency in hyderabad, digital marketing companies in hyderabad, digital advertising company in hyderabad, top digital marketing agencies in hyderabad, seo company in hyderabad, social media marketing agency in hyderabad, branding agency in hyderabad, content marketing services in hyderabad, ppc services in hyderabad, web development company in hyderabad"
        />
        <link rel="canonical" href="https://www.brick2tech.com/" />
        <meta name="author" content="Brick2Tech Technologies" />
        <meta name="publisher" content="Brick2Tech Technologies" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <html lang="en-IN" />
        {/* Geo-targeting SEO */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.385044;78.486671" />
        <meta name="ICBM" content="17.385044, 78.486671" />
        {/* Cross-browser compatibility */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        {/* Preload critical assets for faster loading */}
        <link rel="preload" href="https://res.cloudinary.com/diqux3y0a/image/upload/v1752147269/aboutUs_yllmow.webp" as="image" />
        <link rel="preload" href="/images/whatwedo.svg" as="image" />
        <link rel="preload" href="/images/Industries-We-Serve.svg" as="image" />
        <link rel="preload" href="/images/Our-process.png" as="image" />
        {/* Structured Data / SEO Optimizations */}
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
        "text": "Brick2Tech offers SEO, social media marketing, Google Ads, web development, branding, and content marketing services tailored to grow your business."
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
        "text": "Brick2Tech combines creativity, strategy, and technology to deliver ROI-focused solutions that drive measurable growth."
      }
    },
    {
      "@type": "Question",
      "name": "Which is the best digital marketing agency in Hyderabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brick2Tech is recognized as one of the best digital marketing agencies in Hyderabad, offering SEO, branding, social media, and web development solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Does Brick2Tech provide SEO services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Brick2Tech specializes in SEO strategies that help businesses rank higher on Google and drive organic traffic."
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact Brick2Tech?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can call us at +91-9000035647 or visit our website at https://www.brick2tech.com to get in touch."
      }
    }
  ]
}
`}
</script>

<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Brick2Tech",
  "image": "https://www.brick2tech.com/logo.png",
  "@id": "https://www.brick2tech.com/#localbusiness",
  "url": "https://www.brick2tech.com",
  "telephone": "+91-9000035647",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Madhapur",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500081",
    "addressCountry": "IN"
  },
  "openingHours": ["Mo-Fr 09:00-19:00"],
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/brick2technologies",
    "https://www.instagram.com/brick2technologies",
    "https://www.linkedin.com/company/brick-2-technologies",
    "https://www.youtube.com/@brick2technologies",
    "https://x.com/brick2tech",
    "https://in.pinterest.com/brick2technologies/"
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.385044,
    "longitude": 78.486671
  }
}
`}
</script>

<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Brick2Tech",
  "url": "https://www.brick2tech.com",
  "logo": "https://www.brick2tech.com/logo.png",
  "@id": "https://www.brick2tech.com/#organization",
  "sameAs": [
    "https://www.facebook.com/brick2technologies",
    "https://www.instagram.com/brick2technologies",
    "https://www.youtube.com/@brick2technologies",
    "https://x.com/brick2tech",
    "https://in.pinterest.com/brick2technologies/",
    "https://www.linkedin.com/company/brick-2-technologies/"
  ]
}
`}
</script>

<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.brick2tech.com/#breadcrumb",
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
      "item": "https://www.brick2tech.com/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Digital Marketing",
      "item": "https://www.brick2tech.com/digital-marketing-agency/"
    }
  ]
}
`}
</script>

<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.brick2tech.com/#webpage",
  "url": "https://www.brick2tech.com/",
  "name": "Brick2Tech | Best Digital Marketing Agency in Hyderabad",
  "description": "Brick2Tech, the best digital marketing company in Hyderabad, offers SEO, social media marketing, web development, and branding to drive business growth.",
  "publisher": {
    "@id": "https://www.brick2tech.com/#organization"
  },
  "breadcrumb": {
    "@id": "https://www.brick2tech.com/#breadcrumb"
  },
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": "https://www.brick2tech.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  ]
}
`}
</script>

<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.brick2tech.com/#website",
  "url": "https://www.brick2tech.com",
  "name": "Brick2Tech",
  "description": "Best Digital Marketing Agency in Hyderabad",
  "publisher": {
    "@id": "https://www.brick2tech.com/#organization"
  },
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": "https://www.brick2tech.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  ]
}
`}
</script>

      </Helmet>
      <Hero mousePosition={mousePosition} />
      <section
        className="bg-gradient-to-b from-white to-gray-50 py-10 px-6 md:px-16 lg:px-24"
        id="about"
        aria-labelledby="about-heading"
      >
        <motion.h2
          id="about-heading"
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4 hover:scale-105 transition-transform duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up")}
        >
          Welcome to <span className="text-[#0098d4]">Brick2Tech</span>
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.2)}
        >
          <motion.div
            className="w-full md:w-1/2"
            initial={{ y: 0 }}
            animate={{ y: 20 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img
              src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752147269/aboutUs_yllmow.webp"
              alt="Best Digital Marketing Agency in Hyderabad"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="rounded-xl w-full h-auto max-h-[400px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-start font-bold text-2xl md:text-2xl">Best Digital Marketing Agency in Hyderabad</h1>
            {[
              "Looking to grow your business online? You’ve come to the right place.",
              "Brick2Tech is recognized as one of the Best Digital Marketing Agency in Hyderabad, delivering ROI-focused digital solutions tailored to your brand’s vision.",
              "We combine creativity, strategy, and technology to help businesses build strong digital footprints, attract the right audience, and achieve measurable success.",
              "Whether you’re a startup aiming for visibility, an SME looking to scale, or an enterprise focusing on sustained growth, our customized digital marketing strategies ensure your brand stands out in a competitive online world.",
            ].map((text, index) => (
              <p
                key={index}
                className="text-md md:text-lg text-gray-700 hover:text-[#142c4c] hover:scale-105 transition-transform duration-300"
              >
                {text}
              </p>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.4)}
        >
          <Feature
            icon={<Lightbulb className="text-blue-600 w-8 h-8" />}
            title="Data-Driven Strategy"
            description="Every campaign is built on solid research and insights, not assumptions."
          />
          <Feature
            icon={<Rocket className="text-blue-600 w-8 h-8" />}
            title="Focused on ROI"
            description="We prioritize meaningful results: leads, conversions, and growth."
          />
          <Feature
            icon={<TrendingUp className="text-blue-600 w-8 h-8" />}
            title="Skilled Experts"
            description="Our specialists bring proven experience across SEO, PPC, social media, and more."
          />
          <Feature
            icon={<Settings className="text-blue-600 w-8 h-8" />}
            title="Transparent Reporting"
            description="Track your progress with clear metrics and real-time insights."
          />
        </motion.div>
        <motion.p
          className="mt-10 text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 transition-transform duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.6)}
        >
          At <span className="text-[#142c4c]">Brick2Tech</span>, we don't just
          market — we partner with you to transform your vision into value.
        </motion.p>
      </section>
      <section
        className="bg-[#142c4c]/95 py-20 px-6 md:px-16 lg:px-24 text-white"
        id="services"
        aria-labelledby="services-heading"
      >
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up")}
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300 text-[#0098d4]">
            What We Do
          </h2>
          <p className="text-lg leading-relaxed hover:scale-105 transition-transform duration-300">
            At Brick2Tech, we bring expertise across the core pillars of digital
            growth—helping businesses achieve visibility, engagement, and
            conversions.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.2)}
        >
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </motion.div>
        <motion.div
          className="mt-20 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.4)}
        >
          <h3 className="text-3xl font-bold text-[#0098d4] mb-8 text-center hover:scale-105 transition-transform duration-300">
            Why Choose <span className="text-[#0098d4]">Brick2Tech?</span>
          </h3>

          {/* Row wrapper for both images */}
          <div className="grid grid-cols-1 gap-10 justify-items-center">
            {/* First Image */}
            <motion.div
              className="w-full flex justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/whatwedo.svg"
                alt="Best Digital Marketing Agency in Hyderabad"
                className="w-11/12 max-w-2xl h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </motion.div>

            {/* Second Image */}
            <motion.div
              className="w-full flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/Industries-We-Serve.svg"
                alt="Best Digital Marketing Agency in Hyderabad"
                className="w-11/12 max-w-2xl h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </motion.div>
          </div>

        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold text-[#0098d4] mb-4 text-center">
            Our Process – Turning Digital Potential into Performance
          </h4>

          {/* Single SVG Image Instead of Mapping Steps */}
          <div className="flex justify-center">
            <img
              src="/images/Our-process.png" // <-- replace with your SVG file path
              alt="Best Digital Marketing Agency in Hyderabad"
              className="w-full max-w-3xl"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>
        </motion.div>

        <motion.p
          className="mt-10 text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Let <span className="text-[#0098d4]">Brick2Tech</span> be your
          transformation partner. Together, we turn bold ideas into powerful
          results.
        </motion.p>
      </section>
      <section className="bg-white py-20 px-6 md:px-16 lg:px-24" id="clients" aria-labelledby="clients-heading">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h1 className="sr-only">
            Best Digital Marketing Agency in Hyderabad
          </h1>
          <h2 id="clients-heading" className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:scale-105 transition-transform duration-300">
            Our <span className="text-blue-600">Clients</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 hover:scale-105 transition-transform duration-300">
            Trusted by businesses across industries, we’ve partnered with
            startups, enterprises, and everything in between.
          </p>
        </motion.div>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 py-4 hide-scrollbar"
          aria-label="Client logos carousel"
        >
          {[...clients, ...clients].map((client, index) => (
            <motion.div
              key={client.name + index}
              className="flex items-center justify-center flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          aria-label="Client testimonial section"
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-6 hover:scale-105 transition-transform duration-300">
            What Our Clients Say
          </h3>
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              className="bg-gray-50 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="hover:scale-105 transition-transform duration-300">
                <div
                  className="text-yellow-500 text-xl mb-2"
                  aria-hidden="true"
                >
                  ⭐⭐⭐⭐⭐
                </div>
                <p
                  className="text-lg text-gray-700 italic mb-4"
                  aria-label={`Testimonial quote from ${testimonials[testimonialIndex].author}`}
                >
                  “{testimonials[testimonialIndex].quote}”
                </p>
                <p className="text-gray-800 font-semibold">
                  — {testimonials[testimonialIndex].author}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <div className="bg-white px-4 py-16" id="faqs" aria-labelledby="faqs-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="faqs-heading" className="text-3xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm"
              >
                {/* Question button */}
                <button
                  className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold text-[#142c4c]"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  {faq.question}
                  <span className="text-blue-600">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* Answer dropdown */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-4 pb-4 text-gray-600 text-base leading-relaxed"
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}