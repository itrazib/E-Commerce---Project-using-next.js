"use client";

export default function Contact() {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Get in <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-center text-gray-500 mb-12">
          We are here to answer your questions and provide support. Send us a message!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Message</label>
                <textarea
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full"
                  rows={5}
                  required
                />
              </div>

              <button className="btn w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>support@yourstore.com</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>+880 1234 567 890</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>123, Shopping Street, Dhaka, Bangladesh</p>
            </div>

            {/* Optional Map Placeholder */}
            <div className="p-6 bg-white rounded-xl shadow-lg h-64 flex items-center justify-center text-gray-400">
              Map Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
