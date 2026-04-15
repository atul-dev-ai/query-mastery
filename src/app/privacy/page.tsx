import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, EyeOff, Lock, ServerOff, DatabaseZap } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | QueryMastery",
  description: "Our privacy policy ensures zero tracking and complete data safety across the QueryMastery platform through state-of-the-art WebAssembly database execution.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] py-12 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <button className="flex cursor-pointer items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8 px-4 py-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm">
            <ArrowLeft size={18} /> Back to Home
          </button>
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <Shield className="text-blue-600 dark:text-blue-500" /> Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg mt-4">
            Your privacy is our priority. Discover how QueryMastery protects your data through secure, local execution.
          </p>
        </div>

        <div className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 shadow-sm transition-all duration-300 space-y-10">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <EyeOff className="text-purple-500" size={24} /> 1. Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              At QueryMastery, we believe in a transparent and secure learning environment. This Privacy Policy details the complete lack of tracking or data harvesting when you use our interactive SQL and NoSQL playgrounds. Our stance is simple: what you query, stays with you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <ServerOff className="text-red-500" size={24} /> 2. Complete Local Execution
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-lg">
              The core functionality of QueryMastery uses state-of-the-art WebAssembly (WASM) to run a real database instance directly inside your browser. Because of this architecture:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-3 ml-4 text-lg">
              <li><strong className="text-gray-800 dark:text-gray-200">No Server-Side Queries:</strong> Your SQL queries are never sent to, processed by, or logged on our servers.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Ephemeral Data:</strong> Any structural schema you alter or data you query resets automatically when you close or refresh the page.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Zero Cloud Storage:</strong> We don't possess a backend cloud database containing any of your personal usage data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <Lock className="text-green-500" size={24} /> 3. Data Collection
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              We do not ask for, collect, or store personal or identifiable information (PII). We do not require you to create an account, provide an email, or sign in to execute queries. The website is a completely stateless playground from our perspective. If standard web analytics or hosting server logs (like Vercel/Netlify analytics) are employed indefinitely, they only collect anonymized, non-personal metrics such as overall page views and basic browser types.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <DatabaseZap className="text-yellow-500" size={24} /> 4. Cookies and Web Storage
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              QueryMastery uses essential browser LocalStorage exclusively strictly for functional settings. These preferences include features such as the dark/light mode toggle. We do not use any marketing cookies or tracking mechanisms designed to trail your online behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Third-Party Links</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              The playground may contain links to external developers' profiles, GitHub repositories, or official installation downloads. We are not responsible for the privacy practices of those external entities. We encourage you to review their respective privacy policies upon visiting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Policy Changes</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              We may periodically update this policy dynamically as our project expands (for example, if optional user-saving accounts are introduced in the future). However, as long as the application remains localized and static, no intrusive data will ever be harvested.
            </p>
          </section>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-500 text-center font-medium">
            Last updated: April 2026. If you have any inquiries, you can reach out through the official GitHub project repository.
          </div>
        </div>
      </div>
    </div>
  );
}
