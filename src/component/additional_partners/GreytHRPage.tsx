"use client";

import { RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GreytHRPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <div
        className="h-[60vh] flex flex-col justify-center items-center bg-fixed bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/images/our3.webp')",
          filter: "brightness(0.9)",
        }}
      >
        <h1 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-md mt-4">
          Make Quick Work of{" "}
          <span className="!text-orange-500">Hard Work</span>
        </h1>

        <p className="text-lg mt-3 text-white">
          Get rid of repetitive HR tasks and manual spreadsheets. Automate,
          centralize, and empower employees with modern HRMS.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="text-white px-6 py-2 lg:px-10 lg:py-4 font-semibold"
          >
            <RightOutlined /> Home
          </Link>
        </div>
      </div>

      {/* ===== FEATURES SECTION ===== */}
      <section className="max-w-[1400px] mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-[#185e9a]">
          Full-Suite HRMS for{" "}
          <span className="!text-orange-500">Indian Businesses</span>
        </h2>

        <p className="text-lg mb-12 text-gray-600">
          Recruit, Onboard, Engage, Pay, Appraise, Retain and Retire Employees.
          Run your entire people ops from one platform.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "/images/automation.webp",
              title: "Automation",
              text: "Eliminate all the heavy lifting in HR, banishing repetitive, time-consuming tasks that are the bane of productivity.",
            },
            {
              icon: "/images/database.svg",
              title: "Centralised Employee Database",
              text: " Eliminate inconsistencies, duplication and clutter in employee information with",
            },
            {
              icon: "/images/selfservice.png",
              title: "Employee Self Service Portal",
              text: "Give employees the power to help themselves. This makes for happier employees while freeing up valuable HR time for business critical work.",
            },
            {
              icon: "/images/chatbot.png",
              title: "Bella, the friendly chatbot & Employee Helpdesk",
              text: " Ensure that all queries and grievances are handled in a timely and professional manner. Foster accountability and enhance employee satisfaction.",
            },
            {
              icon: "/images/payroll.webp",
              title: "Payroll Automation",
              text: "Fast and accurate payroll processing with full compliance.",
            },
            {
              icon: "/images/reports.png",
              title: "Advanced Reports",
              text: "150+ admin reports covering payroll, leave, MIS & more.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section
        className="relative text-white py-20 overflow-hidden bg-fixed bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-cover opacity-10"></div>

        <div className="relative z-10 max-w-5xl max-h-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#185e9a]">
            Trusted by Businesses{" "}
            <span className="!text-orange-500">Across India</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { value: "250+", label: "Cities Served", icon: "🌆" },
              { value: "23,000+", label: "Companies", icon: "🏢" },
              { value: "23,00,000+", label: "Users", icon: "👨‍💼" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="backdrop-blur-md p-8 rounded-2xl shadow-lg hover:bg-white/20 hover:text-[#185e9a] transition-all hover:-translate-y-2 duration-300 bg-[#185e9a] group"
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white group-hover:text-[#185e9a]">
                  {item.value}
                </h3>
                <p className="text-lg opacity-90">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOLUTIONS SECTION ===== */}
      <section className="max-w-[1400px] mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-[#185e9a] text-center mb-8">
          Modern HR and Payroll are Complex —
          <span className="!text-orange-500"> We Simplify It</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "You don’t have an HRMS, and running HR ops on Sheets?",
              desc: "Use one single app for all HR and Payroll Processes, including workforce management, employee relations, leave and attendance.",
            },
            {
              title: "Your payroll solution is unstable, requires hours of manual work?",
              desc: "Ensure faster and accurate checkouts. Implement complex policies. Automate hours of manual payroll processes and remove any manual error.",
            },
            {
              title: "Most HR and payroll tasks are manual, clerical, and take hours to complete?",
              desc: "Give access to the best-in-category leave management solution for efficient leave management.",
            },
            {
              title: "You’re still using old ways to capture and track leaves and attendance?",
              desc: "Give access to the best-in-category leave management solution for efficient leave management."

            },
            {
              title: "You’re still using old ways to capture and track leaves and attendance?",
              desc: "150+ basic and advanced admin reports covering Leave and Attendance, Payroll, MIS, Claims, Welfare and State-level Policies.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-[#185e9a] mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
