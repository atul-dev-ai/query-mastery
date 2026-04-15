"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Play,
  Terminal,
  Database,
  AlertCircle,
  BookOpen,
  CheckCircle,
  Star,
  PartyPopper,
  Lightbulb,
} from "lucide-react";
import { initializeSQL, executeSQLQuery } from "@/lib/sql-engine";

// --- Challenge Database ---
const sqlChallenges = [
  {
    id: 1,
    difficulty: "Beginner",
    level: "Level 1 - Intro",
    title: "Fetch All Cars",
    description:
      "You have a table named `cars`. Write a SQL query to retrieve all records from this table.",
    objective: "Select all columns using *",
    starterCode:
      "-- Challenge: Fetch All Cars\n-- Hint: Use SELECT * to get all columns\n\nSELECT ",
    hint: "SELECT * FROM cars;",
    expectedQuery: "SELECT * FROM cars;",
  },
  {
    id: 2,
    difficulty: "Beginner",
    level: "Level 2 - Filtering",
    title: "Find Toyota Cars",
    description: "Retrieve only the cars where the brand is 'Toyota'.",
    objective: "Use the WHERE clause",
    starterCode:
      "-- Challenge: Find Toyota Cars\n-- Objective: Filter by brand\n\nSELECT * FROM cars\nWHERE ",
    hint: "SELECT * FROM cars WHERE brand = 'Toyota';",
    expectedQuery: "SELECT * FROM cars WHERE brand = 'Toyota';",
  },
  {
    id: 3,
    difficulty: "Intermediate",
    level: "Level 3 - Sorting",
    title: "Most Expensive Phones",
    description:
      "Fetch all phones but order them by price from highest to lowest.",
    objective: "Use ORDER BY and DESC",
    starterCode:
      "-- Challenge: Most Expensive Phones\n-- Note: Use the 'phones' table\n\nSELECT * FROM phones\nORDER BY ",
    hint: "SELECT * FROM phones ORDER BY price DESC;",
    expectedQuery: "SELECT * FROM phones ORDER BY price DESC;",
  },
];

