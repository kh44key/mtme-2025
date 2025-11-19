// src/app/committees/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Committees() {
  const members = [
    { role: "Patron-in-Chief", name: "Prof. Dr. S. M. Hasan Zaidi (Rector, GIK Institute)" },
    { role: "Technical Chair (Mechanical)", name: "Dr. Taqi Ahmad Cheema" },
    { role: "Technical Chair (Materials)", name: "Prof. Dr. Fahd Nawaz" },
    { role: "Conference Convener", name: "Dr. Ali Turab Jafry" },
    { role: "Conference Co-Convener", name: "Dr. Hamza Mohsin" },
  ];

  return (
    <section className="py-24 pt-32 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Organizing Committee
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Meet the team behind MTME–2025
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((m) => (
            <Card key={m.role} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-blue-700">{m.role}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-800">{m.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}