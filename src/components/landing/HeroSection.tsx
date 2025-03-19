import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  headline = "Revolutionize Your Learning with AI-Enhanced Education",
  subheadline = "Personalized learning paths, instant feedback, and interactive content that adapts to your unique learning style.",
  ctaText = "Get Started Free",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Generate 3D elements that will respond to mouse movement
  const elements = [
    {
      id: 1,
      size: 80,
      color: "rgba(99, 102, 241, 0.4)",
      initialX: "20%",
      initialY: "30%",
    },
    {
      id: 2,
      size: 120,
      color: "rgba(139, 92, 246, 0.3)",
      initialX: "70%",
      initialY: "20%",
    },
    {
      id: 3,
      size: 60,
      color: "rgba(236, 72, 153, 0.3)",
      initialX: "80%",
      initialY: "60%",
    },
    {
      id: 4,
      size: 100,
      color: "rgba(59, 130, 246, 0.2)",
      initialX: "40%",
      initialY: "70%",
    },
    {
      id: 5,
      size: 50,
      color: "rgba(16, 185, 129, 0.3)",
      initialX: "10%",
      initialY: "80%",
    },
  ];

  return (
    <div
      ref={heroRef}
      className="relative w-full h-[700px] overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 flex items-center justify-center px-6"
    >
      {/* Floating 3D elements */}
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full"
          style={{
            width: element.size,
            height: element.size,
            backgroundColor: element.color,
            left: element.initialX,
            top: element.initialY,
          }}
          animate={{
            x: (mousePosition.x - (heroRef.current?.offsetWidth || 0) / 2) / 30,
            y:
              (mousePosition.y - (heroRef.current?.offsetHeight || 0) / 2) / 30,
            rotate: (mousePosition.x + mousePosition.y) / 200,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
      ))}

      {/* Content container */}
      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {headline}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-block"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 0 rgba(255, 255, 255, 0.4)",
                "0 0 0 10px rgba(255, 255, 255, 0)",
                "0 0 0 0 rgba(255, 255, 255, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <Button
              size="lg"
              onClick={onCtaClick}
              className="bg-white text-indigo-900 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold rounded-full"
            >
              {ctaText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
