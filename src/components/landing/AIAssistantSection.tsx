import React from "react";
import { motion } from "framer-motion";
import { BookOpen, BarChart, Award, MessageCircle } from "lucide-react";
import { Card } from "../ui/card";

const AIAssistantSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-indigo-600" />,
      title: "Personalized Learning Paths",
      description:
        "Tailored learning experiences that adapt to your skill level, goals, and progress. Our AI-powered system creates a unique journey for each learner.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-indigo-600" />,
      title: "Engaging Learning Experience",
      description:
        "Interactive content, hands-on projects, and real-world simulations that make learning practical and enjoyable. Master industry tools like Power BI and SSIS.",
    },
    {
      icon: <Award className="h-10 w-10 text-indigo-600" />,
      title: "Assessments & Certification",
      description:
        "Validate your skills with industry-recognized certifications. Our comprehensive assessment system ensures you're ready for real-world challenges.",
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-indigo-600" />,
      title: "Support & Communication",
      description:
        "Connect with instructors and peers through our community platform. Get help when you need it and build your professional network.",
    },
  ];

  return (
    <section className="w-full py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Platform Features
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover how I4skills transforms the learning experience with our
              comprehensive set of features designed for Industry 4.0 skills.
            </motion.p>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Floating bubbles animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-indigo-500/10 w-12 h-12"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 shadow-md border-slate-200 bg-white hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistantSection;
