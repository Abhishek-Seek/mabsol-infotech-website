"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShoppingCart,
  ShieldCheck,
  Cloud,
  FileText,
  Trash2,
} from "lucide-react";
import { Button, Modal } from "antd";
import PaymentGetway from "../payment-getway/PaymentGetway";

type CartSummaryProps = {
  cart: CartItem[];
  setCart?: (items: CartItem[]) => void;
};
// -------------------- CONSTANTS --------------------
const EXTRA_USER_PRICE = 3000;
const EXTRA_COMPANY_PRICE = 6500;

// -------------------- PRODUCT TYPE --------------------
interface ProductType {
  id: string;
  title: string;
  price: number;
  tag: string;
  bullets: string[];
  accent: string;
  image: string;
}

const user = {
  name: "Abhishek Singh",
  email: "abhishek@example.com",
  company: "Mabsol Infotech",
};

const Products: ProductType[] = [
  {
    id: "basic",
    title: "Marg Erp 9+ — Basic",
    price: 9999,
    tag: "Basic",
    bullets: [
      "Perfect for beginners & small setups.",
      "Included Users: 1 Full-Rights User",
      `Extra User Cost: ₹${EXTRA_USER_PRICE} per user (Max 2 Users)`,
      `Extra Company Cost: ₹${EXTRA_COMPANY_PRICE} per company (Max 2 Companies)`,
    ],
    accent: "bg-blue-200",
    image: "/images/marg-basic.png",
  },
  {
    id: "silver",
    title: "Marg Erp 9+ — Silver",
    price: 13500,
    tag: "Silver",
    bullets: [
      "Single-user access on LAN",
      "Included Users: 1 Full-Rights User + 1 View-Only User",
      `Extra User Cost: ₹${EXTRA_USER_PRICE} per extra user (Max 25 Users)`,
      `Extra Company Cost: ₹${EXTRA_COMPANY_PRICE} per company (Max 25 Companies)`,
      "Multi-company support",
    ],
    accent: "bg-gray-300",
    image: "/images/marg-basic.png",
  },
  {
    id: "gold",
    title: "Marg Erp 9+ — Gold",
    price: 25200,
    tag: "Gold",
    bullets: [
      "Multi-user access on LAN",
      "25 user access",
      "25 companies supported",
      "Included Users: Unlimited Users",
      "Extra User Cost: Unlimited users allowed",
    ],
    accent: "bg-yellow-200",
    image: "/images/marg-basic.png",
  },
];

// -------------------- CART TYPES --------------------
interface CartItem {
  product: ProductType;
  qty: number;
  extraUsers: number;
  extraCompanies: number;
  total: number;
}

// -------------------- GET LIMITS --------------------
const getLimits = (id: string) => {
  if (id === "basic") return { user: 2, company: 2 };
  if (id === "silver") return { user: 25, company: 25 };
  return { user: Infinity, company: Infinity };
};

