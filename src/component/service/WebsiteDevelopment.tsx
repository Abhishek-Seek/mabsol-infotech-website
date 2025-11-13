"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "antd";

export default function WebsiteDevelopment() {
  return (
    <div className="bg-white text-gray-800">
      <div
        className="h-[60vh] flex flex-col justify-center items-center bg-fixed bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/images/our3.webp')",
          filter: "brightness(0.9)",
        }}
      >
        {/* Title */}
        <h1 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-md mt-4">
          Website <span className="!text-orange-500">Development</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg mt-3 text-white">
          Create, control, and enhance your brand identity through stunning,
          high-performance websites.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="bg-white/90 text-blue-700 px-9 py-4 font-semibold shadow 
             hover:bg-[#185e9a] hover:text-white 
             transition-all duration-300 ease-out 
             hover:scale-105 active:scale-95"
          >
            Home
          </Link>
        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <section className="flex flex-col gap-10 py-16 px-6 max-w-6xl mx-auto">
        <Card className="space-y-8 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold text-[#185e9a]">
            Website Development Services
          </h2>
          <p className="">
            With an incredible website, you can create and control your own
            identity. Your website is your company’s first impression and says
            volumes about your job, not just in terms of the content it contains
            but also in the experience it provides to visitors.
          </p>
        </Card>

        <Card className="space-y-8 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-semibold text-[#185e9a]">
            Design and Development of Websites
          </h3>
          <p>
            We design and construct bespoke websites with our customers’
            individual needs in mind, establishing their distinct brand
            identity. We deliver immersive experiences with distinctively
            designed pages, carefully selected images, engaging content, and
            smooth navigation.
          </p>
          <p>
            Our developers can choose the best WordPress themes for your
            business or create a fully custom design integrated with WordPress —
            fast, secure, and delivering unrivaled performance.
          </p>
        </Card>
      </section>

      {/* ===== OTHER SERVICES SECTION ===== */}
      <section className="relative bg-white text-gray-800 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-cover opacity-5"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#185e9a]">
            Other Services <span className="!text-orange-500">we Offer</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "SEO Optimization",
                desc: "Improve your website visibility and rank higher on search engines.",
                icon: "🚀",
              },
              {
                title: "E-commerce Solutions",
                desc: "Build a secure, user-friendly online store with modern UI/UX.",
                icon: "🛒",
              },
              {
                title: "Content Management",
                desc: "Easily update and manage your site content with robust CMS tools.",
                icon: "🧭",
              },
              {
                title: "Custom Web Applications",
                desc: "We develop scalable, business-driven web apps for your needs.",
                icon: "💻",
              },
              {
                title: "Website Maintenance",
                desc: "Keep your website up-to-date, secure, and optimized for users.",
                icon: "🔧",
              },
              {
                title: "UI/UX Design",
                desc: "Enhance user engagement through creative and intuitive designs.",
                icon: "🎨",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-2 duration-300 hover:bg-gradient-to-r from-[#185e9a] to-[#0e4d7a] hover:text-white group"
              >
                <div className="text-5xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#185e9a] group-hover:text-white">
                  {service.title}
                </h3>
                <p className="opacity-90 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
