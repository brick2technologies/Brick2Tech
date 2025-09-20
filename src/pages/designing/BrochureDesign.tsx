import React from 'react';
import { ArrowRight, Users, Clock, DollarSign,Briefcase, FileText, Printer, Zap, Eye, Target, Calendar, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';


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
  <div className="bg-white p-8 rounded-2xl text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100">
    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const BenefitItem: React.FC<BenefitItemProps> = ({ title, description, color }) => (
  <div className={`p-6 border-l-4 bg-gray-50 rounded-r-lg border-${color}-500`}>
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);



export default function BrochureDesignPage() {
  return (
    <div className="min-h-screen bg-white">
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
        <link rel="canonical" href="https://brick2tech.com/services/brochure-designing" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 text-white pt-16">
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="space-y-8">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Professional Brochure Design Services
        </h1>
        <p className="text-xl lg:text-2xl opacity-90">
          Transform Your Brand Message into Stunning Visuals
        </p>
        <p className="text-lg opacity-80">
          Creative Brochures That Tell Your Brand’s Story
        </p>
        <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl">
          Get Started
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Right Side Image with Framer Motion */}
      <div className="relative h-80 lg:h-96 flex items-center justify-center">
        <motion.img
          src="/images/brochure-hero.png"
          alt="Brochure Design Mockup"
          className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.97 }}
        />
      </div>
    </div>
  </div>
</section>


      {/* About Section */}

<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Side Image */}
      <div className="relative flex justify-center">
        <motion.img
          src="/images/brochure-about.png"
          alt="Brochure Design Example"
          className="w-full max-w-md rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Right Side Content */}
      <div className="space-y-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          About Our Brochure Design
        </h2>
        <p className="text-lg text-gray-700">
         A well-crafted brochure is more than just printed material—it’s an opportunity to showcase your brand’s personality, products, and services in a visually appealing and engaging way. At <strong>Brick2Tech</strong>, we specialize in providing professional brochure design Hyderabad solutions that communicate your message effectively while leaving a lasting impression. Our creative approach and strategic designs ensure your brochures stand out, capture attention, and drive customer interest.
        </p>
        <p className="text-lg text-gray-700">
          As one of the leading providers of brochure designing services in Hyderabad, we help businesses create marketing materials that align with their goals, reflect their brand identity, and connect with their audience. Whether you’re introducing a new product, explaining services, or sharing company information, our brochures are designed to make an impact.
        </p>
        <p className="text-lg text-gray-700">
          Whether you need a corporate brochure, product catalog, or event
          brochure, we provide high-quality designs that align with your brand
          identity and marketing objectives.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Our Brochure Designing Services in Hyderabad
      </h2>
      <p className="text-xl text-gray-600">
        Creative, strategic, and impactful brochure solutions for every business need
      </p>
    </div>

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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              What sets our brochure design services apart
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Professional Brochure Design
            </h2>
            <p className="text-xl text-gray-600">
              How our services can impact your business
            </p>
          </div>
          
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
      <section className="relative py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Marketing Materials?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Contact us today to discuss your brochure design needs and how we can help 
            elevate your brand's visual communication.
          </p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}