export default function MargErp() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toastMsg, setToastMsg] = useState("");

  const addToCart = (
    product: ProductType,
    qty: number,
    extraUsers: number,
    extraCompanies: number
  ) => {
    const total =
      product.price * qty +
      extraUsers * EXTRA_USER_PRICE +
      extraCompanies * EXTRA_COMPANY_PRICE;

    setCart((prev) => [
      ...prev,
      { product, qty, extraUsers, extraCompanies, total },
    ]);

    setToastMsg(`${product.title} added to cart!`);
    setTimeout(() => setToastMsg(""), 2000);
  };

  const basicDetails = [
    "Core accounting & invoicing",
    "GST & compliance-ready",
    "Basic inventory management",
    "Perfect for beginners & small setups.",
    "Simple daily reports",
    "GST applicable: 18%",
    "Included Users: 1 Full-Rights User",
    "Extra User Cost: ₹3000 per user (Max 2 Users)",
    "Extra Company Cost: ₹6500 per company (Max 2 Companies)",
    "Browser access & basic reports",
    "Limited salesman/discount/scheme features",
    "No cloud backup protection",
    "Limited salesman/discount/scheme features",
    "No cloud backup protection",
  ];

  const silverDetails = [
    "Single user full-featured access.",
    "Advanced inventory & reporting",
    "Cost-effective for small & mid businesses.",
    "Salesman-wise tracking & schemes",
    "GST applicable: 18%",
    "Included Users: 1 Full-Rights User + 1 View-Only User",
    "Extra User Cost: ₹3000 per extra user (Max 25 Users)",
    "Extra Company Cost: ₹6500 per company (Max 25 Companies)",
    "Multi-company support (extra charge)",
    "Better security controls",
    "Faster reporting & improved performance",
  ];
  const goldDetails = [
    "Multi-user access on LAN",
    "Suitable for medium to large businesses",
    "Handles large data & multiple operations smoothly.",
    "Advanced business analytics & reports",
    "GST applicable: 18%",
    "25 user access",
    "25 companies supported",
    "Included Users: Unlimited Users",
    "Extra User Cost: Unlimited users allowed (no limit)",
    "Salesman/discount/scheme features (advanced)",
    "Salesman/discount/scheme features (advanced)",
    "Cloud backup protection",
    "Email/SMS integration",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b3a74] leading-tight">
            Marg ERP 9+ — Find the perfect edition tailored for your business
          </h1>
          <p className="text-gray-700 max-w-2xl">
            Marg ERP 9+ is built on the belief that technology should simplify
            business, empower owners, and help them grow with confidence. Marg
            adapts seamlessly to your business processes and provides accurate,
            actionable, and secure insights — so you can focus on what truly
            matters.
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
        <h2 className="text-6xl md:text-5xl font-bold text-center text-[#0b3a74] mb-12">
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
                Great for small businesses needing billing, stock management,
                and GST-ready features.
              </p>

              <ul className="space-y-3 text-sm text-gray-700">
                {basicDetails.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
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
                {silverDetails.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
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
                Designed for businesses with multiple staff members needing
                simultaneous access.
              </p>

              <ul className="space-y-3 text-sm text-gray-700">
                {goldDetails.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
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

      {/* features card     */}
      <Link href="/features-comparison">
        <Button className="inline-block  max-w-4xl px-5 py-5! bg-[#0b3a74]! text-white! rounded-lg font-medium shadow-md hover:bg-blue-600 transition">
          View Features Comparison Chart →
        </Button>
      </Link>

      {/* PRODUCTS SIDE-BY-SIDE */}
      <div className="min-h-screen w-full max-w-7xl bg-gray-50 p-6 mt-6 md:p-14">
        {/* Toast */}
        {toastMsg && (
          <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg animate-slide-in">
            {toastMsg}
          </div>
        )}
        <h2 className="text-4xl font-bold text-center text-[#0b3a74] mb-12">
          Buy Your Marg ERP 9+ Basic, Silver & Gold
        </h2>

        {/* FULL-WIDTH FLEX DISPLAY */}
        <div className="flex flex-col gap-10 w-full max-w-7xl mx-auto">
          {Products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              addToCart={addToCart}
              limits={getLimits(p.id)}
            />
          ))}
        </div>

        <CartSummary cart={cart} setCart={setCart} />
      </div>

      {/* nicha ka  images */}
      <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-[#f8fbff] to-white">
        <img
          src="/images/Marg-infographics.jpg" // 🖼️ Replace with your image path
          alt="Centered Image"
          className="w-full max-w-4xl object-contain"
        />
      </div>
      {/* WHAT IS MARG ERP */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl  md:text-5xl font-bold text-center text-[#0b3a74] mb-10">
          What Exactly is Marg ERP 9+?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {/* CARD 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#0b3a74] mb-3">
              Powerful Billing & GST
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Generate GST-compliant invoices, e-way bills, automate tax
              calculations, and track all financial transactions effortlessly.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#0b3a74] mb-3">
              Smart Inventory Control
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Manage stock levels, expiry, batch, reorder points, transfers, and
              multi-warehouse operations with accuracy.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#0b3a74] mb-3">
              Industry-Ready Features
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Equipped for pharma, FMCG, retail, manufacturing, POS, loyalty,
              barcode, schemes & offers, and custom business workflows.
            </p>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          <div className="bg-[#f3f7ff] p-8 rounded-2xl shadow">
            <h4 className="text-2xl font-bold text-[#0b3a74] mb-3">
              Integrated Mobile Apps
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Marg offers mobile apps for retailers, field staff, and business
              owners— allowing order entry, tracking, performance analysis, and
              real-time data access.
            </p>
          </div>

          <div className="bg-[#f3f7ff] p-8 rounded-2xl shadow">
            <h4 className="text-2xl font-bold text-[#0b3a74] mb-3">
              Advanced Business Tools
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Generate MIS reports, manage pricing & discount policies, track
              invoices, handle multi-branch operations, and secure data with
              user-permission layers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// -------------------- PRODUCT CARD --------------------
interface CardProps {
  product: ProductType;
  addToCart: (
    product: ProductType,
    qty: number,
    extraUsers: number,
    extraCompanies: number
  ) => void;
  limits: { user: number; company: number };
}

function ProductCard({ product, addToCart, limits }: CardProps) {
  const [qty, setQty] = useState(1);
  const [extraUsers, setExtraUsers] = useState(0);
  const [extraCompanies, setExtraCompanies] = useState(0);

  const handleAdd = () => {
    addToCart(product, qty, extraUsers, extraCompanies);
  };

  return (
    <div className="bg-white text-[#0b3a74] w-full rounded-lg shadow-md border overflow-hidden">
      <div className="grid md:grid-cols-2 gap-2 p-4">
        {/* LEFT IMAGE */}
        <div className="flex w-full items-center p-4 justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px]  object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full p-2">
          {/* Title & Price */}
          <div className="flex justify-between">
            <div>
              <h3 className="text-3xl font-bold text-[#0b3a74]">
                {product.title}
              </h3>
              <p className="text-gray-500">{product.tag} Edition</p>
            </div>

            <div className="text-right">
              <h3 className="text-3xl font-bold text-[#0b3a74]">
                ₹{product.price}
              </h3>
              <p className="text-gray-500 text-sm">One-time</p>
            </div>
          </div>

          {/* Bullets */}
          <ul className="mt-5 border rounded-xl p-5 space-y-3 text-gray-700">
            {product.bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-green-600">✓</span> {b}
              </li>
            ))}
          </ul>

          {/* Inputs */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <InputField
              label="Quantity"
              value={qty}
              min={1}
              onChange={setQty}
            />

            <InputField
              label={`Extra Users (Max: ${
                limits.user === Infinity ? "∞" : limits.user
              })`}
              value={extraUsers}
              min={0}
              max={limits.user === Infinity ? undefined : limits.user}
              onChange={setExtraUsers}
            />

            <InputField
              label={`Extra Companies (Max: ${
                limits.company === Infinity ? "∞" : limits.company
              })`}
              value={extraCompanies}
              min={0}
              max={limits.company === Infinity ? undefined : limits.company}
              onChange={setExtraCompanies}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Button
              onClick={handleAdd}
              className="flex-1 bg-[#185e9a]! text-white! py-4!"
            >
              Add to Cart
            </Button>
            {/* Buttons */}
            {/* <div className="flex gap-4 mt-6">
              <button
                onClick={handleAdd}
                className="flex-1 bg-[#0b3a74] hover:bg-[#072452] text-white py-3 rounded-xl font-semibold transition"
              >
                Add to Cart
              </button>

              <button className="px-6 py-3 rounded-xl border hover:bg-gray-100 font-semibold transition">
                Buy Now
              </button>
            </div> */}
            <Button className="px-6 py-4! rounded-xl border bg-[] font-semibold transition">
              Buy Now
            </Button>
          </div>

          <p className="text-gray-500 text-sm mt-3">
            SKU: 27686 • Support: 1 year
          </p>
        </div>
      </div>

      {/* Accent Bar */}
      <div className="h-5 w-full bg-blue-100"></div>
    </div>
  );
}

// -------------------- INPUT FIELD COMPONENT --------------------
function InputField({
  label,
  value,
  onChange,
  min,
  max,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div>
      <label className="font-semibold">{label}</label>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
        className="border p-2 rounded w-full mt-1"
      />
    </div>
  );
}

// -------------------- CART SUMMARY --------------------
function CartSummary({ cart, setCart }: CartSummaryProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  // const [cart, setCart] = useState<{ id: number; qty: number }[]>([]);

  // ✔ Correct total price
  const total = cart.reduce((sum, item) => sum + item.total, 0);

  const onDelete = (index: number) => {
    if (!setCart) return;
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-[#0b3a74] mb-5">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-center py-10">Cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-3"
            >
              <div>
                <div className="font-semibold text-lg">
                  {item.product.title}
                </div>
                <div className="text-sm text-gray-500">
                  Qty: {item.qty} • Extra Users: {item.extraUsers} • Extra
                  Companies: {item.extraCompanies}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="font-bold text-[#0b3a74]">
                  ₹{item.total.toLocaleString("en-IN")}
                </div>

                <Trash2
                  className="text-red-500 cursor-pointer"
                  onClick={() => onDelete(index)}
                />
              </div>
            </div>
          ))
        )}

        <div className="mt-4 flex justify-between pt-4">
          <div className="text-2xl font-bold text-[#0b3a74]">
            Total: ₹{total.toLocaleString("en-IN")}
          </div>
        </div>

        <div className="mt-5 w-1/2 flex gap-3 justify-end ml-auto">
          {/* SMALL CLEAR BUTTON */}
          <Button
            onClick={() => setCart?.([])}
            className="flex-[0.1] py-4 rounded-lg border"
          >
            Clear
          </Button>

          {/* BIGGER CHECKOUT BUTTON */}
          {cart.length > 0 && (
            // <div className="flex justify-between items-center">
            <Button
              disabled={cart.length === 0}
              onClick={() => setOpen(true)}
              className={`flex-[1] py-4 rounded-lg ${
                cart.length === 0
                  ? "bg-gray-200! text-gray-400!"
                  : "bg-[#339933]! text-white!"
              }`}
            >
              Checkout
            </Button>
            // </div>
          )}
        </div>
      </div>

      {/* -------------------- MODAL -------------------- */}
      <Modal
        title="Checkout Summary"
        open={open}
        onCancel={() => setOpen(false)}
        footer={
          <>
            <Button onClick={() => setOpen(false)}>Cancel</Button>

            {/* Payment gateway */}
            <PaymentGetway totalPrice={total} user={user} />
          </>
        }
      >
        <div className="text-lg font-bold mb-4">
          Total Amount: ₹{total.toLocaleString("en-IN")}
        </div>

        {cart.map((item, index) => (
          <div key={index} className="flex justify-between border-b pb-2">
            <div>
              <div className="font-medium">{item.product.title}</div>
              <div className="text-xs text-gray-500">Qty: {item.qty}</div>
            </div>
            <div className="font-semibold">
              ₹{item.total.toLocaleString("en-IN")}
            </div>
          </div>
        ))}
      </Modal>
    </>
  );
}
