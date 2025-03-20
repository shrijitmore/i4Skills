import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CourseCard from "./CourseCard";
import { preloadImages } from "../../lib/preloadImages";

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
  subtitle = "Discover top-rated courses designed to enhance your skills in data engineering and digital transformation",
  courses = [
    {
      id: "1",
      title: "Automation and Data Integration",
      description:
        "Master data integration techniques and automation processes using industry-leading ETL tools, SSIS packages, and workflow optimization strategies.",
      thumbnail:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80",
      instructor: {
        name: "David Miller",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
        title: "Data Integration Specialist",
      },
      skillLevel: "Intermediate",
      duration: "10 weeks",
      rating: 4.8,
      enrolledStudents: 1245,
    },
    {
      id: "2",
      title: "Data Engineering",
      description:
        "Comprehensive training on building robust data pipelines, implementing data warehousing solutions, and optimizing data flows for enterprise applications.",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
      instructor: {
        name: "Dr. Rebecca Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rebecca",
        title: "Lead Data Engineer",
      },
      skillLevel: "Advanced",
      duration: "12 weeks",
      rating: 4.9,
      enrolledStudents: 987,
    },
    {
      id: "3",
      title: "Digital Champion Program",
      description:
        "Become a digital transformation leader with skills in change management, technology adoption, and implementing digital solutions across organizations.",
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80",
      instructor: {
        name: "James Wilson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
        title: "Digital Transformation Director",
      },
      skillLevel: "Intermediate",
      duration: "8 weeks",
      rating: 4.7,
      enrolledStudents: 1124,
    },
    {
      id: "4",
      title: "Data Specialist Program",
      description:
        "Specialized training for data professionals covering Power BI dashboard creation, DAX measures, data modeling, and advanced analytics techniques.",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      instructor: {
        name: "Sarah Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
        title: "Senior Data Specialist",
      },
      skillLevel: "Beginner",
      duration: "10 weeks",
      rating: 4.9,
      enrolledStudents: 1532,
    },
  ],
}: CourseShowcaseProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Preload images to prevent layout shifts
  useEffect(() => {
    const imagePromises = courses.map((course) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = course.thumbnail;
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, [courses]);

  // Set visibility after component mounts to enable animations
  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                variants={itemVariants}
              >
                {title}
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

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

          {imagesLoaded ? (
            <motion.div
              ref={carouselRef}
              className="flex overflow-x-auto pb-8 pt-4 px-4 -mx-4 scrollbar-hide snap-x scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex space-x-6 px-4 min-w-max">
                {courses.map((course) => (
                  <motion.div
                    key={course.id}
                    className="snap-start"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    layout
                  >
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="h-[450px] flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
            </div>
          )}

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
