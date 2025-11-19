import { Card, CardContent } from "@/components/ui/card";

export default function Dates() {
  const dates = [
    { event: "Abstract Submission Deadline", date: "February 25, 2025" },
    { event: "Full Paper/Poster Submission", date: "March 11, 2025" },
    { event: "Acceptance Notification", date: "March 25, 2025" },
    { event: "Registration Deadline", date: "April 3, 2025" },
    { event: "Conference Dates", date: "April 16-17, 2025" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-12">Important Dates</h1>
        <Card>
          <CardContent className="pt-6">
            {dates.map((d, i) => (
              <div key={i} className="flex justify-between py-4 border-b last:border-0">
                <span className="font-medium">{d.event}</span>
                <span className="text-blue-700 font-semibold">{d.date}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}