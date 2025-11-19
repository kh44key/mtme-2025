import { Card, CardContent } from "@/components/ui/card";

export default function Registration() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">Registration</h1>
        <Card className="text-center p-12">
          <CardContent>
            <p className="text-2xl mb-6">Registration is now closed</p>
            <p className="text-lg">The conference took place on April 16-17, 2025.<br />Thank you to all participants and presenters!</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}