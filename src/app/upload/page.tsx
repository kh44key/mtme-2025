// src/app/upload/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function UploadPage() {
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [fileName, setFileName] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    if (!file || file.size === 0) {
      setStatus("error");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("File too large! Maximum 10MB allowed.");
      return;
    }

    setStatus("uploading");

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        setFileName(file.name);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-24 pt-32">
      <div className="container mx-auto px-6 max-w-2xl">
        <Card className="shadow-2xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-gray-800">
              Upload Your Paper
            </CardTitle>
            <p className="text-gray-600 mt-2">PDF only • Maximum 10MB</p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="border-4 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-blue-500 transition-all duration-300">
                <input
                  type="file"
                  name="file"
                  accept=".pdf"
                  required
                  className="hidden"
                  id="pdf-upload"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setFileName(file.name);
                  }}
                />
                <label htmlFor="pdf-upload" className="cursor-pointer block">
                  <Upload className="w-16 h-16 mx-auto text-gray-400 mb-6" />
                  <p className="text-xl font-medium text-gray-700">
                    {fileName || "Click to select your PDF file"}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    or drag and drop here
                  </p>
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg py-7 font-semibold"
                disabled={status === "uploading"}
              >
                {status === "uploading" ? (
                  <>Uploading…</>
                ) : (
                  "Upload PDF"
                )}
              </Button>

              {status === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 text-green-800">
                  <CheckCircle className="w-6 h-6" />
                  <p className="font-medium">
                    "{fileName}" uploaded successfully! Thank you.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 text-red-800">
                  <AlertCircle className="w-6 h-6" />
                  <p className="font-medium">
                    Upload failed. Please try again.
                  </p>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}