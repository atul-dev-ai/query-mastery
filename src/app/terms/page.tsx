import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | QueryMastery",
  description: "Read the Terms & Conditions for QueryMastery Playground. Learn about our local execution policies and acceptable use guidelines.",
};

export default function TermsPage() {
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
            <FileText className="text-purple-600 dark:text-purple-500" /> Terms & Conditions
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Please read these terms carefully before using QueryMastery Playground.
          </p>
        </div>

        <div className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 shadow-sm transition-all duration-300 space-y-10">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <CheckCircle className="text-green-500" size={24} /> 1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              By accessing and using the QueryMastery Playground, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this playground.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <ShieldCheck className="text-blue-500" size={24} /> 2. Data Privacy & Local Execution
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-lg">
              QueryMastery runs on a local, in-browser WebAssembly-based database engine (SQL.js). 
              <strong className="text-gray-800 dark:text-gray-200 opacity-90 mx-1">We do not store, track, or upload your queries, inputted data, or personal information.</strong> 
              Everything you execute remains securely within your local browser session.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4 text-lg">
              <li>No server-side rendering or cloud query execution.</li>
              <li>Data resets entirely on page reload or session end.</li>
              <li>No third-party trackers are monitoring your database queries.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="text-yellow-500" size={24} /> 3. Acceptable Use
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              This playground is strictly intended for educational purposes and learning database concepts. You agree not to use the platform to generate illegal, harmful, or abusive content. Although the database is confined to your local browser environment, users should refrain from attempting to exploit vulnerabilities within the WebAssembly or React context of this web application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Disclaimer of Warranties</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              The platform is provided "as is". QueryMastery and its developers make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Limitations</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              In no event shall QueryMastery or its dev team be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on QueryMastery Playground, even if we have been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Revisions and Errors</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              The materials appearing on the playground could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. QueryMastery may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-500 text-center font-medium">
            Last updated: April 2026. If you have any inquiries, contact via the GitHub repository.
          </div>
        </div>
      </div>
    </div>
  );
}
