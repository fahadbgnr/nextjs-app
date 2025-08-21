"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          NextjsApp
        </Link>

        {/* Nav Links */}
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              } hover:text-blue-500 transition`}
            >
              {link.label}
            </Link>
          ))}

          {session ? (
            <>
              <Link
                href="/dashboard/products"
                className={`${
                  pathname.startsWith("/dashboard")
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                } hover:text-blue-500 transition`}
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className={`${
                pathname === "/login"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              } hover:text-blue-500 transition`}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
