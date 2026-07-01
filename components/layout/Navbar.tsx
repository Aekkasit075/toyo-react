"use client"

import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">

      {/* LEFT: Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="/images/logos/toyo3.png"
          alt="logo"
          width={55}
          height={55}
        />
      </div>

      {/* CENTER: Menu + Home Icon */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        
        <Link href="/" className="hover:text-blue-800 flex items-center gap-2">
          <i className="fa-solid fa-house"></i>
        </Link>

        <Link href="/">หลักสูตร</Link>
        <Link href="/">ข่าวประชาสัมพันธ์</Link>
        <Link href="/">คำถามที่พบบ่อย</Link>
        <Link href="/">วิธีการใช้งาน</Link>
        <Link href="/">ติดต่อเรา</Link>
      </div>

      {/* RIGHT: Login */}
      <button className="bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-900 transition">
        เข้าสู่ระบบ
      </button>

    </nav>
  )
}