"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import React from "react";

export default function ErpSoftware() {
    const features = [
        {
            title: "Integrated Operations",
            desc: "Unify your business functions like finance, HR, and supply chain under one digital platform.",
        },
        {
            title: "Real-Time Insights",
            desc: "Access accurate, real-time data to make informed decisions and drive operational excellence.",
        },
        {
            title: "Cloud-Powered",
            desc: "Stay connected anytime, anywhere with secure and scalable cloud architecture.",
        },
        {
            title: "Data Security & Compliance",
            desc: "Protect your enterprise data with built-in compliance and advanced security protocols.",
        },
        {
            title: "Scalable & Flexible",
            desc: "Easily adapt your ERP system as your business grows, with modular and flexible components.",
        },
        {
            title: "Enhanced Collaboration",
            desc: "Empower teams with seamless data flow and cross-departmental visibility.",
        },
    ];



    const highlights = [
        "Accounting & Finance",
        "Project Management",
        "Inventory & Supply Chain",
        "Human Resources (HRMS)",
        "Procurement",
        "Production Management",
    ];

    return (
        <div className="bg-[#f9fbff] text-gray-800">
            {/* Top Section */}
            <div
                className="h-[60vh] flex flex-col justify-center items-center bg-fixed bg-cover bg-center relative text-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/images/our4.webp')",
                    filter: "brightness(0.9)",
                }}
            >
                <h1 className="text-6xl font-bold text-white drop-shadow-md mt-4 text-center">
                    ERP Software
                </h1>
                <p className="text-lg mt-3 text-white text-center">
                    Manage your entire organization with real-time agility and unified
                    data insights for smarter growth.
                </p>
            </div>

            {/* 🔹 What is ERP */}
            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 bg-white text-gray-800 relative">
                {/* Left Text */}
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-5xl font-bold text-[#185e9a]">
                        What is ERP Software?
                    </h2>
                    <p className="text-lg text-gray-600 justify-center leading-relaxed">
                        Enterprise Resource Planning (ERP) software integrates core business
                        processes such as accounting, procurement, project management, and
                        supply chain operations into one unified platform — ensuring data
                        integrity, automation, and growth across the enterprise.
                    </p>
                    <p className="text-lg text-gray-600 justify-center leading-relaxed">ERP (Enterprise Resource Planning) software is a type of system that helps organizations manage and integrate core business processes like finance, HR, manufacturing, supply chain, and procurement. It uses a single database to create a unified view of business activities, eliminating data duplication and providing a single source of truth for improved efficiency and decision-making.</p>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                    <img
                        src="/images/erp-soft.webp"
                        alt="Marg Software"
                        className="w-[500px] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
                    />
                </div>
            </div>

            {/* Highlights Section */}
            <div className="bg-gradient-to-b from-[#e8f1ff] to-[#f4f8ff] py-20 px-10 md:px-20 text-gray-800">
    
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="relative group bg-gradient-to-br from-[#ffffff] to-[#e6f0ff] border border-blue-100 shadow-lg p-6 rounded-2xl hover:shadow-2xl transition duration-300 overflow-hidden"
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-100/40 to-blue-300/40 blur-2xl transition duration-500" />

                            {/* Icon & Text */}
                            <div className="relative flex items-start gap-4">
                                <div className="bg-gradient-to-br from-[#0b3a74] to-[#185e9a] p-3 rounded-full shadow-md">
                                    <CheckCircle2 className="text-white w-6 h-6" />
                                </div>
                                <p className="text-gray-800 text-lg font-semibold leading-snug">
                                    {item}
                                </p>
                            </div>

                            {/* Underline effect */}
                            <div className="mt-3 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-[#0b3a74] to-[#185e9a] rounded-full transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>


            {/* images */}
            <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-[#f8fbff] to-white">
                <img
                    src="/images/erp-custom.webp"  // 🖼️ Replace with your image path
                    alt="Centered Image"
                    className="w-full max-w-6xl rounded-2xl object-contain"
                />
            </div>

            {/* 🔹 Why Choose ERP */}
            <section className="bg-[#f0f5ff] py-20 px-6 md:px-20">
                <h3 className="text-4xl font-bold text-center text-[#0b3a74] mb-12">
                    Why Choose Our ERP Software?
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 text-center"
                        >
                            <h4 className="text-xl font-semibold mb-3 text-[#0e5aa7]">
                                {item.title}
                            </h4>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>




        </div>
    );
}