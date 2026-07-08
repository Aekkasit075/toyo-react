"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)


  return (
    <nav className="w-full bg-white shadow-md relative">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LEFT: Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logos/toyo3.png"
            alt="logo"
            width={80}
            height={80}
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium text-lg">

          <Link href="/" className="hover:text-blue-800 flex items-center gap-2">
            <i className="fa-solid fa-house text-3xl"></i>
          </Link>

          <Link href="/" className="hover:text-blue-800 transition">หลักสูตร</Link>
          <Link href="/annoucepage" className="hover:text-blue-800 transition">ข่าวประชาสัมพันธ์</Link>
          <Link href="/commonp" className="hover:text-blue-800 transition">คำถามที่พบบ่อย</Link>
          <Link href="/" className="hover:text-blue-800 transition">วิธีการใช้งาน</Link>
          <Link href="/contactpage" className="hover:text-blue-800 transition">ติดต่อเรา</Link>
          
        </div>

        {/* DESKTOP LOGIN */}
        <div className="hidden md:block">
          <Link href="/login"
          className="bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-900 transition">
            เข้าสู่ระบบ
          </Link>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className={`
            md:hidden text-2xl text-gray-700
            border rounded-lg px-3 py-1
            transition-all duration-200
            ${open ? "border-gray-700 border-2 bg-gray-50" : "border-gray-300"}
          `}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

      </div>

      {/* MOBILE DROPDOWN (SMOOTH) */}
      <div
        className={`
          md:hidden overflow-hidden border-t border-gray-100
          transition-all duration-300 ease-in-out
          ${open ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
        `}
      >

        <div className="px-6 flex flex-col gap-4 text-gray-700">

          <Link href="/" className="flex items-center gap-2">
            <i className="fa-solid fa-house"></i> หน้าหลัก
          </Link>

          <Link href="/">หลักสูตร</Link>
          <Link href="/annoucepage">ข่าวประชาสัมพันธ์</Link>
          <Link href="/commonp">คำถามที่พบบ่อย</Link>
          <Link href="/">วิธีการใช้งาน</Link>
          <Link href="/contactpage">ติดต่อเรา</Link>

          <Link href="/login"
          className="bg-blue-800 text-white px-5 py-2 rounded-full mt-3 text-center">
            เข้าสู่ระบบ
          </Link>

        </div>

      </div>

    </nav>
  )
}