"use client";
import React from 'react'
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

const Marg = () => {
    const features = [
        "GST Billing",
        "Inventory Management",
        "Barcode Scanning",
        "Accounting Reports",
        "Multi-branch Sync",
    ];

    const advantages = [
        {
            icon: "🧭",
            title: "Ease of Use",
            desc: "Designed with simplicity in mind, Marg is user-friendly even for beginners in accounting.",
        },
        {
            icon: "⏱️",
            title: "Time-Saving",
            desc: "Automates repetitive tasks like billing and invoicing, saving valuable business hours.",
        },
        {
            icon: "📊",
            title: "Improved Accuracy",
            desc: "Automation ensures accurate financial data and reduces the chances of human error.",
        },
        {
            icon: "📦",
            title: "Better Inventory",
            desc: "Provides real-time stock visibility to avoid stockouts and maintain optimal inventory.",
        },
        {
            icon: "⚙️",
            title: "Increased Productivity",
            desc: "Streamlined processes help improve team efficiency and overall performance.",
        },
        {
            icon: "🔗",
            title: "Integration Ready",
            desc: "Seamlessly connects with POS systems and e-commerce platforms for unified operations.",
        },
        {
            icon: "💰",
            title: "Affordable",
            desc: "Provides premium features at a budget-friendly price for SMEs and startups.",
        },
        {
            icon: "📞",
            title: "Customer Support",
            desc: "Dedicated support team ensures smooth usage and quick resolution of any issues.",
        },
        {
            icon: "💡",
            title: "User-Friendly Interface",
            desc: "Designed with simplicity in mind, Marg’s clean dashboard makes navigation easy for anyone — no technical expertise needed.",
        }
    ];

    const certifications = [
  { img: "/images/Guinness.png", title: "Guinness World Record Holder" },
   { img: "/images/excellence.jpeg", title: "Excellence in IT Award" },
  { img: "/images/cmmi-level.png", title: "CMMi Level 3 Company" },
  { img: "/images/iso.png", title: "ISO Certified 9001:2015" },
  { img: "/images/udyog.png", title: "Udyog Rattan Award" },
 
];

 const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1; // adjust for faster/slower

    const scrollLoop = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0; // reset for infinite loop
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scrollLoop);
    };

    scrollLoop();
  }, []);

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-[#0b3a74] to-[#185e9a] text-white overflow-hidden">
            {/* Top Section */}
            <div
                className="h-[60vh] flex flex-col justify-center items-center bg-fixed bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/images/our3.webp')",
                    filter: "brightness(0.9)",
                }}
            >

                {/* Title */}
                <h1 className="text-6xl font-bold text-white drop-shadow-md mt-4">Marg ERP Software</h1>

                {/* Subtitle */}
                <p className="text-lg mt-3 text-white">Smart Billing, Accounting & Inventory Software trusted by 1M+ businesses.</p>
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 bg-white text-gray-800 relative">
                {/* Left Text */}
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-5xl font-bold text-[#185e9a]">
                        What is Marg Software?
                    </h2>
                    <p className="text-lg text-gray-600 justify-center leading-relaxed">
                        Marg is a smart accounting and inventory management software designed for retail and distribution businesses.
                        It simplifies billing, invoicing, and payment tracking while keeping your sales, expenses, and inventory organized.
                        With its integrations and automation, Marg helps businesses save time and run operations more efficiently.
                    </p>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                    <img
                        src="/images/marg-logo.webp"
                        alt="Marg Software"
                        className="w-[500px] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
                    />
                </div>
            </div>


            {/* ===== Advantages of Marg Software ===== */}
            <div className="w-full bg-gradient-to-b from-[#0b3a74] to-[#185e9a] text-white py-20 px-6 md:px-20">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-3">Advantages of Marg Software</h2>
                    <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                        Discover how Marg empowers businesses with smart automation, accuracy, and seamless integration.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white text-[#0b3a74] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
                        >
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* =====certified Section ===== */}
             <section className="bg-gradient-to-r from-[#f9fbff] to-[#eef3fa] py-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#185e9a] mb-10">
          Certified <span className="text-orange-500">By</span>
        </h2>

        {/* Scrolling Row */}
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden whitespace-nowrap space-x-8 px-6"
        >
          {[...certifications, ...certifications].map((item, i) => (
            <div
              key={i}
              className="min-w-[220px] flex flex-col items-center justify-center bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-contain mb-4"
              />
              <p className="text-sm font-semibold text-gray-700">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

            {/* ✅ Highlights Section */}
            {/* ===== More Features Section ===== */}
            <div className="w-full bg-white py-20 px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="/images/marg-computer.jpg"
                        alt="Features"
                        className="rounded-md shadow-lg object-cover w-full h-[400px]"
                    />
                </div>

                {/* Right Features */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl font-bold text-[#185e9a] mb-8">More Features</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Feature Item */}
                        {[
                            { title: "Smart Tools", desc: "Powerful tools for managing your business." },
                            { title: "Easy Integration", desc: "Seamless integration with other software." },
                            { title: "Analytics & Reports", desc: "Advanced analytics and reporting." },
                            { title: "Custom Interface", desc: "User-friendly and customizable interface." },
                            { title: "Cloud Security", desc: "Secure cloud-based accessibility." },
                            { title: "24/7 Support", desc: "24/7 customer support assistance." },
                        ].map((feature, i) => (
                            <div
                                key={i}
                                className="flex flex-col bg-[#f8f9ff] rounded-2xl shadow-sm hover:shadow-lg transition p-5"
                            >
                                <div className="flex items-center mb-3">
                                    <div className="bg-[#185e9a] text-white w-10 h-10 flex justify-center items-center rounded-full mr-3 text-xl font-bold">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#0b3a74]">{feature.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ✅ Highlights Section end */}

        </div>

    )
}

export default Marg