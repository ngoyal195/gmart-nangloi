import React from "react";
import { Link } from "react-router-dom";

/**
 * Brands page
 * - Keeps your original text untouched elsewhere.
 * - Shows a grid of brands and a few sample products per brand.
 * - Uses images from /public/images (via import.meta.env.BASE_URL).
 *
 * You can extend `brandsData` below to add more products/brands.
 */

const brandsData = [
  {
    id: "safari",
    name: "Safari",
    img: `${import.meta.env.BASE_URL}images/brands/safari.jpg`,
    sample: [
      { id: "s1", name: "Safari Seek 32 Backpack", price: "₹1,799", img: `${import.meta.env.BASE_URL}images/seek32.jpg` },
      { id: "s2", name: "Safari Trolley", price: "₹3,499", img: `${import.meta.env.BASE_URL}images/storm.jpg` },
    ],
  },
  {
    id: "vip",
    name: "VIP / Aristocrat",
    img: `${import.meta.env.BASE_URL}images/brands/vip.jpg`,
    sample: [
      { id: "v1", name: "VIP Aristocrat Set of 3", price: "₹6,299", img: `${import.meta.env.BASE_URL}images/storm.jpg` },
      { id: "v2", name: "VIP Cabin Trolley", price: "₹4,999", img: `${import.meta.env.BASE_URL}images/at-skiddle.jpg` },
    ],
  },
  {
    id: "american-tourister",
    name: "American Tourister",
    img: `${import.meta.env.BASE_URL}images/brands/american.jpg`,
    sample: [
      { id: "a1", name: "American Tourister Duffel", price: "₹3,359", img: `${import.meta.env.BASE_URL}images/at-skiddle.jpg` },
      { id: "a2", name: "AT Travel Bag", price: "₹2,199", img: `${import.meta.env.BASE_URL}images/iqomi.jpg` },
    ],
  },
  // add more brands here...
];

export default function Brands() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-poppins text-gray-900">
      {/* Simple header */}
      <header className="fixed inset-x-0 top-0 z-40 bg-white/85 backdrop-blur-md shadow">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-glow">GM</div>
            <div>
              <div className="text-lg font-bold text-indigo-600">G-Mart Nangloi</div>
              <div className="text-xs text-gray-500">Bags • Luggage • Wholesale & Retail</div>
            </div>
          </Link>

          <div className="hidden md:flex gap-4 items-center">
            <Link to="/" className="text-sm hover:text-indigo-600 transition">Home</Link>
            <a href={`${import.meta.env.BASE_URL}#products`} className="text-sm hover:text-indigo-600 transition">Products</a>
            <a href={`${import.meta.env.BASE_URL}#contact`} className="text-sm hover:text-indigo-600 transition">Contact</a>
          </div>

          <div className="md:hidden" />
        </div>
      </header>

      <main className="pt-24 pb-16">
        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 animate-fade-in">Brands We Carry</h1>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Click a brand to view a few representative products — curated for display. Visit the store for the full range.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandsData.map((b) => (
              <article key={b.id} className="bg-white rounded-2xl shadow-soft hover:shadow-glow transform hover:-translate-y-2 transition-all duration-400 overflow-hidden animate-slide-up">
                <div className="h-44 overflow-hidden">
                  <img src={b.img} alt={b.name} className="w-full h-full object-cover transform hover:scale-105 transition duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{b.name}</h3>
                    <Link to="/" className="text-sm text-indigo-600">Visit Store</Link>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {b.sample.map((p) => (
                      <div key={p.id} className="flex items-center gap-3 border rounded-lg p-2">
                        <img src={p.img} alt={p.name} className="w-14 h-14 object-cover rounded" loading="lazy" />
                        <div>
                          <div className="text-sm font-medium">{p.name}</div>
                          <div className="text-xs text-indigo-600 font-semibold">{p.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <Link
                      to="/"
                      className="text-sm text-gray-600 hover:text-indigo-600 transition"
                    >
                      Back
                    </Link>
                    <a
                      href={`https://wa.me/${"9811637493"}?text=Hi%20G-Mart,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(b.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm shadow hover:shadow-glow transition transform active:scale-95"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-2">G-Mart Nangloi • Nangloi, Delhi</div>
          <div className="text-sm">© {new Date().getFullYear()} G-Mart Nangloi. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
