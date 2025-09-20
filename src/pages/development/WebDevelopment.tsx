import React from 'react';
import { Code, ShoppingCart, FileText, Smartphone, Search, Zap, Users, Target, DollarSign,Monitor, TrendingUp, Lightbulb, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
const WebDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">

      <Helmet>
        <title>Best Web Bevelopment Companies in Hyderabad | Brick2Tech</title>
        <meta
          name="description"
          content="Best web development companies in Hyderabad. Brick2Tech delivers custom, responsive, and high-performance websites to grow your business online."   />
        <meta
          name="keywords"
          content="best web development companies in Hyderabad, web development companies in Hyderabad, best web development services in Hyderabad, web development services Hyderabad, website development Hyderabad, Brick2Tech web development, web development experts in Hyderabad"

        />
        <link rel="canonical" href="https://brick2tech.com/services/web-development" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Innovative Web Solutions for Your Business
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In today's digital age, your website is the face of your business. At Brick2Tech, we
                create stunning, functional websites that drive growth and enhance your online
                presence in Hyderabad and beyond.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md">
                Get Started →
              </button>
            </div>
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl shadow-xl p-4 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full opacity-60"></div>

                <div className="relative z-10">
                  <img
                    src="/images/Web-hero.png"
                    alt="Brochure design showcase"
                    className="rounded-xl w-full h-64 object-cover transform hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-2xl font-bold text-gray-900 leading-snug">
              Best Web Development Companies in Hyderabad
            </h2>
            <p className="text-lg text-gray-700">
              A robust and scalable website is more than just an online presence—it’s a powerful business tool.
              A well-developed website not only showcases your brand but also ensures seamless functionality,
              security, and performance.
            </p>
            <p className="text-lg text-gray-700">
              For businesses in Hyderabad, partnering with a professional <strong>Web Development companies</strong>
              is essential to create websites that drive growth and success.
            </p>
            <p className="text-lg text-gray-700">
              At <strong>Brick2Tech</strong>, we specialize in delivering innovative, secure, and scalable
              web development solutions tailored to your business needs. Whether you’re a startup, SME, or
              enterprise, we build websites that blend cutting-edge technology with strategic functionality
              to help you achieve your digital goals.
            </p>

          </div>

          {/* Right Side Image */}
          <div className="relative">
            <img
              src="/images/web-about.png"
              alt="Web development illustration"
              className=" w-full h-auto transform hover:scale-105 transition duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </section>


      {/* Why Choose Section */}
      <section className="py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Why Choose Brick2Tech as Your Web Development companies in Hyderabad?
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        We combine technical expertise with creative design to deliver web solutions that
        exceed expectations and drive measurable business results.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Tailored Web Development Solutions */}
      <div className="bg-blue-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
          <Target className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Tailored Web Development Solutions
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Every business has unique requirements. Our web development services are customized 
          to match your goals, target audience, and industry standards—whether it’s a simple 
          business website or a complex enterprise portal.
        </p>
      </div>

      {/* User-Centric Development Approach */}
      <div className="bg-green-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
          <Users className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          User-Centric Development Approach
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We build websites with users in mind. Intuitive navigation, fast-loading pages, 
          and secure transactions ensure higher engagement, lower bounce rates, 
          and better customer satisfaction.
        </p>
      </div>

      {/* Agile Development Process */}
      <div className="bg-purple-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Agile Development Process
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Our agile methodology ensures faster turnaround times without compromising quality. 
          From planning to deployment, we maintain transparency and flexibility at every stage.
        </p>
      </div>

      {/* Responsive & Scalable Websites */}
      <div className="bg-orange-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
        <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
          <Monitor className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Responsive & Scalable Websites
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We create fully responsive websites for flawless experiences across devices and browsers. 
          Our solutions are also scalable, supporting your growth as your business expands.
        </p>
      </div>

      {/* SEO-Friendly Web Development */}
      <div className="bg-yellow-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
        <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-6">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          SEO-Friendly Web Development
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Our clean coding, optimized loading speeds, and structured data integration 
          help your site rank higher on search engines and attract more organic traffic.
        </p>
      </div>

      {/* E-Commerce Development */}
      <div className="bg-red-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6">
          <ShoppingCart className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          E-Commerce Development
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We develop secure, scalable, and user-friendly e-commerce platforms—covering 
          product catalogs, payment gateways, and seamless shopping experiences.
        </p>
      </div>

      {/* Affordable Web Development Packages */}
      <div className="bg-pink-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
        <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
          <DollarSign className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Affordable Web Development Packages
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Our value-driven packages cater to startups, SMEs, and enterprises alike—ensuring 
          high-quality websites without stretching your budget.
        </p>
      </div>

      {/* Advanced Technology & Innovation */}
      <div className="bg-teal-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
        <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-6">
          <Lightbulb className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Advanced Technology & Innovation
        </h3>
        <p className="text-gray-600 leading-relaxed">
          From React and Node.js to Laravel and WordPress, we use the latest technologies 
          to ensure your website is secure, innovative, and future-ready.
        </p>
      </div>

      {/* Ongoing Support & Maintenance */}
      <div className="bg-indigo-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
        <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Ongoing Support & Maintenance
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Post-launch, we provide continuous updates, monitoring, and bug fixes—ensuring 
          your site stays secure and performs at its best.
        </p>
      </div>

      {/* Client-Centered Development */}
      <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
        <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-6">
          <Users className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Client-Centered Development
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Your vision drives our work. We involve you in every step, 
          ensuring full transparency, customization, and satisfaction.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development solutions to power your digital presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Web Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Build robust web applications to meet your specific business requirements and objectives.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">E-Commerce Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Powerful online stores with secure payment gateways, inventory management, and seamless user experience.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CMS Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Easy-to-use content management systems that give you full control over your website content.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Responsive Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Websites that look and function perfectly across all devices, from desktops to smartphones.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Built-in search engine optimization to improve your visibility and rankings on search results.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Fast-loading websites with optimized code and assets for the best user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Stand Out */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Stand Out
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence sets us apart from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 rounded-2xl p-12 mb-6 hover:bg-blue-100 transition-colors duration-200">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experienced Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team of seasoned developers, designers, and digital strategists brings years of industry expertise to every project.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-50 rounded-2xl p-12 mb-6 hover:bg-green-100 transition-colors duration-200">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Client-Focused Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize client communication, transparency, and collaboration throughout the development process.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-50 rounded-2xl p-12 mb-6 hover:bg-purple-100 transition-colors duration-200">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Affordable Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Quality web development doesn't have to break the bank. We offer competitive rates without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get in touch with us today to discuss your project and see how we can help your
            business grow in the digital world.
          </p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-200 shadow-lg">
            Contact Us Now →
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;