import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

// Make XIcon reusable like Lucide icons
const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 16 16" // Adjusted to square box for centering
    aria-hidden="true"
  >
    <path
      d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
      transform="translate(0 1)" // tweak vertical centering
    />
  </svg>
);

export default function SocialMediaBar() {
  const socialLinks = [
    { icon: <Instagram className="w-7 h-7" />, url: "https://instagram.com/brick2technologies/", name: "Instagram" },
    { icon: <Facebook className="w-7 h-7" />, url: "https://facebook.com/brick2technologies", name: "Facebook" },
    { icon: <Linkedin className="w-7 h-7" />, url: "https://www.linkedin.com/company/brick-2-technologies/", name: "LinkedIn" },
    { icon: <XIcon className="w-7 h-7 text-center " />, url: "https://x.com/brick2tech", name: "Twitter" },
    { icon: <Youtube className="w-7 h-7" />, url: "https://youtube.com/@brick2tech", name: "YouTube" },
  ];

  return (
    <div className="flex fixed left-2 top-1/2 transform -translate-y-1/2 flex-col space-y-3 z-50">
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md text-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-300"
          whileHover={{ scale: 1.2 }}
          title={link.name}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}
