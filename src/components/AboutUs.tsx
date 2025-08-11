import { AnimatePresence, motion } from "framer-motion";
import {
  Heart,
  Lightbulb,
  Linkedin,
  Shield,
  Target,
  TrendingUp,
  Users,
  Users as UsersIcon
} from "lucide-react";
import { useState } from "react";
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

  type TeamMember = {
    name: string;
    position: string;
    image: string;
    bio: string;
    linkedin: string;
  };

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const getExtendedBio = (name: string) => {
    switch (name) {
      case "Ganesh Ettam":
        return "Ganesh is the creative backbone of Brick2Tech, with over 12 years of experience in branding, graphic design, and visual storytelling.";
      case "Mahesh Valsa":
        return "Mahesh is the strategic force behind Brick2Tech’s vision and growth, with 9+ years of international experience in business leadership.";
      case "Karthik Chittibomma":
        return "Karthik is the technical engine behind Brick2Tech, specializing in MERN stack and AI-integrated development for high-performance applications.";
      default:
        return "Subrahmanyam brings strategic insight and AI-driven marketing leadership to Brick2Tech, delivering measurable results with predictive modeling.";
    }
  };

  return (
    <section className="pt-20 pb-12 bg-gray-50" aria-label="About Us Section">
      <Helmet>
        <title>Best Digital Marketing Companies in Hyderabad | Brick2Tech</title>
        <meta name="description" content="Looking for the top digital marketing companies in Hyderabad? Brick2Tech offers expert SEO, SMM, paid ads & web design to boost your business online." />
          <meta name="keywords" content="best digital marketing companies in hyderabad, digital marketing companies in manikoda, top digital marketing agency in hyderabad" />

        <meta property="og:title" content="About Us | Brick2Tech Digital Marketing Company" />
        <meta
          property="og:description"
          content="Meet the experts at Brick2Tech who are redefining digital growth through innovation, strategy, and creativity."
        />
        <meta property="og:image" content="https://res.cloudinary.com/diqux3y0a/image/upload/v1753695670/Who-we-are_mf2cny.png" />
        <meta property="og:url" content="https://brick2tech.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://brick2tech.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Brick 2 Technologies",
            url: "https://brick2tech.com",
            logo: "https://brick2tech.com/logo.png",
            sameAs: [
              "https://www.facebook.com/brick2technologies",
              "https://www.instagram.com/brick2technologies/",
              "https://www.youtube.com/@brick2technologies",
              "https://x.com/brick2tech",
              "https://in.pinterest.com/brick2technologies/",
              "https://www.linkedin.com/company/brick-2-technologies/"
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Support",
              email: "hello@brick2tech.com",
              url: "https://brick2tech.com/contact"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-10 mb-16 px-4 lg:px-0 justify-center items-center"
        >
          <h1 className="sr-only">
            best digital marketing companies in hyderabad
          </h1>

          {/* First part of the text */}
          <div className="w-full max-w-6xl text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Brick 2 Technologies is a dynamic startup focused on delivering cutting-edge digital marketing and design solutions. Our mission is to help businesses grow by crafting impactful, data-driven strategies that boost brand visibility, drive measurable results, and deliver engaging digital experiences.
              <br /><br />
              The digital landscape moves fast—algorithm changes, new platforms, evolving trends. It’s easy to feel overwhelmed and outpaced. But that’s exactly where we come in.
            </p>
          </div>

          {/* Image */}
          <div className="w-full max-w-6xl">
            <img
              src="https://res.cloudinary.com/diqux3y0a/image/upload/v1753695670/Who-we-are_mf2cny.png"
              alt="Brick2Tech About"
              className="rounded-xl w-full h-auto object-contain mx-auto max-h-96"
            />
          </div>

          {/* Second part of the text */}
          <div className="w-full max-w-6xl text-center">
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              At Brick 2 Technologies, we’ve helped businesses just like yours—from startups to established brands—cut through the noise and thrive online. Our clients have seen up to <span className="font-semibold text-black">60% higher ROI</span> after partnering with us, thanks to our data-driven, performance-focused digital strategies.
              <br /><br />
              Whether it’s SEO, social media marketing, or paid ads, we don’t just run campaigns—we build growth engines.
              <br /><br />
              We don’t want to be just another agency. We want to be your <span className="font-semibold text-black">growth partner</span>—an extension of your team. While you focus on running your business, we’ll focus on putting your brand exactly where it belongs: in front of the right people, at the right time.
              <br /><br />
              So, if you’re ready to be seen, grow stronger, and build a better digital future—let’s build it together <span className="font-semibold text-black">Brick by Brick.</span>
            </p>
          </div>
        </motion.div>





        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-30">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition py-20"
            >
              <div className="w-12 h-12 bg-[#0098d4]/80 rounded-lg flex items-center justify-center mb-4">
                <strength.icon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <h2 className="text-lg font-semibold text-[#142c4c]">
                {strength.title}
              </h2>
              <p className="text-gray-600">{strength.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-12 mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Choose Brick2Tech for Your Digital Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our client-centric, ethical, and innovative values make us your
            trusted partner in digital growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 py-20 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-[#0098d4] rounded-lg flex items-center justify-center mb-4">
                <value.icon
                  className="h-6 w-6 text-[#ffffff]"
                  aria-hidden="true"
                />
              </div>
              <h2 className="text-lg font-semibold text-[#142c4c]">
                {value.title}
              </h2>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Meet the Team */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Talented people building your digital success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {teamMembers.map((member, index) => (
            <motion.button
              key={member.name}
              onClick={() => setSelectedMember(member)}
              className="w-full max-w-xs mx-auto text-left bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              aria-label={`View bio of ${member.name}`}
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
                <p className="text-sm sm:text-base text-[#0098d4]">{member.position}</p>
                <p className="text-xs sm:text-sm text-gray-600">{member.bio}</p>
                <div className="mt-3 flex space-x-3">
                  <a
                    href={member.linkedin}
                    aria-label={`${member.name}'s LinkedIn`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                </div>
              </div>
            </motion.button>
          ))}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={() => setSelectedMember(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                aria-label="Close modal"
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                ✕
              </button>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={selectedMember.image}
                  alt={`Profile of ${selectedMember.name}`}
                  className="w-32 h-32 rounded-full object-cover shadow"
                />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedMember.name}
                  </h2>
                  <p className="text-blue-600 font-medium">
                    {selectedMember.position}
                  </p>
                  <p className="text-sm mt-2 text-gray-600">
                    {selectedMember.bio}
                  </p>
                  <p className="text-sm mt-2 italic text-gray-500">
                    {getExtendedBio(selectedMember.name)}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutUs;
