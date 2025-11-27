"use client"
import Link from "next/link";
import React from "react";
import { Button } from "antd";


const productData = [
  {
    title: "M R Reporting",
    price: "₹1,500.00",
    img: "/images/MR-report.jpg",
    link: "/reporting",
  },
  {
    title: "Tally",
    price: "₹22,500.00 – ₹64,000.00",
    img: "/images/Tally-images.jpg",
    link: "/tallys",
  },
  {
    title: "MARG ERP 9+",
    price: "₹1,000.00 – ₹25,200.00",
    img: "/images/marg-logo.webp",
    link: "/margErp",
  },
];

const OurProduct = () => {
  return (
    <div className="py-10 lg:py-15 px-6 lg:px-20 bg-[#f8fafc]">
      {/* Heading */}
      <h1 className="text-5xl lg:text-5xl font-bold text-center text-[#0b3a74] mb-4 tracking-wide">
        Our Products
      </h1>
      <p className="text-center text-gray-600 max-w-5xl mx-auto mb-12">
        Our product range includes MR Reporting, Tally, and MARG ERP 9+—powerful and
        reliable solutions designed to simplify accounting, business management, and
        reporting. Whether you're a small business or a large enterprise, our tools
        streamline operations, improve accuracy, and help you manage your business with ease.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-12">
        {productData.map((product, index) => (
          <div
            key={index}
            className="group bg-white shadow-lg hover:shadow-xl transition-all duration-500 rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Image Section */}
            <div className="relative h-[260px] overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="p-6 text-center flex flex-col">
              <h2 className="text-2xl font-bold text-[#185e9a]">
                {product.title}
              </h2>

              <p className="text-gray-600 mt-1">{product.title}</p>

              <p className="text-green-700 text-xl font-semibold mt-3">
                {product.price}
              </p>
              <Link href={product.link}>
                <Button
                  type="primary"
                  htmlType="button"
                  className="!rounded-md !bg-[#185e9a] !py-5 !px-8 mt-6 mx-auto text-lg font-medium shadow-md hover:!bg-[#0f4c7d]"
                >
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
