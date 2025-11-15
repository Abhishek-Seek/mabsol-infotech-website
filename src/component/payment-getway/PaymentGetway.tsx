"use client";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PaymentGetway() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    setLoading(true);

    const res = await fetch("/api/order", { method: "POST" });
    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: order.amount,
      currency: order.currency,
      name: "My Store",
      description: "Test Payment",
      order_id: order.id,

      handler: async function (response: any) {
        const verifyRes = await fetch("/api/verify", {
          method: "POST",
          body: JSON.stringify(response),
        });

        const verifyData = await verifyRes.json();
        verifyData.success
          ? alert("Payment Successful!")
          : alert("Payment Failed!");
      },

      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.open();
    setLoading(false);
  };

  return (
    <div className="p-5">
      <button
        onClick={handlePayment}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Pay Now
      </button>
    </div>
  );
}
