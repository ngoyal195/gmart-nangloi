import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Brands from "./Brands.jsx";
import AllProducts from "./AllProducts.jsx"; // <-- new import
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/all-products" element={<AllProducts />} /> {/* new route */}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
