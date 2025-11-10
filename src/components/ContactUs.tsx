import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, MessageCircle } from "lucide-react";

// Define form data type
interface FormData {
  name: string;
  phone: string;
  email: string;
  message?: string;
}

// Contact details configuration
const contactInfo = {
  address: "Brick 2 Technologies, Plot 38/201, MIG - 6, Sunrise Residency, Manikonda, Hyderabad, 500 089, India",
  phone: "+91 90000 35647",
  email: "brick2technologies@gmail.com",
  hours: "Mon–Sat: 9:00 AM – 6:00 PM\nSunday: Closed",
};

const fadeIn = (direction: "up" | "down" | "left" | "right", delay: number = 0): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      y: direction === "up" ? -40 : direction === "down" ? 40 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { 
        duration: 0.6, 
        delay, 
        ease: "easeInOut" as const
      },
    },
  };
};

const benefits: { text: string }[] = [
  { text: "Customized Digital Strategies – We work closely with you to understand your business and create tailored solutions." },
  { text: "Expert Support – Our team of professionals provides guidance, answers queries, and ensures you're always informed." },
  { text: "End-to-End Solutions – From SEO and content marketing to website development and branding, we offer comprehensive services under one roof." },
  { text: "ROI-Focused Approach – Our strategies are designed to maximize your return on investment, helping your business grow efficiently." },
  { text: "Trusted Partner – As one of the leading digital marketing agencies in Hyderabad, we are dedicated to building long-term partnerships with our clients." },
];

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      // Replace with actual API call
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
      console.log("Form data:", formData); // Using the data parameter
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        reset();
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      console.error("Submission failed:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <section className="pt-0 pb-0 min-h-screen bg-gradient-to-tr from-blue-50 via-white to-blue-100">
      <Helmet>
        <title>Contact Brick2Tech | Digital Marketing Experts in Hyderabad</title>
        <meta
          name="description"
          content="Get in touch with Brick2Tech for branding, SEO, web development, and digital marketing services in Hyderabad. Let's grow your business together."
        />
        <meta
          name="keywords"
          content="digital marketing Hyderabad, SEO services Hyderabad, web development Hyderabad, branding agency Hyderabad"
        />
        <link rel="canonical" href="https://brick2tech.com/contact" />
        <meta property="og:title" content="Contact Brick2Tech | Digital Experts in Hyderabad" />
        <meta
          property="og:description"
          content="Get in touch with Brick2Tech for top-notch branding, digital marketing, and development services. Let's connect and grow your brand!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brick2tech.com/contact" />
        <meta property="og:image" content="https://brick2tech.com/seo/brick2tech-preview.jpg" />
        <meta property="og:site_name" content="Brick2Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Brick2Tech | Digital Experts in Hyderabad" />
        <meta
          name="twitter:description"
          content="Reach out to Brick2Tech for expert digital services in branding, SEO, development, and design."
        />
        <meta name="twitter:image" content="https://brick2tech.com/seo/brick2tech-preview.jpg" />
        <meta name="twitter:site" content="@brick2tech" />
        <meta name="twitter:creator" content="@brick2tech" />
        <meta name="author" content="Brick2Tech Digital Marketing Company" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero (unchanged) */}
      <motion.div
        className="w-full flex flex-col items-center justify-center py-20 md:py-24 bg-gradient-to-b from-[#142c4c] to-[#0096d4] text-white relative shadow-lg mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="sr-only">best digital marketing services in hyderabad</h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg tracking-tight animate-fade-in">
          Let's Connect
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-white font-normal text-center mb-6 animate-fade-in">
          We're here to help you take your business to the next level. As a trusted digital marketing agency in Hyderabad, Brick2Tech is committed to delivering innovative, results-driven solutions tailored to your unique needs. Whether you have questions about our services or want to discuss how we can support your digital journey, our team is ready to assist you.
          Get in touch with us today and let's create strategies that fuel growth, enhance visibility, and drive success.
        </p>
      </motion.div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info Card */}
          <motion.aside
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="shadow-2xl rounded-2xl border-l-8 border-[#0098d4] bg-white/90 backdrop-blur p-8 flex flex-col gap-4 justify-between"
          >
            <div>
              <h2 className="text-xl font-bold mb-6 text-[#142c4c]">
                Office & Contact
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="text-sky-500 w-7 h-7" />
                  <address className="not-italic text-gray-800 text-base">
                    {contactInfo.address}
                  </address>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="text-sky-500 w-7 h-7" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-800 hover:text-[#0098d4] text-base font-medium"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="text-sky-500 w-7 h-7" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-blue-800 hover:text-[#0098d4] underline text-base font-medium"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Clock className="text-sky-500 w-7 h-7" />
                  <div className="text-gray-700 text-base whitespace-pre-line">
                    <span className="font-medium">Hours:</span>
                    <br />
                    {contactInfo.hours}
                  </div>
                </li>
              </ul>
            </div>
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="mx-1 max-w-4xl rounded-2xl shadow-lg border-4 border-[#0098d4] md:h-2/4"
            >
              <iframe
                title="Brick2Tech office location on Google Maps"
                aria-label="Map showing Brick2Tech's office location in Hyderabad"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3807.0148745215106!2d78.49407811116488!3d17.4110738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1752841034254!5m2!1sen!2sin"
                width="100%"
                height="360"
                loading="lazy"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </motion.div> */}
          </motion.aside>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="shadow-2xl rounded-2xl bg-white p-10 flex flex-col justify-center z-10"
          >
            {isSuccess ? (
              <div aria-live="polite" className="text-center py-10">
                <CheckCircle className="text-green-500 w-14 h-14 mx-auto mb-4 animate-bounce" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Thank you!
                </h2>
                <p className="text-[#142c4c] text-base">
                  Your message has been received. Our team will reach out soon.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-1 text-[#142c4c]">
                  Send Us a Message
                </h2>
                <p className="mb-6 text-base text-gray-500">
                  Quick response. Confidential. No spam, ever.
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  aria-label="Contact form"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Name <span className="text-sky-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                      className={`w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#0098d4] transition ${errors.name && "border-red-400"}`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <span className="text-red-600 text-xs" id="name-error">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Phone <span className="text-sky-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      {...register("phone", { required: "Phone is required" })}
                      type="tel"
                      aria-required="true"
                      aria-invalid={errors.phone ? "true" : "false"}
                      className={`w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#0098d4] transition ${errors.phone && "border-red-400"}`}
                      placeholder="Your Mobile"
                    />
                    {errors.phone && (
                      <span className="text-red-600 text-xs" id="phone-error">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Email <span className="text-sky-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      {...register("email", { required: "Email is required" })}
                      type="email"
                      aria-required="true"
                      aria-invalid={errors.email ? "true" : "false"}
                      className={`w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#0098d4] transition ${errors.email && "border-red-400"}`}
                      placeholder="you@email.com"
                    />
                    {errors.email && (
                      <span className="text-red-600 text-xs" id="email-error">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      {...register("message")}
                      rows={4}
                      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#0098d4] transition"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: !isSubmitting ? 1.03 : 1 }}
                    whileTap={{ scale: !isSubmitting ? 0.96 : 1 }}
                    className="w-full bg-gradient-to-tr from-[#0098d4] via-[#13b0f5] to-[#142c4c] text-white py-3 rounded-lg font-semibold shadow-sm hover:bg-[#142c4c] transition text-lg"
                    aria-label="Send message"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Why Reach Out Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#142c4c] mb-10"
          >
            Why Reach Out to Brick2Tech?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", i * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-start gap-3 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <p className="text-gray-700">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-b from-[#142c4c] to-[#0096d4] text-white p-10 rounded-3xl shadow-lg text-center"
          >
            <MessageCircle className="w-10 h-10 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Have Questions? We're Just a Message Away
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Contact us directly to discuss how we can support your brand's growth.
              Our team is always ready to provide personalized recommendations, explore new opportunities,
              and assist you in navigating the digital landscape.
            </p>
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-xl shadow-md transition"
              aria-label="Go to contact form"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default ContactUs;