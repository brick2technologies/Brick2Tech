import React from 'react';
import { ArrowRight, Users, Clock, DollarSign, Briefcase, FileText, Printer, Zap, Eye, Target, Calendar, Layers } from 'lucide-react';
import { motion, Transition } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitItemProps {
  title: string;
  description: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <motion.div
    className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, y: -10 }}
  >
    <div className="relative z-10">
      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
  </motion.div>
);

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <motion.div
    className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ x: 10 }}
  >
    <div className="bg-gradient-to-br from-purple-400 to-blue-500 p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </motion.div>
);

const BenefitItem: React.FC<BenefitItemProps> = ({  title, description, color }) => (
  <motion.div
    className={`group p-6 border-l-4 bg-gradient-to-br from-white/5 to-transparent rounded-r-lg border-${color}-500 transition-all duration-300 hover:scale-105`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default function BrochureDesignPage() {
  

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const floatingAnimation = {
  animate: {
    y: [-20, 20, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1], // or use a cubic bezier array
      repeatType: "loop",
    } as Transition,
  },
};

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      <Helmet>
        <title>Top Brochure Design Companies in Hyderabad | Brick2Tech</title>
        <meta
          name="description"
          content="Brick2Tech is one of the top brochure design companies in Hyderabad, creating stunning, professional brochures that capture attention and boost your brand."
        />
        <meta
          name="keywords"
          content="top brochure design companies in Hyderabad, best brochure design companies in hyderabad, brochure design companies in Hyderabad, brochure design Hyderabad, brochure designing services in Hyderabad, Brick2Tech brochure design"
        />
        <link rel="canonical" href="https://www.brick2tech.com/brochure-design-services" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 text-white">
        <motion.div
          className="absolute top-20 left-10 text-blue-400/20"
          variants={floatingAnimation}
          animate="animate"
        >
          <FileText size={40} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-20 text-purple-400/20"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: '2s' }}
        >
          <Layers size={60} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/4 text-pink-400/20"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: '4s' }}
        >
          <Eye size={50} />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              <motion.h1
                className="text-4xl lg:text-6xl font-black leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Professional Brochure Design Services
              </motion.h1>
              <motion.p
                className="text-xl lg:text-2xl text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Transform Your Brand Message into Stunning Visuals
              </motion.p>
              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Creative Brochures That Tell Your Brand’s Story
              </motion.p>
              <Link to="/contact">
              <motion.button
                className="group bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              </Link>
            </motion.div>

            {/* Right Side Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                <motion.img
                  src="/images/brochure-hero.png"
                  alt="Brochure Design Mockup"
                  className="relative max-h-full max-w-full object-contain rounded-3xl border border-white/20"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.97 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <motion.div
          className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent"
          initial={{ y: 0 }}
          animate={{ y: -50 }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Image */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.9, x: -40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
                <motion.img
                  src="/images/brochure-about.png"
                  alt="Brochure Design Example"
                  className="relative w-full max-w-md rounded-3xl border border-white/20"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.div>

            {/* Right Side Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                About Our Brochure Design
              </motion.h2>
              <motion.h1
                className="text-start font-semibold text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Top Brochure design companies in Hyderabd
              </motion.h1>
              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                A well-crafted brochure is more than just printed material—it’s an opportunity to showcase your brand’s personality, products, and services in a visually appealing and engaging way. At <span className="text-blue-400 font-semibold">Brick2Tech</span>, we specialize in providing professional brochure design Hyderabad solutions that communicate your message effectively while leaving a lasting impression. Our creative approach and strategic designs ensure your brochures stand out, capture attention, and drive customer interest.
              </motion.p>
              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                As one of the leading providers of brochure designing services in Hyderabad, we help businesses create marketing materials that align with their goals, reflect their brand identity, and connect with their audience. Whether you’re introducing a new product, explaining services, or sharing company information, our brochures are designed to make an impact.
              </motion.p>
              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Whether you need a corporate brochure, product catalog, or event brochure, we provide high-quality designs that align with your brand identity and marketing objectives.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Brochure Designing Services in Hyderabad
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Creative, strategic, and impactful brochure solutions for every business need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FileText className="w-8 h-8" />}
              title="Corporate Brochure Design"
              description="Present your company’s strengths, history, and services through a professionally designed brochure that builds trust and credibility among clients and partners."
            />
            <ServiceCard
              icon={<Layers className="w-8 h-8" />}
              title="Product Brochures"
              description="Showcase your offerings with detailed layouts that highlight features, benefits, and specifications in a format that is easy to understand and visually attractive."
            />
            <ServiceCard
              icon={<Calendar className="w-8 h-8" />}
              title="Event Brochures"
              description="Promote conferences, workshops, or special events with brochures that capture the theme, schedule, and essential details in a clean and engaging format."
            />
            <ServiceCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Service Brochures"
              description="Communicate your services and unique selling points clearly with designs that guide readers through your offerings and encourage them to take action."
            />
            <ServiceCard
              icon={<Printer className="w-8 h-8" />}
              title="Custom Layouts & Print-Ready Files"
              description="Our brochure designs are tailored to your brand’s voice and marketing objectives. We deliver high-resolution, print-ready files in various formats, ensuring seamless printing and distribution."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 relative">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl"
          initial={{ y: 0 }}
          animate={{ y: 100 }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What sets our brochure design services apart
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <FeatureItem
              icon={<Users className="w-6 h-6" />}
              title="Expert Design Team"
              description="Our team consists of experienced designers with expertise in branding and marketing materials"
            />
            <FeatureItem
              icon={<Eye className="w-6 h-6" />}
              title="Dedicated Support"
              description="We provide personalized attention and support throughout the design process"
            />
            <FeatureItem
              icon={<Clock className="w-6 h-6" />}
              title="Quick Turnaround"
              description="We deliver high-quality designs within your specified timeframe"
            />
            <FeatureItem
              icon={<Zap className="w-6 h-6" />}
              title="Creative Solutions"
              description="We think outside the box to create unique and impactful brochure designs"
            />
            <FeatureItem
              icon={<DollarSign className="w-6 h-6" />}
              title="Competitive Pricing"
              description="We offer high-quality design services at reasonable and transparent prices"
            />
            <FeatureItem
              icon={<Target className="w-6 h-6" />}
              title="Results-Driven"
              description="Our designs are strategically crafted to achieve your marketing objectives"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Benefits of Professional Brochure Design
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How our services can impact your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <BenefitItem
              title="Enhanced Brand Recognition"
              description="through professionally designed materials that reflect your brand's quality"
              color="blue"
            />
            <BenefitItem
              title="Increased Engagement"
              description="with visually appealing content that captures and holds attention"
              color="purple"
            />
            <BenefitItem
              title="Better Information Retention"
              description="through strategic layout and visual hierarchy"
              color="green"
            />
            <BenefitItem
              title="Targeted Marketing Asset"
              description="that provides lasting impressions beyond digital touchpoints"
              color="orange"
            />
            <BenefitItem
              title="Versatile Marketing Tool"
              description="for trade shows, meetings, direct mail, and in-store displays"
              color="pink"
            />
            <BenefitItem
              title="Improved Conversion Rates"
              description="with professional materials that build trust and credibility"
              color="indigo"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <motion.div
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-white/10 to-transparent rounded-full blur-3xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Marketing Materials?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Contact us today to discuss your brochure design needs and how we can help elevate your brand's visual communication.
            </motion.p>
            <Link to="/contact">
            <motion.button
              className="group bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}