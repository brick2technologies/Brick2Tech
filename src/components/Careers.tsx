import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  MapPin,
  Clock,
  IndianRupee,
  X,
  Upload,
  CheckCircle,
} from "lucide-react";
import { Helmet } from "react-helmet";

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  tools: string[];
}

interface ApplicationFormData {
  fullName: string;
  phone: string;
  email: string;
  github?: string;
  linkedin?: string;
  resume: FileList;
  experience: number;
  currentSalary?: string;
  expectedSalary?: string;
}

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationFormData>();

  const jobs: Job[] = [
    {
      id: "digital-marketing-executive",
      title: "Digital Marketing Executive",
      location: "Remote / Hybrid",
      type: "Full-time",
      salary: "₹45,000 - ₹65,000",
      description:
        "We are looking for a creative and results-driven Digital Marketing Executive to join our growing team.",
      responsibilities: [
        "Develop and execute comprehensive digital marketing strategies",
        "Manage social media accounts and create engaging content",
        "Analyze campaign performance and optimize for better results",
        "Collaborate with design and development teams on projects",
        "Stay updated with latest digital marketing trends and tools",
      ],
      qualifications: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "3+ years of experience in digital marketing",
        "Proficiency in Google Analytics, AdWords, and social media platforms",
        "Strong analytical and communication skills",
        "Experience with SEO and content marketing",
      ],
      tools: [
        "Google Analytics",
        "Facebook Ads Manager",
        "Hootsuite",
        "Canva",
        "Mailchimp",
      ],
    },
    {
      id: "ui-ux-web-designer",
      title: "UI/UX Web Designer",
      location: "On-site",
      type: "Full-time",
      salary: "₹50,000 - ₹70,000",
      description:
        "Join our design team to create beautiful, user-friendly interfaces that enhance user experience.",
      responsibilities: [
        "Design intuitive and visually appealing user interfaces",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and design systems",
        "Collaborate with developers to implement designs",
        "Maintain design consistency across all platforms",
      ],
      qualifications: [
        "Bachelor's degree in Design, Computer Science, or related field",
        "4+ years of experience in UI/UX design",
        "Proficiency in Figma, Adobe Creative Suite, and prototyping tools",
        "Strong portfolio showcasing web and mobile designs",
        "Understanding of front-end development principles",
      ],
      tools: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Principle"],
    },
  ];

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) {
      const input = document.querySelector(
        'input[name="resume"]'
      ) as HTMLInputElement;
      input.files = e.dataTransfer.files;
    }
  };

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("github", data.github || "");
    formData.append("linkedin", data.linkedin || "");
    formData.append("resume", data.resume[0]);
    formData.append("experience", data.experience.toString());
    formData.append("currentSalary", data.currentSalary || "");
    formData.append("expectedSalary", data.expectedSalary || "");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setTimeout(() => {
        setShowApplicationForm(false);
        setIsSuccess(false);
        reset();
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers | Join Our Team at B2T</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at B2T. Apply today and be part of a passionate team building digital solutions."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Careers at B2T" />
        <meta
          property="og:description"
          content="We're hiring! Check out job openings and join our innovative team."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brick2tech/careers" />
      </Helmet>
      <section className="pt-20 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our
              passion for digital innovation and excellence. Explore our current
              openings below.
            </p>
          </motion.div>

          {/* Job Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <IndianRupee className="h-4 w-4 mr-1" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{job.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Tools & Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedJob(index)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowApplicationForm(true)}
                    className="flex-1 bg-[#0098d4] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Job Details Modal */}
          <AnimatePresence>
            {selectedJob !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                onClick={() => setSelectedJob(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {jobs[selectedJob].title}
                    </h3>
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="text-gray-400 hover:text-gray-600"
                      aria-label="Close job details"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {jobs[selectedJob].responsibilities.map((resp) => (
                          <li key={resp} className="flex items-start">
                            <div className="w-2 h-2 text-[#0098d4] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Qualifications:
                      </h4>
                      <ul className="space-y-2">
                        {jobs[selectedJob].qualifications.map((qual) => (
                          <li key={qual} className="flex items-start">
                            <div className="w-2 h-2 text-[#0098d4] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedJob(null);
                        setShowApplicationForm(true);
                      }}
                      className="w-full bg-[#0098d4] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                    >
                      Apply for This Position
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Application Form Modal */}
          <AnimatePresence>
            {showApplicationForm && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="job-application-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                onClick={() => setShowApplicationForm(false)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 focus:outline-none"
                  onClick={(e) => e.stopPropagation()}
                  tabIndex={-1}
                  aria-labelledby="job-application-title"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h2
                      id="job-application-title"
                      className="text-2xl font-bold text-gray-900"
                    >
                      Job Application
                    </h2>
                    <button
                      onClick={() => setShowApplicationForm(false)}
                      className="text-gray-400 hover:text-gray-600"
                      aria-label="Close job application form"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  {isSuccess ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-12"
                      role="status"
                      aria-live="polite"
                    >
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Application Submitted Successfully!
                      </h3>
                      <p className="text-gray-600">
                        We'll review your application and get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                      aria-label="Job application form"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            id="fullName"
                            type="text"
                            {...register("fullName", {
                              required: "Full name is required",
                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            aria-describedby="fullName-error"
                          />
                          {errors.fullName?.message && (
                            <p
                              id="fullName-error"
                              className="text-red-500 text-sm mt-1"
                            >
                              {errors.fullName.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Phone Number *
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            {...register("phone", {
                              required: "Phone number is required",
                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            aria-describedby="phone-error"
                          />
                          {errors.phone?.message && (
                            <p
                              id="phone-error"
                              className="text-red-500 text-sm mt-1"
                            >
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                          })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          aria-describedby="email-error"
                        />
                        {errors.email?.message && (
                          <p
                            id="email-error"
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="github"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            GitHub Link
                          </label>
                          <input
                            id="github"
                            type="url"
                            {...register("github")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="linkedin"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            LinkedIn Profile
                          </label>
                          <input
                            id="linkedin"
                            type="url"
                            {...register("linkedin")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="resume"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Resume Upload *
                        </label>
                        <section
                          className={`border-2 border-dashed border-gray-300 rounded-lg p-6 text-center ${
                            dragActive ? "bg-gray-100" : ""
                          }`}
                          onDragEnter={handleDrag}
                          onDragOver={handleDrag}
                          onDragLeave={handleDrag}
                          onDrop={handleDrop}
                          aria-label="File upload area"
                        >
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            Click to upload or drag and drop
                          </p>
                          <input
                            id="resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            {...register("resume", {
                              required: "Resume is required",
                            })}
                            className="hidden"
                            aria-describedby="resume-error"
                          />
                          <label htmlFor="resume" className="cursor-pointer">
                            <span className="sr-only">Upload resume</span>
                          </label>
                        </section>
                        {errors.resume?.message && (
                          <p
                            id="resume-error"
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.resume.message}
                          </p>
                        )}
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label
                            htmlFor="experience"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Years of Experience *
                          </label>
                          <input
                            id="experience"
                            type="number"
                            min="0"
                            {...register("experience", {
                              required: "Experience is required",
                              valueAsNumber: true,
                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            aria-describedby="experience-error"
                          />
                          {errors.experience?.message && (
                            <p
                              id="experience-error"
                              className="text-red-500 text-sm mt-1"
                            >
                              {errors.experience.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="currentSalary"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Current Salary
                          </label>
                          <input
                            id="currentSalary"
                            type="text"
                            {...register("currentSalary")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="expectedSalary"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Expected Salary
                          </label>
                          <input
                            id="expectedSalary"
                            type="text"
                            {...register("expectedSalary")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-[#0098d4] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </motion.button>
                    </form>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Careers;
