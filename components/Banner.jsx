

"use client";
import React, { useState } from 'react'

export default function Banner() {
    const [index, setIndex] = useState(0);
    const slidesData = [
    {
      image: "https://i.ibb.co/zT08LmSW/smartTv.jpg",
      title: "Smart TV",
      description: "Best deals on 50\" LED TVs",
      buttonText: "Shop Now",
    },
    {
      image: "https://i.ibb.co/Q3RhSDT2/laptop.jpg",
      title: "Laptop Sale",
      description: "Get the latest laptops at best prices",
      buttonText: "Shop Now",
    },
    {
      image: "https://i.ibb.co/0pcZ8Z8D/blutooth.webp",
      title: "Headphones",
      description: "High-quality sound for music lovers",
      buttonText: "Shop Now",
    },
  ];

  
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slidesData.length);
  };

  return (
    <div className="relative w-full  mx-auto mt-10">
      {/* Slides */}
      <div className="overflow-hidden relative rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slidesData.map((slide, i) => (
            <div key={i} className="min-w-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-90 object-cover rounded-lg"
              />
              <div className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-3 rounded">
                <h2 className="text-xl font-bold">{slide.title}</h2>
                <p className="text-sm">{slide.description}</p>
                <button className="mt-2 bg-yellow-500 text-black px-3 py-1 rounded font-semibold">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded"
      >
        Next
      </button>
    </div> 
  );
}
