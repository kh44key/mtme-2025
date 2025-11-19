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
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">Organizing Committee</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {members.map((m) => (
            <Card key={m.role}>
              <CardHeader><CardTitle className="text-lg">{m.role}</CardTitle></CardHeader>
              <CardContent><p className="text-lg font-medium">{m.name}</p></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}