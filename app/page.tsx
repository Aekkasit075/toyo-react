import Image from "next/image";
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
        <div className="absolute bottom-4 right-4">
          <Image
            src="/images/logos/toyo2.png"
            alt="logo"
            width={481}
            height={49}
            className="drop-shadow-xl p-2 rounded-lg"
          />
        </div>

      </div>

      {/* 🔽 MENU SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-24 flex items-center justify-between w-full">

        {/* LEFT TITLE */}
        <div className="w-1/3">
          <h2 className="leading-none font-normal text-black text-[84px]">
            เมนู<br />
            <span className="text-[#2581D1] font-[500]">
              ของเรา
            </span>
          </h2>
        </div>

        {/* RIGHT CARDS */}
        <div className="w-2/3 flex justify-end gap-8">

          {/* CARD 1 */}
          <div className="w-[210px] h-[160px] bg-pink-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">📘</div>
            <p className="text-[24px] leading-none text-gray-800">
              หลักสูตรของฉัน
            </p>
          </div>

          {/* CARD 2 */}
          <Link href="/qapage">
            <div className="w-[210px] h-[160px] bg-orange-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">📖</div>            
                <p className="text-[24px] leading-none text-gray-800">
                  วิธีการใช้งาน
                </p>                       
            </div>
          </Link> 
          {/* CARD 3 */}
          <div className="w-[210px] h-[160px] bg-green-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">📊</div>
            <p className="text-[24px] leading-none text-gray-800">
              สถานะการเรียน
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}