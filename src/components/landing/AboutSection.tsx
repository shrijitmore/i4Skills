import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, BookOpen, Users, Database, BarChart } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: <Database className="h-10 w-10 text-indigo-600" />,
      title: "Data Acquisition",
      description:
        "Seamlessly collect and integrate data from multiple sources with our advanced acquisition tools.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-indigo-600" />,
      title: "Data Computing & Visualization",
      description:
        "Transform raw data into actionable insights with powerful analytics and visualization capabilities.",
    },
    {
      icon: <Users className="h-10 w-10 text-indigo-600" />,
      title: "Expert-Led Training",
      description:
        "Learn from industry professionals with years of experience in data engineering and Industry 4.0.",
    },
    {
      icon: <Award className="h-10 w-10 text-indigo-600" />,
      title: "Centralized Management",
      description:
        "Streamline operations with our comprehensive centralized management solutions for Industry 4.0.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            About I4skills
          </h2>
          <p className="text-lg text-slate-600">
            At I4skills, we make Industry 4.0 work for you. With expertise in
            data acquisition, data computing & visualisation, and centralised
            management, we transform complex processes into seamless operations.
            It's about working smarter, achieving more, and unlocking the full
            potential of your business to create the factory of tomorrow, today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            style={{ y, opacity }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              Our Story
            </h3>
            <p className="text-slate-600 mb-4">
              Founded in 2022 by a team of data engineers and Industry 4.0
              experts, I4skills was born from a simple observation: businesses
              need better tools and training to harness the power of industrial
              data in the digital age.
            </p>
            <p className="text-slate-600 mb-4">
              We set out to build a comprehensive platform that bridges the gap
              between industrial processes and data intelligence, providing both
              the tools and knowledge needed to transform manufacturing and
              industrial operations.
            </p>
            <p className="text-slate-600 mb-4">
              Our approach combines cutting-edge technology with practical,
              hands-on training in tools like Power BI and SSIS, ensuring that
              your team can not only implement but truly master the technologies
              driving Industry 4.0.
            </p>
            <p className="text-slate-600">
              Today, we're proud to serve organizations across multiple
              industries, helping them collect, analyze, and leverage their data
              to drive efficiency, reduce costs, and create smarter factories
              for the future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-slate-900">
                  {feature.title}
                </h4>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
