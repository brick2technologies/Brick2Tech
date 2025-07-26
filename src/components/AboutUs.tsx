import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Linkedin,
  Github,
  Heart,
  Shield,
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
        "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Visionary leader with 9+ years of global experience in business growth and product strategy.",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Ganesh Ettam",
      position: "Co-Founder & Business Advisor",
      image:
        "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Creative expert with 12+ years in branding and visual design, shaping strategic brand identities.",
      linkedin: "https://www.linkedin.com/in/ganesh-ettam",
      github: "#",
    },
    {
      name: "Subrahmanyam Rao",
      position: "Digital Marketing Manager",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "AI-driven digital marketer focused on analytics-led campaigns and strategic growth.",
      linkedin: "https://www.linkedin.com/in/subrahmanyamrao",
      github: "#",
    },
    {
      name: "Karthik Chittibomma",
      position: " Senior Full Stack Developer & Technical Architect",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1752813706/profile_jwfx2c.jpg",
      bio: "MERN stack expert building scalable web apps and AI-integrated solutions for business efficiency.",
      linkedin: "#",
      github: "#",
    },
  ];

  type TeamMember = {
    name: string;
    position: string;
    image: string;
    bio: string;
    linkedin: string;
    github: string;
  };

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const getExtendedBio = (name: string) => {
    switch (name) {
      case "Ganesh Ettam":
        return "Ganesh is the creative backbone of B2T, with over 12 years of experience in branding, graphic design, and visual storytelling.";
      case "Mahesh Valsa":
        return "Mahesh is the strategic force behind B2T’s vision and growth, with 9+ years of international experience in business leadership.";
      case "Karthik Chittibomma":
        return "Karthik is the technical engine behind B2T, specializing in MERN stack and AI-integrated development for high-performance applications.";
      default:
        return "Subrahmanyam brings strategic insight and AI-driven marketing leadership to B2T, delivering measurable results with predictive modeling.";
    }
  };

  return (
    <section className="pt-20 pb-12 bg-gray-50">
      <Helmet>
        <title>About Us | B2T Agency</title>
        <meta
          name="description"
          content="Meet the team behind B2T — experts in digital marketing, web development, and strategic growth. Discover our values, strengths, and story."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Are
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At B2T, we help businesses thrive in the digital landscape through
            creative, technological, and strategic excellence.
          </p>
        </motion.div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-30">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition py-10"
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
            Choose B2T for Your Digital Success
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
              className="bg-white p-6 py-10 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <value.icon
                  className="h-6 w-6 text-[#0098d4]"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.button
              key={member.name}
              onClick={() => setSelectedMember(member)}
              className="text-left bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
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
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600">{member.position}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
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
                  <a
                    href={member.github}
                    aria-label={`${member.name}'s GitHub`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5" />
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
