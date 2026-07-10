"use client";

import { useState } from "react";
import Link from "next/link";


const videos = [
  {
    title: "Virtual Classroom",
    video:
      "https://www.pexels.com/download/video/7999365/",
  },
  {
    title: "Online Learning",
    video:
      "https://www.pexels.com/download/video/8198515/",
  },
  {
    title: "Programming Course",
    video:
      "https://www.pexels.com/download/video/8126006/",
  },
];



function VideoCard({ item }: any) {

  const [play, setPlay] = useState(false);


  return (

    <div
      className="
        h-[300px]
        rounded-2xl
        overflow-hidden
        shadow-lg
        bg-black
        relative
      "
    >


      {
        play ? (

          <video
            src={item.video}
            controls
            autoPlay
            className="
              w-full
              h-full
              object-cover
            "
          />

        ) : (

          <button
            onClick={() => setPlay(true)}
            className="
              w-full
              h-full
              relative
            "
          >


            <video
              src={item.video}
              preload="metadata"
              muted
              className="
                w-full
                h-full
                object-cover
              "
            />


            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />


            {/* Play */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >

              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-white/80
                  flex
                  items-center
                  justify-center
                  text-xl
                  text-black
                "
              >
                ▶
              </div>

            </div>


          </button>

        )

      }


    </div>

  );

}





export default function VideoSection() {


  return (

    <section className="px-6 lg:px-10 xl:px-20 py-10">


      {/* Header */}
        <div className="flex justify-between items-center mb-6">


        <h2 className="text-xl font-semibold border-b-4 border-blue-500 pb-2 text-black">
            วิดีโอแนะนำ
        </h2>



        <Link href="/videopage">

            <button
            className="
                bg-black
                text-white
                px-7
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



      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


        {
          videos.map((video,index)=>(

            <VideoCard
              key={index}
              item={video}
            />

          ))
        }


      </div>


    </section>

  );

}