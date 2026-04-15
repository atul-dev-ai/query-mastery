"use client";
import Link from "next/link";
import Image from "next/image";
import {
  GitBranch,
  User,
  Code2,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <nav className="bg-white/70 dark:bg-[#111111]/80 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-800 rounded-full px-5 py-3 flex items-center justify-between transition-colors duration-300">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="relative w-8 h-8 group-hover:scale-105 transition-transform overflow-hidden rounded-md">
             <Image src="/logo.png" alt="QueryMastery Logo" fill className="object-cover" />
          </div>
          <span className="font-bold text-gray-900 dark:text-white text-lg tracking-tight">
            QueryMastery
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 font-medium text-gray-600 dark:text-gray-300 text-sm">
          <Link
            href="/playground"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Code2 size={16} /> Playground
          </Link>
          <a
            href="https://github.com/atul-dev-ai/query-mastery"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <GitBranch size={16} /> GitHub
          </a>
          <a
            href="https://atulpaul.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm font-semibold"
          >
            <User size={16} /> Creator
          </a>
        </div>

        {/* Version Badge, Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-2 md:gap-3">
          <span className="px-2.5 py-1 text-[11px] font-bold font-mono tracking-wide text-purple-700 dark:text-purple-400 bg-purple-100/50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 rounded-full shadow-sm select-none cursor-default">
            v1.1.0
          </span>

          {mounted && (
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {resolvedTheme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>
          )}

          <button 
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white/95 dark:bg-[#111111]/95 backdrop-blur-md shadow-xl border border-gray-200 dark:border-gray-800 rounded-3xl p-5 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
          <Link
            href="/playground"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
          >
            <Code2 size={20} /> Playground
          </Link>
          
          <a
            href="https://github.com/atul-dev-ai"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
          >
            <GitBranch size={20} /> GitHub
          </a>
          
          <a
            href="https://atulpaul.vercel.app"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 mt-2 px-4 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors cursor-pointer shadow-sm font-bold justify-center"
          >
            <User size={18} /> Creator
          </a>
        </div>
      )}
    </div>
  );
}
