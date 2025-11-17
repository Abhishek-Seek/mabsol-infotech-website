"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ShieldCheck, Cloud, FileText } from "lucide-react";


export default function MRReportingPage() {
  const products = [
    {
      id: "Cloud",
      title: "MR Reporting — Cloud",
      price: 1500,
      tag: "Cloud",
      bullets: [
        "Analyze doctor and chemist visits",
        "Personalized URL with Company Name",
        "Internal Mailing System",
      ],
      accent: "bg-white",
      image: "/images/mr reporting-software.png",
    },

  ];
  const features = [
    {
      title: "User-friendly interface",
      desc: "Save time, money, and paper with an easy-to-use CRM.",
      icon: "💻",
    },
    {
      title: "GPS Tracking",
      desc: "Track doctor visits, chemist visits and routes on the map.",
      icon: "📍",
    },
    {
      title: "Offline Mode",
      desc: "Mobile app works even when the internet is not available.",
      icon: "📴",
    },
    {
      title: "E-Detailing App",
      desc: "Reduce printing cost — showcase visual aids digitally.",
      icon: "📊",
    },
    {
      title: "Anytime DCR Submission",
      desc: "Submit Daily Call Reports from anywhere, anytime.",
      icon: "📝",
    },
    {
      title: "Doctor Calls + Samples + Gifts",
      desc: "Record doctor calls, samples, and gifts instantly.",
      icon: "🎁",
    },
    {
      title: "Expenses & POB Tracking",
      desc: "Add expenses, chemist POB and stockist visits easily.",
      icon: "💼",
    },
    {
      title: "Auto Checks & Validations",
      desc: "System ensures accurate and timely DCR submission.",
      icon: "✔️",
    },
    {
      title: "Sample & Gift Status Tracking",
      desc: "Track all samples and gifts in real-time.",
      icon: "📦",
    },
    {
      title: "Automatic Monthly Reports",
      desc: "Auto generates monthly expenses and performance reports.",
      icon: "📅",
    },
    {
      title: "Sales Data Collection",
      desc: "Accurate sales data for better decision-making.",
      icon: "📈",
    },
    {
      title: "Manager Dashboards",
      desc: "Managers can view consolidated stock & sales reports.",
      icon: "🗂️",
    },
  ];

  const bullets = [
    "Integrates with MR-KnowIT Pharma ERP for real-time primary sales data and Stock-In-Transit Approval Management.",
    "Internal Mailing System: Send mail to all employees by name — no email ID required.",
    "Analyze doctor and chemist visits with detailed insights.",
    "Target vs Achievement Analysis with graphical reports.",
    "Automatically calculates target, primary, and secondary sales.",
    "Send Bulk SMS to Field Staff, Doctors, Chemists, and Stockists easily.",
    "Personalized company URL (e.g., www.xyz.com).",
    "Client’s logo appears on all pages.",
    "Includes easy-to-understand Training Manuals for all users."
  ];

 const [cart, setCart] = useState<{ id: number; qty: number }[]>([]);
const [selected, setSelected] = useState<number | null>(null);
const [toastMsg, setToastMsg] = useState<string | null>(null);

// ADD TO CART
const addToCart = (id: number) => {
  const exists = cart.find((c) => c.id === id);

  if (exists) {
    setCart(cart.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c)));
  } else {
    setCart([...cart, { id, qty: 1 }]);
  }

  // Toast Notification
  setToastMsg("Item added to cart!");

  setTimeout(() => {
    setToastMsg(null);
  }, 2000);
};

// TOTAL ITEMS
const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

