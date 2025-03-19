import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BarChart3, Database, Play, LineChart, PieChart } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface VirtualLabDemoProps {
  title?: string;
  description?: string;
  dataExample?: string;
  visualizationImage?: string;
}

const VirtualLabDemo = ({
  title = "Interactive Data Engineering Lab",
  description = "Master data engineering tools like Power BI, SSIS, and other ETL solutions in our cloud-based virtual environment. Design, transform, and visualize data without any local setup.",
  dataExample = `-- Sample Power BI DAX Measure\nTotal Revenue = \n    SUMX(\n        Sales,\n        Sales[Quantity] * Sales[Unit Price]\n    )\n\n-- SSIS Package Configuration\nDataFlow.OLEDBSource[CustomerData] -> \n    Transformation[CleanseAddress] -> \n    OLEDBDestination[DimCustomer]`,
  visualizationImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
}: VirtualLabDemoProps) => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This would be replaced with actual GSAP animation in a production environment
    const interval = setInterval(() => {
      if (particlesRef.current) {
        const particle = document.createElement("div");
        particle.className =
          "absolute w-2 h-2 rounded-full bg-blue-500 opacity-70";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = "50%";

        particlesRef.current.appendChild(particle);

        // Animate particle moving from left to right
        setTimeout(() => {
          if (particle.parentNode) {
            particle.style.transform =
              "translateX(300px) translateY(${Math.random() * 40 - 20}px)";
            particle.style.opacity = "0";
            particle.style.transition = "all 1.5s ease-out";

            // Remove particle after animation
            setTimeout(() => {
              if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
              }
            }, 1500);
          }
        }, 10);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="features"
      className="w-full py-20 bg-slate-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          className="relative flex flex-col md:flex-row gap-4 md:gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Data Engineering Tools Side */}
          <Card className="flex-1 bg-slate-800 border-slate-700 overflow-hidden">
            <div className="bg-slate-700 px-4 py-2 flex items-center gap-2">
              <Database size={18} />
              <span className="font-medium">Data Engineering Workspace</span>
            </div>
            <pre className="p-4 text-sm font-mono text-blue-400 overflow-x-auto">
              {dataExample}
            </pre>
            <div className="p-4 border-t border-slate-700 flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <div className="flex space-x-2">
                  <span className="px-2 py-1 rounded bg-blue-900/50 text-blue-300">
                    Power BI
                  </span>
                  <span className="px-2 py-1 rounded bg-purple-900/50 text-purple-300">
                    SSIS
                  </span>
                  <span className="px-2 py-1 rounded bg-green-900/50 text-green-300">
                    ETL
                  </span>
                </div>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Play size={14} className="mr-2" />
                Execute Flow
              </Button>
            </div>
          </Card>

          {/* Particle Animation Container */}
          <div className="relative hidden md:block w-16 self-stretch">
            <div
              ref={particlesRef}
              className="absolute inset-0 overflow-hidden"
            >
              {/* Particles will be dynamically added here */}
            </div>
          </div>

          {/* Visualization Side */}
          <Card className="flex-1 bg-slate-800 border-slate-700 overflow-hidden">
            <div className="bg-slate-700 px-4 py-2 flex items-center gap-2">
              <BarChart3 size={18} />
              <span className="font-medium">Data Visualization</span>
            </div>
            <div className="p-4 h-[300px] flex flex-col">
              <div className="flex-1 bg-black/30 p-4 rounded flex flex-col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="w-full h-full relative"
                >
                  <img
                    src={visualizationImage}
                    alt="Data visualization dashboard"
                    className="w-full h-full object-cover rounded opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className="flex space-x-3">
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full"
                      >
                        <PieChart size={20} className="text-blue-300" />
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full"
                      >
                        <BarChart3 size={20} className="text-green-300" />
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full"
                      >
                        <LineChart size={20} className="text-purple-300" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="mt-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Data pipeline completed successfully</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700"
          >
            <div className="bg-blue-600/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">SSIS & ETL Tools</h3>
            <p className="text-slate-400">
              Build and test complex data integration packages with our virtual
              SSIS environment. Design ETL workflows without installing any
              software.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700"
          >
            <div className="bg-purple-600/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Power BI Mastery</h3>
            <p className="text-slate-400">
              Create interactive Power BI dashboards and reports in our cloud
              environment. Learn DAX, data modeling, and visualization best
              practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700"
          >
            <div className="bg-green-600/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <LineChart className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Data Engineering Skills
            </h3>
            <p className="text-slate-400">
              Master the complete data engineering pipeline from extraction to
              transformation to visualization with hands-on projects and
              real-world datasets.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg">
            Try Virtual Lab Now
          </Button>
          <p className="mt-4 text-sm text-slate-400">
            No setup required. Access Power BI, SSIS, and data engineering tools
            instantly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualLabDemo;
