// src/app/submission/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, CheckCircle } from "lucide-react";
import { useState } from "react";

const tracks = [
  "Advanced Materials and Nanotechnology",
  "Energy and Environmental Materials",
  "Manufacturing and Processing Technologies",
  "AI and Computational Applications",
  "Structural Analysis",
  "Robotics and Control Systems",
  "Electrochemistry and Surface Science",
  "Sustainable Technologies and Recycling",
  "Thermal and Fluid Systems",
  "Aerospace and Automotive Applications",
];

export default function SubmissionPage() {
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("uploading");

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 pt-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Submit Your Paper</CardTitle>
            <CardDescription className="mt-2">
              Upload your abstract or full paper (PDF only, max 10MB)
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form action={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" required placeholder="Dr. Ahmed Khan" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="ahmed@giki.edu.pk" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Paper Title</Label>
                <Input id="title" name="title" required placeholder="Enter your paper title" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="track">Track</Label>
                <Select name="track" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select conference track" />
                  </SelectTrigger>
                  <SelectContent>
                    {tracks.map((track) => (
                      <SelectItem key={track} value={track}>
                        {track}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">PDF File (max 10MB)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center hover:border-blue-500 transition">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept=".pdf"
                    required
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file && file.size > 10 * 1024 * 1024) {
                        alert("File too large! Maximum 10MB allowed.");
                        e.target.value = "";
                      }
                    }}
                  />
                  <label htmlFor="file" className="cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600">Click to upload or drag & drop</p>
                    <p className="text-sm text-gray-500 mt-1">PDF only • max 10MB</p>
                  </label>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={status === "uploading"}>
                {status === "uploading" ? "Uploading…" : "Submit Paper"}
                {status === "success" && <CheckCircle className="ml-2 w-5 h-5" />}
              </Button>

              {status === "success" && (
                <p className="text-green-600 text-center font-medium">Paper submitted successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center font-medium">Upload failed. Please try again.</p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}