"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const services = [
    {
      icon: "/icons/accounting.png",
      title: "Accounting Software",
      desc: "Manage billing, inventory, GST, and financial reports with smart automated accounting tools designed to simplify your daily business operations.",
    },
    {
      icon: "/icons/coding.png",
      title: "Web Development",
      desc: "From design to deployment, we deliver high-performance websites that enhance your online presence and business growth.",
    },
    {
      icon: "/icons/erp-icon.png",
      title: "ERP Software",
      desc: "Streamline your business operations with ERP solutions that manage inventory, sales, accounts, and reporting in one centralized system.",
    },
    {
      icon: "/icons/payroll.png",
      title: "Payroll Software",
      desc: "Automate salary processing, attendance tracking, and compliance with smart payroll tools designed for smooth HR management.",
    },
  ];

  return (
    <div>
    <header className="relative w-full overflow-hidden text-white bg-gradient-to-br from-[#080d1f] via-[#0f234a] to-[#070b1a]">
  {/* Soft Glow Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

  {/* Floating Blob Light */}
  <div className="absolute right-0 top-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />

  {/* Floating Blob Light Left */}
  <div className="absolute left-0 bottom-20 w-64 h-64 bg-purple-500/20 blur-[120px] rounded-full animate-pulse" />

  {/* MAIN GRID */}
  <section className="relative z-20 max-w-7xl mx-auto px-2 py-40 grid lg:grid-cols-2 gap-3 items-center">
    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-7"
    >
      <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Smart Solutions for <br />
        <span className="text-orange-400 drop-shadow">
          Smarter Business Management
        </span>
      </motion.h1>

      <motion.p
        className="text-xl italic font-light"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-white/90">You Imagine.</span>{" "}
        <span className="bg-orange-400 text-white px-4 py-1 font-bold rounded-sm shadow">
          We Create.
        </span>
      </motion.p>

      <p className="text-white/85 max-w-xl text-lg leading-relaxed">
        Mabsol Infotech empowers businesses with modern solutions like Marg,
        Tally, MR Reporting, and greytHR. We streamline operations with
        automation, accuracy, and next-level support — giving your business
        power to grow faster.
      </p>

      {/* BUTTONS */}
      <div className="pt-1 flex gap-5">
        <Link href="/contact-us">
          <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 text-sm shadow">
            Contact Us
          </button>
        </Link>
      </div>
    </motion.div>

<<<<<<< HEAD
      {/* MAIN GRID */}
      <section className="relative z-20 max-w-7xl mx-auto px-2 py-12 grid lg:grid-cols-2 gap-3 items-center">
=======
    {/* RIGHT ILLUSTRATION */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center drop-shadow-[0_25px_40px_rgba(0,0,0,0.4)]"
    >
      <Image
        src="/images/erp-custom.webp"
        alt="Hero Illustration"
        width={550}
        height={550}
        className="max-w-[900px] w-full h-[460px] object-cover"
      />
    </motion.div>
  </section>
>>>>>>> b30f6c83e563882bf5095fc16bd3599c64022115

  <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
    <svg viewBox="0 0 1440 120" className="w-full">
      <path
        fill="#ffffff"
        d="M0,96L48,80C96,64,192,32,288,32C384,32,480,64,576,69.3C672,75,768,53,864,42.7
        C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,120L0,120Z"
      />
    </svg>
  </div>
</header>

      {/* cards boxes */}
      <div className="relative z-30 w-full max-w-7xl mx-auto mt-4 bg-white px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl border border-gray-300 
            shadow-md p-8 text-center overflow-hidden 
            group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* ⭐ Default Visible Content (Icon + Heading) */}
              <div className="relative z-10 group-hover:opacity-0 transition-all duration-300">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={150}
                  className="mx-auto mb-4"
                />
                <h1 className="text-xl font-bold text-[#0b3a74]">
                  {item.title}
                </h1>
              </div>

              {/* ⭐ HOVER OVERLAY (Slides From Top) */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#080d1f] via-[#0f234a] to-[#070b1a]
              text-white p-6 flex items-center justify-center text-center
              translate-y-[-100%] group-hover:translate-y-0 
              transition-all duration-500 ease-out rounded-xl"
              >
                <p className="text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
