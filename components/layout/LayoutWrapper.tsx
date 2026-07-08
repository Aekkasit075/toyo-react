"use client"

import { usePathname } from "next/navigation"
import Navbar from "./Navbar"
import Footer from "./footer"

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  // ซ่อน Navbar/Footer สำหรับหน้า login และ register
  const hideLayout = ["/login", "/register"].includes(pathname)

  return (
    <>
      {!hideLayout && <Navbar />}

      <main className="flex-1">
        {children}
      </main>

      {!hideLayout && <Footer />}
    </>
  )
}