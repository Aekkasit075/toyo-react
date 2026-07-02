"use client"

import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">

      {/* 🔥 ADD CONTAINER ตรงนี้ */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logos/toyo3.png"
            alt="logo"
            width={80}
            height={80}
          />
        </div>

        {/* CENTER: Menu + Home Icon */}
        <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium text-lg">

          <Link href="/" className="hover:text-blue-800 flex items-center gap-2 transition text-lg">
            <i className="fa-solid fa-house text-xl"></i>
          </Link>

          <Link href="/" className="hover:text-blue-800 transition">หลักสูตร</Link>
          <Link href="/" className="hover:text-blue-800 transition">ข่าวประชาสัมพันธ์</Link>
          <Link href="/" className="hover:text-blue-800 transition">คำถามที่พบบ่อย</Link>
          <Link href="/" className="hover:text-blue-800 transition">วิธีการใช้งาน</Link>
          <Link href="/" className="hover:text-blue-800 transition">ติดต่อเรา</Link>
        </div>

        {/* RIGHT: Login */}
        <button className="bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-900 transition">
          เข้าสู่ระบบ
        </button>

      </div>
    </nav>
  )
}