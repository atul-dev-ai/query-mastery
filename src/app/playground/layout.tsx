import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQL Playground | QueryMastery",
  description: "Interactive WebAssembly-powered SQL database terminal. Practice real SQL queries locally in your browser with zero server latency.",
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
