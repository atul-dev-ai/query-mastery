"use client";
import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Database, 
  Server, 
  Terminal, 
  Wrench, 
  Download, 
  ExternalLink 
} from "lucide-react";

export default function InstallationPage() {
  const [activeTab, setActiveTab] = useState<"sql" | "nosql" | "tools">("sql");

  const tabs = [
    { id: "sql", label: "SQL Setup", icon: <Database size={18} /> },
    { id: "nosql", label: "NoSQL Setup", icon: <Server size={18} /> },
    { id: "tools", label: "Dev Tools", icon: <Wrench size={18} /> },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] py-12 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link href="/">
          <button className="flex cursor-pointer items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8 px-4 py-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm">
            <ArrowLeft size={18} /> Back to Home
          </button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <Download className="text-blue-600 dark:text-blue-500" /> Installation & Setup
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A complete guide to configuring your local development environment for SQL and NoSQL databases using modern tools and Docker.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-white dark:bg-[#161b22] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-10 shadow-sm transition-all duration-300">
          
          {/* SQL Section */}
          {activeTab === "sql" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-blue-600">PostgreSQL</span> Installation
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  PostgreSQL is a powerful, open-source object-relational database system. We highly recommend using Docker for a clean, isolative setup avoiding conflicts with host OS.
                </p>
                
                <div className="bg-gray-50 dark:bg-[#161b22] rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Terminal size={18} className="text-purple-600 dark:text-purple-400" /> Using Docker (Recommended)
                  </h3>
                  <code className="block bg-gray-200/50 dark:bg-black/50 text-blue-700 dark:text-blue-400 p-5 rounded-lg font-mono text-sm shadow-inner border border-gray-200 dark:border-transparent whitespace-pre-wrap leading-relaxed">
                    docker run --name pg-db \{"\n"}  -e POSTGRES_USER=admin \{"\n"}  -e POSTGRES_PASSWORD=secret \{"\n"}  -p 5432:5432 \{"\n"}  -d postgres:latest
                  </code>
                </div>

                <div className="bg-gray-50 dark:bg-[#161b22] rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4">Native Installation</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-3">
                    <li><strong className="text-gray-900 dark:text-gray-200">macOS:</strong> <code className="text-purple-600 dark:text-purple-400 font-mono bg-gray-200/50 dark:bg-gray-800/50 px-2 py-1 rounded">brew install postgresql</code></li>
                    <li><strong className="text-gray-900 dark:text-gray-200">Ubuntu/Debian:</strong> <code className="text-purple-600 dark:text-purple-400 font-mono bg-gray-200/50 dark:bg-gray-800/50 px-2 py-1 rounded">sudo apt install postgresql</code></li>
                    <li><strong className="text-gray-900 dark:text-gray-200">Windows:</strong> Download the official interactive installer from the website.</li>
                  </ul>
                </div>
              </div>

              <hr className="border-gray-200 dark:border-gray-800" />
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-orange-500">MySQL</span> Installation
                </h2>
                <div className="bg-gray-50 dark:bg-[#161b22] rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Terminal size={18} className="text-purple-600 dark:text-purple-400" /> Using Docker
                  </h3>
                  <code className="block bg-gray-200/50 dark:bg-black/50 text-green-700 dark:text-green-400 p-5 rounded-lg font-mono text-sm shadow-inner border border-gray-200 dark:border-transparent whitespace-pre-wrap leading-relaxed">
                    docker run --name mysql-db \{"\n"}  -e MYSQL_ROOT_PASSWORD=secret \{"\n"}  -p 3306:3306 \{"\n"}  -d mysql:latest
                  </code>
                </div>
              </div>
            </div>
          )}

          {/* NoSQL Section */}
          {activeTab === "nosql" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-green-500">MongoDB</span> Installation
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  MongoDB is a popular document-based NoSQL database, ideal for high-volume unstructured data storage and scaling.
                </p>
                
                <div className="bg-gray-50 dark:bg-[#161b22] rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Terminal size={18} className="text-purple-600 dark:text-purple-400" /> Using Docker (Recommended)
                  </h3>
                  <code className="block bg-gray-200/50 dark:bg-black/50 text-emerald-700 dark:text-green-400 p-5 rounded-lg font-mono text-sm shadow-inner border border-gray-200 dark:border-transparent whitespace-pre-wrap leading-relaxed">
                    docker run --name mongodb \{"\n"}  -p 27017:27017 \{"\n"}  -d mongo:latest
                  </code>
                </div>

                <div className="bg-gray-50 dark:bg-[#161b22] rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4">Native Installation (Community Server)</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-3">
                    <li><strong className="text-gray-900 dark:text-gray-200">macOS:</strong> <code className="text-purple-600 dark:text-purple-400 font-mono bg-gray-200/50 dark:bg-gray-800/50 px-2 py-1 rounded">brew tap mongodb/brew && brew install mongodb-community</code></li>
                    <li><strong className="text-gray-900 dark:text-gray-200">Ubuntu:</strong> Install from the official package repository via APT.</li>
                    <li><strong className="text-gray-900 dark:text-gray-200">Windows:</strong> Download the MSI installer and run it as Administrator.</li>
                  </ul>
                </div>
              </div>

              <hr className="border-gray-200 dark:border-gray-800" />

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-red-500">Redis</span> Installation
                </h2>
                <div className="bg-gray-50 dark:bg-[#161b22] rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Terminal size={18} className="text-purple-600 dark:text-purple-400" /> Using Docker
                  </h3>
                  <code className="block bg-gray-200/50 dark:bg-black/50 text-red-700 dark:text-red-400 p-5 rounded-lg font-mono text-sm shadow-inner border border-gray-200 dark:border-transparent whitespace-pre-wrap leading-relaxed">
                    docker run --name redis-cache \{"\n"}  -p 6379:6379 \{"\n"}  -d redis:alpine
                  </code>
                </div>
              </div>
            </div>
          )}

          {/* Tools Section */}
          {activeTab === "tools" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Recommended Developer Tools
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">DBeaver</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                    Universal database tool for developers and administrators. Fully supports MySQL, PostgreSQL, SQLite, Oracle, and more.
                  </p>
                  <a href="https://dbeaver.io/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-bold flex items-center gap-1.5 w-fit">
                    Download DBeaver <ExternalLink size={14} /> 
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-green-500 dark:hover:border-green-500 transition-colors shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">MongoDB Compass</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                    The official interactive GUI for MongoDB. Visualize your data natively and construct advanced queries visually.
                  </p>
                  <a href="https://www.mongodb.com/products/tools/compass" target="_blank" rel="noreferrer" className="text-green-600 dark:text-green-400 hover:underline text-sm font-bold flex items-center gap-1.5 w-fit">
                    Download Compass <ExternalLink size={14} /> 
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-red-500 dark:hover:border-red-500 transition-colors shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">RedisInsight</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                    The best graphical UI for Redis. Provides representations of Redis data structures, memory analytics, and performance insights.
                  </p>
                  <a href="https://redis.com/redis-enterprise/redis-insight/" target="_blank" rel="noreferrer" className="text-red-600 dark:text-red-400 hover:underline text-sm font-bold flex items-center gap-1.5 w-fit">
                    Download RedisInsight <ExternalLink size={14} /> 
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-purple-500 dark:hover:border-purple-500 transition-colors shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Docker Desktop</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                    Essential software for running isolated database containers locally without cluttering your host operating system registry.
                  </p>
                  <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-bold flex items-center gap-1.5 w-fit">
                    Download Docker <ExternalLink size={14} /> 
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
