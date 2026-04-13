import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Civic Beacon",
  description: "Voter information and polling station locator for Akranes, Iceland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="is">
      <body>{children}</body>
    </html>
  );
}
