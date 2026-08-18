import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation Guide | QueryMastery",
  description: "Comprehensive guide to setting up local development environments using Docker for PostgreSQL, MySQL, MongoDB, and Redis.",
};

export default function InstallationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
