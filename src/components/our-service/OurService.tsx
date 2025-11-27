"use client";
import React from "react";

const features = [
  {
    icon: "/icons/coding.png",
    title: "Website Development",
    desc: "We build modern, fast, and fully responsive websites tailored to your business needs. From corporate sites to e-commerce platforms, our development ensures clean design, smooth performance, and a powerful online presence that helps your brand stand out.",
  },
  {
    icon: "/icons/accounting.png",
    title: "Accounting Software",
    desc: "Our accounting software simplifies financial management with automated bookkeeping, accurate reporting, and seamless transaction tracking—helping businesses streamline operations, reduce errors, and maintain complete financial clarity.",
  },
  {
    icon: "/icons/payroll.png",
    title: "Payroll Software",
    desc: "Our payroll software automates salary processing, tax calculations, attendance tracking, and compliance—ensuring fast, error-free payroll management and smoother HR operations for businesses of all sizes.",
  },
  {
    icon: "/icons/Tally.png",
    title: "Tally Software",
    desc: "Tally software simplifies accounting and financial management for your business, handling GST compliance, invoicing, payroll, and inventory efficiently, empowering you with accurate, real-time insights."
  },
  {
    icon: "/icons/erp-icon.png",
    title: "ERP Software",
    desc: "Our ERP software unifies all your business processes—from accounting and inventory to HR and sales—into one seamless platform, helping you automate tasks, reduce errors, and make smarter, data-driven decisions."
  },
  {
    icon: "/icons/sfa.png",
    title: "SFA Software",
    desc: "Our SFA software automates and streamlines your sales processes, from lead management and tracking to customer follow-ups and reporting, helping your team close deals faster and improve overall sales efficiency."
  },
];

const OurService = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="text-center mb-14">
        <h1 className="text-5xl lg:text-5xl font-bold text-center text-[#0b3a74] mb-4 tracking-wide">
          Our Services
        </h1>
        <p className="text-center text-gray-700 max-w-5xl mx-auto mb-12">
          We provide all-in-one software solutions to simplify operations, boost efficiency, and support business growth.

        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-300 overflow-hidden"
          >
            {/* ICON */}
            <div className="flex justify-center mb-4 relative z-10">
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-blue-100">
                <img src={item.icon} alt="icon" width={50} height={50} />
              </div>
            </div>

            {/* TITLE & DESC */}
            <h3 className="text-xl font-semibold text-[#0b3a74] mb-3 group-hover:text-orange-400 transition z-10 relative">
              {item.title}
            </h3>
            <p className="text-gray-800 text-sm group-hover:text-white leading-relaxed z-10 relative text-justify">
              {item.desc}
            </p>

            {/* ⭐ LEFT-TO-RIGHT HOVER OVERLAY */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#080d1f] via-[#0f234a] to-[#070b1a]
              text-white p-6 flex items-center justify-center text-center
              translate-x-[-100%] group-hover:translate-x-0 
              transition-all duration-500 ease-out rounded-xl"
            >
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
