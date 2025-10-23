"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="bg-primary text-white w-64 h-full p-6">
      <nav className="space-y-4">
        <Link
          href="/admin"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Dashboard
        </Link>
        <Link
          href="/admin/products"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Products
        </Link>
        <Link
          href="/admin/categories"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Categories
        </Link>
        <Link
          href="/admin/subcategories"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Subcategories
        </Link>
        <Link
          href="/admin/industries"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Industries
        </Link>
        <Link
          href="/admin/brands"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Brands
        </Link>
        <Link
          href="/admin/feedback"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Feedback
        </Link>
        <Link
          href="/admin/enquiry"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Enquiry
        </Link>

        {/* <Link href="/admin/pages" className="block px-4 py-2 rounded hover:bg-gray-700">
            Pages
            </Link>
            <Link href="/admin/sections" className="block px-4 py-2 rounded hover:bg-gray-700">
            Sections
            </Link> */}
      </nav>
    </aside>
  );
}
