import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  headline = "Transform Your Future with Data Learning",
  subheadline = "Discover a new dimension of education with personalized learning paths, real-time feedback, and interactive content tailored to your unique potential.",
  ctaText = "Begin Your Journey",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const backgroundControls = useAnimationControls();

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

    // Start the continuous background animation
    backgroundControls.start({
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    });

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [backgroundControls]);

  // Generate 3D elements that will respond to mouse movement with reduced opacity
  const elements = [
    {
      id: 1,
      size: 100,
      color: "rgba(255, 0, 128, 0.25)", // Hot pink
      initialX: "15%",
      initialY: "25%",
      shape: "rounded-full",
      blur: "blur-xl",
    },
    {
      id: 2,
      size: 150,
      color: "rgba(128, 0, 255, 0.2)", // Electric purple
      initialX: "75%",
      initialY: "15%",
      shape: "rounded-full",
      blur: "blur-xl",
    },
    {
      id: 3,
      size: 80,
      color: "rgba(0, 255, 255, 0.2)", // Cyan
      initialX: "85%",
      initialY: "65%",
      shape: "rounded-2xl",
      blur: "blur-lg",
    },
    {
      id: 4,
      size: 120,
      color: "rgba(255, 0, 255, 0.15)", // Magenta
      initialX: "35%",
      initialY: "75%",
      shape: "rounded-full",
      blur: "blur-xl",
    },
    {
      id: 5,
      size: 70,
      color: "rgba(0, 255, 128, 0.2)", // Neon green
      initialX: "5%",
      initialY: "85%",
      shape: "rounded-2xl",
      blur: "blur-lg",
    },
    {
      id: 6,
      size: 90,
      color: "rgba(255, 128, 0, 0.15)", // Neon orange
      initialX: "60%",
      initialY: "40%",
      shape: "rounded-3xl",
      blur: "blur-xl",
    },
    {
      id: 7,
      size: 60,
      color: "rgba(0, 128, 255, 0.2)", // Bright blue
      initialX: "25%",
      initialY: "55%",
      shape: "rounded-full",
      blur: "blur-lg",
    },
  ];

  // Particles for the background
  const particles = Array.from({ length: 50 }).map((_, index) => ({
    id: `particle-${index}`,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <motion.div
      ref={heroRef}
      className="relative w-full h-[700px] overflow-hidden flex items-center justify-center px-6"
      style={{ backgroundSize: "400% 400%" }}
      animate={backgroundControls}
      initial={{ backgroundPosition: "0% 0%" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#1A0520] to-[#300A25] z-0"
        animate={{
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] z-1"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.05)_0%,transparent_70%)] z-1"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Particles - Updated to move continuously with reduced opacity */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-40"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: ["-100px", "100px"],
            x: ["-20px", "20px"],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            y: {
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
              delay: particle.delay,
            },
            x: {
              duration: particle.duration * 0.7,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
              delay: particle.delay * 1.5,
            },
            opacity: {
              duration: particle.duration / 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
              delay: particle.delay,
            },
          }}
        />
      ))}

      {/* Floating 3D elements */}
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.shape} ${element.blur}`}
          style={{
            width: element.size,
            height: element.size,
            backgroundColor: element.color,
            left: element.initialX,
            top: element.initialY,
          }}
          animate={{
            x: (mousePosition.x - (heroRef.current?.offsetWidth || 0) / 2) / 25,
            y:
              (mousePosition.y - (heroRef.current?.offsetHeight || 0) / 2) / 25,
            rotate: (mousePosition.x + mousePosition.y) / 200,
            scale: [1, 1.05, 1],
          }}
          transition={{
            x: { type: "spring", damping: 15 },
            y: { type: "spring", damping: 15 },
            rotate: { type: "spring", damping: 15 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}

      {/* Content container */}
      <div className="relative z-10 max-w-4xl text-center">
        <motion.div
          className="mb-4 inline-block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="bg-gradient-to-r from-[#AA00AA] via-[#0088AA] to-[#AA8800] p-1 rounded-full inline-block">
            <div className="bg-black/60 backdrop-blur-sm px-6 py-2 rounded-full flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#AA8800]" />
              <span className="text-gray-300 font-medium">
                Next-Gen Learning Platform
              </span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00AAAA] via-[#AA00AA] to-[#AA8800] mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {headline}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#A0C0C0] mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
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
              className="bg-gradient-to-r from-[#AA00AA] to-[#0088AA] hover:from-[#880088] hover:to-[#006688] text-white text-lg px-10 py-7 h-auto font-semibold rounded-full shadow-lg shadow-[#AA00AA]/20 transition-all duration-300"
            >
              {ctaText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
