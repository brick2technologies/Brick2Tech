'use client';

import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Blog {
  id: number;
  title: string;
  category: string;
  image: string;
  content: string;
  slug: string;
}

// Utility function to generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: 'Struggling to Get Leads Online? Here’s Why You Need the Best Digital Marketing Agency in Hyderabad',
    category: 'Inspiration',
    image: 'https://res.cloudinary.com/di1bfo7ma/image/upload/v1760510077/Struggling-to-get-Leads-Online_vgpqma.jpg',
    content:
      "Explore the latest design trends and learn from industry experts about what's shaping the future of creative work. Discover timeless principles that never go out of style.",
    slug: generateSlug('Digital Marketing Agency in Hyderabad'),
  },
  {
    id: 2,
    title: 'Why Your Brand Needs the Right Social Media Marketing Agency in Hyderabad',
    category: 'Design',
    image: 'https://res.cloudinary.com/di1bfo7ma/image/upload/v1760509115/Why-Brands-need-right-Digital-Marketing-Ststegy_p1lrg0.jpg',
    content:
      "Minimalism isn't just an aesthetic—it's a philosophy. Learn how to strip away the unnecessary and focus on what truly matters in your product design.",
    slug: generateSlug('Social Media Marketing Agency in Hyderabad'),
  },
];

const BlogCards: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-6"></span>
        <h1 className="text-5xl font-bold mb-6">The Journal Design Resources, Interviews, and Industry News</h1>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Stories to inspire and guide your next big idea. Build lasting business relationships through innovation.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-blue-50 transition">
            Read More
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white/10 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
    <section className="flex-1 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.slug}`}
              className="group cursor-pointer"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover rounded-lg mb-4 transition-transform group-hover:scale-105"
              />
              <div className="space-y-3">
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {blog.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600">Explore insights and trends in design, business, and creativity.</p>
                <div className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition">
                  Read More <ChevronRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default BlogCards;