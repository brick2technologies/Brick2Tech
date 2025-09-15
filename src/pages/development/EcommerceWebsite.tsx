import React from 'react';
import { Code, RefreshCw, CreditCard, Smartphone, Search, Wrench, Users, Zap, Heart, Shield,BarChart2, CheckCircle, TrendingUp, Lock } from 'lucide-react';

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
  text: React.ReactNode;   // instead of string
  icon?: React.ReactNode;
}

const EcommerceLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 pb-20 py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              <span className="text-purple-600">E-commerce Website</span>
              <br />
              Development by Brick2Tech
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Custom e-commerce solutions that drive sales and enhance customer
              experience
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get a Free Consultation
            </button>
          </div>

          {/* Right Side Image */}
          <div className="relative flex justify-center">
            <img
              src="/images/ecom-hero.png"
              alt="E-commerce website illustration"
              className="w-full max-w-2xl rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Web Development & Technology Services
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In today’s digital-first world, having an effective and scalable
              online store is essential for business growth. At Brick2Tech, we
              are proud to be a leading ecommerce web development company in
              Hyderabad, delivering tailor-made online shopping solutions that
              align with your brand’s vision and customer expectations. Whether
              you’re launching a new store or upgrading an existing platform, we
              offer end-to-end services that combine stunning design, seamless
              user experience, and robust functionality to maximize your online
              success.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our expert team focuses on creating intuitive, fast, and secure
              e-commerce websites that engage customers, boost conversions, and
              support your long-term growth strategy.
            </p>
          </div>

          {/* Right Side Image */}
                  <div className="relative flex justify-center">
                      <img
                          src="/images/ecom-about.png"
                          alt="Web development illustration"
                          className="w-full max-w-2xl rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
                          loading="lazy"
                      />
                  </div>

        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Our E-commerce Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code className="w-12 h-12 text-blue-600" />}
              title="Custom E-commerce Development"
              description="We create fully customized e-commerce websites that reflect your brand’s identity while providing easy navigation, advanced features, and high-performance functionality."
            />
            <ServiceCard
              icon={<RefreshCw className="w-12 h-12 text-green-600" />}
              title="Inventory & Order Management Systems"
              description="Manage your products, pricing, and orders efficiently with built-in tools that simplify operations and enhance customer satisfaction."
            />
            <ServiceCard
              icon={<CreditCard className="w-12 h-12 text-purple-600" />}
              title="Payment Gateway Integration"
              description=" Our secure checkout solutions support multiple payment gateways, ensuring safe and hassle-free transactions that build customer trust."
            />
            <ServiceCard
              icon={<Smartphone className="w-12 h-12 text-orange-600" />}
              title="Mobile-Responsive Design"
              description="With mobile shopping on the rise, we ensure your store is optimized for all devices, offering a smooth and engaging experience across smartphones, tablets, and desktops."
            />
            <ServiceCard
              icon={<Search className="w-12 h-12 text-indigo-600" />}
              title="E-commerce SEO"
              description="We design your store with SEO best practices in mind, helping your products rank higher in search results and attracting the right customers."
            />
            <ServiceCard
              icon={<Wrench className="w-12 h-12 text-red-600" />}
              title="Maintenance & Support"
              description="Our services extend beyond launch. We offer ongoing support, updates, and optimizations to keep your e-commerce platform running smoothly and securely."
            />
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Why Choose Brick2Tech
          </h2>
          <h3 className="text-center text-gray-600 text-2xl font-normal mb-16">
            The Trusted Ecommerce Web Development Company in Hyderabad
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-8 h-8 text-blue-600" />}
              title="Tailored Solutions for Every Business"
              description="We understand that each business is unique. Our team works closely with you to build an e-commerce website that meets your specific requirements, target audience, and industry trends."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-purple-600" />}
              title="End-to-End Development Expertise"
              description="From design and development to deployment and post-launch support, we offer comprehensive services that ensure your store operates at peak performance."
            />
            <FeatureCard
              icon={<Heart className="w-8 h-8 text-green-600" />}
              title="User-Centric Designs for Better Engagement"
              description="A seamless shopping experience leads to increased customer satisfaction. Our designs focus on usability, speed, and accessibility to keep customers engaged and encourage repeat purchases."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-orange-600" />}
              title="Secure, Scalable, and Future-Ready"
              description="We build secure platforms with scalable infrastructure that can grow with your business, handling increased traffic and expanding product lines effortlessly."
            />
            <FeatureCard
              icon={<BarChart2 className="w-8 h-8 text-indigo-600" />}
              title="Data-Driven Strategies for Maximum ROI"
              description="We incorporate analytics and optimization techniques to track user behavior, improve performance, and ensure that your investment translates into measurable business growth."
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Benefits of Working with a Professional Ecommerce Web Development
            Company
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={<Smartphone className="w-8 h-8 text-blue-600" />}
              text={
                <>
                  <span className="font-bold">Enhanced User Experience</span> –
                  Easy navigation, quick loading, and smooth checkout processes
                  boost customer satisfaction.
                </>
              }
            />
            <BenefitCard
              icon={<TrendingUp className="w-8 h-8 text-green-600" />}
              text={
                <>
                  <span className="font-bold">
                    Increased Sales & Conversion Rates
                  </span>{" "}
                  – Optimized design and user flow encourage visitors to make
                  purchases.
                </>
              }
            />
            <BenefitCard
              icon={<Lock className="w-8 h-8 text-purple-600" />}
              text={
                <>
                  <span className="font-bold">Secure Transactions</span> – Safe
                  payment gateways and secure data handling build customer
                  trust.
                </>
              }
            />
            <BenefitCard
              icon={<Search className="w-8 h-8 text-orange-600" />}
              text={
                <>
                  <span className="font-bold">Improved SEO Performance</span> –
                  Enhanced visibility attracts targeted traffic to your store.
                </>
              }
            />
            <BenefitCard
              icon={<BarChart2 className="w-8 h-8 text-indigo-600" />}
              text={
                <>
                  <span className="font-bold">Scalability for Growth</span> –
                  Our solutions grow with your business, accommodating expanding
                  product lines and customer demands.
                </>
              }
            />
          </div>

          <p className="text-center text-gray-600 mt-12 max-w-3xl mx-auto leading-relaxed">
            With Brick2Tech as your partner, you gain access to a trusted
            ecommerce web development company in Hyderabad that delivers
            measurable results while enhancing your brand’s reputation.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Boost Your Online Sales?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and quote
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="bg-gray-100 p-2 rounded-lg mr-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BenefitCard: React.FC<BenefitCardProps> = ({ text }) => (
  <div className="flex items-center space-x-4 p-4">
    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
    <p className="text-gray-700 font-medium">{text}</p>
  </div>
);

export default EcommerceLanding;