// TOTAL PRICE (SAFE)
const totalPrice = cart.reduce((sum, item) => {
  const product = products.find((p) => Number(p.id) === item.id);
  if (!product) return sum;
  return sum + product.price * item.qty;
}, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b3a74] leading-tight">
            MRR- Pharma CRM Software Is Easy To Use And Human Centric
          </h1>
          <p className="text-gray-700 max-w-2xl">
            MRR is a basic, easy-to-use Pharma CRM software that does not need any computer skills. Anyone who is familiar with standard computer programmes may quickly (complete or file?) his ‘Daily Call Reports’ (DCR) and submit them to the corporation through the Internet, saving money on courier services. Simultaneously, Pharmaceutical crm software enables managers to offer tasks and distribute duties to their team at any moment.
          </p>

          <div className="mt-6 flex gap-3">
            <button className="px-5 py-3 bg-[#0b3a74] text-white rounded-lg font-medium">
              Contact Sales
            </button>
            <button className="px-5 py-3 border rounded-lg">
              Cloud Editions
            </button>
          </div>


          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700">
            {/* Access Anywhere */}
            <div className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-xl p-5 shadow-sm border border-blue-100 flex items-start gap-3">
              <Cloud className="w-6 h-6 text-[#0b3a74] mt-1" />
              <div>
                <div className="font-semibold text-[#0b3a74]">
                  Access anywhere
                </div>
                <div className="text-gray-600">Reports from any browser</div>
              </div>
            </div>

            {/* Internal Mailing System */}
            <div className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-xl p-5 shadow-sm border border-blue-100 flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#0b3a74] mt-1" />
              <div>
                <div className="font-semibold text-[#0b3a74]">Internal Mailing</div>
                <div className="text-gray-600">End-to-end encryption</div>
              </div>
            </div>

            {/* Actionable Reports */}
            <div className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-xl p-5 shadow-sm border border-blue-100 flex items-start gap-3">
              <FileText className="w-6 h-6 text-[#0b3a74] mt-1" />
              <div>
                <div className="font-semibold text-[#0b3a74]">
                  Actionable reports
                </div>
                <div className="text-gray-600">Customisable & savable</div>
              </div>
            </div>


          </div>

        </div>
        {/* Hero image mock */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block"
        >
          <div className="p-2">
            <img
              src="/images/MR-report.jpg"
              alt="MR report"
              className="w-full h-80 object-contain"
            />
          </div>
        </motion.div>
      </section>

      {/* feature Section */}
      <section className="w-full py-16 bg-[#f6f9ff]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b3a74]">
            Outstanding Features of MRR Reporting Software
          </h2>

          <p className="mt-2 text-gray-600 max-w-7xl">
            Everything your medical representatives and managers need for fast, accurate & transparent reporting.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {features.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl shadow-lg bg-white border border-[#dce7ff]
                         hover:shadow-2xl hover:-translate-y-1 transition-all
                         bg-gradient-to-br from-[#e9f1ff] to-[#ffffff]"
              >
                <div className="text-3xl">{item.icon}</div>

                <h3 className="mt-3 font-semibold text-lg text-[#0b3a74]">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* PRODUCTS SIDE-BY-SIDE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-6xl md:text-6xl font-bold text-center text-[#0b3a74] mb-12">
          Buy Your MR Reporting Software - Cloud Edition
        </h2>
        <div className="flex flex-col gap-16">
          {products.map((p, index) => (
            <div
              key={p.id}

              className={`bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row items-center ${index % 2 === 1 ? "md:flex" : ""
                }`}
            >
              {/* IMAGE SIDE */}
              <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 to-white flex justify-center items-center p-6">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-[500px] "
                />
              </div>

              {/* DETAILS SIDE */}
              {/* DETAILS */}
              <div className="w-full md:w-1/2 p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-semibold text-gray-800">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {p.tag} Edition
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      ₹
                      {p.price.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                    <div className="text-xs text-gray-500">One-time</div>
                  </div>
                </div>

                <div
                  className={`p-5 rounded-xl border ${p.accent} bg-blue-50/40`}
                >
                  <ul className="space-y-2 text-sm text-gray-700">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-0.5 text-green-600">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={() => addToCart(Number(p.id))}
                    className="flex-1 bg-[#0b3a74] text-white px-5 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#0d4891] transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" /> Add to cart
                  </button>
                  <button className="px-5 py-3 rounded-lg border hover:bg-gray-50 transition-all">
                    Buy now
                  </button>
                </div>

                <div className="mt-4 text-xs text-gray-500">
                  SKU:27705 • Support: 1 year
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* CART SUMMARY */}
      <div className="w-full mt-20 bg-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700 font-medium">
            Cart Summary
          </div>
          <div className="text-sm font-semibold">{totalItems} item(s)</div>
        </div>

        <div className="mt-4 space-y-3 text-sm">
          {cart.length === 0 ? (
            <div className="text-gray-500 text-center py-2">
              Your cart is empty.
            </div>
          ) : (
            cart.map((c) => {
              const prod = products.find((x) => Number(x.id) === c.id)!;
              return (
                <div
                  key={c.id}
                  className="flex justify-between border-b pb-2"
                >
                  <div>
                    <div className="font-medium">{prod.title}</div>
                    <div className="text-xs text-gray-500">Qty: {c.qty}</div>
                  </div>
                  <div className="font-semibold">
                    ₹{(prod.price * c.qty).toLocaleString("en-IN")}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="mt-4 flex justify-between border-t pt-4">
          <div className="text-sm text-gray-600">Total</div>
          <div className="text-lg font-bold">
            ₹{totalPrice.toLocaleString("en-IN")}
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            disabled={cart.length === 0}
            className={`flex-1 px-4 py-2 rounded-lg ${cart.length === 0
              ? "bg-gray-200 text-gray-400"
              : "bg-green-600 text-white hover:bg-green-700"
              }`}
          >
            Checkout
          </button>
          <button
            onClick={() => {
              setCart([]);
              setSelected(null);
            }}
            className="px-4 py-2 rounded-lg border hover:bg-gray-50"
          >
            Clear
          </button>
        </div>
      </div>
      {/* images */}
      <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-[#f8fbff] to-white">
        <img
          src="/images/mr-people.png"
          alt="Centered Image"
          className="w-full max-w-8xl object-contain"
        />
      </div>

      {/* Bullet section */}
      <section className="max-w-auto  mx-auto mt-10 p-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE – BULLETS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b3a74] text-left mb-6">
            Additional Powerful Features
          </h2>

          <ul className="space-y-4">
            {bullets.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-white shadow-md rounded-xl p-4 border-l-4 border-blue-600 hover:shadow-lg transition-all"
              >
                <span className="text-blue-600 text-xl">✔</span>
                <p className="text-gray-700 text-lg">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE – IMAGE PLACEHOLDER */}
        <div className="flex justify-center md:justify-end items-center">
          <img
            src="/images/reporting-Software.jpg"
            alt="MR Reporting Preview"
            className="w-full h-[600px] mt-30 justify-center max-w-2xl  object-contain"
          />
        </div>

      </section>


    </div>

  );
}
