import Link from "next/link";

import React from "react";

export default async function Products() {
  const data = await fetch("http://localhost:5000/products");
  const products = await data.json();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <div
          key={product._id}
          className="card  bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg"
        >
          <figure>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </figure>
          <div className="card-body">
            <p className="text-xs text-white font-semibold badge badge-secondary">{product.category}</p>
            <h2 className="card-title text-lg font-semibold">
              {product.title}
            </h2>
            
            <div className="flex items-center mt-1">
                <p className="text-primary font-bold text-lg">${product.price}</p>
              <span className="text-yellow-400 font-semibold mr-1">
                {product.rating} ⭐
              </span>
            </div>
            <div className="card-actions mt-4">
              <Link href={`/products/${product._id}`}><button className="btn btn-outline btn-primary w-full">
                View Details
              </button></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
