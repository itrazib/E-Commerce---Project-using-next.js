"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

export default function AddProducts() {
  const { data: session, status } = useSession()

  if (status === "loading") return <p>Loading...</p>

  if (!session) {
    redirect("/login")
  }
  
  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-200">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8">
        Add New Product
      </h2>

      {/* Form */}
      <form  className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Product Title */}
        <div>
          <label className="block text-sm font-semibold mb-1">Product Title</label>
          <input
            type="text"
            name="title"
            placeholder="Wireless Bluetooth Headphones"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold mb-1">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Electronics"
          
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-semibold mb-1">Price ($)</label>
          <input
            type="number"
            name="price"
            step="0.01"
            placeholder="59.99"
           
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block text-sm font-semibold mb-1">Brand</label>
          <input
            type="text"
            name="brand"
            placeholder="SoundMax"
          
            className="input input-bordered w-full"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-semibold mb-1">Rating</label>
          <input
            type="number"
            name="rating"
            step="0.1"
            placeholder="4.5"
            
            className="input input-bordered w-full"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-semibold mb-1">Stock</label>
          <input
            type="number"
            name="stock"
            placeholder="25"
           
            className="input input-bordered w-full"
          />
        </div>

        {/* Image URL */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1">Product Image URL</label>
          <input
            type="url"
            name="image"
            placeholder="https://i.ibb.co/0pcZ8Z8D/blutooth.webp"
           
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1">Product Description</label>
          <textarea
            name="description"
            placeholder="Enter full product description..."
          
            className="textarea textarea-bordered w-full h-36"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button className="btn w-full py-3 text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:scale-[1.02] transition-all rounded-xl">
            Add Product
          </button>
        </div>
      </form>
    </div>
  )
}
