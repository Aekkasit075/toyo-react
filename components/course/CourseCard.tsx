import Image from "next/image"

type Props = {
    title: string
    image: string
    author: string
}

export default function CourseCard({ title, image, author }: Props) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

            {/* IMAGE */}
            <div className="relative w-full h-[260px] p-2 bg-white">
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-200">
                    <Image
                        src={image}
                        alt="course"
                        fill
                        sizes="(max-width: 640px) 100vw,
                            (max-width: 1024px) 50vw,
                            33vw"
                        className="object-cover"
                    />
                </div>

                {/* rating */}
                <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-full text-xs font-semibold shadow flex items-center gap-1">
                    <i className="fa-solid fa-star text-yellow-500"></i> 5.0
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">

                <h3 className="text-[18px] font-semibold leading-snug mb-4">
                    {title}
                </h3>

                {/* INFO */}
                <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-600">

                    <div className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-200 bg-gray-50">
                        <i className="fa-solid fa-book-open"></i>
                        <span>47 lesson</span>
                    </div>

                    <div className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-200 bg-gray-50">
                        <i className="fa-regular fa-clock"></i>
                        <span>1h 30m</span>
                    </div>

                    <div className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-200 bg-gray-50">
                        <i className="fa-solid fa-graduation-cap"></i>
                        <span>432 students</span>
                    </div>

                </div>

                {/* AUTHOR */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                        <Image
                            src="/images/avatars/Ellipse.png"
                            alt="user"
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <span className="text-sm text-gray-700">{author}</span>
                </div>

            </div>
        </div>
    )
}