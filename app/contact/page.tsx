"use client"

import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pb-20">

      {/* TITLE */}
      <div className="max-w-7xl mx-auto px-6 pt-10">

        <h1 className="text-3xl font-medium text-center mb-10">
          ติดต่อเรา
        </h1>


        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">


          {/* IMAGE */}
          <div className="w-full lg:w-1/2 min-h-[360px] relative overflow-hidden">
            <Image
              src="/images/logos/toyo1.png"
              alt="Toyo Seikan"
              fill
              className="object-cover"
            />
          </div>



          {/* CONTACT CARD */}
          <div className="w-full lg:w-1/2 min-h-[360px] border border-gray-200 rounded-md p-8 shadow-sm">


            {/* Location */}
            <div className="flex gap-5 mb-7">

              <i className="fa-solid fa-location-dot text-cyan-500 text-2xl mt-1"></i>

              <div>
                <h3 className="text-cyan-500 text-lg">
                  ที่ตั้ง
                </h3>

                <p className="text-sm text-gray-700 leading-6">
                  95 หมู่ 3, สวนอุตสาหกรรมบางปะอิน
                  <br />
                  ตำบลบ้านหว้า อำเภอบางปะอิน
                  <br />
                  จังหวัดพระนครศรีอยุธยา 13120 ประเทศไทย
                </p>
              </div>

            </div>



            {/* Email */}
            <div className="flex gap-5 mb-7">

              <i className="fa-solid fa-envelope text-cyan-500 text-2xl mt-1"></i>

              <div>
                <h3 className="text-cyan-500 text-lg">
                  อีเมล
                </h3>

                <p className="text-sm">
                  info@toyoseikan.co.th
                </p>
              </div>

            </div>




            {/* Phone */}
            <div className="flex gap-5">

              <i className="fa-solid fa-phone text-cyan-500 text-2xl mt-1"></i>

              <div>

                <h3 className="text-cyan-500 text-lg">
                  โทรศัพท์
                </h3>

                <p className="text-sm">
                  +66-35-746-555
                </p>

              </div>

            </div>




            {/* SOCIAL */}
            <div className="flex justify-end gap-4 mt-8">

              <i className="fa-brands fa-facebook text-blue-500 text-2xl"></i>

              <i className="fa-brands fa-x-twitter text-black text-2xl"></i>

              <i className="fa-brands fa-youtube text-red-600 text-2xl"></i>

            </div>


          </div>

        </div>





        {/* MAP */}
        <div className="mt-8 mb-10 border rounded-md overflow-hidden">

          <div className="w-full h-[500px]">

            <iframe
              src="https://www.google.com/maps?q=Toyo+Seikan+Thailand+Ayutthaya&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />

          </div>

        </div>


      </div>

    </div>
  )
}