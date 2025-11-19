import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Submission() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">Abstract / Paper Submission</h1>
        <Card>
          <CardHeader>
            <CardTitle>Submission is now closed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p>The abstract and full paper submission deadline has passed.</p>
            <p>Thank you to all authors who submitted their work!</p>
            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <p className="font-semibold mb-2">For any queries regarding submissions:</p>
              <p>Dr. Ali Turab Jafry: <a href="mailto:ali.turab@giki.edu.pk" className="text-blue-600 underline">ali.turab@giki.edu.pk</a></p>
              <p>Dr. Hamza Mohsin: <a href="mailto:hamza.mohsin@giki.edu.pk" className="text-blue-600 underline">hamza.mohsin@giki.edu.pk</a></p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}