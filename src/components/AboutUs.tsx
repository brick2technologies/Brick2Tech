import { motion } from "framer-motion";
import {
  Lightbulb,
  Linkedin,
  MapPin,
  Target,
  Wrench,
  Search,
  MousePointerClick,
  Share2,
  Monitor,
  Palette,
  BarChart3,
  Clock,
  Users,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify"; // Added for sanitizing HTML

// TypeScript interfaces for type safety
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
}

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin: string;
}

interface StandoutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutUs = () => {
  const iconClasses = "w-8 h-8 mx-auto mb-4";

  const services: Service[] = [
    {
      icon: <Search className={`${iconClasses} text-blue-600`} aria-label="SEO Service Icon" />,
      title: "SEO & Content Marketing",
      description:
        "Improve visibility, attract the right audience, and build authority through smart optimization and storytelling.",
      path: "/seo-services-hyderabad",
    },
    {
      icon: <MousePointerClick className={`${iconClasses} text-red-600`} aria-label="PPC Ads Service Icon" />,
      title: "Paid Advertising (PPC, Google & Meta Ads)",
      description:
        "Drive qualified leads and boost ROI with precise targeting and budget-optimized campaigns.",
      path: "/search-engine-marketing",
    },
    {
      icon: <Share2 className={`${iconClasses} text-pink-600`} aria-label="Social Media Marketing Icon" />,
      title: "Social Media Marketing & Management",
      description:
        "Build meaningful connections, engage communities, and grow your brand across Instagram, Facebook, LinkedIn, and more.",
      path: "/social-media-marketing-services",
    },
    {
      icon: <Monitor className={`${iconClasses} text-green-600`} aria-label="Web Development Icon" />,
      title: "Website Design & Development",
      description:
        "Create fast, mobile-friendly, and visually stunning websites optimized for conversions and user experience.",
      path: "/web-development-services",
    },
    {
      icon: <Palette className={`${iconClasses} text-purple-600`} aria-label="Branding Icon" />,
      title: "Branding & Creative Solutions",
      description:
        "Establish a unique identity with compelling visuals, strong messaging, and creative design.",
      path: "/graphic-design",
    },
    {
      icon: <BarChart3 className={`${iconClasses} text-yellow-600`} aria-label="Analytics Icon" />,
      title: "Analytics & Reporting",
      description:
        "Leverage data insights and performance metrics to optimize strategies and achieve sustainable growth.",
      path: "/digital-marketing-agency",
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Mahesh Valsa",
      position: "CEO & Co-Founder",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1753704732/Mahesh_CEO_adbq4h.jpg?f_auto",
      bio: "Visionary leader with 9+ years of global experience in business growth and product strategy.",
      linkedin: "https://www.linkedin.com/in/maheshvalsa",
    },
    {
      name: "Gannesh Ettam",
      position: "COO & Co-Founder",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1753703594/Gannesh_2_cijnix.jpg?f_auto",
      bio: "Creative expert with 12+ years in branding and visual design, shaping strategic brand identities.",
      linkedin: "https://www.linkedin.com/in/gannesh-ettam-26307267/",
    },
    {
      name: "Bairy Shivaram",
      position: "Digital Marketing Manager",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1754389641/20240914_211611_emve1c.jpg?f_auto",
      bio: "AI-driven digital marketer focused on analytics-led campaigns and strategic growth.",
      linkedin: "https://www.linkedin.com/in/shivaram-bairy-b775ba269/",
    },
    {
      name: "Karthik Chittibomma",
      position: "Senior Full Stack Developer",
      image: "https://res.cloudinary.com/di1bfo7ma/image/upload/v1759749765/Karthik-Developer_mokpb0.png?f_auto",
      bio: "MERN stack expert building scalable web apps and AI-integrated solutions for business efficiency.",
      linkedin: "https://www.linkedin.com/in/karthikch2630",
    },
  ];

