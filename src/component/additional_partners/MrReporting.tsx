"use client";
import Image from "next/image";
import Link from "next/link";

export default function MrReporting() {
  return (
    <div className="bg-gray-50 text-gray-800">
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
        <h1 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-md mt-4">
          MR Reporting Software
        </h1>

        {/* Subtitle */}
        <p className="text-lg mt-3 text-white">
          Empowering Pharma Businesses with Smart Market Research & Real-Time
          Insights
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

      {/* ====== About MR Reporting ====== */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-4 text-[#185e9a]">
          What is MR Reporting?
        </h2>
        <p className="leading-relaxed text-justify">
          MR (Market Research) reporting software refers to software
          specifically designed for the market research industry. It provides a
          platform for managing and analyzing market research data and
          generating reports based on that data. The software typically includes
          tools for data collection, such as survey design and distribution, as
          well as data analysis and visualization tools, such as charts, graphs,
          and tables.
        </p>
        <p className="leading-relaxed text-justify mt-3">
          The software can be used to analyze a wide range of data types,
          including customer feedback, product usage, and brand awareness. MR
          reporting software can help market research professionals and
          businesses make data-driven decisions by providing real-time insights
          into their target market. It automates many repetitive tasks in data
          analysis and reporting—saving time, cost, and effort.
        </p>
        <p className="leading-relaxed text-justify mt-3">
          Overall, MR reporting software is an essential tool for businesses
          that rely on market research to make informed decisions about their
          products, services, and target markets.
        </p>
      </section>

      {/* ====== Pharma CRM Section ====== */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-[#185e9a]">
            MRR – Pharma CRM Software (Simple & Human-Centric)
          </h2>
          <p className="leading-relaxed text-justify">
            MRR is simple, easy-to-use Pharma CRM software that does not require
            any specific computer knowledge. Anyone familiar with basic computer
            applications can easily file their{" "}
            <strong>Daily Call Reports (DCR)</strong> and instantly send them to
            the company via the Internet — saving courier costs and time.
          </p>
          <p className="leading-relaxed text-justify mt-3">
            Managers can assign tasks and delegate responsibilities in
            real-time. The DCRs filled by sales representatives are
            automatically updated in the company’s management database,
            accessible both online and offline. This automation enhances
            efficiency, transparency, and reliability in the marketing process.
          </p>
          <p className="leading-relaxed text-justify mt-3 font-medium">
            MRR saves valuable resources —{" "}
            <strong>Time, Money, and Effort</strong>.
          </p>
        </div>
      </section>

      {/* ====== Company Logos ====== */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
          <Image
            src="/images/cmpny_logo1.webp"
            alt="Company Logo 1"
            width={120}
            height={80}
          />
          <Image
            src="/images/cmpny_logo4.webp"
            alt="Company Logo 2"
            width={120}
            height={80}
          />
          <Image
            src="/images/cmpny_logo3.webp"
            alt="Company Logo 3"
            width={120}
            height={80}
          />
          <Image
            src="/images/cmpny_1.webp"
            alt="Company Logo 4"
            width={120}
            height={80}
          />
          
        </div>
      </section>

      {/* ====== Features Section ====== */}
      <section className="max-w-6xl mx-auto py-14 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-[#185e9a] text-center">
          Outstanding Features of MR Reporting Software
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700 leading-relaxed">
          <li>User-friendly interface – saves time, cost & paper.</li>
          <li>Android-based Mobile App with GPS location tracking.</li>
          <li>Each doctor/chemist visit and route is tracked on map.</li>
          <li>Mobile App works even if no internet is available.</li>
          <li>E-Detailing App helps reduce cost of printing visual-Aids.</li>
          <li>DCR (Daily Call Report) can be submitted anytime and from anywhere.</li>
          <li>
            Doctor Calls, Product detailing, Samples and Gifts information can be submitted simultaneously with ease.
          </li>
          <li>Gifts and sample distribution status and tracking records always remain up-to-date.</li>
          <li>Generation of Monthly Expenses Reports are automatic in MR Reporting Software.</li>
          <li>Sales data capturing and analysis.</li>
          <li>Consolidated Stock and Sale Reports for Managers and Admministrators</li>
          <li>Integrated with MR-KnowIT, Pharma ERP software to get instant updates of primary sales and Stock-In-Transit</li>
          <li>Approval Management System for approving DCRs, Expenses, Leaves, etc.</li>
          <li>Internal Mailing System: Mail can be sent to all staff, with there Name, no mail Id required.</li>
          <li>Doctors & Chemist visit analysis.</li>
          <li>Automatic Calculation of Target vs Primary Vs Secondary Sales.</li>
          <li>Target Vs Achievement Analysis with Graphical Reports.</li>
          <li>Ease of sending Bulk SMS to Field Staff, Doctors, Chemist, Stockists.</li>
          <li>Personalized URL with Company Name, Like (www.abcLabsReporting.com).</li>
          <li>Personalized URL with company branding.</li>
          <li>Client logo incorporated on all pages.</li>
          <li>MR Reporting Software comes with easy to understand Training Manuals to help users understand the application.</li>
        </ul>
      </section>
    </div>
  );
}
