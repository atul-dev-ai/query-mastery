"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Terminal, Book, Download } from "lucide-react";
import { useState, useEffect } from "react";

const typingCode = `-- Connect to database
CONNECT to QueryMastery_DB;

-- Fetch active users
SELECT id, name, role FROM users
WHERE status = 'active';

// Executed successfully!`;

export default function HeroSection() {
  const [codeText, setCodeText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setCodeText(typingCode.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > typingCode.length) currentIndex = 0;
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        {/* Left: Content */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block animate-bounce mb-6 px-4 py-1.5 rounded-full bg-blue-100 border-blue-200 text-blue-700 dark:bg-blue-500/10 border dark:border-blue-500/20 dark:text-blue-400 text-xs font-bold uppercase tracking-widest"
          >
            🚀 Interactive Database Learning
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-[1.1]">
            Master SQL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              Through Play
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Real-time query execution engine built for developers. Learn SQL and
            NoSQL by solving interactive challenges directly in your browser.
          </p>

          {/* Buttons Group */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link href="/playground">
              <button className="px-8 py-4 bg-gray-900 text-white dark:bg-white dark:text-black rounded-xl font-bold flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all cursor-pointer shadow-lg shadow-gray-900/10 dark:shadow-white/10">
                <Code2 size={20} /> Launch Playground
              </button>
            </Link>

            <Link href="/cheatsheet">
              <button className="px-8 py-4 bg-white dark:bg-[#161b22] text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-[#1c2128] transition-all cursor-pointer">
                <Book size={20} className="text-purple-600 dark:text-purple-400" /> Cheat Sheet
              </button>
            </Link>

            <Link href="/installation">
              <button className="px-8 py-4 bg-transparent text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded-xl font-bold flex items-center gap-2 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 transition-all cursor-pointer">
                <Download size={20} /> Installation
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Code Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-2xl bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-2xl overflow-hidden p-1"
        >
          <div className="bg-gray-50 dark:bg-[#161b22] px-4 py-3 rounded-t-xl border-b border-gray-200 dark:border-gray-800 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
            </div>
            <span className="ml-4 text-xs font-mono text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <Terminal size={14} /> query_mastery.sql
            </span>
          </div>
          <div className="p-8 font-mono text-sm md:text-base h-[320px] text-slate-700 dark:text-purple-300 leading-relaxed whitespace-pre-wrap bg-white dark:bg-[#0d1117] rounded-b-xl">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">root@db</span>
            <span className="text-gray-500 dark:text-gray-400">:</span>
            <span className="text-emerald-600 dark:text-green-400 font-semibold">~</span>
            <span className="text-gray-500 dark:text-gray-400">$</span> <br />
            <br />
            {codeText}
            <span className="w-2.5 h-5 bg-blue-500 dark:bg-white inline-block ml-1 animate-pulse align-middle"></span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
