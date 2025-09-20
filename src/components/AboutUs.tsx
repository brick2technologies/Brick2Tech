import { motion } from "framer-motion";
import {
  Lightbulb,
  Linkedin,
  MapPin,
  Target,
  Wrench,
  Search, MousePointerClick, Share2, Monitor, Palette, BarChart3
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {

  const services = [
    {
      icon: <Search className="w-8 h-8 text-blue-600 mx-auto mb-4" />,
      title: "SEO & Content Marketing",
      description:
        "Improve visibility, attract the right audience, and build authority through smart optimization and storytelling.",
    },
    {
      icon: <MousePointerClick className="w-8 h-8 text-red-600 mx-auto mb-4" />,
      title: "Paid Advertising (PPC, Google & Meta Ads)",
      description:
        "Drive qualified leads and boost ROI with precise targeting and budget-optimized campaigns.",
    },
    {
      icon: <Share2 className="w-8 h-8 text-pink-600 mx-auto mb-4" />,
      title: "Social Media Marketing & Management",
      description:
        "Build meaningful connections, engage communities, and grow your brand across Instagram, Facebook, LinkedIn, and more.",
    },
    {
      icon: <Monitor className="w-8 h-8 text-green-600 mx-auto mb-4" />,
      title: "Website Design & Development",
      description:
        "Create fast, mobile-friendly, and visually stunning websites optimized for conversions and user experience.",
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-600 mx-auto mb-4" />,
      title: "Branding & Creative Solutions",
      description:
        "Establish a unique identity with compelling visuals, strong messaging, and creative design.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-600 mx-auto mb-4" />,
      title: "Analytics & Reporting",
      description:
        "Leverage data insights and performance metrics to optimize strategies and achieve sustainable growth.",
    },
  ];

  

  const teamMembers = [
    {
      name: "Mahesh Valsa",
      position: "CEO & Co-Founder",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1753704732/Mahesh_CEO_adbq4h.jpg",
      bio: "Visionary leader with 9+ years of global experience in business growth and <br /> product strategy.",
      linkedin: "https://www.linkedin.com/in/maheshvalsa",
    },
    {
      name: "Gannesh Ettam",
      position: "COO & Co-Founder",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1753703594/Gannesh_2_cijnix.jpg",
      bio: "Creative expert with 12+ years in branding and visual design, shaping strategic <br />  brand identities.",
      linkedin: "https://www.linkedin.com/in/gannesh-ettam-26307267/",
    },
    {
      name: "Bairy Shivaram",
      position: "Digital Marketing Manager",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1754389641/20240914_211611_emve1c.jpg",
      bio: "AI-driven digital marketer focused on analytics-led campaigns and <br /> strategic growth.",
      linkedin: "https://www.linkedin.com/in/shivaram-bairy-b775ba269/",
    },
    {
      name: "Karthik Chittibomma",
      position: "Senior Full Stack Developer ",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1753704842/02_t8p32d.jpg",
      bio: "MERN stack expert building scalable web apps and AI-integrated solutions for <br /> business efficiency.",
      linkedin: "https://www.linkedin.com/in/karthikch2630",
    },
  ];

  return (
    <section className="bg-gray-50 w-full min-h-screen">
      <Helmet>
        <title>Best Digital Marketing Companies in Hyderabad | Brick2Tech</title>
        <meta
          name="description"
          content="Looking for the top digital marketing companies in Hyderabad? Brick2Tech offers expert SEO, SMM, paid ads & web design to boost your business online."
        />
        <meta
          name="keywords"
          content="best digital marketing companies in hyderabad, digital marketing companies in manikoda, top digital marketing agency in hyderabad"
        />
        <meta
          property="og:title"
          content="About Us | Brick2Tech Digital Marketing Company"
        />
        <meta
          property="og:description"
          content="Meet the experts at Brick2Tech who are redefining digital growth through innovation, strategy, and creativity."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/diqux3y0a/image/upload/v1753695670/Who-we-are_mf2cny.png"
        />
        <meta property="og:url" content="https://brick2tech.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://brick2tech.com/about" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="/images/About-us-banner.jpg"
          alt="Brick2Tech Hero"
          className="absolute top-0 left-0 w-full h-full object-contain md:object-cover"
        />
      </div>

      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
          {/* Top Header Centered */}
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900">
              About Us 
          </h2>

          {/* Two Column Content */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side Content */}
            <div className="lg:w-1/2 space-y-6">
            <h2 className="text-1xl lg:text-2xl font-bold text-start text-gray-900">
              Top Digital Marketing Agency in Hyderabad
          </h2>
              <h1 className="sr-only">Best Digital Marketing Companies in Hyderabad</h1>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                At Brick2Tech, we blend creativity, technology, and strategy to help
                businesses thrive in the digital world. Recognized as a <strong> Top Digital
                  Marketing Company in Hyderabad</strong>, we specialize in delivering
                full-scale digital solutions aligned with your brand goals and
                designed to achieve measurable growth.
              </p>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Brick 2 Technologies is a dynamic startup focused on delivering
                cutting-edge digital marketing and design solutions. Our mission is
                to help businesses grow by crafting impactful, data-driven strategies
                that boost brand visibility, drive measurable results, and deliver
                engaging digital experiences.
              </p>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Our clients have seen up to <span className="font-semibold text-black">60% higher ROI</span>
                {" "}after partnering with us, thanks to our data-driven, performance-focused digital strategies.
              </p>
            </div>

            {/* Right Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:w-1/2 flex justify-center"
            >
              <img
                src="/images/About-us-hero.png"
                alt="Digital Marketing Illustration"
                className=" max-w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center gap-12">
          {/* Top Header */}
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900">
            📣 Trusted by Businesses Across Sectors
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 text-center max-w-3xl">
            From emerging startups to established enterprises, Brick2Tech has empowered
            diverse industries—helping them scale and achieve success in the competitive digital space.
          </p>

          {/* Cards: Motto, Vision, Mission */}
          <div className="grid gap-8 md:grid-cols-3 w-full">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <Target className="text-red-600 w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a trusted global digital partner that drives business success through innovation, creativity, and performance-driven strategies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <Wrench className="text-yellow-600 w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower brands with tailored digital marketing solutions that enhance visibility, boost conversions, and deliver measurable results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <Lightbulb className="text-purple-600 w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Motto</h3>
              <p className="text-gray-600 leading-relaxed">
                “Strategize. Execute. Grow.” We believe in smart planning, flawless execution, and sustainable growth.
              </p>
            </motion.div>

          </div>

          {/* Proudly Hyderabad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white p-6 rounded-xl shadow w-full md:w-3/4 text-center"
          >
            <MapPin className="text-green-600 w-8 h-8 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">🗺️ Proudly Rooted in Hyderabad</h3>
            <p className="text-gray-600 leading-relaxed">
              We take pride in being a Hyderabad-based agency that supports local businesses while also catering to clients across India and beyond.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              What We Do
            </h2>
            <p className="mt-4 text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with startups, SMEs, and enterprises to deliver a wide range of result-driven services, including:
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 text-center"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Our Approach Section */}
      <section className="relative w-full min-h-[500px] bg-gray-50 py-16 px-4">
  {/* Title */}
  <motion.h2
    className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    🔁 Our Approach
  </motion.h2>

  {/* Full-width Image with motion */}
  <motion.div
    className="max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <img
      src="/images/Our-Approach.png"
      alt="Our Approach"
      className="w-full h-auto  object-contain"
    />
  </motion.div>
</section>



      {/* Team Section */}
      <section className="bg-white py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-lg text-gray-600">
              Talented people building your digital success.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 flex flex-col overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Profile Image */}
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-[#0098d4] font-medium mt-1">
                    {member.position}
                  </p>
                  <p
                    className="text-sm text-gray-600 mt-2 flex-1"
                    dangerouslySetInnerHTML={{ __html: member.bio }}
                  />

                  {/* Social Links */}
                  <div className="mt-4 flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      aria-label={`${member.name}'s LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </section>
  );
};

export default AboutUs;
