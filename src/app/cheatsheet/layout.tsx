import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQL Cheat Sheet | QueryMastery",
  description: "Essential SQL commands, queries, and operators mapped to real-world scenarios. The ultimate Quick Reference guide for database developers.",
};

export default function CheatSheetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
