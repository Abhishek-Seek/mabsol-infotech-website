"use client";
import Image from "next/image";
import Link from "next/link";

export default function GreytHRPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ===== HERO SECTION ===== */}
      {/* <section
        className="relative text-white py-24 px-6 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 44, 95, 0.9), rgba(0, 116, 217, 0.8))",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="absolute inset-0 bg-[url('/images/hr-bg.jpg')] bg-cover bg-center opacity-25"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Make Quick Work of Hard Work
          </h1>
          <p className="text-lg md:text-xl opacity-95 leading-relaxed">
            Get rid of repetitive HR tasks and manual spreadsheets. Automate,
            centralize, and empower employees with modern HRMS.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="bg-white/90 text-blue-700 px-6 py-2 rounded-full font-semibold shadow hover:bg-white transition"
            >
              HR Made Simple
            </Link>
          </div>
        </div>
      </section> */}
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
          Make Quick Work of Hard Work
        </h1>

        {/* Subtitle */}
        <p className="text-lg mt-3 text-white">
          Get rid of repetitive HR tasks and manual spreadsheets. Automate,
          centralize, and empower employees with modern HRMS.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="bg-white/20 text-white px-6 py-2 lg:px-10 lg:py-4 font-semibold shadow hover:bg-[#185e9a] transition"
          >
            Home
          </Link>
        </div>
      </div>

      {/* ===== FEATURES SECTION ===== */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-[#185e9a]">
          Full-Suite HRMS for Indian Businesses
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
              text: "Eliminate repetitive, time-consuming HR tasks to boost productivity.",
            },
            {
              icon: "/images/database.svg",
              title: "Centralised Employee Database",
              text: "Remove duplication and maintain consistent employee information.",
            },
            {
              icon: "/images/selfservice.png",
              title: "Employee Self Service",
              text: "Give employees the tools to manage their own HR information easily.",
            },
            {
              icon: "/images/chatbot.png",
              title: "Bella – Smart Chatbot",
              text: "AI-powered HR assistant for quick query resolution and better engagement.",
            },
            {
              icon: "/images/payroll.webp",
              title: "Payroll Automation",
              text: "Ensure fast, accurate payroll processing with complete compliance.",
            },
            {
              icon: "/images/reports.png",
              title: "Advanced Reports",
              text: "150+ admin reports for leave, attendance, payroll, MIS, and more.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
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
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      {/* ===== STATS SECTION ===== */}
      <section
        className="relative text-white py-20 overflow-hidden bg-fixed bg-center bg-cover"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(rgba(15, 50, 100, 0.85), rgba(20, 90, 160, 0.85)), url('/images/our3.webp')",
        // }}
      >
        {/* Optional faint pattern overlay for texture */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-cover opacity-10"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#185e9a]">
            Trusted by Businesses Across India
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                value: "250+",
                label: "Cities Served",
                icon: "🌆",
              },
              {
                value: "23,000+",
                label: "Companies",
                icon: "🏢",
              },
              {
                value: "23,00,000+",
                label: "Users",
                icon: "👨‍💼",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="backdrop-blur-md p-8 rounded-2xl shadow-lg hover:bg-white/20 hover:text-[#185e9a] transition-all hover:-translate-y-2 duration-300 bg-[#185e9a] group"
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white group-hover:text-[#185e9a]">
                  {item.value}
                </h3>
                <p className="text-lg opacity-90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOLUTIONS SECTION ===== */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-[#185e9a] text-center mb-8">
          Modern HR and Payroll are Complex — We Simplify It
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "You don’t have an HRMS, and running HR ops on Sheets?",
              desc: "Use one single app for all HR and Payroll Processes, including workforce management, employee relations, leave and attendance",
            },
            {
              title:
                "Your payroll solution is unstable, requires hours of manual work?",
              desc: "Ensure faster and accurate checkouts. Implement complex policies. Automate hours of manual payroll processes and remove any manual error.",
            },
            {
              title:
                "Most HR and payroll tasks are manual, clerical, and take hours to complete?",
              desc: "Give access to the best-in-category leave management solution for efficient leave management.",
            },
            {
              title:
                "You’re still using old ways to capture and track leaves and attendance?",
              desc: "Give access to the best-in-category leave management solution for efficient leave management.",
            },
            {
              title:
                "You’re still using old ways to capture and track leaves and attendance?",
              desc: "150+ basic and advanced admin reports covering Leave and Attendance, Payroll, MIS, Claims, Welfare and State-level Policies.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-[#185e9a] mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      {/* <section className="text-center bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Simplify HR. Empower People. Grow Faster.
        </h2>
        <p className="text-lg opacity-90 mb-6">
          Join thousands of businesses already using our HRMS solutions.
        </p>
        <Link
          href="/contact"
          className="bg-white/90 text-blue-700 px-8 py-3 rounded-full font-semibold shadow hover:bg-white transition"
        >
          Get Started
        </Link>
      </section> */}
    </div>
  );
}
