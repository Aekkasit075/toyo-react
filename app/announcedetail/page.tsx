"use client"

import Image from "next/image"


export default function AnnounceDetail() {

  return (

    <div className="min-h-screen bg-white text-black">


      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-8">

        <div className="flex justify-between items-center text-base">

            <h1 className="font-medium text-xl">
            ข่าวประชาสัมพันธ์
            </h1>


            <div className="text-gray-500 text-sm">
            Home　&gt;　ข่าวประชาสัมพันธ์
            </div>


        </div>

      </div>



      {/* CONTENT */}

      <div className="max-w-3xl mx-auto px-6 mt-12">


        {/* VIEW */}

        <div className="flex justify-center items-center gap-2 text-sm">

          <i className="fa-solid fa-eye"></i>

          <span>
            300
          </span>

        </div>



        <div className="w-8 h-[2px] bg-blue-500 mx-auto mt-3 mb-10"></div>





        {/* MAIN IMAGE */}

        <div className="relative w-full h-[380px]">

          <Image

            src="https://images.pexels.com/photos/18435520/pexels-photo-18435520.jpeg"

            alt="announce"

            fill

            className="object-cover"

          />

        </div>







        {/* TITLE */}

        <div className="text-center mt-10">


          <h2 className="text-xl font-medium">

            เปิดตัวเทคโนโลยีอัจฉริยะใหม่
            เพื่อยกระดับอุตสาหกรรมการผลิต

          </h2>


          <p className="text-sm text-gray-500 mt-3">

            10 เมษายน 2564

          </p>


        </div>



        {/* CONTENT */}

        <div className="mt-12 text-base leading-8">

        <ol className="list-decimal pl-6 space-y-6">

            <li>
            บริษัท Toyo Seikan ได้ประกาศเปิดตัวแนวทางการพัฒนาเทคโนโลยีใหม่
            ที่มุ่งเน้นการนำระบบอัจฉริยะเข้ามาช่วยเพิ่มประสิทธิภาพในการผลิต
            และปรับปรุงกระบวนการทำงานให้มีความแม่นยำมากยิ่งขึ้น
            </li>


            <li>
            ภายในงานมีการนำเสนอเทคโนโลยีด้านระบบอัตโนมัติ
            รวมถึงแนวคิดการประยุกต์ใช้ปัญญาประดิษฐ์
            เพื่อสนับสนุนการทำงานของบุคลากรในภาคอุตสาหกรรม
            </li>


            <li>
            การพัฒนาครั้งนี้เป็นส่วนหนึ่งของเป้าหมายในการสร้างโรงงานอัจฉริยะ
            ที่สามารถลดการใช้ทรัพยากร เพิ่มความปลอดภัย
            และช่วยลดผลกระทบต่อสิ่งแวดล้อม
            </li>


            <li>
            บริษัทให้ความสำคัญกับการวิจัยและพัฒนาอย่างต่อเนื่อง
            เพื่อส่งมอบผลิตภัณฑ์ที่มีคุณภาพสูง
            และตอบสนองต่อความต้องการของลูกค้าในยุคดิจิทัล
            </li>


            <li>
            ผู้สนใจสามารถติดตามข่าวสารและข้อมูลเพิ่มเติมเกี่ยวกับนวัตกรรมใหม่
            ผ่านช่องทางประชาสัมพันธ์ของ Toyo Seikan ได้อย่างต่อเนื่อง
            </li>


            <li>
            บริษัทมุ่งมั่นพัฒนาศักยภาพของบุคลากร
            และนำเทคโนโลยีสมัยใหม่มาปรับใช้กับกระบวนการทำงาน
            เพื่อสร้างความเติบโตอย่างยั่งยืน
            </li>


            <li>
            การเปลี่ยนแปลงครั้งนี้ถือเป็นอีกหนึ่งก้าวสำคัญ
            ในการเตรียมความพร้อมเข้าสู่ยุคอุตสาหกรรมดิจิทัล
            และเพิ่มขีดความสามารถในการแข่งขันระดับสากล
            </li>


        </ol>

        </div>


        {/* SECOND IMAGE */}

        <div className="mt-16">


          <div className="relative w-full h-[320px] overflow-hidden rounded-md">


            <Image

              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"

              alt="technology"

              fill

              className="object-cover"

            />


          </div>



          <p className="text-center text-sm text-gray-500 mt-4">

            ภาพประกอบการพัฒนาเทคโนโลยีและระบบอัตโนมัติ

          </p>


        </div>







        {/* DESCRIPTION */}

        <div className="mt-12 flex gap-5 items-start mb-24">


          <div className="w-[3px] h-16 bg-blue-500"></div>


          <p className="text-base text-gray-600 leading-7">

            Toyo Seikan มุ่งมั่นพัฒนาเทคโนโลยีและนวัตกรรมใหม่อย่างต่อเนื่อง
            เพื่อเพิ่มศักยภาพในการผลิต พร้อมสร้างมาตรฐานใหม่ให้กับอุตสาหกรรม
            และเตรียมความพร้อมสำหรับการเปลี่ยนแปลงในอนาคต

          </p>


        </div>



      </div>


    </div>

  )

}