"use client"
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//    


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold mb-3 mt-5">WellCome Back!</h1>
        <h2 className="text-lg mb-6">Login with Mystore</h2>

        <form className="space-y-4">
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500">
            Login
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
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
           have an account?
           <Link className="text-blue-600 font-semibold" href="/register">Register</Link>
          
        </p>
      </div>
    </div>
  );
}

