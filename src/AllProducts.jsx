// src/AllProducts.jsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function AllProducts() {
  const PHONE = "+91-9811637493"; // same contact used in App.jsx
  const [query, setQuery] = useState("");
  const [activeBrand, setActiveBrand] = useState("All");

  // full product list (add/remove items as you like). Each item has brand.
  const products = [
    { id: 1, name: "Safari Seek 32 Backpack", brand: "Safari", price: "₹1,799", img: `${import.meta.env.BASE_URL}images/seek32.jpg`, bestSeller: true },
    { id: 2, name: "VIP Aristocrat Set of 3", brand: "VIP", price: "₹6,299", img: `${import.meta.env.BASE_URL}images/storm.jpg`, bestSeller: true },
    { id: 3, name: "American Tourister SKIDDLE", brand: "American Tourister", price: "₹3,359", img: `${import.meta.env.BASE_URL}images/at-skiddle.jpg`, bestSeller: true },
    { id: 4, name: "Kids Cartoon Backpack", brand: "Kids", price: "₹699", img: `${import.meta.env.BASE_URL}images/kids.jpg`, bestSeller: false },
    { id: 5, name: "IQOMI Laptop Backpack", brand: "IQOMI", price: "₹799", img: `${import.meta.env.BASE_URL}images/iqomi.jpg`, bestSeller: false },
    { id: 6, name: "Make-up Vanity", brand: "Accessories", price: "₹899", img: `${import.meta.env.BASE_URL}images/vanity.jpg`, bestSeller: false },
    { id: 7, name: "Safari Trek 45L", brand: "Safari", price: "₹2,199", img: `${import.meta.env.BASE_URL}images/seek32.jpg`, bestSeller: false },
    { id: 8, name: "VIP Pilot Trolley", brand: "VIP", price: "₹4,499", img: `${import.meta.env.BASE_URL}images/storm.jpg`, bestSeller: false },
    { id: 9, name: "Tourister Cabin Plus", brand: "American Tourister", price: "₹5,199", img: `${import.meta.env.BASE_URL}images/at-skiddle.jpg`, bestSeller: false },
    { id: 10, name: "Kids Lightning Bag", brand: "Kids", price: "₹799", img: `${import.meta.env.BASE_URL}images/kids.jpg`, bestSeller: false },
    // add more items if required
  ];

  // derive brands (unique)
  const brands = useMemo(() => {
    const s = new Set(products.map((p) => p.brand));
    return ["All", ...Array.from(s)];
  }, [products]);

  // filtered products based on brand + search
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesBrand = activeBrand === "All" ? true : p.brand === activeBrand;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q === "" ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.price.toLowerCase().includes(q);
      return matchesBrand && matchesQuery;
    });
  }, [products, activeBrand, query]);

  // group products by brand for brand-wise sections
  const grouped = useMemo(() => {
    const map = {};
    filtered.forEach((p) => {
      if (!map[p.brand]) map[p.brand] = [];
      map[p.brand].push(p);
    });
    return map;
  }, [filtered]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-poppins text-gray-900">
      {/* Simple header (keeps navigation available when AllProducts is visited directly) */}
      <header className="bg-white/90 backdrop-blur-md shadow px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
              GM
            </div>
            <div>
              <div className="text-lg font-bold text-indigo-600">G-Mart Nangloi</div>
              <div className="text-xs text-gray-500">Bags • Luggage • Wholesale & Retail</div>
            </div>
          </div>

          <nav className="flex items-center gap-3 text-sm">
            <Link to="/" className="text-indigo-600 font-medium">Back to Home</Link>
            <a
              href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-1.5 rounded-full text-sm shadow-sm hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-6 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">All Products</h1>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-2 items-center">
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setActiveBrand(b)}
                  className={`text-sm px-3 py-1 rounded-full border ${activeBrand === b ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-700"}`}
                >
                  {b}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products or brands..."
                className="border px-3 py-2 rounded w-56 focus:ring-2 focus:ring-indigo-200"
              />
              <div className="md:hidden">
                <select
                  value={activeBrand}
                  onChange={(e) => setActiveBrand(e.target.value)}
                  className="border px-3 py-2 rounded"
                >
                  {brands.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* If no results */}
        {filtered.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow text-center text-gray-600">
            No products matched your search.
          </div>
        ) : (
          <>
            {/* Brand-wise sections (desktop shows only filtered brands; if activeBrand is All we show all present) */}
            {Object.keys(grouped).map((brand) => (
              <section key={brand} className="mb-10">
                <h2 className="text-xl font-semibold mb-4">{brand}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {grouped[brand].map((p) => (
                    <article key={p.id} className="bg-white rounded-2xl shadow-soft overflow-hidden">
                      <div className="h-44 sm:h-52 relative overflow-hidden">
                        {p.bestSeller && (
                          <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full shadow-sm z-20">
                            Best Seller
                          </span>
                        )}
                        <img src={p.img} alt={p.name} className="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg">{p.name}</h3>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-indigo-600 font-bold">{p.price}</span>
                          <a
                            href={`https://wa.me/${PHONE.replace(/\D/g, "")}?text=Hi%20G-Mart%20Nangloi,%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-teal-400 text-white text-sm shadow hover:shadow-glow transition transform active:scale-95"
                          >
                            Enquire
                          </a>
                        </div>
                        <div className="mt-3 text-xs text-gray-500">Brand: {p.brand}</div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </>
        )}
      </main>

      <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-gray-300 py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-2">G-Mart Nangloi • Delhi</div>
          <div className="text-sm">© {new Date().getFullYear()} G-Mart Nangloi. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
