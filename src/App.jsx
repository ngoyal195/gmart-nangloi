// src/App.jsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ only for Brands route
import emailjs from "emailjs-com";

export default function App() {
  // --- Loading screen state ---
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate a short loading time for polish (adjust duration if desired)
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  // --- rest of your state + refs ---
  const [menuOpen, setMenuOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lgp3esc", // your Service ID
        "template_12upiko", // your Template ID
        form.current,
        "S2Men4c1to3zZ2MPT" // your Public Key
      )
      .then(
        () => {
          alert("✅ Enquiry sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send. Please try again.");
        }
      );
  };

  // === Customize these values ===
  const SHOP_NAME = "G-Mart Nangloi";
  const PHONE = "+91-9811637493";
  const ADDRESS =
    "31/20, Main Rohtak Road, Basement of Vishal Mega Mart Nangloi, Delhi - 110041";
  const products = [
    { id: 1, name: "Safari Seek 32 Backpack", price: "₹1,799", img: `${import.meta.env.BASE_URL}images/seek32.jpg` },
    { id: 2, name: "VIP Aristocrat Set of 3", price: "₹6,299", img: `${import.meta.env.BASE_URL}images/storm.jpg` },
    { id: 3, name: "American Tourister SKIDDLE", price: "₹3,359", img: `${import.meta.env.BASE_URL}images/at-skiddle.jpg` },
    { id: 4, name: "Kids Cartoon Backpack", price: "₹699", img: `${import.meta.env.BASE_URL}images/kids.jpg` },
    { id: 5, name: "IQOMI Laptop Backpack", price: "₹799", img: `${import.meta.env.BASE_URL}images/iqomi.jpg` },
    { id: 6, name: "Make-up Vanity", price: "₹899", img: `${import.meta.env.BASE_URL}images/vanity.jpg` },
  ];

  const visibleProducts = products.slice(0, 10);

  // --------- LoadingScreen component (local) ----------
  function LoadingScreen() {
    const quotes = [
      "Travel light, live light, spread the light. ✨",
      "Adventure begins where the road ends. 🌍",
      "A good bag can carry more than things — it carries dreams. 🎒",
      "Journeys are measured in memories, not miles. 🧳",
      "Life is a journey. Pack wisely. 🚀",
      "Behind every great trip is an even better bag. 👜",
    ];
    const visuals = ["🧳", "🎒", "✈️", "🌍", "🛫", "🧭"];

    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const visual = visuals[Math.floor(Math.random() * visuals.length)];

    return (
      <div className="loading-screen fixed inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm z-50">
        <div className="loading-content text-center">
          <div style={{ fontSize: 48, lineHeight: 1 }}>{visual}</div>
          <p className="text-lg font-medium gradient-text mt-3">{quote}</p>
        </div>
      </div>
    );
  }

  return (
  <>
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-poppins text-gray-900 fade-in ${loading ? "pointer-events-none blur-sm" : ""}`}>
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-40 bg-white/85 backdrop-blur-md shadow slide-up">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="animate-pulse w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-glow">
              GM
            </div>
            <div>
              <div className="text-lg font-bold text-indigo-600">{SHOP_NAME}</div>
              <div className="text-xs text-gray-500">Bags • Luggage • Wholesale & Retail</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a
              href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="ml-4 inline-flex items-center gap-2 bg-green-500 text-white px-3 py-1.5 rounded-full text-sm shadow-sm hover:bg-green-600 transition hover-lift"
            >
              Chat on WhatsApp
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded hover:bg-gray-100 transition"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white/95 border-t">
            <div className="px-4 py-3 flex flex-col gap-2">
              <a href={`https://wa.me/${PHONE.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="py-2 text-green-600 font-medium">Chat on WhatsApp</a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-24">
        {/* HERO */}
        <section id="home" className="relative">
          <style>{`
            @keyframes slide-hero {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .hero-slide { animation: slide-hero 60s linear infinite; }
            .hero-slide:hover { animation-play-state: paused; }
          `}</style>

          <div className="h-64 sm:h-96 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="flex h-full hero-slide" style={{ width: "200%" }}>
                {[
                  `${import.meta.env.BASE_URL}images/home.jpeg`,
                  `${import.meta.env.BASE_URL}images/home1.jpeg`,
                  `${import.meta.env.BASE_URL}images/home2.jpeg`,
                  `${import.meta.env.BASE_URL}images/home3.jpeg`,
                  `${import.meta.env.BASE_URL}images/home4.jpeg`,
                ]
                  .concat([
                    `${import.meta.env.BASE_URL}images/home.jpeg`,
                    `${import.meta.env.BASE_URL}images/home1.jpeg`,
                    `${import.meta.env.BASE_URL}images/home2.jpeg`,
                    `${import.meta.env.BASE_URL}images/home3.jpeg`,
                    `${import.meta.env.BASE_URL}images/home4.jpeg`,
                  ])
                  .map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Hero ${idx}`}
                      className="w-1/3 h-full object-cover flex-shrink-0"
                      loading="lazy"
                    />
                  ))}
              </div>
            </div>

            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(2,6,23,0.35), rgba(2,6,23,0.15))" }} />

            <div className="h-full flex items-center justify-center relative z-10 px-4">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-extrabold drop-shadow-xl animate-slide-up slide-up">
                  Trusted Bags & Luggage — G-Mart Nangloi
                </h1>
                <p className="mt-3 text-sm sm:text-base text-gray-100 max-w-xl mx-auto animate-fade-in fade-in">
                  Retail & Wholesale · Backpacks · Trolley Bags · Travel Bags · Kids Bags · Office & Fancy Luggage
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <Link
                    to="/brands"
                    className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:shadow-glow transform hover:-translate-y-1 transition-all duration-300 hover-lift"
                  >
                    Available Brands
                  </Link>
                  <Link
                    to="/all-products"
                    className="bg-white text-indigo-600 px-5 py-2 rounded-full font-semibold shadow-lg border border-indigo-100 hover:shadow-glow transform hover:-translate-y-1 transition-all duration-300 hover-lift"
                  >
                    Browse Products
                  </Link>
                  <a
                    href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-400 text-white px-4 py-2 rounded-full font-medium shadow hover:opacity-95 transition transform active:scale-95 hover-lift"
                  >
                    Quick Enquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        {/* ... your products and contact sections remain unchanged ... */}
      </main>

      <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-gray-300 py-6 mt-8 animate-fade-in fade-in">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-2">{SHOP_NAME} • Delhi</div>
          <div className="text-sm">© {new Date().getFullYear()} {SHOP_NAME}. All rights reserved.</div>
        </div>
      </footer>
    </div>

    {/* Loading overlay OUTSIDE the blurred content */}
    {loading && <LoadingScreen />}
  </>
);
}
