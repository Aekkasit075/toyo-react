"use client";

import { useState } from "react";


type Video = {
  title: string;
  video: string;
};


const videos: Video[] = Array.from({ length: 8 }, (_, i) => ({
  title: `Video Name ${i + 1}`,
  video: "https://www.pexels.com/download/video/8716591/",
}));



function VideoCard({ video }: { video: Video }) {

  const [play, setPlay] = useState(false);


  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">

      <div className="relative h-[220px] bg-black">

        {
          play ? (

            <video
              src={video.video}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />

          ) : (

            <button
              onClick={() => setPlay(true)}
              className="relative w-full h-full"
            >

              <video
                src={video.video}
                muted
                preload="metadata"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center text-white text-xl">
                  <i className="fa-solid fa-play ml-1" />
                </div>
              </div>

            </button>

          )
        }

      </div>


      <div className="h-[55px] flex items-center px-4 text-sm">
        {video.title}
      </div>

    </div>
  );
}




export default function VideoPage() {

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");


  const itemPerPage = 6;


  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );


  const totalPage = Math.ceil(filteredVideos.length / itemPerPage);


  const currentVideos = filteredVideos.slice(
    (page - 1) * itemPerPage,
    page * itemPerPage
  );



  return (

    <main className="min-h-screen px-6 lg:px-10 xl:px-20 py-10">


      <h1 className="text-xl mb-8">
        วิดีโอแนะนำ
      </h1>



      {/* Search */}

      <div className="flex justify-center items-center gap-4 mb-12">

        <label>
          Search
        </label>


        <div className="flex w-[350px] h-[35px]">

          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="search"
            className="flex-1 border border-blue-400 rounded-l-md px-3 text-sm outline-none"
          />


          <button className="bg-blue-600 text-white w-10 rounded-r-md">
            <i className="fa-solid fa-magnifying-glass" />
          </button>

        </div>

      </div>




      {/* Videos */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

        {
          currentVideos.map((video) => (
            <VideoCard
              key={video.title}
              video={video}
            />
          ))
        }

      </div>




      {/* Pagination */}

      <div className="flex justify-center items-center gap-2 mt-10">


        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 border text-sm disabled:opacity-40"
        >
          &lt;&lt; Previous
        </button>



        {
          Array.from({ length: totalPage }, (_, i) => (

            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-8 h-8 text-sm ${
                page === i + 1
                  ? "bg-blue-600 text-white"
                  : "border"
              }`}
            >
              {i + 1}
            </button>

          ))
        }



        <button
          disabled={page === totalPage}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 border text-sm disabled:opacity-40"
        >
          Next &gt;&gt;
        </button>


      </div>


    </main>

  );
}