export default function Playground() {
  const [engineReady, setEngineReady] = useState(false);

  // Gamification States
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showHint, setShowHint] = useState(false); // Hint control

  const challenge = sqlChallenges[currentChallengeIndex];

  // Dynamic Query State based on current challenge
  const [query, setQuery] = useState(challenge.starterCode);
  const [results, setResults] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadEngine() {
      try {
        await initializeSQL();
        setEngineReady(true);
      } catch (err) {
        setError("Failed to load Database Engine.");
      }
    }
    loadEngine();
  }, []);

  const runQuery = () => {
    if (!engineReady) return;
    setError(null);
    setIsSuccess(false);

    const response = executeSQLQuery(query);

    if (response.error) {
      setError(response.error);
      setResults(null);
      return;
    }

    setResults(response.data || []);

    const expectedResponse = executeSQLQuery(challenge.expectedQuery);
    if (!expectedResponse.error) {
      const userOutputStr = JSON.stringify(response.data);
      const expectedOutputStr = JSON.stringify(expectedResponse.data);
      if (userOutputStr === expectedOutputStr) {
        setIsSuccess(true);
      }
    }
  };

  const nextChallenge = () => {
    if (currentChallengeIndex < sqlChallenges.length - 1) {
      const nextIndex = currentChallengeIndex + 1;
      setCurrentChallengeIndex(nextIndex);
      setPoints((prev) => prev + 25);

      // Reset everything for the next challenge
      setResults(null);
      setIsSuccess(false);
      setShowHint(false); // Hide hint for the new challenge
      setQuery(sqlChallenges[nextIndex].starterCode); // Load dynamic starter code
    } else {
      alert(
        "Congratulations! You have completed all challenges in this module.",
      );
    }
  };

  const applyHint = () => {
    setShowHint(true);
    // Point penalty for using hint (optional gamification feature)
    if (points >= 5) setPoints((prev) => prev - 5);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] flex flex-col transition-colors duration-300">
      <nav className="bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-6 py-3 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={22} />
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 overflow-hidden rounded-[4px]">
               <Image src="/logo.png" alt="QueryMastery" fill className="object-cover" />
            </div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white tracking-wide">
              QueryMastery
            </h1>
            <span className="text-gray-600 dark:text-gray-400 text-sm border-l border-gray-300 dark:border-gray-700 pl-3">
              {challenge.level}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${engineReady ? "bg-green-500" : "bg-yellow-500 animate-pulse"}`}
            ></div>
            <span className="text-xs text-gray-400 font-mono">
              {engineReady ? "Engine Online" : "Starting..."}
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#1e1a2b] border border-yellow-500/30 text-yellow-600 dark:text-yellow-500 text-sm font-bold shadow-[0_0_15px_rgba(234,179,8,0.1)]">
            <Star size={16} fill="currentColor" /> {points} Points
          </div>
        </div>
      </nav>

      <main className="flex-1 p-4 md:p-6 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-70px)]">
        {/* Left Column: Code Editor */}
        <div className="lg:col-span-5 bg-white dark:bg-[#0d1117] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl flex flex-col overflow-hidden relative">
          <div className="bg-gray-50 dark:bg-[#161b22] px-4 py-3 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
            <span className="text-gray-600 dark:text-gray-400 text-sm font-mono flex items-center gap-2">
              <Terminal size={16} /> SQL Terminal
            </span>
            <span
              className={`text-xs px-2 py-1 rounded font-bold ${
                challenge.difficulty === "Beginner"
                  ? "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400"
                  : challenge.difficulty === "Intermediate"
                    ? "bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400"
                    : "bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400"
              }`}
            >
              {challenge.difficulty}
            </span>
          </div>

          <div className="flex-1 p-0 relative">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="absolute inset-0 w-full h-full bg-transparent text-gray-800 dark:text-purple-300 font-mono text-[15px] p-5 outline-none resize-none leading-relaxed"
              spellCheck="false"
            />
          </div>

          <div className="p-3 bg-gray-50 dark:bg-[#161b22] border-t border-gray-200 dark:border-gray-800 flex justify-between">
            <div className="text-gray-500 font-mono text-sm flex items-center px-2">
              root@querymastery ~
            </div>
            <button
              onClick={runQuery}
              disabled={!engineReady}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 dark:hover:bg-purple-500 disabled:bg-gray-400 dark:disabled:bg-gray-700 text-white px-6 py-2 rounded-lg text-sm font-bold cursor-pointer transition-all shadow-lg shadow-purple-600/20 active:scale-95"
            >
              <Play size={16} fill="currentColor" /> Run Code
            </button>
          </div>
        </div>

        {/* Right Column: Module Info & Output */}
        <div className="lg:col-span-7 flex flex-col gap-6 h-full">
          {/* Top Right: Current Challenge Box */}
          <div className="bg-white dark:bg-[#161b22] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2 text-gray-800 dark:text-white font-bold text-lg">
                <BookOpen
                  size={20}
                  className="text-purple-500 dark:text-purple-400"
                />{" "}
                Current Challenge
              </div>

              {/* Dynamic Hint Button */}
              {!isSuccess && (
                <button
                  onClick={applyHint}
                  disabled={showHint}
                  className="flex items-center gap-1.5 text-xs font-bold bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-500/30 px-3 py-1.5 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Lightbulb size={14} />{" "}
                  {showHint ? "Hint Active" : "Need a Clue? (-5 pts)"}
                </button>
              )}
            </div>

            <h2 className="text-2xl font-extrabold text-purple-600 dark:text-purple-400 mb-2">
              {challenge.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {challenge.description}
            </p>

            {/* Hint Box (Shows when clicked) */}
            {showHint && !isSuccess && (
              <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <span className="text-xs font-bold text-yellow-600 dark:text-yellow-500 uppercase tracking-wider block mb-1">
                  Clue:
                </span>
                <code className="text-sm font-mono text-gray-700 dark:text-yellow-300">
                  {challenge.hint}
                </code>
              </div>
            )}

            <div className="bg-gray-50 dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-xl p-4 mt-auto">
              <span className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-2 block">
                Objectives:
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                  <CheckCircle
                    size={18}
                    className={
                      isSuccess
                        ? "text-green-500"
                        : "text-gray-400 dark:text-gray-600"
                    }
                  />
                  <span
                    className={`font-mono px-2 py-0.5 rounded ${isSuccess ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : "bg-gray-200 dark:bg-gray-800/50"}`}
                  >
                    {challenge.objective}
                  </span>
                </div>

                {isSuccess && (
                  <button
                    onClick={nextChallenge}
                    className="flex items-center gap-2 text-sm font-bold bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition-all animate-bounce cursor-pointer shadow-lg shadow-green-500/30"
                  >
                    <PartyPopper size={16} /> Next Challenge →
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Right: Data Output */}
          <div className="flex-1 bg-white dark:bg-[#0d1117] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl flex flex-col overflow-hidden min-h-[300px]">
            {/* Same as previous output rendering... */}
            <div className="bg-gray-50 dark:bg-[#161b22] px-4 py-3 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300 text-sm font-bold tracking-wider">
                DATA OUTPUT
              </span>
              {results && (
                <span className="text-xs text-purple-600 dark:text-purple-400 font-mono bg-purple-100 dark:bg-purple-400/10 px-2 py-0.5 rounded">
                  {results.length} rows
                </span>
              )}
            </div>

            <div className="flex-1 overflow-auto relative custom-scrollbar">
              {!results && !error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <Database
                    size={48}
                    className="text-gray-300 dark:text-gray-700 mb-4"
                  />
                  <p className="text-gray-500 font-medium">
                    Run a successful query to view data here.
                  </p>
                </div>
              )}

              {error && (
                <div className="p-6">
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex gap-3 text-red-600 dark:text-red-400">
                    <AlertCircle className="shrink-0 mt-0.5" />
                    <div className="font-mono text-sm whitespace-pre-wrap">
                      {error}
                    </div>
                  </div>
                </div>
              )}

              {results && results.length > 0 && (
                <table className="w-full text-left text-sm text-gray-700 dark:text-gray-300 border-collapse">
                  <thead className="bg-gray-50 dark:bg-[#161b22] text-gray-500 dark:text-gray-400 sticky top-0 uppercase font-semibold text-xs tracking-wider shadow-sm">
                    <tr>
                      {Object.keys(results[0]).map((key) => (
                        <th
                          key={key}
                          className="px-6 py-4 border-b border-gray-200 dark:border-gray-800"
                        >
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-100 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-[#161b22] transition-colors"
                      >
                        {Object.values(row).map((val: any, j) => (
                          <td
                            key={j}
                            className="px-6 py-3 font-mono text-[13px]"
                          >
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
