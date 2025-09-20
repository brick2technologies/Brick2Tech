import { motion } from "framer-motion";
import {
  Heart,
  Lightbulb,
  Linkedin,
  Shield,
  Target,
  TrendingUp,
  Users,
  Users as UsersIcon,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  const strengths = [
    {
      icon: Users,
      title: "Industry Experts",
      description:
        "Our team consists of seasoned professionals with years of experience in digital marketing and web development.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description:
        "We leverage cutting-edge technologies and creative strategies to deliver unique solutions for every client.",
    },
    {
      icon: Target,
      title: "Strategic Growth Plans",
      description:
        "We develop comprehensive strategies that align with your business goals and drive sustainable growth.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description:
        "Our track record speaks for itself - we consistently deliver measurable results that exceed expectations.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty and transparency in every interaction, building trust with our clients.",
    },
    {
      icon: Shield,
      title: "Ethical Practices",
      description:
        "Our commitment to ethical decision-making ensures we prioritize your business’s long-term success over short-term gains.",
    },
    {
      icon: UsersIcon,
      title: "Client-Centricity",
      description:
        "Your goals are our priority. We foster partnerships built on mutual respect, collaboration, and shared success.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Excellence",
      description:
        "We embrace innovation with a focus on creating value, driven by creativity and a passion for excellence.",
    },
  ];

  const teamMembers = [
    {
      name: "Mahesh Valsa",
      position: "CEO & Co-Founder",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1753704732/Mahesh_CEO_adbq4h.jpg",
      bio: "Visionary leader with 9+ years of global experience in business growth and product strategy.",
      linkedin: "https://www.linkedin.com/in/maheshvalsa",
    },
    {
      name: "Gannesh Ettam",
      position: "COO & Co-Founder",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1753703594/Gannesh_2_cijnix.jpg",
      bio: "Creative expert with 12+ years in branding and visual design, shaping strategic brand identities.",
      linkedin: "https://www.linkedin.com/in/gannesh-ettam-26307267/",
    },
    {
      name: "Bairy Shivaram",
      position: "Digital Marketing Manager",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1754389641/20240914_211611_emve1c.jpg",
      bio: "AI-driven digital marketer focused on analytics-led campaigns and strategic growth.",
      linkedin: "https://www.linkedin.com/in/subrahmanyamrao",
    },
    {
      name: "Karthik Chittibomma",
      position: "Senior Full Stack Developer & Technical Architect",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1753704842/02_t8p32d.jpg",
      bio: "MERN stack expert building scalable web apps and AI-integrated solutions for business efficiency.",
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
      Top Digital Marketing Company in Hyderabad
    </h2>

    {/* Two Column Content */}
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Left Side Content */}
      <div className="lg:w-1/2 space-y-6">
        <h1 className="sr-only">best digital marketing companies in hyderabad</h1>

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

        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
          Whether it’s SEO, social media marketing, or paid ads, we don’t just run campaigns—we build growth engines.
          We want to be your <span className="font-semibold text-black">growth partner</span>—an extension of your team.
          Let’s build a better digital future <span className="font-semibold text-black">Brick by Brick.</span>
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
          src="/path-to-your-image.jpg"
          alt="Digital Marketing Illustration"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </motion.div>
    </div>
  </div>
</motion.section>


      {/* Strengths Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-16">
        {strengths.map((strength, index) => (
          <motion.div
            key={strength.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition py-20"
          >
            <div className="w-12 h-12 bg-[#0098d4]/80 rounded-lg flex items-center justify-center mb-4">
              <strength.icon className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-[#142c4c]">
              {strength.title}
            </h2>
            <p className="text-gray-600">{strength.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Values Section */}
      <div className="text-center px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Choose Brick2Tech for Your Digital Success
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our client-centric, ethical, and innovative values make us your
          trusted partner in digital growth.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 py-20 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-[#0098d4] rounded-lg flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-lg font-semibold text-[#142c4c]">
                {value.title}
              </h2>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Talented people building your digital success.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="w-full max-w-xs mx-auto text-left bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full aspect-square object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[#142c4c]">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-[#0098d4]">
                  {member.position}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {member.bio}
                </p>
                <div className="mt-3 flex space-x-3">
                  <a
                    href={member.linkedin}
                    aria-label={`${member.name}'s LinkedIn`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600"
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
  );
};

export default AboutUs;
