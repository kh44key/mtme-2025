// app/page.tsx
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
      {/* HERO SECTION – WITH YOUR REAL BACKGROUND IMAGE */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/banner.png"
          alt="MTME 2025 - GIK Institute"
          fill
          priority
          quality={95}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Subtle dots overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            }}
          ></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl leading-tight mb-6">
            MTME–2025
          </h1>
          <p className="text-2xl md:text-4xl font-light text-white/95 max-w-5xl mx-auto mb-10 leading-relaxed">
            3rd International Conference on Modern Technologies<br className="hidden md:block" />
            in Mechanical & Materials Engineering
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12 text-white/90">
            <div className="flex items-center gap-4 px-8 py-5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
              <Calendar className="w-9 h-9" />
              <span className="text-xl font-medium">April 16–17, 2025</span>
            </div>
            <div className="flex items-center gap-4 px-8 py-5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
              <MapPin className="w-9 h-9" />
              <span className="text-xl font-medium">GIK Institute, Topi, Pakistan</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 px-8 py-4 mb-12 text-2xl font-bold bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-100 rounded-full border border-amber-300/40 backdrop-blur-md">
            Event Successfully Concluded – Thank You!
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              asChild
              className="px-10 py-7 text-lg font-semibold bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-full shadow-2xl"
            >
              <Link href="/contact">Contact Organizers</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="px-10 py-7 text-lg font-semibold border-2 border-white/50 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 rounded-full"
            >
              <Link href="/committees">View Committee</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* TRACKS SECTION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-blue-900 to-emerald-700 bg-clip-text text-transparent"
          >
            Conference Tracks
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {tracks.map((track, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 rounded-3xl overflow-hidden">
                  <CardContent className="p-10 text-center">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-400">
                      {track.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      {track.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}