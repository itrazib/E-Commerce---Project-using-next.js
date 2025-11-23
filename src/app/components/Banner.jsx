import React from 'react'

export default function Banner() {
  return (
    <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg shadow-lg flex items-center justify-start px-8 md:px-16">
      <div className="text-white max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Upgrade Your Home Entertainment
        </h1>
        <p className="text-sm md:text-lg mb-6">
          Explore the latest Smart TVs and electronics with stunning 4K display and smart features.
        </p>
        <button className="btn btn-primary btn-md md:btn-lg">
          Shop Now
        </button>
      </div>
    </div>
  )
}
