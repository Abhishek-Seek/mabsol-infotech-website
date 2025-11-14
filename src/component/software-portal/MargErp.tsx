"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ShieldCheck, Cloud, FileText } from "lucide-react";


export default function PricingWithCart() {
  const products = [
     {
      id: "basic",
      title: "Marg Erp 9+ — Silver",
      price: 9999,
      tag: "Basic",
      bullets: [
        "Core accounting & invoicing",
        "GST & compliance-ready",
        "Simple reports & browser access",
      ],
      accent: "bg-white",
      image: "/images/marg-basic.png",
    },
    {
      id: "silver",
      title: "Marg Erp 9+ — Silver",
      price: 13500,
      tag: "Silver",
      bullets: [
        "Core accounting & invoicing",
        "GST & compliance-ready",
        "Simple reports & browser access",
      ],
      accent: "bg-white",
      image: "/images/marg-basic.png",
    },
    {
      id: "gold",
      title: "Marg Erp 9+ — Gold",
      price: 25200,
      tag: "Gold",
      bullets: [
        "All Gold features",
        "Customisable & savable reports",
        "MargVault encryption + priority support",
      ],
      accent: "bg-yellow-50",
      image: "/images/marg-basic.png",
    },
  ];

 
const [cart, setCart] = useState<{ id: number; qty: number }[]>([]);
const [selected, setSelected] = useState<number | null>(null);

const [isCartOpen, setIsCartOpen] = useState(false);
const [toastMsg, setToastMsg] = useState<string | null>(null);

const addToCart = (id: number) => {
  const exists = cart.find((c) => c.id === id);

  if (exists) {
    setCart(cart.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c)));
  } else {
    setCart([...cart, { id, qty: 1 }]);
  }

  // 🔔 Show Toast
  setToastMsg("Item added to cart!");

  // Auto hide toast after 2 sec
  setTimeout(() => setToastMsg(null), 2000);
};

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => {
   const p = products.find((x) => Number(x.id) === i.id)!;
    return s + p.price * i.qty;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
 
       {/* HERO */}
       <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
         <div className="space-y-4">
           <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b3a74] leading-tight">
            Marg ERP 9+ — Find the perfect edition tailored for your business
           </h1>
           <p className="text-gray-700 max-w-2xl">
             Marg ERP 9+ is built on the belief that technology should simplify business, empower owners, and help them grow with confidence.
