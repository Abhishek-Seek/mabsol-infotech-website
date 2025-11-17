"use client";

import React from "react";
import { Select } from "antd";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

// ---------------- ANT DESIGN SELECT ----------------
const CustomSelect = () => {
    const options = [
        { value: "Default sorting", label: "Default sorting" },
        { value: "Sort by popularity", label: "Sort by popularity" },
        { value: "Sort by average rating", label: "Sort by average rating" },
        { value: "Sort by latest", label: "Sort by latest" },
        { value: "Sort by price low to high", label: "Sort by price low to high" },
        { value: "Sort by price high to low", label: "Sort by price high to low" },
    ];

    return (
        <Select
            defaultValue="Default sorting"
            options={options}
            className="w-full max-w-[280px] ml-auto"
            popupClassName="custom-dropdown"
        />

    );
};

const ProductCard = () => {
    const router = useRouter();

    return (
        <div className="w-full  overflow-hidden transition-transform duration-300 hover:shadow-2xl">
            <div className=" flex justify-center items-center">
                <img
                    src="/images/product.webp"
                    alt="MR Reporting Software"
                    className="w-full h-auto"
                />
            </div>

            <div className="p-4">
                <p className="text-md text-gray-500 uppercase tracking-widest mb-1">
                    M R Reporting
                </p>

                <h2
                    className="text-2xl font-bold text-gray-800 mb-2 cursor-pointer"
                    onClick={() => router.push("/reporting")}
                >
                    M R Reporting
                </h2>

                <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gray-300 fill-gray-100" />
                    ))}
                </div>

                <p className="text-xl font-semibold text-gray-900 mb-4">₹1,500.00</p>

                <button
                    onClick={() => router.push("/reporting")}
                    className="w-full px-4 text-lg py-2 bg-blue-600 text-white font-bold rounded-lg"
                >
                    Select options
                </button>
            </div>
        </div>
    );
};

export default function ReportingPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 font-['Inter']"
            style={{ backgroundImage: "url('/base-1.png')" }} >
            <main className="relative py-12">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg viewBox="0 0 1440 320" className="absolute bottom-0">
                        <path
                            fill="#f0f3f8"
                            d="M0,192L48,176C96,160,192,128,288,106.7C384,85,480,75,576,90.7C672,107,768,149,864,181.3C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192V320H0Z"
                        ></path>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-10">
                    <div className="text-lg text-gray-500 mb-6">
                        <span
                            className="cursor-pointer hover:text-[#1a3d7c]"
                            onClick={() => router.push("/")}
                        >
                            Home
                        </span>
                        <span className="mx-2">/</span>
                        <span
                            className="cursor-pointer text-lg text-gray-700 font-medium"
                            onClick={() => router.push("/reporting-page")}
                        >
                            M R Reporting
                        </span>
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
                        M R Reporting
                    </h1>
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-lg text-gray-600">Showing the single result</p>
                        <CustomSelect />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <ProductCard />
                    </div>
                </div>
            </main>
        </div>
    );
}
