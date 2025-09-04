export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-brown-800 mb-6">☕ Welcome to Café Demo</h1>
      <p className="text-lg text-gray-700 mb-4">Your cozy spot for coffee and code.</p>
      <button className="bg-brown-600 text-white px-6 py-3 rounded-xl hover:bg-brown-700">
        Order Now
      </button>
    </div>
  );
}
