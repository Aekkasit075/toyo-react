import Image from "next/image";
import Link from "next/link";


type NewsItem = {
  imgsrc: string;
  title: string;
  date: string;
  text: string;
  source: string;
};


const news: NewsItem[] = [
  {
    imgsrc: "https://images.pexels.com/photos/18435520/pexels-photo-18435520.jpeg",
    title: "DummyText",
    date: "10 เมษายน 2564",
    text: "Name what is this",
    source: "/",
  },
  {
    imgsrc: "https://images.pexels.com/photos/16595082/pexels-photo-16595082.jpeg",
    title: "DummyText",
    date: "10 เมษายน 2564",
    text: "Name what is this",
    source: "/",
  },
  {
    imgsrc: "https://images.pexels.com/photos/8190663/pexels-photo-8190663.jpeg",
    title: "DummyText",
    date: "10 เมษายน 2564",
    text: "Name what is this",
    source: "/",
  },
  {
    imgsrc: "https://images.pexels.com/photos/8911016/pexels-photo-8911016.jpeg",
    title: "DummyText",
    date: "10 เมษายน 2564",
    text: "Name what is this",
    source: "/",
  },
  {
    imgsrc: "https://images.pexels.com/photos/28942316/pexels-photo-28942316.jpeg",
    title: "DummyText",
    date: "10 เมษายน 2564",
    text: "Name what is this",
    source: "/",
  },
];



function NewsCard({
  item,
  large = false,
}: {
  item: NewsItem;
  large?: boolean;
}) {

  return (

    <Link href={item.source}>

      <article
        className={`relative overflow-hidden rounded-xl group ${
          large ? "h-[300px]" : "h-[260px]"
        }`}
      >

        <Image
          src={item.imgsrc}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />


        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />


        {/* Content */}
        <div className="absolute bottom-0 left-0 p-5 text-white">


          <h2 className="text-base font-medium leading-tight line-clamp-2">
            {item.title}
          </h2>


          <div className="flex items-center gap-2 text-xs mt-3">
            <span>📅</span>
            <span>{item.date}</span>
          </div>


          <p className="text-xs mt-1">
            {item.text}
          </p>


        </div>


      </article>

    </Link>

  );

}





export default function NewsSection() {

  return (

    <section className="px-6 lg:px-10 xl:px-20 py-12">


      {/* Header */}
      <div className="flex justify-between items-center mb-6">


        <h1 className="text-2xl font-semibold border-b-4 border-blue-500 pb-2 text-black">
          ข่าวประชาสัมพันธ์
        </h1>



        <Link href="/annoucepage">

          <button className="bg-black text-white px-7 py-2 rounded-full text-sm hover:bg-gray-800 transition">
            ดูทั้งหมด
          </button>

        </Link>


      </div>




      {/* News Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">


        {/* Main News */}
        <div className="lg:col-span-2">

          <NewsCard
            item={news[0]}
            large
          />

        </div>



        {/* Side News */}
        <NewsCard item={news[1]} />



        {/* Bottom News */}
        {
          news.slice(2).map((item) => (

            <NewsCard
              key={item.imgsrc}
              item={item}
            />

          ))
        }


      </div>


    </section>

  );

}