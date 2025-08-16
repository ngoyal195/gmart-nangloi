import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // === Customize these values ===
  const SHOP_NAME = "G-Mart Nangloi";
  const PHONE = "+91-9811637493";
  const ADDRESS = "31/20, Main Rohtak Road, Basement of Vishal Mega Mart Nangloi, Delhi - 110041";
  // Replace with your product images (hosted or in /public/images)
  const products = [
    { id: 1, name: "Safari Backpack", price: "₹2,499", img: "https://images.unsplash.com/photo-1585386959984-a4155222b1f6?w=1200&q=80" },
    { id: 2, name: "VIP Trolley Bag", price: "₹5,999", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80" },
    { id: 3, name: "American Tourister Duffel", price: "₹3,499", img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?w=1200&q=80" },
    { id: 4, name: "Kids Cartoon Backpack", price: "₹899", img: "https://images.unsplash.com/photo-1542293787938-c9e299b8804c?w=1200&q=80" },
    { id: 5, name: "Office Laptop Bag", price: "₹1,799", img: "https://images.unsplash.com/photo-1513890727249-0b09c8f7a2f1?w=1200&q=80" },
    { id: 6, name: "Fancy Vanity Case", price: "₹1,199", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&q=80" },
  ];
  // ===============================

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-40 bg-white/90 backdrop-blur-md shadow">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
              GM
            </div>
            <div>
              <div className="text-lg font-bold text-indigo-600">{SHOP_NAME}</div>
              <div className="text-xs text-gray-500">Bags • Luggage • Wholesale & Retail</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#products" className="hover:text-indigo-600">Products</a>
            <a href="#offers" className="hover:text-indigo-600">Offers</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href={`https://wa.me/${PHONE.replace(/\D/g, "")}`} target="_blank" rel="noreferrer"
               className="ml-4 inline-flex items-center gap-2 bg-green-500 text-white px-3 py-1.5 rounded-full text-sm shadow-sm hover:bg-green-600">
              Chat on WhatsApp
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 border-t">
            <div className="px-4 py-3 flex flex-col gap-2">
              <a href="#home" onClick={() => setMenuOpen(false)} className="py-2">Home</a>
              <a href="#products" onClick={() => setMenuOpen(false)} className="py-2">Products</a>
              <a href="#offers" onClick={() => setMenuOpen(false)} className="py-2">Offers</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="py-2">About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="py-2">Contact</a>
              <a href={`https://wa.me/${PHONE.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="py-2 text-green-600 font-medium">Chat on WhatsApp</a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-24">
        {/* HERO */}
        <section id="home" className="relative">
          <div
            className="h-64 sm:h-96 bg-cover bg-center flex items-center justify-center"
            style={{
  backgroundImage:
    "linear-gradient(rgba(10,10,10,0.45), rgba(10,10,10,0.25)), url('https://ibb.co/tMfjZ5Bs')",
}}

          >
            <div className="text-center px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-extrabold drop-shadow-md">
                Trusted Bags & Luggage — G-Mart Nangloi
              </h1>
              <p className="mt-3 text-sm sm:text-base text-gray-100 max-w-xl mx-auto">
                Retail & Wholesale · Backpacks · Trolley Bags · Travel Bags · Kids Bags · Office & Fancy Luggage
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <a href="#products" className="bg-white text-indigo-600 px-5 py-2 rounded-full font-semibold shadow hover:opacity-95">Explore Products</a>
                <a href={`https://wa.me/${PHONE.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium shadow">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8l-1.1 2-2.2-.7a8.67 8.67 0 01-3-.8 8.5 8.5 0 01-4.2-4.7 8.6 8.6 0 01.3-6.1l1.2-2.2 2.2.6c1.1.3 2.1.7 3 .9"></path></svg>
                  Quick Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Our Products</h2>
            <div className="text-sm text-gray-600">Showing popular items</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
                <div className="h-44 sm:h-52 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transform hover:scale-105 transition" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-indigo-600 font-bold">{p.price}</span>
                    <div className="flex gap-2">
                      <a href={`https://wa.me/${PHONE.replace(/\D/g, "")}?text=Hi%20G-Mart%20Nangloi,%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}`} target="_blank" rel="noreferrer"
                         className="px-3 py-1.5 rounded-full bg-green-500 text-white text-sm">Enquire</a>
                      <button className="px-3 py-1.5 rounded-full border text-sm" title="Add to wishlist (future)">
                        ♥
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* OFFERS */}
        <section id="offers" className="bg-gradient-to-r from-yellow-50 to-white border-t py-10">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">🔥 Ongoing Offers</h3>
              <p className="text-gray-700 mt-1">Limited time: Up to <span className="font-bold">75% OFF</span> on select Safari & VIP trolley bags. Visit our store in Nangloi for bundle deals.</p>
            </div>
            <div>
              <a href="#contact" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full shadow">Get Offer Details</a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">About {SHOP_NAME}</h3>
              <p className="text-gray-700">G-Mart Nangloi is a trusted retailer and wholesaler of premium bags and luggage. We carry brands like Safari, VIP, American Tourister, Kamiliant, Aristocrat and more. Open for in-store shopping and bulk orders.</p>
              <ul className="mt-4 text-gray-700 list-disc list-inside space-y-1">
                <li>Retail & wholesale pricing available</li>
                <li>Largest selection in Nangloi market</li>
                <li>Warranty support for branded luggage</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow">
              <img src="https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?w=1200&q=80" alt="Store" className="w-full h-64 object-cover" />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-6">Contact & Visit</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h4 className="font-semibold mb-2">Store Address</h4>
                <p className="text-gray-700">{ADDRESS}</p>

                <h4 className="font-semibold mt-4 mb-2">Phone</h4>
                <p className="text-gray-700">{PHONE}</p>

                <div className="mt-4 flex gap-3">
                  <a href={`https://wa.me/${PHONE.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="inline-block bg-green-500 text-white px-4 py-2 rounded">Chat on WhatsApp</a>
                  <a href={`https://www.google.com/maps/search/${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noreferrer" className="inline-block border px-4 py-2 rounded">Open in Maps</a>
                </div>
              </div>

              <form className="bg-white p-6 rounded-xl shadow space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Thank you — we will contact you soon!"); e.target.reset(); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input required name="name" className="mt-1 w-full border px-3 py-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone / Email</label>
                  <input required name="contact" className="mt-1 w-full border px-3 py-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea required name="message" rows="3" className="mt-1 w-full border px-3 py-2 rounded"></textarea>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Send Enquiry</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-2">{SHOP_NAME} • Nangloi, Delhi</div>
          <div className="text-sm">© {new Date().getFullYear()} {SHOP_NAME}. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
