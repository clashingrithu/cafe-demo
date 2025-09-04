export default function Home() {
  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-yellow-100 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-brown-800">Café Aroma</h1>
          <nav className="space-x-6 text-brown-700 font-medium">

            <a href="#menu" className="hover:text-brown-900">Menu</a>
            <a href="#about" className="hover:text-brown-900">About</a>
            <a href="#contact" className="hover:text-brown-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-extrabold text-brown-800 leading-tight mb-6">
            Fresh Coffee, Cozy Vibes
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Experience the rich aroma of freshly brewed coffee and homemade delights at Café Aroma.  
            A perfect place to relax, work, or meet friends.
          </p>
          <a href="#menu" className="bg-brown-700 text-white px-6 py-3 rounded-xl hover:bg-brown-800">
            Explore Menu
          </a>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/coffee-cup.jpg"
            alt="Coffee Cup"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-brown-800 mb-8">Our Menu</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-yellow-50 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-brown-700">Espresso</h4>
              <p className="text-gray-600">Strong & bold Italian coffee.</p>
            </div>
            <div className="p-6 bg-yellow-50 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-brown-700">Cappuccino</h4>
              <p className="text-gray-600">Perfect blend of coffee & milk foam.</p>
            </div>
            <div className="p-6 bg-yellow-50 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-brown-700">Pastries</h4>
              <p className="text-gray-600">Freshly baked croissants & cakes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-yellow-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-brown-800 mb-6">About Us</h3>
          <p className="text-lg text-gray-700">
            Café Aroma was founded with a simple goal: to bring people together over
            the love of coffee. We source premium beans and create an inviting
            atmosphere where everyone feels at home.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-brown-800 mb-6">Contact Us</h3>
          <p className="text-lg text-gray-700 mb-4">📍 123 Coffee Street, New Delhi, India</p>
          <p className="text-lg text-gray-700 mb-6">📞 +91 1234567889</p>
          <a
            href="mailto:hello@cafearoma.com"
            className="bg-brown-700 text-white px-6 py-3 rounded-xl hover:bg-brown-800"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-800 text-white text-center py-6">
        <p>© 2025 Café Aroma. All rights reserved.</p>
      </footer>
    </div>
  );
}

