// app/login/page.tsx
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-bold mb-4">Login to EasyChair</h1>
      <p className="mb-6">Submissions & account management is handled by EasyChair.</p>
      <a href="https://easychair.org/account2/signin" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md bg-[#5b3410] text-white">Open EasyChair</a>
      <div className="mt-6">
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  );
}
