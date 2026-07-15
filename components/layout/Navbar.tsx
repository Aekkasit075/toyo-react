"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {

  const [open, setOpen] = useState(false)
  const [login, setLogin] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false)


  useEffect(() => {
    setLogin(localStorage.getItem("login") === "true")
  }, [])



  const logout = () => {
    localStorage.removeItem("login")
    setLogin(false)
    setProfileOpen(false)
    setMobileProfileOpen(false)
    window.location.href = "/"
  }



  const menuItem = "flex items-center gap-3 text-base text-gray-700 hover:bg-gray-100 rounded-lg px-2 py-1.5 transition"



  const ProfileMenu = () => (

    <>

      <div className="flex items-center gap-3 p-4 border-b border-gray-200">

        <Image
          src="/images/avatars/Ellipse.png"
          alt="avatar"
          width={50}
          height={50}
          className="rounded-full"
        />

        <div>
          <h3 className="font-semibold text-lg">
            สันติภพ
          </h3>

          <p className="text-gray-400">
            ข้อมูลส่วนตัว
          </p>

        </div>

      </div>



      <div className="p-3 space-y-2">


        <Link href="/" className={menuItem}>

          <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-list-check text-sm"></i>
          </span>

          สถานะการเรียน

        </Link>



        <Link href="/" className={menuItem}>

          <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-calendar-days text-sm"></i>
          </span>

          แผนการเรียน

        </Link>



        <Link href="/" className={menuItem}>

          <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-calendar text-sm"></i>
          </span>

          ปฏิทินกิจกรรม

        </Link>


      </div>




      <div className="border-t border-gray-200 p-3 space-y-2">


        <Link href="/" className={menuItem}>

          <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-gear text-sm"></i>
          </span>

          ระบบจัดการ <span className="text-sm">(เฉพาะ Admin)</span>

        </Link>



        <button
          onClick={logout}
          className="flex items-center gap-3 text-base text-red-500 hover:bg-red-50 rounded-lg px-2 py-1.5 w-full transition"
        >

          <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">

            <i className="fa-solid fa-right-from-bracket text-sm text-black"></i>

          </span>


          ออกจากระบบ


        </button>


      </div>

    </>

  )



  return (

    <nav className="w-full bg-white shadow-md relative">


      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">



        {/* LOGO */}

        <Image
          src="/images/logos/toyo3.png"
          alt="logo"
          width={80}
          height={80}
        />





        {/* DESKTOP MENU */}

        <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium text-lg">


          <Link href="/" className="hover:text-blue-800 transition">
            <i className="fa-solid fa-house text-3xl"></i>
          </Link>


          <Link href="/" className="hover:text-blue-800 transition">
            หลักสูตร
          </Link>


          <Link href="/annoucepage" className="hover:text-blue-800 transition">
            ข่าวประชาสัมพันธ์
          </Link>


          <Link href="/commonp" className="hover:text-blue-800 transition">
            คำถามที่พบบ่อย
          </Link>


          <Link href="/qapage" className="hover:text-blue-800 transition">
            วิธีการใช้งาน
          </Link>


          <Link href="/contactpage" className="hover:text-blue-800 transition">
            ติดต่อเรา
          </Link>


        </div>





        {/* DESKTOP LOGIN */}

        <div className="hidden md:block relative">


          {!login ? (

            <Link
              href="/login"
              className="bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-900 transition"
            >
              เข้าสู่ระบบ
            </Link>


          ) : (

            <>

              <button
                onClick={()=>setProfileOpen(!profileOpen)}
                className="bg-blue-900 text-white px-5 py-2 rounded-full flex items-center gap-3 hover:bg-blue-950 transition"
              >

                Username

                <Image
                  src="/images/avatars/Ellipse.png"
                  alt="avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />

              </button>



              {profileOpen && (

                <div className="absolute right-0 top-14 w-[280px] bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">

                  <ProfileMenu />

                </div>

              )}


            </>

          )}


        </div>






        {/* MOBILE BUTTON */}

        <button
          onClick={()=>setOpen(!open)}
          className={`md:hidden text-2xl text-gray-700 border rounded-lg px-3 py-1 transition ${open ? "border-gray-700 bg-gray-50" : "border-gray-300"}`}
        >

          <i className="fa-solid fa-bars"></i>

        </button>


      </div>







      {/* MOBILE MENU */}

      <div className={`md:hidden overflow-hidden border-t border-gray-100 transition-all duration-300 ${open ? "max-h-[800px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}>



        <div className="px-6 flex flex-col gap-4 text-gray-700">


          <Link href="/" className="hover:text-blue-800 transition">
            <i className="fa-solid fa-house"></i> หน้าหลัก
          </Link>


          <Link href="/" className="hover:text-blue-800 transition">
            หลักสูตร
          </Link>


          <Link href="/annoucepage" className="hover:text-blue-800 transition">
            ข่าวประชาสัมพันธ์
          </Link>


          <Link href="/commonp" className="hover:text-blue-800 transition">
            คำถามที่พบบ่อย
          </Link>


          <Link href="/qapage" className="hover:text-blue-800 transition">
            วิธีการใช้งาน
          </Link>


          <Link href="/contactpage" className="hover:text-blue-800 transition">
            ติดต่อเรา
          </Link>





          {!login ? (

            <Link
              href="/login"
              className="bg-blue-800 text-white px-5 py-2 rounded-full text-center hover:bg-blue-900 transition"
            >
              เข้าสู่ระบบ
            </Link>


          ) : (


            <div>


              <button
                onClick={()=>setMobileProfileOpen(!mobileProfileOpen)}
                className="w-full bg-blue-900 text-white px-5 py-2 rounded-full flex items-center justify-center gap-3 hover:bg-blue-950 transition"
              >

                Username

                <Image
                  src="/images/avatars/Ellipse.png"
                  alt="avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />

              </button>




              {mobileProfileOpen && (

                <div className="mt-3 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">

                  <ProfileMenu />

                </div>

              )}


            </div>


          )}



        </div>


      </div>



    </nav>

  )

}