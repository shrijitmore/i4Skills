import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name?: string;
  role?: string;
  quote?: string;
  rating?: number;
  image?: string;
}

const TestimonialCard = ({
  name = "Sarah Johnson",
  role = "Software Developer",
  quote = "This AI-powered LMS has completely transformed my learning experience. The personalized recommendations and interactive labs have helped me master new skills in half the time.",
  rating = 5,
  image = "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <Avatar className="h-12 w-12 mr-4 border-2 border-primary">
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-muted-foreground text-sm">{role}</p>
            </div>
          </div>

          <div className="flex mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.svg
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </div>

          <motion.div
            className="italic text-gray-700 flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>"{quote}"</p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
