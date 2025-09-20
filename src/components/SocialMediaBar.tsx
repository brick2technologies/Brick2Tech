import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

export default function SocialMediaBar() {
  const socialLinks = [
    { icon: <Linkedin />, url: "https://www.linkedin.com/company/brick-2-technologies/", name: "LinkedIn" },
    { icon: <Twitter />, url: "https://x.com/brick2tech", name: "Twitter" },
    { icon: <Instagram />, url: "https://instagram.com/brick2technologies/", name: "Instagram" },
    { icon: <Facebook />, url: "https://facebook.com/brick2technologies", name: "Facebook" },
    { icon: <Youtube />, url: "https://youtube.com/@brick2tech", name: "YouTube" },
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
