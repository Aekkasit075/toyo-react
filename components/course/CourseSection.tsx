import CourseCard from "./CourseCard"

export default function CourseSection() {
  return (
    <div className="w-full px-6 lg:px-10 xl:px-20">
        <div className="bg-[#F7F7F7] py-12 rounded-2xl">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black border-b-2 border-blue-600 pb-1">
            หลักสูตรของเรา
            </h2>

            <button className="px-5 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition">
            ดูทั้งหมด
            </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <CourseCard
            title="Entrepreneurship & Business Growth Strategies Course"
            image="/images/courses/course1.png"
            author="Sausage Rcode"
            />

            <CourseCard
            title="Entrepreneurship & Business Growth Strategies Course"
            image="/images/courses/course1.png"
            author="Sausage Rcode"
            />

            <CourseCard
            title="Entrepreneurship & Business Growth Strategies Course"
            image="/images/courses/course1.png"
            author="Sausage Rcode"
            />

            <CourseCard
            title="Entrepreneurship & Business Growth Strategies Course"
            image="/images/courses/course1.png"
            author="Sausage Rcode"
            />

            <CourseCard
            title="Entrepreneurship & Business Growth Strategies Course"
            image="/images/courses/course1.png"
            author="Sausage Rcode"
            />

            <CourseCard
            title="Entrepreneurship & Business Growth Strategies Course"
            image="/images/courses/course1.png"
            author="Sausage Rcode"
            />

        </div>
        </div>
    </div>
  )
}