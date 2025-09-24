import React from 'react';
import { Code, ShoppingCart, FileText, Smartphone, Search, Zap, Users, Target, DollarSign, Monitor, TrendingUp, Lightbulb, Shield, Star, ArrowRight, Play, CheckCircle, Award, Clock, Globe } from 'lucide-react';

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
                <span className="bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-transparent"> Web Solutions</span>
                for Your Business
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Create stunning, functional websites that drive growth and enhance your online presence. We build digital experiences that convert visitors into customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group bg-white border-2 border-sky-200 hover:border-sky-300 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  View Portfolio
                </button>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
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
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sm font-medium text-sky-800 mb-6">
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
      <section className="py-24 px-6 bg-slate-900">
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
            <button className="group bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
              Contact Us Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center">
              View Our Work
            </button>
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