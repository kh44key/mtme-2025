"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Call for Papers", href: "/call-for-papers" },
  { name: "Important Dates", href: "/dates" },
  { name: "Submission", href: "/submission" },
  { name: "Registration", href: "/registration" },
  { name: "Committees", href: "/committees" },
  { name: "Venue", href: "/venue" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded bg-blue-700 text-white flex items-center justify-center font-bold text-lg">GIK</div>
          <span className="text-2xl font-bold text-blue-900">MTME-2025</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}
              className={cn("text-sm font-medium hover:text-blue-700", pathname === item.href && "text-blue-700 font-bold")}>
              {item.name}
            </Link>
          ))}
          <Button asChild><Link href="/submission">Submit Abstract</Link></Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon"><Menu className="h-6 w-6" /></Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-6 mt-10 text-lg">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="font-medium">{item.name}</Link>
              ))}
              <Button asChild className="mt-4"><Link href="/submission">Submit Abstract</Link></Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}