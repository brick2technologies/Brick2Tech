import  { useState, useEffect } from 'react';
import { Smartphone, Palette, Settings, Globe, CheckCircle, Users, TrendingUp, Eye, ArrowRight, } from 'lucide-react';
import { Helmet } from 'react-helmet';

const AppDevelopment = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: Smartphone, title: 'Custom App Development', description: 'Tailored solutions for your business needs' },
    { icon: Palette, title: 'UI/UX Design', description: 'Beautiful and intuitive user experiences' },
    { icon: Settings, title: 'App Maintenance', description: 'Ongoing support and optimization' },
    { icon: Globe, title: 'Cross-Platform Solutions', description: 'Reach users on all devices' },
    { icon: CheckCircle, title: 'MVP Development', description: 'Rapid prototyping and validation' }
  ];

  const whyChooseUs = [
    'Expert Team',
    'Proven Track Record',
    'Client-Centric Approach',
    'Innovative Solutions',
    'Post-Launch Support'
  ];

  const impacts = [
    { title: 'Enhanced User Engagement', subtitle: 'Streamlined Business Processes', icon: Users },
    { title: 'Increased Brand Visibility', subtitle: 'Streamlined Business Processes', icon: Eye },
    { title: 'Higher Conversion Rates', subtitle: 'Competitive Edge', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 text-white overflow-x-hidden">
      <Helmet>
        <title>Mobile App Development Company in Hyderabad | Brick2Tech</title>
        <meta 
          name="description"
          content="Grow your business with Brick2Tech, a leading mobile app development company in Hyderabad. We build secure, user-friendly, and high-performing apps."
        />
        <meta 
          name="keywords"
          content="mobile app development company in hyderabad, mobile app development agency in hyderabad, mobile app development services in hyderabad, best mobile app development company in hyderabad, brick2tech mobile app development"
        />
        <link rel="canonical" href="https://brick2tech.com/services/app-development" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-96 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-50 p-6">
        <div 
          className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 shadow-2xl transition-all duration-300 hover:bg-white/15"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-6 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-4 animate-in slide-in-from-top-2 duration-200">
              {['Home', 'Services', 'Why Us', 'Impact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block py-3 hover:text-pink-300 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
                Contact
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative z-10 px-6 py-20">
        <div 
          className="max-w-4xl mx-auto text-center"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
              Innovative Mobile
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-white bg-clip-text text-transparent">
              App Solutions
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Brick2Tech specializes in crafting cutting-edge mobile apps that drive business growth, combining creativity with technical excellence
          </p>
        </div>
      </section>
      <section className="py-20 px-4 ">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    {/* Left Content */}
    <div className="space-y-6">
      <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent animate-pulse leading-snug">
        Mobile App Development Company in Hyderabad
      </h1>
      <p className="text-lg text-gray-300 leading-relaxed">
        In a world driven by mobile technology, having a user-friendly, 
        high-performance app is crucial for business growth and customer 
        engagement. At <span className="font-semibold text-blue-600">Brick2Tech</span>, 
        we are proud to be recognized as a leading 
        <span className="font-semibold"> Mobile App Development Company in Hyderabad</span>, 
        offering end-to-end solutions that bring your app ideas to life.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">
        Whether you’re a startup aiming to launch a new product or an established 
        business enhancing customer interactions, our expert team combines 
        innovative technology, sleek design, and strategic planning to deliver 
        apps that meet real-world needs.
      </p>

      <div className="flex flex-wrap gap-4 pt-4">
        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          iOS & Android Apps
        </span>
        <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
          Cross-Platform Solutions
        </span>
        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          UI/UX Focused Design
        </span>
      </div>
    </div>

    {/* Right Side Image */}
    <div className="relative flex justify-center">
      <img
        src="/images/app-about.png"
        alt="Mobile app development illustration"
        className="w-full max-w-lg rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
        loading="lazy"
      />
      {/* Decorative circle */}
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-200 rounded-full opacity-40 -z-10"></div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section id="services" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:rotate-1 shadow-2xl"
                style={{ 
                  transform: `translateY(${scrollY * 0.02}px) rotate(${Math.sin(scrollY * 0.01 + index) * 2}deg)`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-pink-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-us" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose Brick2Tech
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full px-8 py-4 border border-white/20 hover:from-pink-500/30 hover:to-purple-600/30 transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ 
                  transform: `translateY(${scrollY * 0.03}px)`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <span className="text-lg font-semibold">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 shadow-2xl"
                style={{ 
                  transform: `translateY(${scrollY * 0.02}px)`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <impact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-pink-300">
                  {impact.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {impact.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 pt-20 pb-32">
        <div 
          className="max-w-4xl mx-auto text-center backdrop-blur-md bg-gradient-to-r from-white/10 to-white/5 rounded-3xl border border-white/20 p-12 shadow-2xl"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Get Started Today
          </h2>
          <button className="group bg-gradient-to-r from-pink-500 to-purple-600 px-12 py-4 rounded-full text-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 transform hover:scale-105 flex items-center gap-3 mx-auto">
            Contact Us
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;