"use client";
import { motion } from "framer-motion";
import {
  BookOpen,
  Database,
  Lock,
  PlayCircle,
  ShieldCheck,
  Zap,
  TerminalSquare,
} from "lucide-react";
import Link from "next/link";

const learningLevels = [
  {
    id: "beginner",
    badge: "LEVEL 1",
    title: "Beginner",
    description:
      "Build a strong foundation. Learn how to fetch, filter, and sort data.",
    themeColor: "text-green-500",
    bgGradient: "from-green-500/20 to-emerald-500/5",
    borderColor: "border-green-500/30",
    icon: <TerminalSquare size={24} className="text-green-500" />,
    modules: [
      { title: "Introduction to SELECT", points: 10, status: "active" },
      { title: "Filtering Data with WHERE", points: 15, status: "locked" },
      { title: "AND, OR, NOT Operators", points: 20, status: "locked" },
      { title: "Sorting Results (ORDER BY)", points: 15, status: "locked" },
      { title: "Limiting Output (LIMIT/OFFSET)", points: 20, status: "locked" },
    ],
  },
  {
    id: "intermediate",
    badge: "LEVEL 2",
    title: "Intermediate",
    description:
      "Master relationships and data aggregation. Learn to connect tables.",
    themeColor: "text-blue-500",
    bgGradient: "from-blue-500/20 to-cyan-500/5",
    borderColor: "border-blue-500/30",
    icon: <Database size={24} className="text-blue-500" />,
    modules: [
      { title: "Understanding INNER JOIN", points: 30, status: "locked" },
      { title: "LEFT, RIGHT & FULL JOINs", points: 35, status: "locked" },
      { title: "Grouping Data (GROUP BY)", points: 30, status: "locked" },
      { title: "Filtering Groups (HAVING)", points: 25, status: "locked" },
      { title: "Basic Subqueries", points: 40, status: "locked" },
    ],
  },
  {
    id: "senior",
    badge: "LEVEL 3",
    title: "Senior",
    description:
      "Write production-ready complex queries, optimizations, and analytics.",
    themeColor: "text-purple-500",
    bgGradient: "from-purple-500/20 to-pink-500/5",
    borderColor: "border-purple-500/30",
    icon: <ShieldCheck size={24} className="text-purple-500" />,
    modules: [
      { title: "Advanced Window Functions", points: 50, status: "locked" },
      { title: "Common Table Expressions (CTE)", points: 50, status: "locked" },
      {
        title: "Database Indexing & Optimization",
        points: 60,
        status: "locked",
      },
      { title: "JSON Data Handling in SQL", points: 45, status: "locked" },
      { title: "Transactions & Concurrency", points: 70, status: "locked" },
    ],
  },
];

export default function LearningPath() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full relative">
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-sm font-bold tracking-wide"
        >
          <Zap size={16} fill="currentColor" /> Your Learning Journey
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
        >
          From Zero to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Database Master
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Follow our structured path to master SQL. Complete modules, earn
          points, and unlock advanced concepts as you level up.
        </motion.p>
      </div>

      {/* Timeline Layout */}
      <div className="space-y-12 relative">
        {/* Vertical Connecting Line (Desktop only) */}
        <div className="hidden lg:block absolute left-[50%] top-8 bottom-8 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 opacity-20 -translate-x-1/2 rounded-full"></div>

        {learningLevels.map((level, index) => (
          <motion.div
            key={level.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Level Info Card */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div
                className={`p-8 rounded-3xl bg-white dark:bg-[#0d1117] border ${level.borderColor} shadow-2xl relative overflow-hidden w-full max-w-md group hover:-translate-y-2 transition-transform duration-300`}
              >
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${level.bgGradient} blur-3xl rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700`}
                ></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <span
                      className={`text-xs font-black tracking-widest ${level.themeColor} bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md`}
                    >
                      {level.badge}
                    </span>
                    <div
                      className={`p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border ${level.borderColor}`}
                    >
                      {level.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
                    {level.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {level.description}
                  </p>

                  {/* Start Button */}
                  <Link href={`/playground?level=${level.id}`}>
                    <button
                      className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                        index === 0
                          ? "bg-gray-900 cursor-pointer dark:bg-white text-white dark:text-gray-900 hover:scale-[1.02] shadow-lg"
                          : "bg-gray-100 dark:bg-[#161b22] text-gray-500 dark:text-gray-500 cursor-not-allowed border border-gray-200 dark:border-gray-800"
                      }`}
                    >
                      {index === 0 ? (
                        <>
                          <PlayCircle size={20} /> Start Learning
                        </>
                      ) : (
                        <>
                          <Lock size={18} /> Complete Previous Level
                        </>
                      )}
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Modules List */}
            <div className="w-full lg:w-1/2 px-4 lg:px-12">
              <h4 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-6 flex items-center gap-2">
                <BookOpen size={16} /> Included Modules
              </h4>
              <div className="space-y-3">
                {level.modules.map((mod, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                      mod.status === "active"
                        ? `bg-white dark:bg-[#161b22] ${level.borderColor} shadow-sm border-l-4 border-l-${level.themeColor.split("-")[1]}-500`
                        : "bg-transparent border-gray-200 dark:border-gray-800/50 opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {mod.status === "active" ? (
                        <PlayCircle size={18} className={level.themeColor} />
                      ) : (
                        <Lock size={16} className="text-gray-500" />
                      )}
                      <span
                        className={`font-medium ${mod.status === "active" ? "text-gray-900 dark:text-gray-200" : "text-gray-500"}`}
                      >
                        {mod.title}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      +{mod.points} pts
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
