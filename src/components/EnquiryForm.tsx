import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_zmgawi8", // ✅ use your SMTP service ID
        "template_6vcx90t", // ✅ your template ID
        formData,
        "GYcSN3NRVSUEk-a54" // ✅ your public key
      )
      .then(() => {
        alert("✅ Thank you for your enquiry! We’ll contact you soon.");
        setFormData({ name: "", email: "", phone: "", service: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Something went wrong. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  const services = [
    { category: "Marketing", items: [
      "Digital Marketing", "SEO", "Content Marketing", "Social Media Management",
      "Social Media Marketing", "Search Engine Marketing", "Email Marketing", "Influencer Marketing"
    ]},
    { category: "Development", items: [
      "Ecommerce Website", "Web Development", "Web Hosting", "App Development"
    ]},
    { category: "Designing", items: [
      "Brochure Design", "Graphic Design", "Logo Design", "Architecture Design", "UI/UX Design"
    ]}
  ];

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-1/4 right-0 z-50 bg-white border-l-4 border-[#0098d4] shadow-2xl rounded-l-xl w-64 p-3 max-h-[80vh] overflow-y-auto hidden lg:block"
    >
      <h3 className="text-lg font-bold text-[#142c4c] mb-3 text-center">
        Enquiry Form
      </h3>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0098d4] focus:outline-none text-sm"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0098d4] focus:outline-none text-sm"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0098d4] focus:outline-none text-sm"
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0098d4] focus:outline-none text-sm"
        >
          <option value="">Select a Service</option>
          {services.map((group, i) => (
            <optgroup key={i} label={group.category}>
              {group.items.map((item, j) => (
                <option key={j} value={item}>{item}</option>
              ))}
            </optgroup>
          ))}
        </select>

        <button
          type="submit"
          disabled={loading}
          className={`w-full font-semibold py-1 rounded-md text-sm transition-all duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#0098d4] hover:bg-[#142c4c] text-white"
          }`}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </motion.div>
  );
};

export default EnquiryForm;
