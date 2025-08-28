import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const clients = [
  { name: 'Client A', logo: '/images/clients/client-a.png' },
  { name: 'Client B', logo: '/images/clients/client-b.png' },
  { name: 'Client C', logo: '/images/clients/client-c.png' },
  { name: 'Client D', logo: '/images/clients/client-d.png' },
  { name: 'Client E', logo: '/images/clients/client-e.png' },
  { name: 'Client F', logo: '/images/clients/client-f.png' },
  { name: 'Client G', logo: '/images/clients/client-a.png' },
  { name: 'Client H', logo: '/images/clients/client-b.png' },
  { name: 'Client I', logo: '/images/clients/client-c.png' },
  { name: 'Client J', logo: '/images/clients/client-d.png' },
  { name: 'Client K', logo: '/images/clients/client-e.png' },
  { name: 'Client L', logo: '/images/clients/client-f.png' },
];

const testimonials = [
  {
    quote: "Working with Brick2Tech was a game-changer. They didn’t just build our website — they brought our entire vision to life. Their creativity, professionalism, and timely delivery truly impressed us.",
    author: 'Suresh Kumar, Director, Nisarga Projects',
  },
  {
    quote: "Brick2Tech helped us define our brand and grow our digital presence from scratch. Their team understood our goals and gave us a strategy that delivered real results.",
    author: 'Priya Mehta, Founder, NatureRoot Organics',
  },
  {
    quote: "From logo to launch, Brick2Tech guided us through every step. The 3D walkthroughs they created for our real estate project blew our clients away.",
    author: 'Rahul Verma, Marketing Head, Elite Urban Developers',
  },
  {
    quote: "What sets Brick2Tech apart is their attention to detail and client-first approach. Their design and tech teams worked like an extension of our own.",
    author: 'Dr. Anjali Rao, Founder, WellZen Ayurveda',
  },
  {
    quote: "Brick2Tech isn’t just a service provider — they’re a strategic partner. Their branding and marketing efforts helped us reach a much larger audience.",
    author: 'Vikram Desai, CEO, StartHub Accelerator',
  },
];

const HomeClients: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth / 2
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 20);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-24" id="clients">
      

      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <h1 className='sr-only'>Best Digital Marketing Agency in Hyderabad  </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:scale-105 transition-transform duration-300">
          Our <span className="text-blue-600">Clients</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 hover:scale-105 transition-transform duration-300">
          Trusted by businesses across industries, we’ve partnered with startups, enterprises, and everything in between.
        </p>
      </motion.div>

      <div
        className="relative overflow-hidden"
        aria-label="Client logos carousel"
      >
        <div
          ref={scrollRef}
          className="flex whitespace-nowrap w-full overflow-hidden"
        >
          {[...clients, ...clients].map((client, index) => (
            <motion.div
              key={client.name + index}
              className="inline-flex items-center justify-center px-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img
                src={client.logo}
                alt={`${client.name} Logo - Brick2Tech Client`}
                loading="lazy"
                className="h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-20 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: true }}
        aria-label="Client testimonial section"
      >
        <h3 className="text-3xl font-bold text-blue-600 mb-6 hover:scale-105 transition-transform duration-300">
          What Our Clients Say
        </h3>
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonialIndex}
            className="bg-gray-50 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-yellow-500 text-xl mb-2" aria-hidden="true">
                ⭐⭐⭐⭐⭐
              </div>
              <p
                className="text-lg text-gray-700 italic mb-4"
                aria-label={`Testimonial quote from ${testimonials[testimonialIndex].author}`}
              >
                “{testimonials[testimonialIndex].quote}”
              </p>

              <p className="text-gray-800 font-semibold">
                — {testimonials[testimonialIndex].author}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default HomeClients;
