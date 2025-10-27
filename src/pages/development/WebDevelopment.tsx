import React from 'react';
import { Code, ShoppingCart, FileText, Smartphone, Search, Zap, Users, Target, DollarSign, Monitor, TrendingUp, Lightbulb, Shield, Star, ArrowRight, CheckCircle, Award, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 via-white to-sky-100 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sm font-medium text-sky-800 mb-6">
                <Star className="w-4 h-4 mr-2 fill-current" />
                #1 Web Development Company in Hyderabad
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Innovative 
                <span className="bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-transparent"> Web Solutions </span>
                for Your Business
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Create stunning, functional websites that drive growth and enhance your online presence. We build digital experiences that convert visitors into customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact">
                <button className="group bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                </Link>
                
                
              </div>
              
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">1000+</div>
                  <div className="text-sm text-slate-600">Websites Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">7+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Side - Hero Illustration */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-sky-400 to-blue-700 rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-1 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 transform -rotate-2">
                  <div className="space-y-6">
                    {/* Browser mockup */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gradient-to-r from-sky-200 to-blue-300 rounded w-3/4"></div>
                      <div className="h-4 bg-gradient-to-r from-sky-100 to-blue-200 rounded w-1/2"></div>
                      <div className="grid grid-cols-2 gap-4 py-4">
                        <div className="h-16 bg-gradient-to-br from-sky-50 to-blue-100 rounded-lg flex items-center justify-center">
                          <Code className="w-6 h-6 text-sky-600" />
                        </div>
                        <div className="h-16 bg-gradient-to-br from-sky-100 to-blue-200 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div className="h-10 bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-400 rounded-full animate-bounce flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-sky-400 rounded-full animate-pulse flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl p-12 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="h-24 bg-white rounded-2xl shadow-md flex items-center justify-center">
                      <Monitor className="w-8 h-8 text-sky-600" />
                    </div>
                    <div className="h-32 bg-white rounded-2xl shadow-md flex items-center justify-center">
                      <Code className="w-10 h-10 text-blue-700" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-32 bg-white rounded-2xl shadow-md flex items-center justify-center">
                      <Smartphone className="w-10 h-10 text-sky-600" />
                    </div>
                    <div className="h-24 bg-white rounded-2xl shadow-md flex items-center justify-center">
                      <Search className="w-8 h-8 text-blue-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sm font-medium text-sky-800 mb-6">
                  About Brick2Tech
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Best Web Development Companies in 
                  <span className="text-sky-600"> Hyderabad</span>
                </h2>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                A robust and scalable website is more than just an online presence—it's a powerful business tool. A well-developed website not only showcases your brand but also ensures seamless functionality, security, and performance.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                At <span className="font-semibold text-slate-900">Brick2Tech</span>, we specialize in delivering innovative, secure, and scalable web development solutions tailored to your business needs. Whether you're a startup, SME, or enterprise, we build websites that blend cutting-edge technology with strategic functionality.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700 font-medium">Custom Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700 font-medium">Agile Process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700 font-medium">SEO Optimized</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700 font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sm font-medium text-sky-800 mb-6">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#142c4c] mb-6">
              Comprehensive Web Development Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From custom development to e-commerce platforms, we provide everything you need for digital success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code className="w-12 h-12 text-sky-600" />}
              title="Custom Web Development"
              description="Build robust web applications tailored to meet your specific business requirements and objectives with cutting-edge technology."
            />
            <ServiceCard
              icon={<ShoppingCart className="w-12 h-12 text-blue-700" />}
              title="E-Commerce Solutions"
              description="Powerful online stores with secure payment gateways, inventory management, and seamless user experience that drives sales."
            />
            <ServiceCard
              icon={<FileText className="w-12 h-12 text-sky-600" />}
              title="CMS Development"
              description="Easy-to-use content management systems that give you full control over your website content and updates."
            />
            <ServiceCard
              icon={<Smartphone className="w-12 h-12 text-blue-700" />}
              title="Responsive Design"
              description="Websites that look and function perfectly across all devices, from desktops to smartphones and tablets."
            />
            <ServiceCard
              icon={<Search className="w-12 h-12 text-sky-600" />}
              title="SEO Optimization"
              description="Built-in search engine optimization to improve your visibility and rankings on search results from day one."
            />
            <ServiceCard
              icon={<Zap className="w-12 h-12 text-blue-700" />}
              title="Performance Optimization"
              description="Fast-loading websites with optimized code and assets for the best user experience and higher conversions."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sm font-medium text-[#142c4c] mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Brick2Tech as Your Web Development Partner?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine technical expertise with creative design to deliver web solutions that exceed expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Target className="w-8 h-8 text-sky-600" />}
              title="Tailored Web Development Solutions"
              description="Every business has unique requirements. Our web development services are customized to match your goals, target audience, and industry standards."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-blue-700" />}
              title="User-Centric Development Approach"
              description="We build websites with users in mind. Intuitive navigation, fast-loading pages, and secure transactions ensure higher engagement."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-sky-600" />}
              title="Agile Development Process"
              description="Our agile methodology ensures faster turnaround times without compromising quality. Transparency and flexibility at every stage."
            />
            <FeatureCard
              icon={<Monitor className="w-8 h-8 text-blue-700" />}
              title="Responsive & Scalable Websites"
              description="We create fully responsive websites for flawless experiences across all devices and browsers with scalable architecture."
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8 text-sky-600" />}
              title="SEO-Friendly Web Development"
              description="Clean coding, optimized loading speeds, and structured data integration help your site rank higher in search engines."
            />
            <FeatureCard
              icon={<DollarSign className="w-8 h-8 text-blue-700" />}
              title="Affordable Development Packages"
              description="Value-driven packages for startups, SMEs, and enterprises—ensuring high-quality websites without stretching your budget."
            />
            <FeatureCard
              icon={<Lightbulb className="w-8 h-8 text-sky-600" />}
              title="Advanced Technology & Innovation"
              description="From React and Node.js to Laravel and WordPress, we use the latest technologies for secure, innovative solutions."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-700" />}
              title="Ongoing Support & Maintenance"
              description="Post-launch, we provide continuous updates, monitoring, and bug fixes—ensuring your site stays secure and performs optimally."
            />
            <FeatureCard
              icon={<Award className="w-8 h-8 text-sky-600" />}
              title="Client-Centered Development"
              description="Your vision drives our work. We involve you in every step, ensuring full transparency, customization, and complete satisfaction."
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Stand Out */}
      <section className="py-24 px-6 bg-[#142c4c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-900/50 rounded-full text-sm font-medium text-sky-300 mb-6">
              Our Advantages
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Makes Us Stand Out
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our commitment to excellence and innovation sets us apart from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StandoutCard
              icon={<Users className="w-12 h-12 text-sky-400" />}
              title="Experienced Team"
              description="Our team of seasoned developers, designers, and digital strategists brings years of industry expertise to every project we undertake."
            />
            <StandoutCard
              icon={<Target className="w-12 h-12 text-blue-400" />}
              title="Client-Focused Approach"
              description="We prioritize client communication, transparency, and collaboration throughout the development process for optimal results."
            />
            <StandoutCard
              icon={<Clock className="w-12 h-12 text-sky-400" />}
              title="On-Time Delivery"
              description="Quality web development delivered on schedule. We respect deadlines and ensure your project launches when you need it."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-sky-500 via-sky-600 to-blue-700 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white mb-6">
            Ready to Get Started?
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Get in touch with us today to discuss your project and see how we can help your business grow in the digital world
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
            <button className="group bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
              Contact Us Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>

            <a href="tel:+919000035647" aria-label="Call us at +91 9000035647">
            <button className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center">
              call: +91 9000035647
            </button>
            </a>
          </div>
          
          <p className="text-sm opacity-75 mt-8">
            Free consultation • Quick response • Competitive pricing
          </p>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{icon: React.ReactNode; title: string; description: string}> = ({ icon, title, description }) => (
  <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-sky-100 hover:border-sky-200">
    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const FeatureCard: React.FC<{icon: React.ReactNode; title: string; description: string}> = ({ icon, title, description }) => (
  <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-sky-100 hover:border-sky-300">
    <div className="flex items-center mb-6">
      <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-3 rounded-xl mr-4 group-hover:from-sky-100 group-hover:to-blue-100 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{title}</h3>
    </div>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const StandoutCard: React.FC<{icon: React.ReactNode; title: string; description: string}> = ({ icon, title, description }) => (
  <div className="group bg-slate-800 hover:bg-slate-700 transition-all duration-300 p-8 rounded-2xl border border-slate-700 hover:border-sky-500 text-center">
    <div className="bg-slate-700 group-hover:bg-slate-600 rounded-2xl p-8 mb-6 transition-colors duration-300">
      <div className="mx-auto flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sky-300 transition-colors">{title}</h3>
    <p className="text-slate-300 leading-relaxed">{description}</p>
  </div>
);

export default WebDevelopment;

// import React, { useEffect, useRef } from 'react';
// import { Code, ShoppingCart, FileText, Smartphone, Search, Zap, Users, Target, DollarSign, Monitor, TrendingUp, Lightbulb, Shield, Star, ArrowRight, CheckCircle, Award, Clock, Globe } from 'lucide-react';

// const WebDevelopment = () => {
//   const heroRef = useRef(null);
//   const cursorRef = useRef(null);
//   const cursorDotRef = useRef(null);
//   const servicesRef = useRef(null);
//   const featuresRef = useRef(null);
//   const aboutRef = useRef(null);
//   const standoutRef = useRef(null);

//   useEffect(() => {
//     // Custom cursor
//     const cursor = cursorRef.current;
//     const cursorDot = cursorDotRef.current;
    
//     const moveCursor = (e) => {
//       cursor.style.left = e.clientX + 'px';
//       cursor.style.top = e.clientY + 'px';
//       cursorDot.style.left = e.clientX + 'px';
//       cursorDot.style.top = e.clientY + 'px';
//     };

//     window.addEventListener('mousemove', moveCursor);

//     // Hover effects for interactive elements
//     const hoverElements = document.querySelectorAll('button, a, .service-card, .feature-card');
//     hoverElements.forEach(el => {
//       el.addEventListener('mouseenter', () => {
//         cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
//         cursor.style.background = 'rgba(14, 165, 233, 0.3)';
//       });
//       el.addEventListener('mouseleave', () => {
//         cursor.style.transform = 'translate(-50%, -50%) scale(1)';
//         cursor.style.background = 'rgba(14, 165, 233, 0.2)';
//       });
//     });

//     // Scroll animations
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '0px 0px -100px 0px'
//     };

//     const animateOnScroll = (entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         }
//       });
//     };

//     const observer = new IntersectionObserver(animateOnScroll, observerOptions);

//     // Observe all sections
//     document.querySelectorAll('.animate-section').forEach(section => {
//       observer.observe(section);
//     });

//     // Parallax effect
//     const handleScroll = () => {
//       const scrolled = window.pageYOffset;
//       const parallaxElements = document.querySelectorAll('.parallax');
//       parallaxElements.forEach(el => {
//         const speed = el.dataset.speed || 0.5;
//         el.style.transform = `translateY(${scrolled * speed}px)`;
//       });
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Service cards stagger animation
//     const serviceCards = document.querySelectorAll('.service-card');
//     serviceCards.forEach((card, index) => {
//       card.style.animationDelay = `${index * 0.1}s`;
//     });

//     return () => {
//       window.removeEventListener('mousemove', moveCursor);
//       window.removeEventListener('scroll', handleScroll);
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#0a1628] text-white overflow-hidden">
//       {/* Custom Cursor */}
//       <div ref={cursorRef} className="custom-cursor"></div>
//       <div ref={cursorDotRef} className="cursor-dot"></div>

//       {/* Hero Section */}
//       <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Animated background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#142c4c] to-[#0a1628]">
//           <div className="absolute inset-0 opacity-30">
//             <div className="parallax absolute top-20 left-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" data-speed="0.3"></div>
//             <div className="parallax absolute bottom-40 right-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" data-speed="0.5"></div>
//             <div className="parallax absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" data-speed="0.4"></div>
//           </div>
//         </div>

//         {/* Grid pattern overlay */}
//         <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

//         <div className="relative max-w-7xl mx-auto px-6 py-20 z-10">
//           <div className="text-center space-y-8 animate-section">
//             <div className="inline-flex items-center px-6 py-3 bg-sky-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-sky-300 mb-6 border border-sky-500/30 floating">
//               <Star className="w-4 h-4 mr-2 fill-current animate-pulse" />
//               #1 Web Development Company in Hyderabad
//             </div>
            
//             <h1 className="text-6xl lg:text-8xl font-bold leading-tight hero-text">
//               Innovative
//               <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600 bg-clip-text text-transparent glow-text">
//                 Web Solutions
//               </span>
//               for Your Business
//             </h1>
            
//             <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto slide-up">
//               Create stunning, functional websites that drive growth and enhance your online presence. We build digital experiences that convert visitors into customers.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 slide-up">
//               <button className="group relative bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 shadow-[0_0_40px_rgba(14,165,233,0.5)] hover:shadow-[0_0_60px_rgba(14,165,233,0.8)] overflow-hidden">
//                 <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
//                 <span className="relative flex items-center justify-center">
//                   Get Started Today
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
//                 </span>
//               </button>
//             </div>
            
//             <div className="flex items-center justify-center space-x-12 pt-16 slide-up">
//               <div className="text-center counter-box">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">1000+</div>
//                 <div className="text-sm text-slate-400 mt-2">Websites Built</div>
//               </div>
//               <div className="w-px h-16 bg-gradient-to-b from-transparent via-sky-500/50 to-transparent"></div>
//               <div className="text-center counter-box">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">98%</div>
//                 <div className="text-sm text-slate-400 mt-2">Client Satisfaction</div>
//               </div>
//               <div className="w-px h-16 bg-gradient-to-b from-transparent via-sky-500/50 to-transparent"></div>
//               <div className="text-center counter-box">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">7+</div>
//                 <div className="text-sm text-slate-400 mt-2">Years Experience</div>
//               </div>
//             </div>
//           </div>

//           {/* Floating 3D Cards */}
//           <div className="absolute top-20 right-10 floating-card">
//             <div className="w-24 h-24 bg-gradient-to-br from-sky-500/30 to-blue-600/30 backdrop-blur-lg rounded-2xl border border-sky-400/30 flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.3)] rotate-12 hover:rotate-0 transition-transform duration-500">
//               <Code className="w-12 h-12 text-sky-400" />
//             </div>
//           </div>
//           <div className="absolute bottom-40 left-20 floating-card" style={{animationDelay: '0.5s'}}>
//             <div className="w-20 h-20 bg-gradient-to-br from-blue-600/30 to-sky-500/30 backdrop-blur-lg rounded-2xl border border-blue-400/30 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] -rotate-12 hover:rotate-0 transition-transform duration-500">
//               <Globe className="w-10 h-10 text-blue-400" />
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator">
//           <div className="w-6 h-10 border-2 border-sky-400 rounded-full flex items-start justify-center p-2">
//             <div className="w-1.5 h-3 bg-sky-400 rounded-full animate-bounce"></div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section ref={aboutRef} className="relative py-32 px-6 animate-section">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f1f3a] to-[#0a1628]"></div>
        
//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-20 items-center">
//             {/* Left - 3D Card Grid */}
//             <div className="relative perspective-1000">
//               <div className="grid grid-cols-2 gap-6 transform-3d">
//                 {[
//                   { icon: Monitor, delay: '0s', color: 'from-sky-500/20 to-blue-600/20', border: 'sky-500/30' },
//                   { icon: Code, delay: '0.1s', color: 'from-blue-600/20 to-sky-500/20', border: 'blue-500/30' },
//                   { icon: Smartphone, delay: '0.2s', color: 'from-sky-600/20 to-blue-500/20', border: 'sky-600/30' },
//                   { icon: Search, delay: '0.3s', color: 'from-blue-500/20 to-sky-600/20', border: 'blue-600/30' }
//                 ].map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="group h-40 bg-gradient-to-br backdrop-blur-lg rounded-2xl border flex items-center justify-center hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:shadow-[0_0_50px_rgba(14,165,233,0.4)] card-3d"
//                     style={{
//                       animationDelay: item.delay,
//                       background: `linear-gradient(to bottom right, ${item.color})`
//                     }}
//                   >
//                     <item.icon className="w-16 h-16 text-sky-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right - Content */}
//             <div className="space-y-8">
//               <div className="inline-flex items-center px-6 py-3 bg-sky-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-sky-300 border border-sky-500/30">
//                 About Brick2Tech
//               </div>
//               <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
//                 Best Web Development Companies in
//                 <span className="block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"> Hyderabad</span>
//               </h2>
              
//               <p className="text-lg text-slate-300 leading-relaxed">
//                 A robust and scalable website is more than just an online presence—it's a powerful business tool. A well-developed website not only showcases your brand but also ensures seamless functionality, security, and performance.
//               </p>
              
//               <p className="text-lg text-slate-300 leading-relaxed">
//                 At <span className="font-semibold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Brick2Tech</span>, we specialize in delivering innovative, secure, and scalable web development solutions tailored to your business needs. Whether you're a startup, SME, or enterprise, we build websites that blend cutting-edge technology with strategic functionality.
//               </p>
              
//               <div className="grid grid-cols-2 gap-6 pt-6">
//                 {['Custom Solutions', 'Agile Process', 'SEO Optimized', '24/7 Support'].map((item, idx) => (
//                   <div key={idx} className="flex items-center space-x-3 check-item" style={{animationDelay: `${idx * 0.1}s`}}>
//                     <CheckCircle className="w-6 h-6 text-green-400 animate-pulse" />
//                     <span className="text-slate-200 font-medium">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section ref={servicesRef} className="relative py-32 px-6 animate-section">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#142c4c]"></div>
        
//         <div className="relative max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center px-6 py-3 bg-sky-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-sky-300 mb-6 border border-sky-500/30">
//               Our Services
//             </div>
//             <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
//               Comprehensive Web Development Solutions
//             </h2>
//             <p className="text-xl text-slate-300 max-w-3xl mx-auto">
//               From custom development to e-commerce platforms, we provide everything you need for digital success
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { icon: Code, title: "Custom Web Development", description: "Build robust web applications tailored to meet your specific business requirements and objectives with cutting-edge technology." },
//               { icon: ShoppingCart, title: "E-Commerce Solutions", description: "Powerful online stores with secure payment gateways, inventory management, and seamless user experience that drives sales." },
//               { icon: FileText, title: "CMS Development", description: "Easy-to-use content management systems that give you full control over your website content and updates." },
//               { icon: Smartphone, title: "Responsive Design", description: "Websites that look and function perfectly across all devices, from desktops to smartphones and tablets." },
//               { icon: Search, title: "SEO Optimization", description: "Built-in search engine optimization to improve your visibility and rankings on search results from day one." },
//               { icon: Zap, title: "Performance Optimization", description: "Fast-loading websites with optimized code and assets for the best user experience and higher conversions." }
//             ].map((service, idx) => (
//               <div
//                 key={idx}
//                 className="service-card group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg p-8 rounded-3xl border border-sky-500/20 hover:border-sky-400/50 transition-all duration-500 overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-colors duration-500"></div>
                
//                 <div className="relative">
//                   <div className="mb-6 w-16 h-16 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
//                     <service.icon className="w-8 h-8 text-sky-400" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors duration-300">{service.title}</h3>
//                   <p className="text-slate-300 leading-relaxed">{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Section */}
//       <section ref={featuresRef} className="relative py-32 px-6 animate-section">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#142c4c] to-[#0a1628]"></div>
        
//         <div className="relative max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center px-6 py-3 bg-sky-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-sky-300 mb-6 border border-sky-500/30">
//               Why Choose Us
//             </div>
//             <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
//               Why Choose Brick2Tech as Your Web Development Partner?
//             </h2>
//             <p className="text-xl text-slate-300 max-w-3xl mx-auto">
//               We combine technical expertise with creative design to deliver web solutions that exceed expectations
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { icon: Target, title: "Tailored Web Development Solutions", description: "Every business has unique requirements. Our web development services are customized to match your goals, target audience, and industry standards." },
//               { icon: Users, title: "User-Centric Development Approach", description: "We build websites with users in mind. Intuitive navigation, fast-loading pages, and secure transactions ensure higher engagement." },
//               { icon: Zap, title: "Agile Development Process", description: "Our agile methodology ensures faster turnaround times without compromising quality. Transparency and flexibility at every stage." },
//               { icon: Monitor, title: "Responsive & Scalable Websites", description: "We create fully responsive websites for flawless experiences across all devices and browsers with scalable architecture." },
//               { icon: TrendingUp, title: "SEO-Friendly Web Development", description: "Clean coding, optimized loading speeds, and structured data integration help your site rank higher in search engines." },
//               { icon: DollarSign, title: "Affordable Development Packages", description: "Value-driven packages for startups, SMEs, and enterprises—ensuring high-quality websites without stretching your budget." },
//               { icon: Lightbulb, title: "Advanced Technology & Innovation", description: "From React and Node.js to Laravel and WordPress, we use the latest technologies for secure, innovative solutions." },
//               { icon: Shield, title: "Ongoing Support & Maintenance", description: "Post-launch, we provide continuous updates, monitoring, and bug fixes—ensuring your site stays secure and performs optimally." },
//               { icon: Award, title: "Client-Centered Development", description: "Your vision drives our work. We involve you in every step, ensuring full transparency, customization, and complete satisfaction." }
//             ].map((feature, idx) => (
//               <div
//                 key={idx}
//                 className="feature-card group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-lg p-8 rounded-3xl border border-sky-500/20 hover:border-sky-400/50 transition-all duration-500 hover:scale-105"
//                 style={{animationDelay: `${idx * 0.05}s`}}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
//                 <div className="relative flex items-start space-x-4 mb-6">
//                   <div className="bg-gradient-to-br from-sky-500/30 to-blue-600/30 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
//                     <feature.icon className="w-8 h-8 text-sky-400" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors pt-2">{feature.title}</h3>
//                 </div>
//                 <p className="relative text-slate-300 leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Standout Section */}
//       <section ref={standoutRef} className="relative py-32 px-6 animate-section">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#142c4c] to-[#0a1628]"></div>
        
//         <div className="relative max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center px-6 py-3 bg-sky-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-sky-300 mb-6 border border-sky-500/30">
//               Our Advantages
//             </div>
//             <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
//               What Makes Us Stand Out
//             </h2>
//             <p className="text-xl text-slate-300 max-w-3xl mx-auto">
//               Our commitment to excellence and innovation sets us apart from the competition
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { icon: Users, title: "Experienced Team", description: "Our team of seasoned developers, designers, and digital strategists brings years of industry expertise to every project we undertake." },
//               { icon: Target, title: "Client-Focused Approach", description: "We prioritize client communication, transparency, and collaboration throughout the development process for optimal results." },
//               { icon: Clock, title: "On-Time Delivery", description: "Quality web development delivered on schedule. We respect deadlines and ensure your project launches when you need it." }
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-lg p-10 rounded-3xl border border-sky-500/30 hover:border-sky-400/60 transition-all duration-500 text-center overflow-hidden hover:scale-105"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
//                 <div className="relative">
//                   <div className="mx-auto w-24 h-24 bg-gradient-to-br from-sky-500/30 to-blue-600/30 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_40px_rgba(14,165,233,0.4)]">
//                     <item.icon className="w-12 h-12 text-sky-400" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">{item.title}</h3>
//                   <p className="text-slate-300 leading-relaxed">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative py-32 px-6 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-blue-700 to-sky-800"></div>
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//         </div>
        
//         <div className="relative max-w-5xl mx-auto text-center text-white">
//           <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-8 border border-white/30">
//             Ready to Get Started?
//           </div>
          
//           <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
//             Ready to Transform Your Online Presence?
//           </h2>
          
//           <p className="text-xl mb-16 opacity-90 max-w-2xl mx-auto leading-relaxed">
//             Get in touch with us today to discuss your project and see how we can help your business grow in the digital world
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
//             <button className="group relative bg-white text-sky-600 hover:bg-sky-50 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] overflow-hidden">
//               <span className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-100 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
//               <span className="relative flex items-center justify-center">
//                 Contact Us Now
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
//               </span>
//             </button>

//             <button className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-600 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110">
//               call: +91 9000035647
//             </button>
//           </div>
          
//           <p className="text-sm opacity-75">
//             Free consultation • Quick response • Competitive pricing
//           </p>
//         </div>
//       </section>

//       <style jsx>{`
//         .custom-cursor {
//           position: fixed;
//           width: 40px;
//           height: 40px;
//           border: 2px solid rgba(14, 165, 233, 0.5);
//           border-radius: 50%;
//           pointer-events: none;
//           z-index: 9999;
//           transition: transform 0.2s ease, background 0.2s ease;
//           mix-blend-mode: difference;
//         }

//         .cursor-dot {
//           position: fixed;
//           width: 8px;
//           height: 8px;
//           background: rgba(14, 165, 233, 0.8);
//           border-radius: 50%;
//           pointer-events: none;
//           z-index: 9999;
//           transform: translate(-50%, -50%);
//         }

//         .bg-grid-pattern {
//           background-image: 
//             linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px);
//           background-size: 50px 50px;
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }

//         .floating {
//           animation: float 3s ease-in-out infinite;
//         }

//         .floating-card {
//           animation: float 4s ease-in-out infinite;
//         }

//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .slide-up {
//           animation: slideUp 1s ease-out forwards;
//         }

//         @keyframes glow {
//           0%, 100% { text-shadow: 0 0 20px rgba(14, 165, 233, 0.5); }
//           50% { text-shadow: 0 0 40px rgba(14, 165, 233, 0.8), 0 0 60px rgba(14, 165, 233, 0.6); }
//         }

//         .glow-text {
//           animation: glow 2s ease-in-out infinite;
//         }

//         .hero-text {
//           animation: slideUp 1s ease-out forwards;
//         }

//         .counter-box {
//           opacity: 0;
//           animation: slideUp 1s ease-out forwards;
//           animation-delay: 0.8s;
//         }

//         .perspective-1000 {
//           perspective: 1000px;
//         }

//         .transform-3d {
//           transform-style: preserve-3d;
//         }

//         .card-3d {
//           opacity: 0;
//           transform: translateY(50px) rotateX(-10deg);
//           animation: cardAppear 0.8s ease-out forwards;
//         }

//         @keyframes cardAppear {
//           to {
//             opacity: 1;
//             transform: translateY(0) rotateX(0deg);
//           }
//         }

//         .check-item {
//           opacity: 0;
//           transform: translateX(-20px);
//           animation: slideInLeft 0.6s ease-out forwards;
//         }

//         @keyframes slideInLeft {
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         .animate-section {
//           opacity: 0;
//           transform: translateY(50px);
//           transition: opacity 1s ease-out, transform 1s ease-out;
//         }

//         .animate-section.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .service-card {
//           opacity: 0;
//           transform: translateY(30px) scale(0.95);
//           animation: cardFloat 0.8s ease-out forwards;
//         }

//         @keyframes cardFloat {
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .feature-card {
//           opacity: 0;
//           transform: translateY(30px);
//           animation: fadeInUp 0.6s ease-out forwards;
//         }

//         @keyframes fadeInUp {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .scroll-indicator {
//           opacity: 0;
//           animation: fadeIn 1s ease-out 1.5s forwards;
//         }

//         @keyframes fadeIn {
//           to { opacity: 1; }
//         }

//         /* Smooth scroll */
//         html {
//           scroll-behavior: smooth;
//         }

//         /* Hide default cursor on this page */
//         * {
//           cursor: none !important;
//         }

//         /* Mobile responsive - show default cursor */
//         @media (max-width: 768px) {
//           .custom-cursor,
//           .cursor-dot {
//             display: none;
//           }
          
//           * {
//             cursor: auto !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WebDevelopment;