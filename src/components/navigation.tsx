// components/navigation.tsx
import Image from "next/image";
import Link from "next/link";

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Title – Top Left */}
          <Link href="/" className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/gik.png"
              alt="GIK Institute Logo"
              width={64}
              height={64}
              className="object-contain drop-shadow-md"
              priority
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                MTME–2025
              </h1>
              <p className="text-xs text-gray-600 tracking-wider">GIK Institute</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/committees" className="hover:text-blue-600 transition">
              Committee
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}