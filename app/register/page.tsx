"use client";

import Link from "next/link";

export default function RegisterPage() {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex justify-center px-6 py-12 overflow-y-auto"
            style={{
                backgroundImage: "url('/images/background/auth-background.jpg')",
            }}
        >
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 my-8">

                <h1 className="text-4xl text-center font-semibold mb-6">
                    ลงทะเบียนสมาชิก
                </h1>

                {/* Username & Password */}
                <div className="grid grid-cols-2 gap-3">

                    <div>
                        <label className="text-gray-500 text-sm">ชื่อผู้ใช้งาน</label>

                        <input
                            type="text"
                            placeholder="ชื่อผู้ใช้งาน"
                            className="w-full border rounded px-3 py-2 mt-1"
                        />
                    </div>

                    <div>
                        <label className="text-gray-500 text-sm">รหัสผ่าน</label>

                        <input
                            type="password"
                            placeholder="รหัสผ่าน"
                            className="w-full border rounded px-3 py-2 mt-1"
                        />
                    </div>

                </div>

                {/* Birthday */}
                <label className="block mt-4 text-gray-500 text-sm">
                    วัน/เดือน/ปี
                </label>

                <div className="grid grid-cols-3 gap-3">

                    {/* วัน */}
                    <select className="border rounded px-3 py-2">
                        <option value="">วัน</option>

                        {Array.from({ length: 31 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}

                    </select>

                    {/* เดือน */}
                    <select className="border rounded px-3 py-2">

                        <option value="">เดือน</option>

                        <option value="1">มกราคม</option>
                        <option value="2">กุมภาพันธ์</option>
                        <option value="3">มีนาคม</option>
                        <option value="4">เมษายน</option>
                        <option value="5">พฤษภาคม</option>
                        <option value="6">มิถุนายน</option>
                        <option value="7">กรกฎาคม</option>
                        <option value="8">สิงหาคม</option>
                        <option value="9">กันยายน</option>
                        <option value="10">ตุลาคม</option>
                        <option value="11">พฤศจิกายน</option>
                        <option value="12">ธันวาคม</option>

                    </select>

                    {/* ปี พ.ศ. */}
                    <select className="border rounded px-3 py-2">

                        <option value="">ปี</option>

                        {Array.from({ length: 80 }, (_, i) => {
                            const year = new Date().getFullYear() + 543 - i;

                            return (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            );
                        })}

                    </select>

                </div>

                {/* Gender & Phone */}
                <div className="grid grid-cols-2 gap-3 mt-4">

                    <div>
                        <label className="text-gray-500 text-sm">เพศ</label>

                        <select className="w-full border rounded px-3 py-2 mt-1">
                            <option>ระบุ</option>
                            <option>ชาย</option>
                            <option>หญิง</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-gray-500 text-sm">เบอร์โทรศัพท์</label>

                        <input
                            type="text"
                            placeholder="0XX XXX XXXX"
                            className="w-full border rounded px-3 py-2 mt-1"
                        />
                    </div>

                </div>

                {/* Email */}
                <div className="mt-4">

                    <label className="text-gray-500 text-sm">
                        อีเมล
                    </label>

                    <input
                        type="email"
                        placeholder="อีเมล"
                        className="w-full border rounded px-3 py-2 mt-1"
                    />

                </div>

                {/* Position */}
                <div className="mt-4">

                    <label className="text-gray-500 text-sm">
                        ตำแหน่ง
                    </label>

                    <select className="w-full border rounded px-3 py-2 mt-1">
                        <option>เลือกตำแหน่งงาน</option>
                        <option>Operator</option>
                        <option>Leader</option>
                        <option>Supervisor</option>
                        <option>Engineer</option>
                        <option>Assistant Manager</option>
                        <option>Manager</option>
                        <option>Senior Manager</option>
                    </select>

                </div>

                {/* Terms */}
                <div className="mt-5">

                    <p className="text-sm">
                        ข้อกำหนดและ
                        <span className="text-blue-600 cursor-pointer">
                            เงื่อนไข
                        </span>
                    </p>

                    <label className="flex items-center gap-2 text-sm mt-2">
                        <input type="checkbox" />
                        ข้าพเจ้ายอมรับเงื่อนไขในการสมัครสมาชิก Toyo Seikan
                    </label>

                </div>

                {/* Button */}
                <button
                    className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-medium"
                >
                    ยืนยันลงทะเบียน
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-5">
                    <div className="flex-1 h-px bg-gray-300"></div>

                    <span className="text-gray-400 text-sm">
                        หรือ
                    </span>

                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Login */}
                <p className="text-center text-sm text-gray-500">
                    เป็นสมาชิกแล้ว?{" "}
                    <Link
                        href="/login"
                        className="text-blue-600 hover:underline"
                    >
                        เข้าสู่ระบบ
                    </Link>
                </p>

            </div>
        </div>
    );
}