import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import Slider from "react-slick"; // ✅ For slideshow
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
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
    {
      id: 1,
      name: "Safari Seek 32 Backpack",
      price: "₹1,799",
      img: `${import.meta.env.BASE_URL}images/seek32.jpg`,
    },
    {
      id: 2,
      name: "VIP Aristocrat Set of 3",
      price: "₹6,299",
      img: `${import.meta.env.BASE_URL}images/storm.jpg`,
    },
    {
      id: 3,
      name: "American Tourister SKIDDLE",
      price: "₹3,359",
      img: `${import.meta.env.BASE_URL}images/at-skiddle.jpg`,
    },
    {
      id: 4,
      name: "Kids Cartoon Backpack",
      price: "₹699",
      img: `${import.meta.env.BASE_URL}images/kids.jpg`,
    },
    {
      id: 5,
      name: "IQOMI Laptop Backpack",
      price: "₹799",
      img: `${import.meta.env.BASE_URL}images/iqomi.jpg`,
    },
    {
      id: 6,
      name: "Make-up Vanity",
      price: "₹899",
      img: `${import.meta.env.BASE_URL}images/vanity.jpg`,
    },
  ];

  const heroImages = [
    `${import.meta.env.BASE_URL}images/home.jpeg`,
    `${import.meta.env.BASE_URL}images/seek32.jpg`,
    `${import.meta.env.BASE_URL}images/storm.jpg`,
  ];
  // ===============================

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

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
              <div className="text-xs text-gray-500">
                Bags • Luggage • Wholesale & Retail
              </div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#home" className="hover:text-indigo-600 transition-colors">
              Home
            </a>
            <a href="#products" className="hover:text-indigo-600 transition-colors">
              Products
            </a>
            <a href="#offers" className="hover:text-indigo-600 transition-colors">
              Offers
            </a>
            <a href="#about" className="hover:text-indigo-600 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">
              Contact
            </a>
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
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 border-t">
            <div className="px-4 py-3 flex flex-col gap-2">
              <a href="#home" onClick={() => setMenuOpen(false)} className="py-2">
                Home
              </a>
              <a
                href="#products"
                onClick={() => setMenuOpen(false)}
                className="py-2"
              >
                Products
              </a>
              <a
                href="#offers"
                onClick={() => setMenuOpen(false)}
                className="py-2"
              >
                Offers
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="py-2"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="py-2"
              >
                Contact
              </a>
              <a
                href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="py-2 text-green-600 font-medium"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-24">
        {/* HERO with slideshow */}
        <section id="home" className="relative">
          <Slider {...sliderSettings}>
            {heroImages.map((src, i) => (
              <div key={i}>
                <div
                  className="h-64 sm:h-96 bg-cover bg-center flex items-center justify-center"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(2,6,23,0.35), rgba(2,6,23,0.15)), url(${src})`,
                  }}
                >
                  <div className="text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-extrabold drop-shadow-xl">
                      Trusted Bags & Luggage — G-Mart Nangloi
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-100 max-w-xl mx-auto">
                      Retail & Wholesale · Backpacks · Trolley Bags · Travel Bags ·
                      Kids Bags · Office & Fancy Luggage
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
              </div>
            ))}
          </Slider>
        </section>

        {/* PRODUCTS (same as before) */}
        {/* ... your products code unchanged ... */}

        {/* CONTACT (same as before) */}
        {/* ... your contact code unchanged ... */}
      </main>

      {/* Floating WhatsApp + Call button */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-green-500 rounded-full shadow-lg hover:scale-110 transition transform"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </a>
        <a
          href={`tel:${PHONE}`}
          className="w-14 h-14 flex items-center justify-center bg-indigo-600 rounded-full shadow-lg hover:scale-110 transition transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.528 4.584a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.584 1.528a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </a>
      </div>

      <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-gray-300 py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-2">{SHOP_NAME} • Nangloi, Delhi</div>
          <div className="text-sm">
            © {new Date().getFullYear()} {SHOP_NAME}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
