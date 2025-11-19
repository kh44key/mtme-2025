import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 mt-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xl font-bold mb-4">MTME-2025</p>
        <p className="mb-4">
          Ghulam Ishaq Khan Institute of Engineering Sciences and Technology<br />
          Topi, Swabi, Khyber Pakhtunkhwa, Pakistan
        </p>
        <p className="mb-6">
          Contact: <a href="mailto:ali.turab@giki.edu.pk" className="underline">ali.turab@giki.edu.pk</a> | 
          <a href="mailto:hamza.mohsin@giki.edu.pk" className="underline ml-2">hamza.mohsin@giki.edu.pk</a>
        </p>
        <p className="text-sm">© 2025 GIK Institute. All rights reserved.</p>
      </div>
    </footer>
  );
}