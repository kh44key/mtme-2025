// app/api/upload/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "edge"; // or remove if you prefer node runtime

export async function POST(req: Request) {
  try {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({ error: "Supabase config missing" }, { status: 500 });
    }

    const formData = await req.formData();
    const file = formData.get("paper") as File | null;
    const name = formData.get("name")?.toString() ?? "unknown";
    const email = formData.get("email")?.toString() ?? "unknown";

    if (!file) return NextResponse.json({ error: "file missing" }, { status: 400 });

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

    // Create a unique path
    const timestamp = Date.now();
    const filename = `${timestamp}_${file.name}`;
    const arrayBuffer = await file.arrayBuffer();
    const u8 = new Uint8Array(arrayBuffer);

    // Ensure bucket exists in your Supabase project named "submissions"
    const { data, error: uploadErr } = await supabase.storage.from("submissions").upload(filename, u8, {
      contentType: file.type,
      cacheControl: "3600",
      upsert: false,
    });

    if (uploadErr) {
      return NextResponse.json({ error: uploadErr.message }, { status: 500 });
    }

    // Get public URL (you may need to adjust bucket's public/private settings)
    const { data: publicUrlData } = supabase.storage.from("submissions").getPublicUrl(filename);

    // Optionally record metadata in Supabase table (not included here) or send email

    return NextResponse.json({ path: publicUrlData.publicUrl, name, email });
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? String(err) }, { status: 500 });
  }
}
