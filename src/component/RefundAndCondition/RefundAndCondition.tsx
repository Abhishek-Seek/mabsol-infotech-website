import React from "react";

const RefundAndCondition = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#f7faff] to-white text-gray-800">
      
        {/* 🏥 Hero Section */}
      <div className="h-[60vh] flex flex-col justify-center items-center bg-fixed bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/images/money.jpg')",
          filter: "brightness(0.9)",
        }}
      >

        {/* Title */}
        <h1 className="text-6xl font-bold text-white drop-shadow-md mt-4">Refund and Cancellation Policy</h1>

        {/* Subtitle */}
        {/* <p className="text-lg mt-3 text-white">Streamline Your Clinic Operations with Ease</p> */}
      </div>

      {/* 🌟 MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 space-y-12">

        {/* Section Wrapper */}
        {[
          {
            title: "1. Delivery Policy",
            content: (
              <p>
                All online purchases are delivered within 48 working hours. Once
                payment is completed, you will receive an email with download
                instructions and a digital invoice.
              </p>
            ),
          },
          {
            title: "2. Cancellation Policy",
            content: (
              <p>
                Orders can be cancelled only before the license key or software
                is delivered. Once delivered, cancellation is no longer possible.
              </p>
            ),
          },
          {
            title: "3. Refund Policy",
            content: (
              <ul className="list-disc pl-5 space-y-2">
                <li>Refunds apply only for technical issues or duplicate payments.</li>
                <li>Refunds are completed within 7–10 working days after approval.</li>
                <li>
                  Refund requests must be sent to{" "}
                  <span className="font-semibold">mabsolinfotech@gmail.com</span>
                </li>
                <li>Delivered or activated products cannot be refunded.</li>
              </ul>
            ),
          },
          {
            title: "4. Privacy Policy",
            content: (
              <p>
                We ensure strict protection of your personal data. Information is used only 
                for processing orders, generating invoices, and support. Your data is never 
                shared with third parties unless required by law.
              </p>
            ),
          },
          {
            title: "5. EMI Policy",
            content: (
              <ul className="list-disc pl-5 space-y-2">
                <li>EMI is not supported for Net Banking payments.</li>
                <li>EMI approval depends entirely on the customer’s bank.</li>
                <li>Applicable GST and additional charges may apply.</li>
                <li>Mabsol Infotech may discontinue EMI offers anytime.</li>
              </ul>
            ),
          },
        ].map((sec, i) => (
          <section
            key={i}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-100"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#185e9a] mb-4">
              {sec.title}
            </h2>
            <div className="text-gray-700 leading-relaxed text-lg">
              {sec.content}
            </div>
          </section>
        ))}

    
      </div>
    </div>
  );
};

export default RefundAndCondition;
