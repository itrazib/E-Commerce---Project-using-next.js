"use client";

export default function Categories() {
    
  const categories = [
    {
      name: "Electronics",
      img: "https://i.ibb.co/zT08LmSW/smartTv.jpg",
    },
    {
      name: "Computers",
      img: "https://i.ibb.co/0pcZ8Z8D/blutooth.webp",
    },
    {
      name: "Fashion",
      img: "https://i.ibb.co/3m6NtTxb/bagpack.jpg",
    },
    {
      name: "Sports",
      img: "https://i.ibb.co/995QtZJX/football.jpg",
    },
    {
      name: "Home Appliances",
      img: "https://i.ibb.co/7Jnx8Q0K/kitchen-blender.jpg",
    },
  ];



  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-4xl font-bold text-center mb-10">
          Shop By{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Category
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group cursor-pointer bg-base-100 rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col items-center"
            >
              <div className="w-full h-32 rounded-lg overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="mt-3 text-lg font-semibold">{cat.name}</h3>

              <button className="btn btn-sm mt-3 btn-outline btn-primary group-hover:btn-primary group-hover:text-white transition">
                View Products
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
