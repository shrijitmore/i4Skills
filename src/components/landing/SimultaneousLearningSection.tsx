import React from "react";
import { motion } from "framer-motion";
import { Code, BookOpen, Laptop, Brain, Zap, Users } from "lucide-react";
import { Button } from "../ui/button";

interface SimultaneousLearningSectionProps {
  title?: string;
  description?: string;
}

const SimultaneousLearningSection = ({
  title = "Simultaneous Learning & Hands-On Experience",
  description = "Our unique approach combines theoretical learning with practical application in real-time, allowing you to immediately apply concepts as you learn them.",
}: SimultaneousLearningSectionProps) => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-purple-400" />,
      title: "Learn Concepts",
      description:
        "Study data engineering principles through interactive lessons",
      color: "bg-purple-600/20",
      textColor: "text-purple-400",
    },
    {
      icon: <Code className="h-6 w-6 text-blue-400" />,
      title: "Apply Immediately",
      description:
        "Practice in our integrated SSIS and Power BI environment as you learn",
      color: "bg-blue-600/20",
      textColor: "text-blue-400",
    },
    {
      icon: <Zap className="h-6 w-6 text-amber-400" />,
      title: "Instant Feedback",
      description: "Get real-time assessment and guidance on your work",
      color: "bg-amber-600/20",
      textColor: "text-amber-400",
    },
    {
      icon: <Brain className="h-6 w-6 text-green-400" />,
      title: "Accelerated Retention",
      description: "Improve knowledge retention through active learning",
      color: "bg-green-600/20",
      textColor: "text-green-400",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
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

        {/* Split Screen Demo */}
        <motion.div
          className="relative flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side - Learning */}
          <div className="flex-1 bg-slate-800 rounded-lg border border-slate-700 overflow-hidden shadow-xl">
            <div className="bg-slate-700 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen size={18} />
                <span className="font-medium">Learning Module</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">
                Data Engineering: ETL Pipelines
              </h3>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-slate-700/50 p-4 rounded-lg"
                >
                  <h4 className="font-medium mb-2 text-blue-300">Definition</h4>
                  <p className="text-slate-300 text-sm">
                    ETL (Extract, Transform, Load) is a process that extracts
                    data from source systems, transforms it to fit business
                    needs, and loads it into a destination data warehouse.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-slate-700/50 p-4 rounded-lg"
                >
                  <h4 className="font-medium mb-2 text-blue-300">
                    Key Components
                  </h4>
                  <ul className="text-slate-300 text-sm list-disc pl-5 space-y-1">
                    <li>Data Sources: Databases, APIs, flat files</li>
                    <li>
                      Transformation Logic: Cleaning, aggregation, validation
                    </li>
                    <li>
                      Destination: Data warehouse, data marts, reporting systems
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-slate-700/50 p-4 rounded-lg"
                >
                  <h4 className="font-medium mb-2 text-blue-300">
                    Implementation
                  </h4>
                  <p className="text-slate-300 text-sm mb-2">
                    A basic SSIS package structure:
                  </p>
                  <div className="bg-slate-800 p-3 rounded text-xs font-mono text-green-300">
                    -- SSIS Package Structure
                    <br />
                    &nbsp;&nbsp;Control Flow
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;├── Data Flow Task
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── OLE DB Source
                    [CustomerData]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── Derived
                    Column [CleanseAddress]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── OLE DB
                    Destination [DimCustomer]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;└── Execute SQL Task [UpdateETLLog]
                    <br />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Center Connection */}
          <div className="hidden lg:flex items-center justify-center w-24">
            <div className="relative h-full w-full">
              <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-blue-500 transform -translate-y-1/2"></div>

              {/* Animated dots */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 w-3 h-3 rounded-full bg-blue-500"
                  initial={{ left: "0%" }}
                  animate={{ left: "100%" }}
                  transition={{
                    duration: 2,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ translateY: "-50%" }}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Practice */}
          <div className="flex-1 bg-slate-800 rounded-lg border border-slate-700 overflow-hidden shadow-xl">
            <div className="bg-slate-700 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Laptop size={18} />
                <span className="font-medium">Coding Environment</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">
                Create Power BI Dashboard
              </h3>

              <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm text-green-300 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="px-2 py-1 rounded bg-blue-900/50 text-blue-300 text-xs">
                    Exercise
                  </div>
                  <div className="text-slate-400 text-xs">
                    Create sales performance dashboard
                  </div>
                </div>

                <pre className="text-xs">
                  {`// Power BI DAX Measures

// Total Sales
Total Sales = SUM(Sales[SalesAmount])

// Sales YoY Growth %
Sales YoY Growth % = 
    VAR CurrentYearSales = CALCULATE([Total Sales], 
        FILTER(ALL(Date), Date[Year] = MAX(Date[Year])))
    VAR PreviousYearSales = CALCULATE([Total Sales],
        FILTER(ALL(Date), Date[Year] = MAX(Date[Year]) - 1))
    RETURN
        DIVIDE(CurrentYearSales - PreviousYearSales, 
               PreviousYearSales, 0)

// Top 5 Products
Top 5 Products = 
    TOPN(5, VALUES(Products[ProductName]), [Total Sales])`}
                </pre>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-green-300">
                    Tests passing: 5/5
                  </span>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Submit Solution
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <div
                className={`${feature.color} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${feature.textColor}`}>
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Learning Card */}
        <motion.div
          className="mt-16 bg-slate-800/30 border border-slate-700 rounded-lg p-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold">
                  Learning Effectiveness
                </h3>
              </div>
              <p className="text-slate-300 mb-4">
                "The simultaneous learning approach helped me master complex
                data engineering tools in half the time compared to traditional
                methods. Being able to immediately practice SSIS and Power BI as
                I learned made all the difference."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-3 flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div>
                  <p className="font-medium">Jamie Smith</p>
                  <p className="text-sm text-slate-400">Data Science Student</p>
                </div>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-400">87%</p>
                <p className="text-sm text-slate-400">Higher retention rate</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-purple-400">2.5x</p>
                <p className="text-sm text-slate-400">
                  Faster skill acquisition
                </p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-green-400">94%</p>
                <p className="text-sm text-slate-400">Student satisfaction</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-amber-400">65%</p>
                <p className="text-sm text-slate-400">
                  Improved problem solving
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* New Feature Card */}
        <motion.div
          className="mt-8 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-700/30 rounded-lg p-6 max-w-5xl mx-auto overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full -ml-12 -mb-12 blur-xl"></div>

          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="flex-shrink-0 bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-lg shadow-lg">
              <Zap className="h-8 w-8 text-white" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Accelerated Learning Path
              </h3>
              <p className="text-slate-300 mb-3">
                Our system adapts to your learning pace and style, creating a
                personalized curriculum that evolves as you progress.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">
                  Personalized
                </span>
                <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full">
                  Adaptive
                </span>
                <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 text-xs rounded-full">
                  Interactive
                </span>
              </div>
            </div>

            <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm">
              Explore Path
            </Button>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-lg">
            Experience Simultaneous Learning
          </Button>
          <p className="mt-4 text-sm text-slate-400">
            Learn and apply concepts in real-time with our innovative approach
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SimultaneousLearningSection;
