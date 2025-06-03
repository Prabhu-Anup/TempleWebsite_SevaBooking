"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Seva", href: "/Seva" },
  { name: "Events", href: "/Events    " },
  { name: "Contact", href: "/Contact" },
];

export default function NavBar() {
  return (
    <div
      style={{ backgroundColor: "#800000", borderBottom: "4px solid #facc15" }}
    >
      <div className="mx-auto flex justify-between items-center py-3 px-4">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Shri Venkatraman Dev, Kumta"
              className="h-12 w-10 object-contain rounded-full"
              width={500}
              height={500}
            />
          </Link>
          <span className="text-xl font-bold text-white tracking-tight">
            Shri Venkatraman Dev, Kumta
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white font-medium hover:text-yellow-300 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