Marg adapts seamlessly to your business processes and provides accurate, actionable, and secure insights — so you can focus on what truly matters.
           </p>
 
           <div className="mt-6 flex gap-3">
             <button className="px-5 py-3 bg-[#0b3a74] text-white rounded-lg font-medium">
               Contact Sales
             </button>
             <button className="px-5 py-3 border rounded-lg">
               Compare Editions
             </button>
           </div>
           
         
           <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700">
             {/* 1️⃣ Access Anywhere */}
             <div className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-xl p-5 shadow-sm border border-blue-100 flex items-start gap-3">
               <Cloud className="w-6 h-6 text-[#0b3a74] mt-1" />
               <div>
                 <div className="font-semibold text-[#0b3a74]">
                   Access anywhere
                 </div>
                 <div className="text-gray-600">Reports from any browser</div>
               </div>
             </div>
 
             {/* 2️⃣ TallyVault */}
             <div className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-xl p-5 shadow-sm border border-blue-100 flex items-start gap-3">
               <ShieldCheck className="w-6 h-6 text-[#0b3a74] mt-1" />
               <div>
                 <div className="font-semibold text-[#0b3a74]">TallyVault</div>
                 <div className="text-gray-600">End-to-end encryption</div>
               </div>
             </div>
 
             {/* 3️⃣ Actionable Reports */}
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
               src="/images/Margbackbone.png"
               alt="Marg mock"
               className="w-full h-80 object-contain"
             />
           </div>
         </motion.div>
       </section>

       {/* Comparison Section */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-5xl md:text-6xl font-bold text-center text-[#0b3a74] mb-12">
    Compare Marg ERP 9+ Editions
  </h2>

  <div className="grid md:grid-cols-3 gap-10">

    {/* BASIC CARD */}
    <motion.div
      whileHover={{ y: -6 }}
      className="relative p-[2px] rounded-2xl overflow-hidden shadow-lg"
    >
      {/* Metallic Blue Shimmer Border */}
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#1e3a8a,#3b82f6,#1e40af,#93c5fd)] animate-shimmer-blue"></div>

      <div className="relative bg-gradient-to-br from-blue-200 via-white to-blue-300 rounded-2xl p-8 h-full">
        <div className="flex items-center gap-3 mb-4">
          <img
            src="/images/Margbackbone.png"
            alt="Marg Basic"
            className="w-16 h-12 shadow-md"
          />
          <h3 className="text-2xl font-semibold text-gray-800">
            Marg ERP 9+ Basic
          </h3>
        </div>

        <p className="text-gray-600 mb-6">
       Great for small businesses needing billing, stock management, and GST-ready features.
        </p>

        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-green-600">✓</span>
            <span>Essential Features for billing & stock.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-green-600">✓</span>
            <span>Perfect for beginners & small setups.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-green-600">✓</span>
            <span>Affordable with core tools included.</span>
          </li>
        </ul>

        <div className="mt-6 flex justify-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Choose Basic
          </button>
        </div>
      </div>
    </motion.div>

    {/* SILVER CARD */}
    <motion.div
      whileHover={{ y: -6 }}
      className="relative p-[2px] rounded-2xl overflow-hidden shadow-lg"
    >
      {/* Silver Metallic Shimmer */}
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#9ca3af,#e5e7eb,#6b7280,#d1d5db)] animate-shimmer-silver"></div>

      <div className="relative bg-gradient-to-br from-gray-200 via-white to-gray-300 rounded-2xl p-8 h-full">
        <div className="flex items-center gap-3 mb-4">
          <img
            src="/images/Margbackbone.png"
            alt="Marg Silver"
            className="w-16 h-12 shadow-md"
          />
          <h3 className="text-2xl font-semibold text-gray-800">
            Marg ERP 9+ Silver
          </h3>
        </div>

        <p className="text-gray-600 mb-6">
          Perfect for growing businesses needing a complete accounting,
          billing, and GST management solution.
        </p>

        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-green-600">✓</span>
            <span>Single user full-featured access.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-green-600">✓</span>
            <span>Full inventory, GST & accounting.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-green-600">✓</span>
            <span>Cost-effective for small & mid businesses.</span>
          </li>
        </ul>

        <div className="mt-6 flex justify-center">
          <button className="bg-[#0b3a74] text-white px-6 py-2 rounded-lg hover:bg-[#0d4891] transition">
            Choose Silver
          </button>
        </div>
      </div>
    </motion.div>

    {/* GOLD CARD */}
    <motion.div
      whileHover={{ y: -6 }}
      className="relative p-[2px] rounded-2xl overflow-hidden shadow-lg"
    >
      {/* Metallic Gold Shimmer */}
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#c7a200,#fff8dc,#c7a200,#fef7c3)] animate-shimmer-gold"></div>

      <div className="relative bg-gradient-to-br from-yellow-100 via-yellow-50 to-amber-200 rounded-2xl p-8 h-full">
        <div className="flex items-center gap-3 mb-4">
          <img
            src="/images/Margbackbone.png"
            alt="Marg Gold"
            className="w-16 h-12 shadow-md"
          />
          <h3 className="text-2xl font-semibold text-gray-800">
            Marg ERP 9+ Gold
          </h3>
        </div>

        <p className="text-gray-600 mb-6">
          Designed for businesses with multiple staff members needing simultaneous access.
        </p>

        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-green-600">✓</span>
            <span>Multi-user access on LAN.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-green-600">✓</span>
            <span>Suitable for medium to large businesses.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-green-600">✓</span>
            <span>Handles large data & multiple operations smoothly.</span>
          </li>
        </ul>

        <div className="mt-6 flex justify-center">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
            Choose Gold
          </button>
        </div>
      </div>
    </motion.div>
  </div>
</section>

 {/* PRODUCTS SIDE-BY-SIDE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-6xl md:text-6xl font-bold text-center text-[#0b3a74] mb-12">
          Buy Your Marg ERP 9+ Basic, Silver & Gold
        </h2>
        <div className="flex flex-col gap-16">
          {products.map((p, index) => (
            <div
              key={p.id}
             
              className={`bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row items-center ${
                index % 2 === 1 ? "md:flex" : ""
              }`}
            >
              {/* IMAGE SIDE */}
              <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 to-white flex justify-center items-center p-6">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-[400px] "
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
                  SKU:27686 • Support: 1 year
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
                const prod =products.find((x) => Number(x.id) === c.id)!;
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
              className={`flex-1 px-4 py-2 rounded-lg ${
                cart.length === 0
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
                    src="/images/Marg-infographics.jpg"  // 🖼️ Replace with your image path
                    alt="Centered Image"
                    className="w-full max-w-4xl object-contain"
                />
            </div>
        <section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0b3a74] mb-10">
    What Exactly is Marg ERP 9+?
  </h2>

  <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto text-center leading-relaxed">
    Marg ERP 9+ is a complete business management software designed for billing,
    inventory, accounting, GST filing, reporting, and multi-location operations.
    It is widely used across retail, distribution, manufacturing, FMCG,
    pharmaceuticals, jewelry, supermarkets, and more.
  </p>

  <div className="grid md:grid-cols-3 gap-8 mt-14">
    {/* CARD 1 */}
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-[#0b3a74] mb-3">Powerful Billing & GST</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Generate GST-compliant invoices, e-way bills, automate tax calculations,
        and track all financial transactions effortlessly.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-[#0b3a74] mb-3">Smart Inventory Control</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Manage stock levels, expiry, batch, reorder points, transfers, and
        multi-warehouse operations with accuracy.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-[#0b3a74] mb-3">Industry-Ready Features</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Equipped for pharma, FMCG, retail, manufacturing, POS, loyalty, barcode,
        schemes & offers, and custom business workflows.
      </p>
    </div>
  </div>

  <div className="mt-14 grid md:grid-cols-2 gap-8">
    <div className="bg-[#f3f7ff] p-8 rounded-2xl shadow">
      <h4 className="text-2xl font-bold text-[#0b3a74] mb-3">Integrated Mobile Apps</h4>
      <p className="text-gray-600 leading-relaxed">
        Marg offers mobile apps for retailers, field staff, and business owners—
        allowing order entry, tracking, performance analysis, and real-time data access.
      </p>
    </div>

    <div className="bg-[#f3f7ff] p-8 rounded-2xl shadow">
      <h4 className="text-2xl font-bold text-[#0b3a74] mb-3">Advanced Business Tools</h4>
      <p className="text-gray-600 leading-relaxed">
        Generate MIS reports, manage pricing & discount policies, track invoices,
        handle multi-branch operations, and secure data with user-permission layers.
      </p>
    </div>
  </div>
</section>


   
    </div>
  );
}
