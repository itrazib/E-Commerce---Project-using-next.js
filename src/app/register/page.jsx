"use client"
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] p-4">
      <div className="w-full max-w-md bg-white shadow-2xl  rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-2">Create An Account</h2>
        <p className=" mb-6">Register With MyStore</p>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-semibold">Full Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 mt-1 rounded-xl border focus:ring focus:ring-blue-300 outline-none"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 mt-1 rounded-xl border focus:ring focus:ring-blue-300 outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 mt-1 rounded-xl border focus:ring focus:ring-blue-300 outline-none"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-500 to-blue-500">
            Register
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button
         onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full py-2 rounded-xl border flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-100"
        >
          <FcGoogle size={22} />
          Sign up with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?
          <Link className="text-blue-600 font-semibold" href="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
}
