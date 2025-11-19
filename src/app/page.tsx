import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-800 to-teal-700 text-white flex items-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">MTME-2025</h1>
          <p className="text-2xl md:text-3xl mb-8">
            3rd International Conference on Modern Technologies<br />in Mechanical & Materials Engineering
          </p>
          <div className="flex justify-center gap-8 text-lg mb-8">
            <div className="flex items-center gap-2"><Calendar className="w-6 h-6" /> April 16-17, 2025</div>
            <div className="flex items-center gap-2"><MapPin className="w-6 h-6" /> GIK Institute, Topi, Pakistan</div>
          </div>
          <p className="text-xl mb-8 bg-yellow-600/20 inline-block px-6 py-3 rounded">
            The conference has successfully concluded. Thank you to all participants!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild><Link href="/submission">View Submissions</Link></Button>
            <Button size="lg" variant="secondary" asChild><Link href="/contact">Contact Organizers</Link></Button>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Conference Tracks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Advanced Materials and Nanotechnology",
              "Energy and Environmental Materials",
              "Manufacturing and Processing Technologies",
              "AI and Computational Applications",
              "Structural Analysis",
              "Robotics and Control Systems",
              "Electrochemistry and Surface Science",
              "Sustainable Technologies and Recycling",
              "Thermal and Fluid Systems",
              "Aerospace and Automotive Applications"
            ].map((track) => (
              <Card key={track} className="p-6 text-center hover:shadow-lg transition">
                <CardContent className="pt-6">{track}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}