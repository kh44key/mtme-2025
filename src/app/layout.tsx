// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MTME-2025 | GIK Institute",
  description: "3rd International Conference on Modern Technologies in Mechanical & Materials Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <Navigation />
        <main className="pt-24">  {/* Important: prevents content from hiding under fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}