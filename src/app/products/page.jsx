"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    fetch("https://nextjs-project-server.vercel.app/all-products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        setLoading(false);
        if (result.length === 0) {
          setNoResult(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = () => {
    fetch(`https://nextjs-project-server.vercel.app/search?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
        if (data.length === 0) setNoResult(true);
      });
  };

  return (
    <div className="mb-5">
      <div className="font-bold text-5xl text-center my-8">
        <h1>
          All{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Products
          </span>
        </h1>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center my-6">
        <h1 className="text-2xl font-semibold">
          Total Products <span>({products?.length || 0})</span>
        </h1>
        <div className="flex items-center">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
              placeholder="Search"
            />
          </label>
          <button
            onClick={handleSearch}
            className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white"
          >
            Search
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <p className="text-center text-xl font-semibold my-10">Loading...</p>
      )}

      {!loading && noResult && (
        <p className="text-center text-xl font-bold text-red-500 my-10">
          No product found ❌
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.map((product) => (
          <div
            key={product._id}
            className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg"
          >
            <figure>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <p className="text-xs text-white font-semibold badge badge-secondary">
                {product.category}
              </p>

              <h2 className="card-title text-lg font-semibold">
                {product.title}
              </h2>

              <div className="flex items-center mt-1">
                <p className="text-primary font-bold text-lg">
                  ${product.price}
                </p>
                <span className="text-yellow-400 font-semibold ml-2">
                  ⭐ {product.rating}
                </span>
              </div>

              <div className="card-actions mt-4">
                <Link href={`/products/${product._id}`}>
                  <button className="btn btn-outline btn-primary w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
