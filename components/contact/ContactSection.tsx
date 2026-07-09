import Image from "next/image";


export default function ContactSection() {

  return (

    <section className="w-full bg-white px-6 lg:px-14 xl:px-20 py-10">


      {/* LOGO */}
      <div className="mb-8">

        <Image
          src="/images/logos/toyo2.png"
          alt="Toyo Seikan"
          width={400}
          height={120}
          className="w-[300px] h-auto"
        />

      </div>





      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">



        {/* MENU + ADDRESS */}
        <div className="flex gap-14">


          {/* MENU */}
          <div className="text-sm text-gray-600 leading-6">

            <p className="text-black">
              หน้าหลัก
            </p>

            <p>
              เกี่ยวกับเรา
            </p>

            <p>
              ผลิตภัณฑ์ของเรา
            </p>

            <p>
              รายงานบริษัท
            </p>

            <p>
              ติดต่อเรา
            </p>

          </div>





          {/* ADDRESS */}
          <div className="text-sm text-gray-600 leading-6">

            <p className="text-black mb-1">
              สำนักงานใหญ่
            </p>


            <p>
              95 หมู่ 3, สวนอุตสาหกรรมโรจนะ 2,
            </p>

            <p>
              ตำบล บ้านช้าง, อำเภอ อุทัย,
            </p>

            <p>
              จังหวัด พระนครศรีอยุธยา 13210 ประเทศไทย
            </p>

          </div>


        </div>





        {/* CONTACT */}
        <div className="text-sm text-gray-600 leading-6">


          <p>
            Tel: +66-35-746-655
          </p>


          <p>
            Email: info@toyoseikan.co.th
          </p>



          <div className="flex gap-4 mt-4 text-xl">

            <i className="fa-brands fa-line"></i>

            <i className="fa-brands fa-facebook"></i>

            <i className="fa-brands fa-twitter"></i>

            <i className="fa-brands fa-instagram"></i>

          </div>


        </div>






        {/* MAP */}
        <div className="w-full lg:w-[320px] h-[180px]">

          <iframe
            src="https://www.google.com/maps?q=Toyo+Seikan+Thailand+Ayutthaya&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />

        </div>




      </div>


    </section>

  );

}