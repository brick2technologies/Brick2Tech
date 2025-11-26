import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Search, BarChart3, MousePointerClick, ShoppingCart, PieChart, Smartphone, Globe2, Zap, UserCheck, TrendingUp, Check } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const services = [
  { icon: <Search className="w-6 h-6" />, title: "SEO Optimization", desc: "Boost organic traffic with robust on-page and off-page SEO strategies." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Paid Ads (PPC)", desc: "Maximize ROI with Google Ads and Meta advertising campaigns." },
  { icon: <PieChart className="w-6 h-6" />, title: "Analytics & Reporting", desc: "Advanced dashboards to measure and optimize every campaign." },
  { icon: <MousePointerClick className="w-6 h-6" />, title: "Conversion Rate Optimization", desc: "A/B testing to turn visitors into loyal customers." },
  { icon: <ShoppingCart className="w-6 h-6" />, title: "Ecommerce Marketing", desc: "Scalable strategies for online stores and retargeting." },
  { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Marketing", desc: "SMS, app store, and push notification campaigns." },
  { icon: <Globe2 className="w-6 h-6" />, title: "Web Presence Management", desc: "Directory listings and online reputation elevation." },
  { icon: <Zap className="w-6 h-6" />, title: "Growth Hacking", desc: "Creative strategies for faster digital growth." },
  { icon: <UserCheck className="w-6 h-6" />, title: "Lead Generation", desc: "Landing pages and funnels to fill your pipeline." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Content Marketing", desc: "Blogs, guides, and videos to position you as a leader." },
];

const stats = [
  { value: "50+", label: "Clients Served" },
  { value: "4.2X", label: "Avg. ROI" },
  { value: "120+", label: "Campaigns Launched" },
  { value: "210%", label: "Traffic Growth" },
];

const whyChoose = [
  "Advanced marketing strategies and proven industry practices",
  "Time-tested expertise in SEO, SEM, SMM, and content marketing",
  "Targeted campaigns designed to reach the right audience",
  "Improved search engine rankings and enhanced online presence",
  "Measurable results and transparent performance reporting",
];

const standOut = [
  "Customized marketing plans",
  "Deep competitor analysis",
  "Transparent reporting",
  "Latest digital tools and technologies",
  "Results you can measure and track"
];

const benefits = [
  "Higher search engine rankings",
  "Better brand recognition",
  "Increased website traffic",
  "More leads and conversions",
  "Sustainable long-term growth"
];

const industries = [
  { name: "Healthcare", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop" },
  { name: "Real Estate", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop" },
  { name: "Education", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" },
  { name: "E-commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
  { name: "Technology", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop" },
  { name: "Retail", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop" },
  { name: "And many more…", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" }
];

const DigitalMarketingPage = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="font-sans text-gray-700 bg-white">
      {/* SEO Helmet */}
      <Helmet>
        <title>Best Digital Marketing Companies in Hyderabad | Boost Online Growth | Brick2tech</title>
        <meta 
          name="description" 
          content="Looking for the best Digital Marketing Companies in Hyderabad? Get result-driven SEO, PPC, SMM, and content marketing services to grow your business online." 
        />
        <meta 
          name="keywords" 
          content="digital marketing companies in Hyderabad, SEO services Hyderabad, PPC marketing, social media marketing, content marketing, online marketing Hyderabad" 
        />
        <meta name="author" content="Brick2tech" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Best Digital Marketing Companies in Hyderabad | Boost Online Growth | Brick2tech" />
        <meta 
          property="og:description" 
          content="Looking for the best Digital Marketing Companies in Hyderabad? Get result-driven SEO, PPC, SMM, and content marketing services to grow your business online." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brick2tech.com/digital-marketing-companies" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Digital Marketing Companies in Hyderabad | Boost Online Growth | Brick2tech" />
        <meta 
          name="twitter:description" 
          content="Looking for the best Digital Marketing Companies in Hyderabad? Get result-driven SEO, PPC, SMM, and content marketing services to grow your business online." 
        />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop" />
        
        {/* Additional SEO Tags */}
        <link rel="canonical" href="https://www.brick2tech.com/digital-marketing-hyderabad" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
      </Helmet>
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1a2f] via-[#142c4c] to-[#0a1a2f]">
        
        {/* Animated Background Gradient */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(0, 152, 212, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(0, 202, 255, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(0, 152, 212, 0.15) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-[#0098d4]/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-24 h-24 border-2 border-[#00caff]/20"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Icons with Parallax */}
        <motion.div
          className="absolute top-32 left-20 text-[#0098d4]/30"
          style={{ y: heroY }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Search className="w-12 h-12" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-32 text-[#00caff]/30"
          style={{ y: heroY }}
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <TrendingUp className="w-12 h-12" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-16 text-white/20"
          style={{ y: heroY }}
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="w-10 h-10" />
        </motion.div>

        {/* Main Content Container */}
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto px-6"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            {/* Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#0098d4]/10 border border-[#0098d4]/30 rounded-full px-6 py-2 mb-8"
            >
              <div className="w-2 h-2 bg-[#00caff] rounded-full animate-pulse" />
              <span className="text-[#00caff] text-sm font-medium tracking-wide">PROFESSIONAL DIGITAL MARKETING</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Digital Marketing Companies in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00caff] to-[#0098d4]">Hyderabad</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl sm:text-3xl text-gray-300 font-light mb-6"
            >
              Grow Your Business with Proven Online Strategies
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Are you searching for the best Digital Marketing Companies in Hyderabad to take your business
              to the next level? We provide data-driven online marketing solutions designed to increase your
              brand visibility, generate leads, and boost sales. With a strong focus on performance and ROI,
              our expert team helps businesses thrive in the competitive digital space.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.a
                href="#services"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0098d4] to-[#00caff] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-[#0098d4]/50 hover:shadow-xl hover:shadow-[#00caff]/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#142c4c] font-bold mb-4">
              Why Choose Professional Digital Marketing Companies in Hyderabad?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0098d4] to-[#00caff] mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0098d4] to-[#00caff] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed pt-2">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0098d4]/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#142c4c] font-bold mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive services tailored to your business needs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0098d4]/5 to-[#00caff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0098d4] to-[#00caff] rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl text-[#142c4c] font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stand Out Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#142c4c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#0098d4] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00caff] rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
              What Makes Us Stand Out?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0098d4] to-[#00caff] mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {standOut.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <p className="text-white text-base leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#0098d4] via-[#0088c0] to-[#0077b6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-4 tracking-tight">
              Benefits of Working with Us
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group relative"
              >
                <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-5">
                    <motion.div
                      className="flex-shrink-0 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Check className="w-7 h-7 text-white" />
                    </motion.div>
                    <p className="text-xl text-white font-light leading-relaxed">{benefit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#142c4c] font-bold mb-4">
              Industries We Serve
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0098d4] to-[#00caff] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142c4c]/90 via-[#142c4c]/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">{industry.name}</h3>
                  
                  {/* Animated Bottom Bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#0098d4] to-[#00caff]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0098d4]/90 to-[#00caff]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-center"
                  >
                    <ArrowRight className="w-8 h-8 mx-auto" />
                    <p className="mt-2 text-sm font-medium">Learn More</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0098d4 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0098d4] to-[#00caff] bg-clip-text text-transparent mb-3"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-r from-[#142c4c] via-[#0098d4] to-[#142c4c] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-[#00caff] rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-[#0098d4] rounded-full blur-3xl"
            animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Ready to Grow Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed"
          >
            Partner with Brick2Tech and experience a marketing approach engineered for growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-[#0098d4] px-10 py-5 rounded-full text-lg font-semibold shadow-2xl hover:shadow-white/30 transition-all duration-300"
            >
              Get Free Digital Audit
            </motion.button>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-gray-300"
          >
            Your custom growth roadmap — no cost, no obligation.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;