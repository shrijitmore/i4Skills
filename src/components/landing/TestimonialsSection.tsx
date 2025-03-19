import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

interface TestimonialsSectionProps {
  testimonials?: Array<{
    name: string;
    role: string;
    quote: string;
    rating: number;
    image: string;
  }>;
}

const TestimonialsSection = ({
  testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      quote:
        "This AI-powered LMS has completely transformed my learning experience. The personalized recommendations and interactive labs have helped me master new skills in half the time.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      quote:
        "The virtual lab environment is incredible. Being able to experiment with code and see real-time results has accelerated my learning curve dramatically.",
      rating: 4,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      quote:
        "I love how the AI assistant helps me when I'm stuck. It's like having a personal tutor available 24/7 that actually understands my learning style.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    },
    {
      name: "David Kim",
      role: "Full Stack Developer",
      quote:
        "The course quality is outstanding. The instructors are experts in their fields and the content is always up-to-date with the latest industry standards.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
    {
      name: "Priya Patel",
      role: "Product Manager",
      quote:
        "This platform has helped our entire team level up their skills. The collaborative features make it easy to share knowledge across departments.",
      rating: 4,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
    },
  ],
}: TestimonialsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          What Our Learners Say
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Join thousands of satisfied students who have transformed their
          careers through our AI-powered learning platform.
        </p>
      </motion.div>

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a
          href="#"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
        >
          Join Our Community
        </a>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
