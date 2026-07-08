"use client";

import Image from "next/image";
import Link from "next/link"
import { User, Lock, Eye } from "lucide-react";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('/images/background/auth-background.jpg')",
      }}
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logos/toyo2.png"
            alt="Toyo Logo"
            width={440}
            height={70}
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl text-center font-medium mb-8">
          เข้าสู่ระบบ
        </h1>

        {/* Username */}
        <div className="relative mb-4">
          <User
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="ชื่อผู้ใช้"
            className="w-full border rounded px-10 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="password"
            placeholder="รหัสผ่าน"
            className="w-full border rounded px-10 py-3 pr-10 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Eye
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
          />
        </div>

        {/* Forgot */}
        <div className="text-right mt-2">
          <button className="text-gray-400 text-sm hover:text-blue-700">
            ลืมรหัสผ่าน?
          </button>
        </div>

        {/* Login Button */}
        <Link
          href="/"
          className="
            w-full
            mt-5
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            rounded
            font-medium
            transition
            text-center
            block
          "
        >
          เข้าสู่ระบบ
        </Link>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="text-gray-400 text-sm">
            หรือ
          </span>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <p className="text-center text-gray-400 text-sm mb-4">
          ยังไม่มีบัญชีผู้ใช้งาน?
        </p>

        {/* Register */}
        <button
          className="
            w-full
            bg-yellow-500
            hover:bg-yellow-600
            text-white
            py-3
            rounded
            font-medium
            transition
          "
        >
          ลงทะเบียน Toyo Seikan
        </button>

      </div>
    </div>
  );
}