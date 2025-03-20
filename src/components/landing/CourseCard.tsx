import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface CourseCardProps {
  title?: string;
  description?: string;
  thumbnail?: string;
  instructor?: {
    name: string;
    avatar: string;
    title: string;
  };
  skillLevel?: "Beginner" | "Intermediate" | "Advanced";
  duration?: string;
  rating?: number;
  enrolledStudents?: number;
}

const CourseCard = ({
  title = "Advanced Machine Learning with Python",
  description = "Learn cutting-edge machine learning techniques and implement them using Python and popular frameworks like TensorFlow and PyTorch.",
  thumbnail = "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&q=80",
  instructor = {
    name: "Dr. Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    title: "AI Research Scientist",
  },
  skillLevel = "Intermediate",
  duration = "8 weeks",
  rating = 4.8,
  // enrolledStudents = 1245,
}: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Determine the color for the skill level badge
  const getSkillLevelColor = () => {
    switch (skillLevel) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-blue-100 text-blue-800";
      case "Advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Generate star rating display
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="w-4 h-4 text-gray-300" />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>,
        );
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <motion.div
      className="bg-white w-[350px] h-[450px] rounded-xl shadow-lg overflow-hidden"
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="border-0 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
            style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
          />
          <div className="absolute top-3 right-3">
            <Badge className={getSkillLevelColor()}>{skillLevel}</Badge>
          </div>
        </div>

        <CardHeader className="pb-2">
          <h3 className="text-xl font-bold line-clamp-2">{title}</h3>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {description}
          </p>

          <motion.div
            className="mt-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <img
                src={instructor.avatar}
                alt={instructor.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-sm">{instructor.name}</p>
                <p className="text-xs text-gray-500">{instructor.title}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">Duration:</span>
                <span className="font-medium">{duration}</span>
              </div>
              <div className="flex items-center">
                {/* <span className="text-gray-500 mr-2">Students:</span>
                <span className="font-medium">
                  {enrolledStudents.toLocaleString()}
                </span> */}
              </div>
            </div>
          </motion.div>
        </CardContent>

        <CardFooter className="pt-0">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex mr-1">{renderStars()}</div>
                <span className="text-sm font-medium">{rating.toFixed(1)}</span>
              </div>
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                whileTap={{ scale: 0.95 }}
              >
                View Course
              </motion.button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
