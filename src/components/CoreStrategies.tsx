// CoreStrategies.tsx

import { motion, Variants} from 'framer-motion';
import { FaLightbulb, FaChartLine, FaUsersCog, FaTools, FaClipboardCheck, FaHandshake } from 'react-icons/fa';
import { IconType } from 'react-icons';

// --- Data for the strategy cards ---
const strategyData: { icon: IconType; title: string; description: string }[] = [
  {
    icon: FaLightbulb,
    title: 'Data-Driven Strategy & Planning',
    description: 'Every campaign is built on solid research and insights, not assumptions.',
  },
  {
    icon: FaChartLine,
    title: 'Focused on ROI, Not Just Clicks',
    description: 'We prioritize meaningful results, leads, conversions, and growth.',
  },
  {
    icon: FaUsersCog,
    title: 'Skilled Experts in Every Channel',
    description: 'Our specialists bring proven experience across SEO, PPC, social media, and more.',
  },
  {
    icon: FaTools,
    title: 'Latest Tools & Industry Trends',
    description: 'Stay ahead of competitors with strategies powered by advanced technologies.',
  },
  {
    icon: FaClipboardCheck,
    title: 'Transparent & Measurable Reporting',
    description: 'Track your progress with clear metrics and real-time insights.',
  },
  {
    icon: FaHandshake,
    title: 'Client-Centric Partnership',
    description: 'We work as an extension of your team, offering consistent support and proactive solutions.',
  },
];

// --- Animation Variants for Framer Motion ---
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut', // TypeScript now understands this is a valid Easing type
    },
  }),
};

// --- The Main Component ---
const CoreStrategies = () => {
  return (
    <section className=" text-white py-8 sm:py-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Core Marketing Strategies
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A partnership with us is a partnership for growth, built on a foundation of proven strategies.
          </p>
        </motion.div>

        {/* Responsive Grid for Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategyData.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white p-8 rounded-xl shadow-lg border flex flex-col items-start"
            >
              <div className="mb-5">
                <strategy.icon className="w-12 h-12 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-sky-400">{strategy.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {strategy.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreStrategies;