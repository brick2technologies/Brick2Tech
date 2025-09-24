import React from 'react';
import { Code, RefreshCw, CreditCard, Smartphone, Search, Wrench, Users, Zap, Heart, Shield, BarChart2, CheckCircle, TrendingUp, Star, ArrowRight, Play } from 'lucide-react';
import { Helmet } from 'react-helmet';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitCardProps {
  text: React.ReactNode;
  icon?: React.ReactNode;
}

const EcommerceLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Best E-Commerce Web Development Company in Hyderabad | Brick2Tech</title>
        <meta
          name="description"  
          content="Build your online store with the best e-commerce web development company in Hyderabad. Brick2Tech delivers stunning, user-friendly, and high-converting web developments."
        />
        <meta
          name="keywords"
          content="best e-commerce web development company in Hyderabad, e-commerce web development company in Hyderabad, best e-commerce web development services in Hyderabad, e-commerce web development development Hyderabad, online store development Hyderabad, Brick2Tech e-commerce web development"
        />
        <link rel="canonical" href="https://brick2tech.com/services/ecommerce-web-development-development" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Best E-commerce Web Development Company in Hyderabad | Brick2Tech" />
        <meta
          property="og:description"
          content="Brick2Tech is the best e-commerce web development company in Hyderabad, offering custom online store solutions that drive sales and enhance customer experience."
        />
        <meta property="og:url" content="https://brick2tech.com/services/ecommerce-web-development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://brick2tech.com/images/ecom-og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best E-commerce Web Development Company in Hyderabad | Brick2Tech" />
        <meta
          name="twitter:description"
          content="Brick2Tech is the best e-commerce web development company in Hyderabad, offering custom online store solutions that drive sales and enhance customer experience."
        />
        <meta name="twitter:image" content="https://brick2tech.com/images/ecom-og-image.png" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-sky-50 via-white to-sky-100 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-200/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sm font-medium text-sky-800 mb-6">
                <Star className="w-4 h-4 mr-2 fill-current" />
                #1 E-commerce Development Company
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Transform Your Business with 
                <span className="bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-transparent"> E-commerce Excellence</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Custom e-commerce solutions that drive sales, enhance customer experience, and scale with your growth. Built by Hyderabad's most trusted development team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group bg-white border-2 border-sky-200 hover:border-sky-300 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">500+</div>
                  <div className="text-sm text-slate-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">99%</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">5+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-sky-400 to-blue-700 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-sky-200 to-blue-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-sky-100 to-blue-200 rounded w-1/2"></div>
                    <div className="grid grid-cols-3 gap-4 py-6">
                      <div className="h-20 bg-gradient-to-br from-sky-50 to-blue-100 rounded-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-sky-100 to-blue-200 rounded-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-sky-50 to-blue-100 rounded-lg"></div>
                    </div>
                    <div className="h-12 bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-sky-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl p-12 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="h-24 bg-white rounded-2xl shadow-md flex items-center justify-center">
                      <Code className="w-8 h-8 text-sky-600" />
                    </div>
                    <div className="h-32 bg-white rounded-2xl shadow-md flex items-center justify-center">
                      <Smartphone className="w-10 h-10 text-blue-700" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-32 bg-white rounded-2xl shadow-md flex items-center justify-center">
                      <Shield className="w-10 h-10 text-sky-600" />
                    </div>
                    <div className="h-24 bg-white rounded-2xl shadow-md flex items-center justify-center">
                      <BarChart2 className="w-8 h-8 text-blue-700" />
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
                  Best E-commerce Web Development Company in 
                  <span className="text-sky-600"> Hyderabad</span>
                </h2>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                In today's digital-first world, having an effective and scalable online store is essential for business growth. At Brick2Tech, we are proud to be a leading ecommerce web development company in Hyderabad, delivering tailor-made online shopping solutions that align with your brand's vision and customer expectations.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Our expert team focuses on creating intuitive, fast, and secure e-commerce websites that engage customers, boost conversions, and support your long-term growth strategy.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700 font-medium">Custom Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700 font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700 font-medium">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700 font-medium">SEO Optimized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 px-6 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sm font-medium text-sky-800 mb-6">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive E-commerce Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From custom development to ongoing support, we provide everything you need to succeed online
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code className="w-12 h-12 text-sky-600" />}
              title="Custom E-commerce Development"
              description="We create fully customized e-commerce websites that reflect your brand's identity while providing easy navigation, advanced features, and high-performance functionality."
            />
            <ServiceCard
              icon={<RefreshCw className="w-12 h-12 text-blue-700" />}
              title="Inventory & Order Management"
              description="Manage your products, pricing, and orders efficiently with built-in tools that simplify operations and enhance customer satisfaction."
            />
            <ServiceCard
              icon={<CreditCard className="w-12 h-12 text-sky-600" />}
              title="Payment Gateway Integration"
              description="Our secure checkout solutions support multiple payment gateways, ensuring safe and hassle-free transactions that build customer trust."
            />
            <ServiceCard
              icon={<Smartphone className="w-12 h-12 text-blue-700" />}
              title="Mobile-Responsive Design"
              description="With mobile shopping on the rise, we ensure your store is optimized for all devices, offering a smooth experience across all platforms."
            />
            <ServiceCard
              icon={<Search className="w-12 h-12 text-sky-600" />}
              title="E-commerce SEO"
              description="We design your store with SEO best practices in mind, helping your products rank higher in search results and attracting the right customers."
            />
            <ServiceCard
              icon={<Wrench className="w-12 h-12 text-blue-700" />}
              title="Maintenance & Support"
              description="Our services extend beyond launch. We offer ongoing support, updates, and optimizations to keep your e-commerce platform running smoothly."
            />
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sm font-medium text-sky-800 mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              The Trusted E-commerce Development Partner
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience excellence with Hyderabad's most reliable e-commerce development company
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-8 h-8 text-sky-600" />}
              title="Tailored Solutions for Every Business"
              description="We understand that each business is unique. Our team works closely with you to build an e-commerce website that meets your specific requirements and industry trends."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-blue-700" />}
              title="End-to-End Development Expertise"
              description="From design and development to deployment and post-launch support, we offer comprehensive services that ensure your store operates at peak performance."
            />
            <FeatureCard
              icon={<Heart className="w-8 h-8 text-sky-600" />}
              title="User-Centric Designs"
              description="A seamless shopping experience leads to increased customer satisfaction. Our designs focus on usability, speed, and accessibility to encourage repeat purchases."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-700" />}
              title="Secure & Scalable Solutions"
              description="We build secure platforms with scalable infrastructure that can grow with your business, handling increased traffic and expanding product lines effortlessly."
            />
            <FeatureCard
              icon={<BarChart2 className="w-8 h-8 text-sky-600" />}
              title="Data-Driven Strategies"
              description="We incorporate analytics and optimization techniques to track user behavior, improve performance, and ensure maximum ROI for your investment."
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8 text-blue-700" />}
              title="Proven Track Record"
              description="With 500+ successful projects and 99% client satisfaction rate, we have the experience and expertise to deliver exceptional results."
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-900/50 rounded-full text-sm font-medium text-sky-300 mb-6">
              Key Benefits
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Benefits of Professional E-commerce Development
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Partner with experts and unlock the full potential of your online business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              text={
                <>
                  <span className="font-bold text-white">Enhanced User Experience</span>
                  <span className="text-slate-300"> – Easy navigation, quick loading, and smooth checkout processes boost customer satisfaction and loyalty.</span>
                </>
              }
            />
            <BenefitCard
              text={
                <>
                  <span className="font-bold text-white">Increased Sales & Conversion Rates</span>
                  <span className="text-slate-300"> – Optimized design and user flow encourage visitors to make purchases and return for more.</span>
                </>
              }
            />
            <BenefitCard
              text={
                <>
                  <span className="font-bold text-white">Secure Transactions</span>
                  <span className="text-slate-300"> – Safe payment gateways and secure data handling build customer trust and protect sensitive information.</span>
                </>
              }
            />
            <BenefitCard
              text={
                <>
                  <span className="font-bold text-white">Improved SEO Performance</span>
                  <span className="text-slate-300"> – Enhanced visibility attracts targeted traffic to your store and increases organic reach.</span>
                </>
              }
            />
            <BenefitCard
              text={
                <>
                  <span className="font-bold text-white">Scalability for Growth</span>
                  <span className="text-slate-300"> – Our solutions grow with your business, accommodating expanding product lines and customer demands.</span>
                </>
              }
            />
            <BenefitCard
              text={
                <>
                  <span className="font-bold text-white">24/7 Support & Maintenance</span>
                  <span className="text-slate-300"> – Continuous monitoring and support ensure your store runs smoothly without interruptions.</span>
                </>
              }
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 bg-gradient-to-br from-sky-500 via-sky-600 to-blue-700 relative overflow-hidden">
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
            Ready to Boost Your Online Sales?
          </h2>
          
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can transform your business with a powerful e-commerce solution
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center">
              Call: +91 98765 43210
            </button>
          </div>
          
          <p className="text-sm opacity-75 mt-8">
            No commitment required • Free consultation • Quick response guaranteed
          </p>
        </div>
      </div>
    </div>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-sky-100 hover:border-sky-200">
    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
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

const BenefitCard: React.FC<BenefitCardProps> = ({ text }) => (
  <div className="group bg-slate-800 hover:bg-slate-700 transition-all duration-300 p-6 rounded-2xl border border-slate-700 hover:border-sky-500">
    <div className="flex items-start space-x-4">
      <CheckCircle className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1 group-hover:text-sky-300 transition-colors" />
      <p className="text-slate-300 leading-relaxed">{text}</p>
    </div>
  </div>
);

export default EcommerceLanding;