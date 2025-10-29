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
        "service_zmgawi8", // ✅ your EmailJS service ID
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
    "Branding & Strategy",
    "Digital Marketing",
    "Website Development",
    "Ecommerce Development",
    "Graphic Design",
    "3D Design & Visualization",
    "Motion Graphics"
  ];

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-10 right-10 z-50 bg-white border-l-4 border-[#0098d4] shadow-2xl rounded-xl w-72 p-3 cursor-grab active:cursor-grabbing"
    >
      {/* Draggable Header */}
      <div className="bg-[#0098d4] text-white text-center py-2 rounded-md mb-3 font-semibold cursor-move select-none">
        🧩 Enquiry Form
      </div>

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
          {services.map((service, i) => (
            <option key={i} value={service}>
              {service}
            </option>
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
