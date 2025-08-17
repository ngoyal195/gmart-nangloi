import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * src/Brands.jsx
 * - Floating emoji background (interactive pop on click/touch)
 * - Brand cards only (no products)
 * - Each card has image + name + description
 */

const brandsData = [
  {
    id: "safari",
    name: "Safari",
    img: `${import.meta.env.BASE_URL}images/safari.jpg`,
    description: "Safari has been a trusted name for decades, known for durable and stylish luggage and backpacks.",
  },
  {
    id: "vip",
    name: "VIP",
    img: `${import.meta.env.BASE_URL}images/vip.jpg`,
    description: "VIP is one of India's oldest luggage brands, reliable for its innovation and sturdy travel gear.",
  },
  {
    id: "american-tourister",
    name: "American Tourister",
    img: `${import.meta.env.BASE_URL}images/american.jpg`,
    description: "American Tourister is a global leader, offering youthful, vibrant, and long-lasting luggage solutions.",
  },
  {
    id: "kamiliant",
    name: "Kamiliant",
    img: `${import.meta.env.BASE_URL}images/kamiliant.jpg`,
    description: "Kamiliant, a Samsonite brand, is known for bold designs and dependable quality at affordable prices.",
  },
  {
    id: "vittag",
    name: "Vittag",
    img: `${import.meta.env.BASE_URL}images/vittag.jpg`,
    description: "Vittag is emerging as a reliable choice, offering stylish and functional travel bags.",
  },
  {
    id: "skybags",
    name: "Skybags",
    img: `${import.meta.env.BASE_URL}images/skybags.jpg`,
    description: "Skybags is the first choice for millions of Indians who like to make a fashion statement wherever they go.",
  },
  {
    id: "aristocrat",
    name: "Aristocrat",
    img: `${import.meta.env.BASE_URL}images/aristocrat.jpg`,
    description: "Aristocrat, part of VIP Industries, is popular for practical, value-for-money luggage and bags.",
  },
];

const EMOJIS = ["🧳", "🎒", "👜", "🧳", "🎒"]; // repeat pattern

function FloatingEmojis({ count = 80 }) {
  const [popped, setPopped] = useState({});
  const instances = Array.from({ length: count }).map((_, i) => {
    const left = Math.round(Math.random() * 90);
    const top = Math.round(Math.random() * 80);
    const size = 18 + Math.round(Math.random() * 22);
    const duration = 6 + Math.random() * 5; // faster movement
    const delay = Math.random() * 4;
    const dir = Math.random() > 0.5 ? "up" : "down";
    const emoji = EMOJIS[i % EMOJIS.length];
    return { id: `e-${i}`, left, top, size, duration, delay, dir, emoji };
  });

  const handlePop = (id) => {
    setPopped((s) => ({ ...s, [id]: true }));
    setTimeout(() => setPopped((s) => {
      const copy = { ...s };
      delete copy[id];
      return copy;
    }), 600);
  };

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="relative w-full h-full">
        {instances.map((it) => (
          <button
            key={it.id}
            onClick={() => handlePop(it.id)}
            onTouchStart={() => handlePop(it.id)}
            className="emoji pointer-events-auto absolute -translate-y-1/2 -translate-x-1/2 select-none"
            style={{
              left: `${it.left}%`,
              top: `${it.top}%`,
              fontSize: `${it.size}px`,
              animationDuration: `${it.duration}s`,
              animationDelay: `${it.delay}s`,
            }}
            data-dir={it.dir}
          >
            <span className={popped[it.id] ? "pop" : ""}>{it.emoji}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Brands() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-poppins text-gray-900 relative">
      <FloatingEmojis count={80} />

      {/* Header */}
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
        </div>
      </header>

      {/* Brand Cards */}
      <main className="pt-24 pb-16 relative z-10">
        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 animate-fade-in">Brands We Carry</h1>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              We proudly deal in some of the most trusted brands in the luggage and travel industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandsData.map((b) => (
              <article key={b.id} className="bg-white rounded-2xl shadow-soft hover:shadow-glow transform hover:-translate-y-2 transition-all duration-400 overflow-hidden animate-slide-up">
                <div className="h-48 w-full flex items-center justify-center overflow-hidden bg-gray-100">
                  <img src={b.img} alt={b.name} className="object-contain h-full w-full" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{b.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{b.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-6 mt-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-2">G-Mart Nangloi • Delhi</div>
          <div className="text-sm">© {new Date().getFullYear()} G-Mart Nangloi. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
