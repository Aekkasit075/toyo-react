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
    source: "/announcedetail",
  },
  {
    imgsrc: "https://images.pexels.com/photos/16595082/pexels-photo-16595082.jpeg",
    title: "DummyText",
    date: "10 เมษายน 2564",
    text: "Name what is this",
    source: "/announcedetail",
  },
  {
    imgsrc: "https://images.pexels.com/photos/8190663/pexels-photo-8190663.jpeg",
    title: "DummyText",
    date: "10 เมษายน 2564",
    text: "Name what is this",
    source: "/announcedetail",
  },
  {
    imgsrc: "https://images.pexels.com/photos/8911016/pexels-photo-8911016.jpeg",
    title: "DummyText",
    date: "10 เมษายน 2564",
    text: "Name what is this",
    source: "/announcedetail",
  },
  {
    imgsrc: "https://images.pexels.com/photos/28942316/pexels-photo-28942316.jpeg",
    title: "DummyText",
    date: "10 เมษายน 2564",
    text: "Name what is this",
    source: "/announcedetail",
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

            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 640 640"
              className="w-4 h-4"
            >
              <path 
                fill="rgb(255, 255, 255)" 
                d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM480 496C488.8 496 496 488.8 496 480L496 416L408 416L408 496L480 496zM496 368L496 288L408 288L408 368L496 368zM360 368L360 288L280 288L280 368L360 368zM232 368L232 288L144 288L144 368L232 368zM144 416L144 480C144 488.8 151.2 496 160 496L232 496L232 416L144 416zM280 416L280 496L360 496L360 416L280 416zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176z"
              />
            </svg>

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