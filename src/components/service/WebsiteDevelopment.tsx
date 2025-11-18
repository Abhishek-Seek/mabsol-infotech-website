"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { RightOutlined } from "@ant-design/icons";

export default function WebsiteDevelopment() {
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section
        className="h-[50vh] sm:h-[60vh] flex flex-col justify-center items-center bg-fixed bg-cover bg-center relative px-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,44,95,0.75), rgba(0,44,95,0.75)), url('/images/our3.webp')",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white drop-shadow-md text-center"
        >
          Website <span className="!text-orange-500">Development</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base sm:text-lg mt-3 text-white max-w-xl text-center px-2"
        >
          Create, enhance and control your brand identity through stunning,
          powerful and high-performing websites.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6"
        >
          <Link
            href="/"
            className="text-white px-6 py-2 text-lg hover:underline font-semibold flex items-center gap-2"
          >
            <RightOutlined /> Home
          </Link>
        </motion.div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="pt-14 px-4 md:px-8 max-w-[1400px] mx-auto space-y-24">

        {/* ===== SECTION 1 – Image Right ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center"
        >
          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#185e9a] mb-4">
              Website Development Services
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Your website is the first impression of your business. A
              beautifully designed and user-friendly website speaks louder than
              any marketing strategy. We build modern, responsive and premium
              user-experience driven websites.
            </p>
          </div>

          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex justify-center items-center"
          >
            <img
              src="/images/website-d-s.png"
              alt="Website Development"
              className="rounded-xl w-full max-w-[380px] sm:max-w-[420px] h-auto object-cover"
            />
          </motion.div>
        </motion.div>

        {/* ===== SECTION 2 – Image Left ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center"
        >
          {/* Image */}
          <motion.div
            className="order-1 md:order-none flex justify-center md:justify-start"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/images/web.webp"
              alt="Website Design"
              width={500}
              height={350}
              className="rounded-xl shadow-lg w-full max-w-[420px] h-auto"
            />
          </motion.div>

          {/* Text */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#185e9a] mb-4">
              Custom Website Design & Development
            </h3>
            <p className="text-base sm:text-lg mb-4 leading-relaxed">
              Every business is unique — your website should reflect that. We
              design customized websites that highlight your brand identity,
              professionalism, and user experience excellence.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Whether it’s WordPress or fully custom-coded, we deliver fast,
              secure and scalable websites built for long-term growth.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="relative bg-gray-50 py-20 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-cover opacity-5"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-14 text-[#185e9a]">
            Other Services <span className="!text-orange-500">We Offer</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {[
              { title: "SEO Optimization", desc: "Rank higher with strong SEO.", icon: "🚀" },
              { title: "E-commerce Solutions", desc: "Secure & modern store setup.", icon: "🛒" },
              { title: "Content Management", desc: "Easy CMS control & editing.", icon: "🧭" },
              { title: "Custom Web Apps", desc: "Powerful & scalable web apps.", icon: "💻" },
              { title: "Website Maintenance", desc: "Keep your site secure & updated.", icon: "🔧" },
              { title: "UI/UX Design", desc: "Modern & creative interface design.", icon: "🎨" },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all hover:bg-[#185e9a] hover:text-white group"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#185e9a] group-hover:text-white">
                  {service.title}
                </h3>
                <p className="opacity-90 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
