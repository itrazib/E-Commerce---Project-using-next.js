"use client";

export default function Testimonials() {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          What Our <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Customers</span> Say
        </h2>
        <p className="text-center text-gray-500 mb-12">
          We value every feedback from our happy shoppers ❤️
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/80?img=32"
                className="w-14 h-14 rounded-full border"
              />
              <div>
                <h3 className="font-bold">Sophia Williams</h3>
                <p className="text-sm text-gray-500">Verified Buyer</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              “Amazing product quality! The delivery was fast and packaging was premium.
              Highly recommended shopping experience.”
            </p>
            <p className="text-yellow-500 mt-3 text-lg">★★★★★</p>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/80?img=48"
                className="w-14 h-14 rounded-full border"
              />
              <div>
                <h3 className="font-bold">David Brown</h3>
                <p className="text-sm text-gray-500">Tech Enthusiast</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              “I bought a smart LED TV and the quality is top-notch. Price was also
              reasonable compared to the market.”
            </p>
            <p className="text-yellow-500 mt-3 text-lg">★★★★★</p>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/80?img=67"
                className="w-14 h-14 rounded-full border"
              />
              <div>
                <h3 className="font-bold">Emily Carter</h3>
                <p className="text-sm text-gray-500">Frequent Shopper</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              “Customer service was fantastic. They helped me choose the right headphones.
              Really happy with the purchase!”
            </p>
            <p className="text-yellow-500 mt-3 text-lg">★★★★★</p>
          </div>
        </div>
      </div>
    </section>
  );
}
