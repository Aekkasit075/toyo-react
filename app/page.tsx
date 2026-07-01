import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50">

      {/* HERO BANNER */}
      <div className="relative w-full h-[00px] md:h-[450px] lg:h-[600px] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/banners/banner.png"
          alt="banner"
          fill
          className="object-cover"
          priority
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* LOGO BOTTOM RIGHT (ใหญ่ขึ้น) */}
        <div className="absolute bottom-4 right-4">
          <Image
            src="/images/logos/toyo2.png"
            alt="logo"
            width={560}
            height={560}
            className="drop-shadow-xl p-2 rounded-lg"
          />
        </div>

      </div>

    </div>
  );
}