import Image from "next/image";
import CourseSection from "@/components/course/CourseSection";
import AnnounceSection from "@/components/announce/announceSection";
import VideoceSection from "@/components/video/VideoSection";
import QASection from "@/components/qa/qaSection";
import ContactSection from "@/components/contact/ContactSection";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-50">

      {/* HERO BANNER (auto height) */}
      <div className="relative w-full">

        <Image
          src="/images/banners/banner.png"
          alt="banner"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* logo */}
        <div className="absolute bottom-4 right-4 w-[200px] sm:w-[300px] md:w-[340px] lg:w-[440px] xl:w-[540px]">
          <Image
            src="/images/logos/toyo2.png"
            alt="logo"
            width={481}
            height={481}
            className="w-full h-auto"
          />
        </div>

      </div>

      {/* 🔽 MENU SECTION (DESKTOP FIXED + MOBILE RESPONSIVE ONLY) */}
      <div className="w-full px-6 lg:px-10 xl:px-20 py-10 flex flex-col lg:flex-row items-center justify-between">

        {/* LEFT TITLE (desktop เหมือนเดิม) */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h2 className="leading-none font-normal text-black text-[48px] sm:text-[64px] lg:text-[76px]">

            {/* mobile = inline, desktop = block */}
            <span className="inline lg:block mr-2 lg:mr-0">
              เมนู
            </span>

            <span className="text-[#2581D1] font-[600] inline lg:block">
              ของเรา
            </span>

          </h2>
        </div>

        {/* RIGHT CARDS (desktop = เหมือนเดิม, mobile = stack) */}
        <div className="w-full lg:w-2/3 flex flex-col sm:flex-row lg:flex-row justify-center lg:justify-end gap-6 lg:gap-10 mt-10 lg:mt-0">

          {/* CARD 1 */}
          <div className="w-full sm:w-[220px] h-[160px] bg-pink-100 rounded-2xl flex flex-col items-center lg:items-start justify-center px-8 hover:shadow-lg transition">
            <div className="text-4xl mb-3"><i className="fa-vellum fa-solid fa-desktop text-blue-400"></i></div>
            <p className="text-[24px] leading-none text-gray-800">
              หลักสูตรของฉัน
            </p>
          </div>

          {/* CARD 2 */}
          <Link href="/qapage">
            <div className="w-full sm:w-[220px] h-[160px] bg-orange-100 rounded-2xl flex flex-col items-center lg:items-start justify-center px-8 hover:shadow-lg transition">
              <div className="text-4xl mb-3"><i className="fa-sharp fa-solid fa-book-open text-yellow-500"></i></div>
              <p className="text-[24px] leading-none text-gray-800">
                วิธีการใช้งาน
              </p>
            </div>
          </Link>
          {/* CARD 3 */}
          <div className="w-full sm:w-[220px] h-[160px] bg-green-100 rounded-2xl flex flex-col items-center lg:items-start justify-center px-8 hover:shadow-lg transition">
            <div className="text-4xl mb-3"><i className="fa-solid fa-list-check text-blue-800"></i></div>
            <p className="text-[24px] leading-none text-gray-800">
              สถานะการเรียน
            </p>
          </div>

        </div>

      </div>

      {/* 🔽 COURSE SECTION */}
      <CourseSection />

       {/* 🔽 announce SECTION */}
      <AnnounceSection />

      {/* HERO COURSE SECTION */}
      <section
        className="w-full min-h-[420px] flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-pink-50 px-6"
      >
        <div className="text-center max-w-4xl">

          {/* TITLE */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-black"
          >
            Learn and Grow with
            <br />
            Top{" "}
            <span className="text-blue-500">
              Online Courses
            </span>
          </h1>


          {/* DESCRIPTION */}
          <p
            className="mt-8 text-sm text-gray-700 max-w-xl mx-auto"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br />
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>


          {/* BUTTON */}
          <div
            className="flex justify-center gap-4 mt-8"
          >

            {/* Explore */}
            <Link href="/">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full text-sm transition"
              >
                Explore Courses
              </button>
            </Link>


            {/* Contact */}
            <Link href="/">
              <button
                className="border border-gray-400 text-gray-700 px-7 py-3 rounded-full text-sm hover:bg-gray-100 transition"
              >
                Contact Us
              </button>
            </Link>


          </div>

        </div>
      </section>

      {/* 🔽 VIDEO SECTION */}
      <VideoceSection />

      {/* 🔽 VIDEO SECTION */}
      <QASection />

      {/* 🔽 CONTACT SECTION */}
      <ContactSection />
    </div>
  );
}