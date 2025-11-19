// components/navigation.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-4">
          <Image src="/assets/gik.png" width={56} height={56} alt="GIK" className="object-contain" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">MTME–2025</h1>
            <p className="text-xs text-gray-500">GIK Institute</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-gray-700">
          <Link href="/" className="hover:text-[#5b3410]">Home</Link>
          <Link href="/committees" className="hover:text-[#5b3410]">Committee</Link>
          <Link href="/submission" className="hover:text-[#5b3410]">Submit Paper</Link>
          <Link href="/contact" className="hover:text-[#5b3410]">Contact</Link>
          <Link href="/login" className="px-3 py-2 rounded-md border border-[#5b3410] hover:bg-[#5b3410] hover:text-white">EasyChair</Link>
        </nav>
      </div>
    </header>
  );
}
