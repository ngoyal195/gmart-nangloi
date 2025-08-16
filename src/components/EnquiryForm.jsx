
import { useState } from "react";

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We will contact you soon."); // Later we'll replace with backend/email
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-3">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Enquiry"
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
