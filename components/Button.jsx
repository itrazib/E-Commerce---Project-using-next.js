"use client";
import React from 'react'

export default function Button() {
  return (
    <button
        onClick={() => history.back()}
        className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-blue-300 transition"
      >
        ← Back
      </button>
  )
}
