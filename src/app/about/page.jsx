"use client";

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-center flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Side - Text */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            About 
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"> Us</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Welcome to our e-commerce store — your trusted destination for high-quality
            products at unbeatable prices. We are committed to providing the best online
            shopping experience with fast delivery, secure payments, and premium support.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our mission is simple: to bring you top-quality electronic gadgets, home
            essentials, fashion items, and more — all under one roof. Every product is
            hand-picked and quality-tested to ensure customer satisfaction.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-base-200 rounded-xl shadow-sm text-center">
              <h3 className="text-2xl font-bold">5K+</h3>
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>

            <div className="p-4 bg-base-200 rounded-xl shadow-sm text-center">
              <h3 className="text-2xl font-bold">1K+</h3>
              <p className="text-sm text-gray-500">Products</p>
            </div>

            <div className="p-4 bg-base-200 rounded-xl shadow-sm text-center">
              <h3 className="text-2xl font-bold">4.8★</h3>
              <p className="text-sm text-gray-500">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co/1Gppkd4Y/ecommerce.jpg"
            alt="About Us"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
