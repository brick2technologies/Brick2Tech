import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, Easing,  } from "framer-motion";
import { CheckCircle, Users, Clipboard, PenTool, BarChart, Globe, Megaphone, ArrowRight, Star, TrendingUp, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease },
  }),
};
const ease: Easing = [0.42, 0, 0.58, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

interface InfluencerFeature {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

const influencerFeatures: InfluencerFeature[] = [
  {
    icon: <Users className="w-12 h-12" />,
    title: "Influencer Identification & Outreach",
    description: "We select influencers whose audience aligns with your brand for maximum relevance and engagement.",
    color: "from-sky-500 to-darkblue-600",
  },
  {
    icon: <Clipboard className="w-12 h-12" />,
    title: "Campaign Strategy & Planning",
    description: "Goal-oriented plans with clear objectives, timelines, budgets, and KPIs for performance-driven campaigns.",
    color: "from-sky-500 to-darkblue-600",
  },
  {
    icon: <PenTool className="w-12 h-12" />,
    title: "Creative Content Development",
    description: "Authentic, compelling content created with influencers to resonate with followers and reflect your brand.",
    color: "from-sky-500 to-darkblue-600",
  },
  {
    icon: <BarChart className="w-12 h-12" />,
    title: "Performance Tracking & Optimization",
    description: "Data-driven insights to measure reach, engagement, and conversions, with continuous campaign refinements.",
    color: "from-sky-500 to-darkblue-600",
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Cross-Platform Integration",
    description: "Seamless integration of influencer content across platforms like Instagram, YouTube, and more for maximum impact.",
    color: "from-sky-500 to-darkblue-600",
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: "Audience Analytics",
    description: "Deep insights into audience demographics, behavior, and preferences to optimize targeting strategies.",
    color: "from-sky-500 to-darkblue-600",
  },
];

interface Stat {
  number: string;
  label: string;
  icon: JSX.Element;
}

const stats: Stat[] = [
  { number: "500+", label: "Successful Campaigns", icon: <TrendingUp className="w-6 h-6" /> },
  { number: "98%", label: "Client Satisfaction", icon: <Heart className="w-6 h-6" /> },
  { number: "2M+", label: "Audience Reached", icon: <Users className="w-6 h-6" /> },
  { number: "150+", label: "Brand Partners", icon: <Star className="w-6 h-6" /> },
];

const InfluencerMarketingPage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const circle1X = useTransform(mouseX, [-200, 200], [-60, 60]);
  const circle1Y = useTransform(mouseY, [-200, 200], [-60, 60]);
  const circle2X = useTransform(mouseX, [-200, 200], [60, -60]);
  const circle2Y = useTransform(mouseY, [-200, 200], [40, -40]);
  const circle3X = useTransform(mouseX, [-200, 200], [-40, 40]);
  const circle3Y = useTransform(mouseY, [-200, 200], [80, -80]);

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={ref}
        className="relative min-h-screen flex items-center justify-center overflow-hidden
             bg-gradient-to-br from-sky-500 via-darkblue-600 to-sky-800
             pt-24 sm:pt-32" // <-- added responsive top padding
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 bg-black/30" />

        {/* Animated Background Elements */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-sky-400/20 to-darkblue-400/20 rounded-full blur-3xl"
          style={{ x: circle1X, y: circle1Y }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-darkblue-400/20 to-sky-400/20 rounded-full blur-3xl"
          style={{ x: circle2X, y: circle2Y }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-sky-400/20 to-darkblue-400/20 rounded-full blur-3xl"
          style={{ x: circle3X, y: circle3Y }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight top-10"
              variants={fadeUp}
              custom={0}
            >
              Influencer Marketing
              <span className="bg-gradient-to-r from-sky-400 to-darkblue-400 bg-clip-text text-transparent block">
                That Drives Results
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
              variants={fadeUp}
              custom={0.1}
            >
              At Brick2Tech, we harness the power of influencers to create authentic connections,
              boost engagement, and deliver measurable growth for your brand.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
              variants={fadeUp}
              custom={0.2}
            >
              {/* Get Started Today - goes to Contact Page */}
              <Link to="/contact">
              <motion.button
                className="group bg-gradient-to-r from-sky-600 to-darkblue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-sky-500/25 transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              </Link>

              
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 text-white/20"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Users className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-white/20"
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <BarChart className="w-12 h-12" />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-20 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-darkblue-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                variants={slideIn}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-600 to-darkblue-600 rounded-full text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-600 to-darkblue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-gray-50 to-sky-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-600 to-darkblue-600 bg-clip-text text-transparent leading-tight"
                variants={slideIn}
              >
                Best Influencer Marketing Agency in
                
                  Hyderabad
                
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                variants={slideIn}
              >
                In today's digital ecosystem, authentic connections matter more than ever.
                Influencer marketing has become a powerful way for brands to reach targeted audiences,
                build trust, and drive conversions.
              </motion.p>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                variants={slideIn}
              >
                At Brick2Tech, we help businesses harness the power of influencers to create
                meaningful engagement and measurable results. Whether you're launching a new product,
                growing brand awareness, or enhancing customer loyalty, our tailored strategies ensure
                your message resonates.
              </motion.p>

              <motion.button
                className="bg-gradient-to-r from-sky-600 to-darkblue-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-sky-500/25 transition-all duration-300 inline-flex items-center gap-3"
                variants={slideIn}
                whileHover={{ scale: 1.05 }}
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gradient-to-br from-sky-600 to-darkblue-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center space-y-6">
                  <Megaphone className="w-20 h-20" />
                  <h3 className="text-2xl font-bold">Ready to Amplify Your Brand?</h3>
                  <p className="text-lg opacity-90">Let's create campaigns that inspire and convert</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-600 to-darkblue-600 bg-clip-text text-transparent mb-6">
              Our Core Influencer Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our influencer marketing services are designed to amplify your brand's voice
              through strategic partnerships and creative storytelling.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {influencerFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-darkblue-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <motion.div
                  className="absolute bottom-4 right-4 text-sky-600 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={false}
                  animate={hoveredCard === index ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-sky-50 to-darkblue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-600 to-darkblue-600 bg-clip-text text-transparent mb-6">
              Why Choose Brick2Tech?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Proven Expertise & Network",
                desc: "Our experience and access to top influencers across industries ensure authentic, effective campaigns.",
              },
              {
                title: "Tailored Campaigns, Real Results",
                desc: "Customized strategies designed to drive engagement, awareness, and conversions for your brand.",
              },
              {
                title: "Transparent Reporting & Insights",
                desc: "Clear, actionable reports to track performance and understand your campaign's impact.",
              },
              {
                title: "Ethical & Authentic Partnerships",
                desc: "We prioritize organic partnerships that align with your brand values and foster trust.",
              },
              {
                title: "End-to-End Support",
                desc: "From planning to optimization, we manage every stage to ensure seamless, effective campaigns.",
              },
            ].map((reason, index) => (
              <motion.div
                key={reason.title}
                className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-600 to-darkblue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-white w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-600 to-darkblue-600 bg-clip-text text-transparent mb-6">
              The Impact of Influencer Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Collaborating with influencers can transform your brand's reach and reputation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                desc: "Boost Brand Awareness: Reach larger, engaged audiences who trust their favorite creators.",
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                desc: "Drive Engagement: Encourage conversations, shares, and interactions around your brand.",
                icon: <Heart className="w-8 h-8" />
              },
              {
                desc: "Increase Conversions: Inspire action through authentic recommendations and social proof.",
                icon: <Target className="w-8 h-8" />
              },
              {
                desc: "Strengthen Brand Loyalty: Build long-term relationships with audiences who connect with your story.",
                icon: <Star className="w-8 h-8" />
              },
            ].map((impact, index) => (
              <motion.div
                key={impact.desc}
                className="flex items-start gap-6 p-6 bg-gradient-to-br from-gray-50 to-sky-50 rounded-2xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-600 to-darkblue-600 rounded-full flex items-center justify-center text-white">
                    {impact.icon}
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{impact.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-sky-900 via-darkblue-900 to-sky-800 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-sky-400/20 to-darkblue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-darkblue-400/20 to-sky-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Let's Create Influencer Campaigns
              <span className="block bg-gradient-to-r from-sky-400 to-darkblue-400 bg-clip-text text-transparent">
                That Work
              </span>
            </h2>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              As the Best Influencer Marketing Agency in Hyderabad, Brick2Tech designs campaigns
              that inspire, engage, and deliver exceptional growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
      {/* Contact Us - goes to Contact Page */}
      <Link to="/contact">
        <motion.button
          className="group bg-white text-sky-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us Today
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </Link>

      {/* Schedule a Call - triggers phone call */}
      <a href="tel:9000035647">
        <motion.button
          className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a Call
        </motion.button>
      </a>
    </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default InfluencerMarketingPage;