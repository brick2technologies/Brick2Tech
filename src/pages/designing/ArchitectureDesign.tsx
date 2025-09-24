import  { useState, useEffect } from 'react';
import { motion, easeInOut, Variants,Transition } from 'framer-motion';
import { Link } from 'react-router-dom';

const ArchitectureDesignPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: "🏗️",
      title: "3D Rendering & Visualization",
      desc: "Photorealistic renderings that bring your blueprints to life with accurate lighting, textures, and materials.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: "🚶‍♂️",
      title: "Architectural Walkthroughs",
      desc: "Interactive animated walkthroughs showcasing every angle and feature of your design.",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: "🏢",
      title: "Interior & Conceptual Design",
      desc: "Detailed visualizations of interiors and innovative concepts to explore design alternatives.",
      gradient: "from-indigo-400 to-purple-600"
    },
  ];

  const benefits = [
    {
      title: "Enhanced Project Communication",
      desc: "Clearly showcase your ideas to clients and investors.",
      icon: "💬",
      delay: 0
    },
    {
      title: "Improved Planning & Execution",
      desc: "Visual models help identify potential challenges before construction begins.",
      icon: "📋",
      delay: 0.1
    },
    {
      title: "Stronger Client Engagement",
      desc: "Interactive visuals and walkthroughs create excitement and foster collaboration.",
      icon: "🤝",
      delay: 0.2
    },
    {
      title: "Better Marketing Materials",
      desc: "Use high-quality renders and animations in promotional campaigns and presentations.",
      icon: "📈",
      delay: 0.3
    },
    {
      title: "Reduced Costs & Time",
      desc: "Faster approvals and fewer revisions translate into streamlined project management.",
      icon: "⏱️",
      delay: 0.4
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    } satisfies Transition, // ✅ enforces correct type
  },
};

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: easeInOut
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-15 blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-20 blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 4 } }}
        />
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30 blur-sm pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          restDelta: 0.001
        }}
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8"
            >
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent leading-tight"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Bringing Dreams
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  to Life
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl sm:text-2xl text-cyan-100 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Transform your architectural vision with stunning 3D visualizations that captivate clients and bring projects to life
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-cyan-400/20"
              >
                Start Your Project
                <motion.span 
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-300 font-semibold text-lg rounded-2xl hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6 sm:px-12 lg:px-24 bg-black/20 backdrop-blur-sm">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent mb-6">
                Our Premium Services
              </h2>
              <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto">
                Cutting-edge 3D architecture solutions that transform ideas into immersive experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-cyan-400/50 transition-all duration-500">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index }}
                      className="text-6xl mb-6 text-center"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-cyan-100/80 text-center leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Video Section */}
        <section className="py-24 px-6 sm:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-4 border border-white/20">
                  <div className="w-full h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center text-white/60">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎬</div>
                      <p className="text-xl">3D Walkthrough Preview</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  Immersive 3D Experiences
                </h2>
                <p className="text-xl text-cyan-100/80 leading-relaxed">
                  Step inside your designs before they're built. Our interactive walkthroughs provide clients with an unforgettable journey through their future spaces.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Photorealistic lighting & textures",
                    "Interactive VR experiences",
                    "Real-time design modifications",
                    "360° panoramic views"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      />
                      <span className="text-cyan-100">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 sm:px-12 lg:px-24 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent mb-6">
                Why Choose Brick2Tech?
              </h2>
              <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto">
                Experience the difference that professional 3D architecture services can make for your projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: benefit.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl blur-xl group-hover:from-cyan-500/20 group-hover:to-blue-600/20 transition-all duration-500" />
                  <div className="relative p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-cyan-400/40 transition-all duration-500">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index }}
                      className="text-4xl mb-4"
                    >
                      {benefit.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-cyan-100/80 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 px-6 sm:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-30" />
            <motion.div 
              className="relative bg-gradient-to-br from-cyan-500/90 via-blue-600/90 to-indigo-700/90 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/20 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-20 -right-20 w-40 h-40 border-4 border-white/10 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-20 -left-20 w-32 h-32 border-4 border-white/10 rounded-full"
                />
              </div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-black text-white mb-6 relative z-10"
              >
                Ready to Transform Your Vision?
              </motion.h2>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed relative z-10"
              >
                Partner with Brick2Tech for cutting-edge 3D architecture services in Hyderabad that elevate your projects and captivate clients with stunning visualizations.
              </motion.p>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10"
              >
                <Link to="/contact">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white"
                >
                  Book Free Consultation
                  <motion.span 
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                </motion.button>
                </Link>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-white/70 text-white font-semibold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  View Our Work
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default ArchitectureDesignPage;