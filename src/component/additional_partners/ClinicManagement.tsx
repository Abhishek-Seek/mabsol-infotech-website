"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  CalendarCheck,
  Activity,
  Pill,
  Shield,
  Users,
  FileText,
  Cpu,
  Cloud,
  CheckCircle2,
} from "lucide-react";

const ClinicManagement = () => {
  const highlights = [
    { icon: <Shield />, title: "Secure & Reliable", desc: "HIPAA-compliant data security with regular cloud backups." },
    { icon: <Cloud />, title: "Cloud or On-Premise", desc: "Deploy based on your hospital’s IT infrastructure." },
    { icon: <Users />, title: "Multi-User Access", desc: "Role-based access for doctors, staff, and admins." },
    { icon: <Activity />, title: "Real-Time Reports", desc: "Access instant data insights and analytics dashboards." },
    { icon: <Cpu />, title: "Seamless Integrations", desc: "Connect with EHR, LIS, and other hospital systems." },
    { icon: <FileText />, title: "Paperless Operations", desc: "Digitize every hospital process efficiently." },
  ];

  const modules = [
    { icon: "🏥", title: "Front Office", desc: "Manage patient registrations, appointments, and notifications." },
    { icon: "🩺", title: "Out Patient (OPD)", desc: "Handle registration, billing, and electronic prescriptions." },
    { icon: "🛏️", title: "In Patient (IPD)", desc: "Admission, discharge, transfer, and room management." },
    { icon: "🧪", title: "Laboratory", desc: "Test booking, lab inventory, and automated test reports." },
    { icon: "📊", title: "Radiology", desc: "Schedule and manage X-Ray, MRI, CT Scan reports." },
    { icon: "💊", title: "Pharmacy", desc: "Medicine stock, expiry tracking, and billing automation." },
    { icon: "🩸", title: "Blood Bank", desc: "Donor data, component stock, and donation camp tracking." },
    { icon: "🏗️", title: "OT & Ward", desc: "Surgery scheduling, notes, and nursing coordination." },
    { icon: "📦", title: "Inventory", desc: "Procurement, consumables, and asset management." },
    { icon: "👨‍⚕️", title: "Doctor Accounting", desc: "Automate consultant billing and revenue sharing." },
    { icon: "📊", title: "MIS Dashboard", desc: "Track key metrics with live analytics and reports." },
    { icon: "🔐", title: "User Management", desc: "Role-based access control for enhanced security." },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#0b3a74] to-[#185e9a] text-white overflow-hidden">
      {/* 🏥 Hero Section */}
      <div className="h-[60vh] flex flex-col justify-center items-center bg-fixed bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/images/our2.webp')",
          filter: "brightness(0.9)",
        }}
      >

        {/* Title */}
        <h1 className="text-6xl font-bold text-white drop-shadow-md mt-4">Clinic Management</h1>

        {/* Subtitle */}
        <p className="text-lg mt-3 text-white">Streamline Your Clinic Operations with Ease</p>
      </div>

      {/* 💬 About Section */}
      <div className="bg-white text-gray-800 py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 space-y-5"
        >
          <h2 className="text-4xl font-bold text-[#185e9a]">What is<span className="text-orange-500"> Clinic Management ?</span></h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Clinic Management Software is built to handle all aspects of healthcare operations — from patient
            registration and scheduling to billing and reports. It helps clinics reduce manual work, avoid errors,
            and provide better patient experiences through real-time data and seamless integrations.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/images/section2.jpeg"
            alt="Clinic Software Dashboard"
            className="w-[600px] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
          />
        </motion.div>
      </div>


      {/* 🌟 Why Choose Section */}
      <div className="bg-[#f9fbff] py-20 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-[#185e9a] mb-10">
            Why Choose EGERP Informatics?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className="text-blue-600 text-4xl mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* images */}
      <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-[#f8fbff] to-white">
        <img
          src="/images/clinic-software.webp"
          alt="Centered Image"
          className="w-full max-w-4xl  object-contain"
        />
      </div>

      {/* 🧩 Modules Section */}
      <div className="bg-white py-20 text-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-[#185e9a] mb-10">
            Core Modules We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {modules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className="border border-blue-100 bg-blue-50 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-blue-100 transition"
              >
                <div className="text-3xl mb-3">{mod.icon}</div>
                <h3 className="text-xl font-semibold text-[#185e9a]">{mod.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ClinicManagement;
