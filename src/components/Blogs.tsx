'use client';


import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';

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
    image: 'bg-gradient-to-br from-slate-400 to-slate-600',
    content:
      "Explore the latest design trends and learn from industry experts about what's shaping the future of creative work. Discover timeless principles that never go out of style.",
    slug: generateSlug('Struggling to Get Leads Online?'),
  },
  {
    id: 2,
    title: 'Why Your Brand Needs the Right Social Media Marketing Agency in Hyderabad',
    category: 'Design',
    image: 'bg-gradient-to-br from-orange-300 to-orange-500',
    content:
      "Minimalism isn't just an aesthetic—it's a philosophy. Learn how to strip away the unnecessary and focus on what truly matters in your product design.",
    slug: generateSlug('Why Your Brand Needs the Right Social Media Marketing Agency in Hyderabad'),
  },
  
];



export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
   
      <section className="flex-1 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:gap-3 transition"
          >
            <ArrowLeft size={20} /> Back to Blogs
          </button>
          <div className={`${blog.image} h-96 rounded-lg mb-8`}></div>
          <div className="space-y-6">
            <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>
            <div className="text-gray-600 space-y-4">
              <p>{blog.content}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="mt-8 bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition"
            >
              Back to All Blogs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const BlogGrid: React.FC = () => (
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
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <div className={`${blog.image} h-48 rounded-lg mb-4 transition-transform group-hover:scale-105`}></div>
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
        <div className="flex justify-center gap-2 mt-12">
          <button className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100">
            ← Previous
          </button>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded">1</button>
          <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100">2</button>
          <button className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100">
            Next →
          </button>
        </div>
      </div>
    </section>
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to level up your business?</h2>
        <p className="text-blue-100 mb-6">Start your journey with us today</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded font-semibold hover:bg-blue-50 transition">
          Subscribe
        </button>
      </div>
    </section>
  </div>
);

const BlogPage: React.FC = () => {
  return <BlogGrid />;
};

export default BlogPage;