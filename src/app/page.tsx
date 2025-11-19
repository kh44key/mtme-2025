"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const tracks = [
    { name: "Advanced Materials and Nanotechnology", icon: "Microscope" },
    { name: "Energy and Environmental Materials", icon: "Leaf" },
    { name: "Manufacturing and Processing Technologies", icon: "Gear" },
    { name: "AI and Computational Applications", icon: "Brain" },
    { name: "Structural Analysis", icon: "Building" },
    { name: "Robotics and Control Systems", icon: "Robot" },
    { name: "Electrochemistry and Surface Science", icon: "Zap" },
    { name: "Sustainable Technologies and Recycling", icon: "Recycle" },
    { name: "Thermal and Fluid Systems", icon: "Flame" },
    { name: "Aerospace and Automotive Applications", icon: "Plane" },
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image src="/assets/banner.png" alt="MTME 2025 - GIK Institute" fill priority quality={95} className="object-cover"/>
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">MTME–2025</h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">3rd International Conference on Modern Technologies in Mechanical & Materials Engineering</p>

          <div className="flex gap-4 justify-center mb-8">
            <Link href="/submission" className="px-6 py-3 rounded-full bg-white text-[#5b3410] font-semibold">Submit Paper</Link>
            <Link href="/committees" className="px-6 py-3 rounded-full border border-white text-white">Committee</Link>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Conference Tracks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((t, i) => (
              <Card className="p-6" key={i}>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">{t.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