  const StandoutCard: React.FC<StandoutCardProps> = ({ icon, title, description }) => (
    <article className="group bg-slate-800 hover:bg-slate-700 transition-all duration-300 p-8 rounded-2xl border border-slate-700 hover:border-sky-500 text-center">
      <div className="bg-slate-700 group-hover:bg-slate-600 rounded-2xl p-8 mb-6 transition-colors duration-300">
        <div className="mx-auto flex items-center justify-center">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sky-300 transition-colors">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </article>
  );

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
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us | Brick2Tech Digital Marketing Company" />
        <meta
          property="og:description"
          content="Meet the experts at Brick2Tech who are redefining digital growth through innovation, strategy, and creativity."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/diqux3y0a/image/upload/v1753695670/Who-we-are_mf2cny.png?f_auto"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brick2tech.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Brick2Tech Digital Marketing Company" />
        <link rel="canonical" href="https://brick2tech.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Brick2Tech",
            url: "https://brick2tech.com/about",
            logo: "/logo.png",
            description:
              "Brick2Tech is a top digital marketing agency in Hyderabad offering SEO, SMM, paid ads, and web design services.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hyderabad",
              addressCountry: "IN",
            },
            employee: teamMembers.map((member) => ({
              "@type": "Person",
              name: member.name,
              jobTitle: member.position,
              url: member.linkedin,
              image: member.image,
            })),
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="https://res.cloudinary.com/di1bfo7ma/image/upload/v1759749778/About-us-banner_rat5xe.jpg?f_auto"
          alt="Brick2Tech team working on digital marketing solutions"
          className="absolute top-0 left-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
      </div>

      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-white"
        role="region"
        aria-labelledby="intro-heading"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
          <h1 id="intro-heading" className="text-4xl lg:text-5xl font-bold text-center text-gray-900">
            About Us
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-1xl lg:text-2xl font-bold text-start text-gray-900">
                Top Digital Marketing Agency in Hyderabad
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                At Brick2Tech, we blend creativity, technology, and strategy to help
                businesses thrive in the digital world. Recognized as a{" "}
                <span className="font-extrabold text-[#142c4c]">
                  Top Digital Marketing Company in Hyderabad
                </span>
                , we specialize in delivering full-scale digital solutions aligned with your brand goals and
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
                Our clients have seen up to{" "}
                <span className="font-semibold text-black">60% higher ROI</span>{" "}
                after partnering with us, thanks to our data-driven, performance-focused digital strategies.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:w-1/2 flex justify-center"
            >
              <img
                src="https://res.cloudinary.com/di1bfo7ma/image/upload/v1759749789/Team_k7wgud.jpg?f_auto"
                alt="Brick2Tech team collaborating on digital projects"
                className="max-w-full rounded-xl shadow-lg object-cover aspect-[16/9] md:aspect-[4/3]"
                width={600}
                height={450}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gray-50"
        role="region"
        aria-labelledby="trusted-heading"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center gap-12">
          <h2 id="trusted-heading" className="text-4xl lg:text-5xl font-bold text-center text-gray-900">
            📣 Trusted by Businesses Across Sectors
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 text-center max-w-3xl">
            From emerging startups to established enterprises, Brick2Tech has empowered
            diverse industries—helping them scale and achieve success in the competitive digital space.
          </p>
          <div className="grid gap-8 md:grid-cols-3 w-full">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <Target className="text-red-600 w-8 h-8 mx-auto mb-4" aria-label="Vision Icon" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a trusted global digital partner that drives business success through innovation, creativity, and performance-driven strategies.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <Wrench className="text-yellow-600 w-8 h-8 mx-auto mb-4" aria-label="Mission Icon" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower brands with tailored digital marketing solutions that enhance visibility, boost conversions, and deliver measurable results.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <Lightbulb className="text-purple-600 w-8 h-8 mx-auto mb-4" aria-label="Motto Icon" />
              <h3 className="text-xl font-semibold mb-2">Our Motto</h3>
              <p className="text-gray-600 leading-relaxed">
                “Strategize. Execute. Grow.” We believe in smart planning, flawless execution, and sustainable growth.
              </p>
            </motion.article>

            {/* Proudly Rooted Card Spanning All Columns */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white px-10 py-6 rounded-xl shadow-lg text-center md:col-span-3"
            >
              <MapPin className="text-green-600 w-8 h-8 mx-auto mb-4" aria-label="Hyderabad Location Icon" />
              <h3 className="text-xl font-semibold mb-2">Proudly Rooted in Hyderabad</h3>
              <p className="text-gray-600 leading-relaxed">
                We take pride in being a Hyderabad-based agency that supports local businesses while also catering to clients across India and beyond.
              </p>
            </motion.article>
          </div>

        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
        role="region"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-4xl lg:text-5xl font-bold text-gray-900">
              What We Do
            </h2>
            <p className="mt-4 text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with startups, SMEs, and enterprises to deliver a wide range of result-driven services, including:
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                to={service.path}
                key={index}
                className="no-underline focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index,
                      ease: "easeInOut",
                    }}
                    className="text-4xl mb-4 motion-safe:animate-fadeIn motion-reduce:animate-none"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="py-20 px-6 bg-slate-900" role="region" aria-labelledby="standout-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="standout-heading" className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Makes Us Stand Out
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our commitment to excellence and innovation sets us apart from the competition
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <StandoutCard
              icon={<Users className="w-12 h-12 text-sky-400" aria-label="Experienced Team Icon" />}
              title="Experienced Team"
              description="Our team of seasoned developers, designers, and digital strategists brings years of industry expertise to every project we undertake."
            />
            <StandoutCard
              icon={<Target className="w-12 h-12 text-blue-400" aria-label="Client-Focused Approach Icon" />}
              title="Client-Focused Approach"
              description="We prioritize client communication, transparency, and collaboration throughout the development process for optimal results."
            />
            <StandoutCard
              icon={<Clock className="w-12 h-12 text-sky-400" aria-label="On-Time Delivery Icon" />}
              title="On-Time Delivery"
              description="Quality web development delivered on schedule. We respect deadlines and ensure your project launches when you need it."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6 lg:px-12" role="region" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 id="team-heading" className="text-4xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-600">
              Talented people building your digital success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.name}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 flex flex-col overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.position} at Brick2Tech`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-[#0098d4] font-medium mt-1">{member.position}</p>
                  <p
                    className="text-sm text-gray-600 mt-2 flex-1"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(member.bio) }}
                  />
                  <div className="mt-4 flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      aria-label={`Visit ${member.name}'s LinkedIn profile`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;