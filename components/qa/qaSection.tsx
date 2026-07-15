"use client";

import { useState } from "react";
import Link from "next/link";

const faq = [
  {
    title: "1. การเรียน/สอบ ผ่านระบบ E-Learning",
    detail: "รายละเอียดเกี่ยวกับการเรียนและการสอบผ่านระบบ E-Learning"
  },
  {
    title: "2. ลืมรหัสผ่าน",
    detail: "สามารถรีเซ็ตรหัสผ่านผ่านระบบได้"
  },
  {
    title: "3. วิธีแก้ปัญหาการใช้งาน",
    detail: "ตรวจสอบการเชื่อมต่ออินเทอร์เน็ตและติดต่อเจ้าหน้าที่"
  },
  {
    title: "4. สามารถใช้งานภาษาอะไรได้บ้าง",
    detail: "ระบบรองรับภาษาไทยและภาษาอังกฤษ"
  },
  {
    title: "5. วิธีการเรียนตาม Road map",
    detail: "สามารถดูแผนการเรียนได้จากหน้าหลักสูตร"
  },
];



export default function FAQSection() {

  const [open, setOpen] = useState<number | null>(null);


  return (

    <section className="w-full py-16 px-6">


      <h2 className="text-center text-5xl font-medium mb-10 text-black">

        คำถามที่พบบ่อย

      </h2>



      <div className="w-full max-w-xl mx-auto space-y-3 text-black">


        {
          faq.map((item,index)=>(

            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >


              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full h-[48px] px-5 flex items-center justify-between text-lg"
              >

                <span>
                  {item.title}
                </span>


                <i
                  className={`fa-solid fa-chevron-down transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />


              </button>



              {
                open === index && (

                  <div className="px-5 py-4 text-sm text-gray-600 bg-gray-50 border-t-1 border-gray-200">

                    {item.detail}

                  </div>

                )
              }


            </div>

          ))
        }


      </div>



      <div className="flex justify-center mt-8">

        <Link href="/commonp">

            <button
            className="
                bg-black
                text-white
                px-8
                py-2
                rounded-full
                text-sm
                hover:bg-gray-800
                transition
            "
            >
            ดูทั้งหมด
            </button>

        </Link>

      </div>


    </section>

  );

}