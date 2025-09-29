
import { motion, Variants } from "framer-motion";
import { FaUtensils, FaPlane, FaBook, FaShoppingCart, FaBuilding, FaHeartbeat } from "react-icons/fa";

const industries = [
  {
    title: "Food & Beverage",
    description: "Providing solutions for the food and beverage industry",
    icon: FaUtensils,
  },
  {
    title: "Travel & Hospitality",
    description: "Catering to travel and hospitality needs",
    icon: FaPlane,
  },
  {
    title: "EdTech & Education",
    description: "Enhancing educational technology and learning",
    icon: FaBook,
  },
  {
    title: "E-commerce & Retail",
    description: "Addressing digital commerce and retail challenges",
    icon: FaShoppingCart,
  },
  {
    title: "Real Estate & Construction",
    description: "Navigating property and construction complexities",
    icon: FaBuilding,
  },
  {
    title: "Health & Wellness",
    description: "Supporting health and wellness initiatives",
    icon: FaHeartbeat,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Industries() {
  return (
    <section className=" py-12 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tailored Solutions Across Industries
          </h2>
          <p className="text-lg text-sky-100 max-w-3xl mx-auto">
            We provide tailored digital solutions that address unique challenges across diverse industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white text-sky-600 p-8 rounded-xl shadow-lg border border-sky-200/50 flex flex-col items-start"
            >
              <div className="mb-5">
                <industry.icon className="w-12 h-12 text-sky-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-sky-500">
                {industry.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}