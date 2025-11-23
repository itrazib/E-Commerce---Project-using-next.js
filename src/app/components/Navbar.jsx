"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex-1">
        <a className="text-2xl font-bold text-primary">MyStore</a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/category">Category</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Right Side Buttons */}
      <div className="flex-none">
        {/* If user is logged in */}
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL || "https://i.ibb.co/2WKj5Yn/user.png"}
                />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-semibold text-center border-b pb-2">
                {user.name}
                <span className="text-xs text-gray-500">{user.email}</span>
              </li>

              <li>
                <a>Add Product</a>
              </li>
              <li>
                <a>Manage Products</a>
              </li>

              <li>
                <a className="text-error">Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          // If user is NOT logged in
          <div className="hidden lg:flex gap-3">
            <li>
              <Link href="/login" className="btn btn-outline mt-2">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="btn btn-primary mt-2">
                Register
              </Link>
            </li>
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="lg:hidden ml-2">
          <button
            className="btn btn-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="menu bg-base-100 p-3 rounded-box mt-3 shadow w-full absolute top-16 left-0 lg:hidden">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/category">Category</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>

          {!user && (
            <>
              <li>
                <Link href="/login" className="btn btn-outline mt-2">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="btn btn-primary mt-2">
                  Register
                </Link>
              </li>
            </>
          )}

          {user && (
            <>
              <li>
                <a>Add Product</a>
              </li>
              <li>
                <a>Manage Products</a>
              </li>
              <li>
                <a className="text-error">Logout</a>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
}
