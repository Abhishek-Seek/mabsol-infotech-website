"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ShieldCheck, Cloud, FileText } from "lucide-react";
import { Button, Modal } from "antd";
import PaymentGetway from "../payment-getway/PaymentGetway";

export default function MRReportingPage() {
  // PRODUCTS
  const products = [
    {
      id: "1",
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

  const user = {
    name: "Abhishek Singh",
    email: "abhishek@example.com",
    company: "Mabsol Infotech",
  };

  // FEATURES
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

  // EXTRA BULLETS
  const bullets = [
    "Integrates with MR-KnowIT Pharma ERP for real-time primary sales data and Stock-In-Transit Approval Management.",
    "Internal Mailing System: Send mail to all employees by name — no email ID required.",
    "Analyze doctor and chemist visits with detailed insights.",
    "Target vs Achievement Analysis with graphical reports.",
    "Automatically calculates target, primary, and secondary sales.",
    "Send Bulk SMS to Field Staff, Doctors, Chemists, and Stockists easily.",
    "Personalized company URL (e.g., www.xyz.com).",
    "Client’s logo appears on all pages.",
    "Includes easy-to-understand Training Manuals for all users.",
  ];

  // CART STATES
  const [cart, setCart] = useState<{ id: number; qty: number }[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  // ADD TO CART
  const addToCart = (id: number) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === id);
      if (existing) {
        return prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { id, qty: 1 }];
    });
  };

  // TOTAL ITEMS
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  // TOTAL PRICE — SAFE
  const totalPrice = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === String(item.id));
    if (!product) return sum;
    return sum + product.price * item.qty;
  }, 0);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b3a74] leading-tight">
            MRR- Pharma CRM Software Is Easy To Use And Human Centric
          </h1>

          <p className="text-gray-700 max-w-2xl">
            MRR is a simple Pharma CRM software that helps MR’s submit Daily
            Call Reports easily and lets managers track team performance.
          </p>

          <div className="mt-6 flex gap-3">
            <button className="px-5 py-3 bg-[#0b3a74] text-white rounded-lg font-medium">
              Contact Sales
            </button>
            <button className="px-5 py-3 border rounded-lg">
              Cloud Editions
            </button>
          </div>

          {/* 3 MINI FEATURES */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700">
            <div className="bg-blue-50 rounded-xl p-5 shadow-sm border border-blue-100 flex gap-3">
              <Cloud className="w-6 h-6 text-[#0b3a74]" />
              <div>
                <div className="font-semibold text-[#0b3a74]">
                  Access Anywhere
                </div>
                <div className="text-gray-600">Reports from any browser</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-5 shadow-sm border border-blue-100 flex gap-3">
              <ShieldCheck className="w-6 h-6 text-[#0b3a74]" />
              <div>
                <div className="font-semibold text-[#0b3a74]">
                  Internal Mailing
                </div>
                <div className="text-gray-600">Encrypted Messages</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-5 shadow-sm border border-blue-100 flex gap-3">
              <FileText className="w-6 h-6 text-[#0b3a74]" />
              <div>
                <div className="font-semibold text-[#0b3a74]">
                  Actionable Reports
                </div>
                <div className="text-gray-600">Custom & Saveable</div>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img
            src="/images/MR-report.jpg"
            className="w-full h-80 object-contain"
          />
        </motion.div>
      </section>

      {/* FEATURES GRID */}
      <section className="w-full py-16 bg-[#f6f9ff]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b3a74]">
            Outstanding Features of MRR Reporting Software
          </h2>

          <p className="mt-2 text-gray-600 max-w-4xl mx-auto">
            Everything your medical representatives and managers need.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {features.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl shadow-lg bg-white border border-[#dce7ff]
                hover:-translate-y-1 transition-all"
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

      {/* PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-6xl font-bold text-center text-[#0b3a74] mb-12">
          Buy MR Reporting Software - Cloud Edition
        </h2>

        <div className="flex flex-col gap-16">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden"
            >
              {/* IMAGE */}
              <div className="md:w-1/2 p-6 bg-blue-50 flex justify-center">
                <img
                  src={p.image}
                  className="w-full h-[500px] object-contain"
                />
              </div>

              {/* DETAILS */}
              <div className="md:w-1/2 p-8">
                <div className="flex justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-semibold">{p.title}</h3>
                    <p className="text-gray-500">{p.tag} Edition</p>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      ₹
                      {p.price.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                      })}
                    </div>
                    <div className="text-xs text-gray-500">One-time</div>
                  </div>
                </div>

                <ul className="bg-blue-50/40 p-5 rounded-xl space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-green-600">✔</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => addToCart(Number(p.id))}
                    className="flex-1 bg-[#0b3a74] text-white px-5 py-3 rounded-lg flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" /> Add to cart
                  </button>

                  <button className="px-5 py-3 rounded-lg border">
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
      <div className="w-full max-w-7xl mt-20 bg-white rounded-2xl p-6 shadow-md">
        <div className="flex justify-between">
          <div className="font-medium">Cart Summary</div>
          <div className="font-semibold">{totalItems} item(s)</div>
        </div>

        <div className="mt-4 space-y-3">
          {cart.length === 0 ? (
            <div className="text-gray-500 text-center py-2">
              Your cart is empty.
            </div>
          ) : (
            cart.map((c) => {
              const prod = products.find((x) => x.id === String(c.id));
              if (!prod) return null;

              return (
                <div key={c.id} className="flex justify-between pb-2">
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
          <div className="text-gray-600">Total</div>
          <div className="text-lg font-bold">
            ₹{totalPrice.toLocaleString("en-IN")}
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            disabled={cart.length === 0}
            className={`flex-1 px-4 py-2 rounded-lg ${
              cart.length === 0
                ? "bg-gray-200 text-gray-400"
                : "bg-green-600 text-white"
            }`}
            onClick={showLoading}
          >
            Checkout
          </button>

          <button
            onClick={() => setCart([])}
            className="px-4 py-2 rounded-lg border"
          >
            Clear
          </button>
        </div>
      </div>

      {/* IMAGE BELOW */}
      <div className="max-w-7xl w-full min-h-screen flex justify-center items-center mt-5">
        <img
          src="/images/mr-people.png"
          className="w-full max-w-6xl object-contain"
        />
      </div>

      {/* BULLETS WITH IMAGE */}
      <section className="max-w-7xl mx-auto mt-10 p-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-[#0b3a74] mb-6">
            Additional Powerful Features
          </h2>

          <ul className="space-y-4">
            {bullets.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-white shadow-md rounded-xl p-4 border-l-4 border-blue-600"
              >
                <span className="text-blue-600 text-xl">✔</span>
                <p className="text-gray-700 text-lg">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/images/Reporting-Software.jpg"
            className="w-full h-[600px] object-contain"
          />
        </div>
      </section>
      <Modal
        title="Checkout Summary"
        footer={
          <>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            {/* PaymentGetway ke handler ko call karenge */}
            <PaymentGetway totalPrice={totalPrice} user={user} />
          </>
        }
        open={open}
        onCancel={() => setOpen(false)}
      >
        <div className="text-lg font-bold mb-4">
          Total Amount: ₹{totalPrice.toLocaleString("en-IN")}
        </div>
        {cart.map((c) => {
          const prod = products.find((x) => Number(x.id) === Number(c.id));
          if (!prod) return null;
          return (
            <div key={c.id} className="flex justify-between border-b pb-2">
              <div>
                <div className="font-medium">{prod.title}</div>
                <div className="text-xs text-gray-500">Qty: {c.qty}</div>
              </div>
              <div className="font-semibold">
                ₹{(prod.price * c.qty).toLocaleString("en-IN")}
              </div>
            </div>
          );
        })}
      </Modal>
    </div>
  );
}
