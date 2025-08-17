import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lgp3esc",
        "template_12upiko",
        form.current,
        "S2Men4c1to3zZ2MPT"
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
  // ===============================

  // === Slideshow settings ===
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const sliderImages = [
    `${import.meta.env.BASE_URL}images/home1.jpg`,
    `${import.meta.env.BASE_URL}images/home2.jpg`,
    `${import.meta.env.BASE_URL}images/home3.jpg`,
  ];
  // ===============================

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-poppins text-gray-900">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-40 bg-white/85 backdrop-blur-md shadow">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-glow">
              GM
            </div>
            <div>
              <div className="text-lg font-bold text-indigo-600">{SHOP_NAME}</div>
              <div className="text-xs text-gray-500">Bags • Luggage • Wholesale & Retail</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#products" className="hover:text-indigo-600 transition-colors">Products</a>
            <a href="#offers" className="hover:text-indigo-600 transition-colors">Offers</a>
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
            <a
              href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="ml-4 inline-flex items-center gap-2 bg-green-500 text-white px-3 py-1.5 rounded-full text-sm shadow-sm hover:bg-green-600 transition"
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
            className="h-64 sm:h-96 bg-cover bg-center flex items-center justify-center animate-fade-in"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(2,6,23,0.35), rgba(2,6,23,0.15)), url(${import.meta.env.BASE_URL}images/home.jpeg)`,
            }}
          >
            <div className="text-center px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-extrabold drop-shadow-xl animate-slide-up">
                Trusted Bags & Luggage — G-Mart Nangloi
              </h1>
              <p className="mt-3 text-sm sm:text-base text-gray-100 max-w-xl mx-auto animate-fade-in">
                Retail & Wholesale · Backpacks · Trolley Bags · Travel Bags · Kids Bags · Office & Fancy Luggage
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <a
                  href="#products"
                  className="bg-white text-indigo-600 px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-glow transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Products
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}#/brands`}
                  className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:shadow-glow transform hover:-translate-y-1 transition-all duration-300"
                >
                  Available Brands
                </a>
                <a
                  href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-400 text-white px-4 py-2 rounded-full font-medium shadow hover:opacity-95 transition transform active:scale-95"
                >
                  Quick Enquiry
                </a>
              </div>
            </div>
          </div>

          {/* === Slideshow === */}
          <div className="w-full max-w-5xl mx-auto mt-8 rounded-xl overflow-hidden shadow-lg px-4">
            <Slider {...sliderSettings}>
              {sliderImages.map((img, i) => (
                <div key={i}>
                  <img src={img} alt={`Slide ${i + 1}`} className="w-full h-72 sm:h-96 object-cover" />
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold mb-6 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-indigo-600 after:mx-auto after:mt-2 animate-fade-in">
              Our Products
            </h2>
            <div className="text-sm text-gray-600">Showing popular items</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-2xl shadow-soft hover:shadow-glow transform hover:-translate-y-2 transition-all duration-500 overflow-hidden animate-slide-up"
              >
                <div className="h-44 sm:h-52 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-indigo-600 font-bold">{p.price}</span>
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/${PHONE.replace(/\D/g, "")}?text=Hi%20G-Mart%20Nangloi,%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-teal-400 text-white text-sm shadow hover:shadow-glow transition transform active:scale-95"
                      >
                        Enquire
                      </a>
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

        {/* CONTACT */}
        <section id="contact" className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-6">Contact & Visit</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h4 className="font-semibold mb-2">Store Address</h4>
                <p className="text-gray-700">{ADDRESS}</p>
                <h4 className="font-semibold mt-4 mb-2">Phone</h4>
                <p className="text-gray-700">{PHONE}</p>
                <div className="mt-4 flex gap-3">
                  <a href={`https://wa.me/${PHONE.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="inline-block bg-green-500 text-white px-4 py-2 rounded shadow hover:shadow-glow transition">Chat on WhatsApp</a>
                  <a href={`https://www.google.com/maps/search/${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noreferrer" className="inline-block border px-4 py-2 rounded hover:shadow-md transition">Open in Maps</a>
                </div>
              </div>

              {/* EmailJS Form */}
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-white p-6 rounded-xl shadow-soft space-y-3"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input required name="from_name" className="mt-1 w-full border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-200 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone / Email</label>
                  <input required name="contact" className="mt-1 w-full border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-200 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea required name="message" rows="3" className="mt-1 w-full border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-200 transition"></textarea>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:shadow-glow transition transform active:scale-95">
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-gray-300 py-6 mt-8 animate-fade-in">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-2">{SHOP_NAME} • Nangloi, Delhi</div>
          <div className="text-sm">© {new Date().getFullYear()} {SHOP_NAME}. All rights reserved.</div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-5 right-5 flex flex-col space-y-3 z-50">
        <a
          href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transform transition"
        >
          <img src={`${import.meta.env.BASE_URL}images/whatsapp.png`} alt="WhatsApp" className="w-6 h-6" />
        </a>
        <a
          href={`tel:${PHONE}`}
          className="bg-blue-500 p-4 rounded-full shadow-lg hover:scale-110 transform transition text-white text-xl flex items-center justify-center"
        >
          📞
        </a>
      </div>
    </div>
  );
}
