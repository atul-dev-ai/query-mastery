import Link from "next/link";
import Image from "next/image";
import { GitBranch, Heart, Code2, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-md overflow-hidden">
              <Image src="/logo.png" alt="QueryMastery Logo" fill className="object-cover" />
            </div>
            <span className="font-bold text-gray-900 dark:text-white text-xl tracking-tight">
              QueryMastery
            </span>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
            The ultimate interactive playground for developers to master SQL and NoSQL databases right in the browser.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Resources</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 font-medium">
            <li><Link href="/playground" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Playground</Link></li>
            <li><Link href="/cheatsheet" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">SQL Cheat Sheet</Link></li>
            <li><Link href="/installation" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Installation Guide</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 font-medium">
            <li><Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            <li><a href="https://github.com/atul-dev-ai" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">License / MIT</a></li>
          </ul>
        </div>

        {/* Developer Card */}
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Developer</h3>
          <div className="bg-gray-50 dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-inner ring-4 ring-white dark:ring-[#0d1117]">
                <Image src="/atulpaul.jpg" alt="Atul Paul" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-md">Atul Paul</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1 font-medium">
                  Software Engineer <Code2 size={12} className="text-blue-500" />
                </p>
                <div className="flex items-center gap-2.5">
                  <a href="https://github.com/atul-dev-ai" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <GitBranch size={16} />
                  </a>
                  <a href="https://atulpaul.vercel.app" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-500 font-medium">
          © {new Date().getFullYear()} QueryMastery. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1.5 font-medium">
          Crafted with <Heart size={14} className="text-red-500 fill-current animate-pulse" /> by <a href="https://atulpaul.vercel.app" target="_blank" rel="noreferrer" className="font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Atul Paul</a>
        </p>
      </div>
    </footer>
  );
}
