
import products from "../data/products.json";

export default function Products() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((p) => (
        <div key={p.id} className="border rounded-lg shadow p-4 text-center">
          <img src={p.image} alt={p.name} className="h-40 w-full object-cover mb-3" />
          <h2 className="font-bold text-lg">{p.name}</h2>
          <p className="text-gray-600">₹{p.price}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            Enquire Now
          </button>
        </div>
      ))}
    </div>
  );
}
