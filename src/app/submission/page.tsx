"use client";

import { useState } from "react";
import Link from "next/link";

export default function SubmissionPage() {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function submitToSelf(e: React.FormEvent) {
    e.preventDefault();
    if (!file) { setMsg("Please select a PDF."); return; }
    setLoading(true);
    setMsg(null);
    const fd = new FormData();
    fd.append("paper", file);
    fd.append("name", name);
    fd.append("email", email);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Upload failed");
      setMsg("Upload successful. Reference: " + data.path);
    } catch (err: any) {
      setMsg("Upload error: " + (err.message || err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Paper Submission</h1>
      <p className="mb-6">We recommend submitting via EasyChair. If you prefer, you can upload a PDF directly below.</p>

      <div className="mb-8 flex gap-4">
        <a href="https://easychair.org/account2/signin" target="_blank" rel="noreferrer" className="px-5 py-3 bg-[#5b3410] text-white rounded-md">Login to EasyChair</a>
        <Link href="/" className="px-5 py-3 border rounded-md">Back to Home</Link>
      </div>

      <hr className="my-6"/>

      <form onSubmit={submitToSelf} className="space-y-4 bg-white p-6 rounded-md shadow">
        <div>
          <label className="block mb-1">Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full border px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full border px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1">Paper (PDF)</label>
          <input type="file" accept="application/pdf" onChange={(e)=>setFile(e.target.files?.[0] ?? null)} />
        </div>

        <div>
          <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-[#5b3410] text-white">
            {loading ? "Uploading..." : "Upload PDF (to site)"}
          </button>
        </div>

        {msg && <p className="mt-2 text-sm">{msg}</p>}
      </form>
    </div>
  );
}
