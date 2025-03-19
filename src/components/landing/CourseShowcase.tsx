import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CourseCard from "./CourseCard";

interface CourseShowcaseProps {
  title?: string;
  subtitle?: string;
  courses?: Array<{
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    instructor: {
      name: string;
      avatar: string;
      title: string;
    };
    skillLevel: "Beginner" | "Intermediate" | "Advanced";
    duration: string;
    rating: number;
    enrolledStudents: number;
  }>;
}

const CourseShowcase = ({
  title = "Explore Our Featured Courses",
  subtitle = "Discover top-rated courses designed to enhance your skills with AI-powered learning experiences",
  courses = [
    {
      id: "1",
      title: "Advanced Machine Learning with Python",
      description:
        "Learn cutting-edge machine learning techniques and implement them using Python and popular frameworks like TensorFlow and PyTorch.",
      thumbnail:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&q=80",
      instructor: {
        name: "Dr. Sarah Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
        title: "AI Research Scientist",
      },
      skillLevel: "Intermediate",
      duration: "8 weeks",
      rating: 4.8,
      enrolledStudents: 1245,
    },
    {
      id: "2",
      title: "Web Development Bootcamp 2023",
      description:
        "A comprehensive course covering HTML, CSS, JavaScript, React, and Node.js to build modern, responsive web applications.",
      thumbnail:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&q=80",
      instructor: {
        name: "Alex Rodriguez",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
        title: "Senior Web Developer",
      },
      skillLevel: "Beginner",
      duration: "12 weeks",
      rating: 4.9,
      enrolledStudents: 2389,
    },
    {
      id: "3",
      title: "Data Science Fundamentals",
      description:
        "Master the essential skills of data analysis, visualization, and statistical modeling to extract meaningful insights from complex datasets.",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
      instructor: {
        name: "Dr. Michael Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
        title: "Data Science Director",
      },
      skillLevel: "Beginner",
      duration: "10 weeks",
      rating: 4.7,
      enrolledStudents: 1876,
    },
    {
      id: "4",
      title: "Advanced Cloud Architecture",
      description:
        "Design and implement scalable, secure, and resilient cloud solutions using AWS, Azure, and Google Cloud Platform.",
      thumbnail:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
      instructor: {
        name: "Jennifer Williams",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer",
        title: "Cloud Solutions Architect",
      },
      skillLevel: "Advanced",
      duration: "8 weeks",
      rating: 4.9,
      enrolledStudents: 943,
    },
    {
      id: "5",
      title: "UX/UI Design Masterclass",
      description:
        "Learn the principles of user experience and interface design to create intuitive, engaging, and accessible digital products.",
      thumbnail:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
      instructor: {
        name: "Emma Thompson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
        title: "Senior UX Designer",
      },
      skillLevel: "Intermediate",
      duration: "6 weeks",
      rating: 4.8,
      enrolledStudents: 1532,
    },
  ],
}: CourseShowcaseProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={scrollLeft}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto pb-8 pt-4 px-4 -mx-4 scrollbar-hide snap-x scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex space-x-6 px-4">
              {courses.map((course) => (
                <div key={course.id} className="snap-start">
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    thumbnail={course.thumbnail}
                    instructor={course.instructor}
                    skillLevel={course.skillLevel}
                    duration={course.duration}
                    rating={course.rating}
                    enrolledStudents={course.enrolledStudents}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={scrollRight}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CourseShowcase;
