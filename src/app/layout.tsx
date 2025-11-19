// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MTME-2025 | GIK Institute",
  description: "3rd International Conference on Modern Technologies in Mechanical & Materials Engineering",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="pt-24 min-h-[70vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
