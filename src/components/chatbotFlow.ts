// export type ChatStateKey =
//   | 'start'
//   | 'services'
//   | 'branding'
//   | 'webdev'
//   | 'marketing'
//   | 'ecommerce'
//   | 'quote'
//   | 'contact'
//   | 'pricing'
//   | 'process'
//   | 'careers';

// interface ChatOption {
//   label: string;
//   next: ChatStateKey;
// }

// interface ChatNode {
//   message: string;
//   options: ChatOption[];
// }

// export const chatbotFlow: Record<ChatStateKey, ChatNode> = {
//   start: {
//     message: "👋 Hi! I'm your assistant from Brick 2 Tech. What would you like to explore?",
//     options: [
//       { label: "🔧 Our Services", next: "services" },
//       { label: "💼 Get a Quote", next: "quote" },
//       { label: "📞 Contact Info", next: "contact" },
//       { label: "📈 Pricing & Timeline", next: "pricing" },
//       { label: "🎯 How We Work", next: "process" },
//       { label: "👥 Careers", next: "careers" },
//     ],
//   },
//   services: {
//     message: "Here's what we offer:\n\n🧠 Branding & Strategy\n🖥️ Web & App Development\n📢 Digital Marketing (SEO, Ads)\n🎨 Graphic Design & UI/UX\n🏬 E-commerce Solutions\n📸 3D Architecture Visualization\n\nWhich one are you interested in?",
//     options: [
//       { label: "Branding", next: "branding" },
//       { label: "Web/App Development", next: "webdev" },
//       { label: "Digital Marketing", next: "marketing" },
//       { label: "E-Commerce", next: "ecommerce" },
//       { label: "Back to Main Menu", next: "start" },
//     ],
//   },
//   branding: {
//     message: "We provide:\n- Logo Design\n- Brand Guidelines\n- Color + Typography\n- Visual Identity\n\nLet us know if you'd like a quote!",
//     options: [
//       { label: "Get a Quote", next: "quote" },
//       { label: "Back to Services", next: "services" },
//     ],
//   },
//   webdev: {
//     message: "We build:\n- Corporate Websites\n- Custom Web Apps\n- Mobile Apps (iOS/Android)\n- Portfolio & Landing Pages\n\nTech stack: React, Next.js, Node.js, MongoDB, React-Native.",
//     options: [
//       { label: "See Pricing", next: "pricing" },
//       { label: "Back to Services", next: "services" },
//     ],
//   },
//   marketing: {
//     message: "Our Digital Marketing includes:\n- SEO (On-page/Off-page)\n- Google Ads\n- Meta Ads\n- Email Marketing\n- Social Media Management\n\nTarget. Reach. Grow.",
//     options: [
//       { label: "Get a Campaign Quote", next: "quote" },
//       { label: "Back to Services", next: "services" },
//     ],
//   },
//   ecommerce: {
//     message: "We build custom e-commerce websites using:\n- React + Node\n- Shopify\n- WooCommerce\n- Payment Gateway Integration\n- Order & Inventory Management",
//     options: [
//       { label: "Request a Demo", next: "quote" },
//       { label: "Back to Services", next: "services" },
//     ],
//   },
//   quote: {
//     message: "To get a custom quote, please visit our Contact Page or tell us about your project via email at brick2technologies@gmail.com.",
//     options: [
//       { label: "Back to Main Menu", next: "start" },
//     ],
//   },
//   contact: {
//     message: "You can reach us at:\n📧 brick2technologies@gmail.com\n📱 +91-90000 35647\n🏢 Hyderabad, India\n\nWe’re available Mon–Sat, 10 AM – 7 PM.",
//     options: [
//       { label: "Visit Contact Page", next: "quote" },
//       { label: "Back to Main Menu", next: "start" },
//     ],
//   },
//   pricing: {
//     message: "💰 Our pricing varies based on scope:\n\n✅ Landing Page – ₹20K–₹30K\n✅ Business Website – ₹35K–₹50K\n✅ Web App – ₹60K–₹1.5L+\n✅ Branding Pack – ₹10K–₹25K\n✅ Marketing Campaigns – Custom\n\nNeed exact quote?",
//     options: [
//       { label: "Request a Quote", next: "quote" },
//       { label: "Back to Main Menu", next: "start" },
//     ],
//   },
//   process: {
//     message: "🔄 Our process:\n1️⃣ Discovery Call\n2️⃣ Proposal & Pricing\n3️⃣ Design & Development\n4️⃣ Revisions\n5️⃣ Launch & Support\n\nWe believe in transparency and timelines.",
//     options: [
//       { label: "Start a Project", next: "quote" },
//       { label: "Back to Main Menu", next: "start" },
//     ],
//   },
//   careers: {
//     message: "👥 We're hiring!\n\nOpen Roles:\n- Frontend Developer\n- UI/UX Designer\n- Content Marketer\n\nApply via our Careers page or email brick2technologies@gmail.com.",
//     options: [
//       { label: "Visit Careers Page", next: "quote" },
//       { label: "Back to Main Menu", next: "start" },
//     ],
//   },
// };
