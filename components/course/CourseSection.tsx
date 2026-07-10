import CourseCard from "./CourseCard"

export default function CourseSection() {
  return (
    <div className="w-full bg-[#eeeeee] py-12">
      
      {/* container สำหรับจัด content */}
      <div className="px-6 lg:px-10 xl:px-20">

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">

            <CourseCard
            title="Entrepreneurship & Business Growth Strategies Course"
            image="https://www.globalcareercounsellor.com/blog/wp-content/uploads/2018/05/Online-Career-Counselling-course.jpg"
            author="Sausage Rcode"
            />

            <CourseCard
            title="Entrepreneurship & Business Growth Strategies Course"
            image="https://images.ctfassets.net/2htm8llflwdx/11XVEG6328RyDRxMdYJgwO/1f26de6b5b8941c805492ddb6396b8ec/SL_Professional_Courses_SEO.jpg"
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