import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">G-Mart Nangloi</h1>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <ul className={`md:flex gap-6 ${menuOpen ? "block" : "hidden"}`}>
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#products" className="hover:text-blue-600">Products</a></li>
            <li><a href="#offers" className="hover:text-blue-600">Offers</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Your Trusted Bags & Luggage Store</h2>
        <p className="text-lg">Retail & Wholesale – Backpacks, Trolley Bags, Travel Gear</p>
        <a href="#products" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200">
          Shop Now
        </a>
      </section>

      {/* Categories */}
      <section id="products" className="py-16 max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Our Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Backpacks", "Trolley Bags", "Duffel Bags", "Kids Bags", "Office Bags", "Fancy Luggages", "Travel Bags", "Vanities"].map((cat) => (
            <div key={cat} className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center cursor-pointer">
              <h4 className="font-semibold text-lg">{cat}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section id="offers" className="bg-yellow-100 py-16 text-center">
        <h3 className="text-3xl font-bold mb-6">🔥 Current Offers</h3>
        <p>Get up to <span className="font-bold">30% OFF</span> on select Safari & VIP Trolley Bags!</p>
      </section>

      {/* About */}
      <section id="about" className="py-16 max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">About Us</h3>
        <p>
          G-Mart Nangloi is a trusted retailer & wholesaler of premium bags and luggage in Nangloi, Delhi.
          Offering top brands like Safari, VIP, American Tourister, Kamiliant, Aristocrat, and more.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-200 py-16 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
        <p>📍 Nangloi, Delhi</p>
        <p>📞 +91-9876543210</p>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="mt-4 inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600">
          Chat on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2025 G-Mart Nangloi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
