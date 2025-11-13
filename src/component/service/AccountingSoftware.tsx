"use client";

import { Card, Typography, Button } from "antd";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Title } = Typography;

export default function AccountingSoftwarePage() {
  const sliderRef = useRef<any>(null);
  const router = useRouter();

  const services = [
    {
      image: "/images/our.webp",
      title: "Website Development",
      description:
        "Website Development Services to Build Your Digital Identity. Our expert website development services help businesses establish a strong online presence...",
      role: "Read More",
    },
    {
      image: "/images/our2.webp",
      title: "Accounting Software",
      description:
        "Accounting Software Solutions to Streamline Your Financial Operations. Our accounting solutions automate billing, payroll, and GST management seamlessly...",
      role: "Read More",
    },
    {
      image: "/images/our3.webp",
      title: "Payroll Software",
      description:
        "Advanced Payroll Software for Efficient Salary and HR Management. Automate every payroll task with accuracy and compliance features...",
      role: "Read More",
    },
    {
      image: "/images/our4.webp",
      title: "ERP Software",
      description:
        "Smart ERP Software for Complete Business Management. Manage inventory, accounting, and operations efficiently in one place...",
      role: "Read More",
    },
    {
      image: "/images/our5.webp",
      title: "SFA Software",
      description:
        "Powerful SFA Software to Automate and Optimize Sales Operations. Empower your sales team with real-time insights and tracking...",
      role: "Read More",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="relative text-white text-center py-30 overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/account.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F54]/80 to-[#004AAD]/70" />
        <div className="relative z-10">
          <Title className="!text-white !mb-4 drop-shadow-lg !text-6xl font-bold">
            Accounting Software
          </Title>
          <Button
            className="!py-6 !px-8 !rounded-none !text-md !text-white hover:!bg-blue-800 !bg-transparent mt-6 border border-white"
            onClick={() => router.push("/")}
          >
            Home
          </Button>
        </div>
      </header>

      {/* ===== Description Section ===== */}
      <section className="py-10 flex justify-center">
        <div className="w-full max-w-6xl px-6">
          <Card className="shadow-xl rounded-2xl border border-gray-50 !p-10 bg-white">
            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#1a3d7c] leading-snug">
            Boosts Your Business Efficiency with a Complete
            <br />
            <span className="text-orange-600">Accounting Software?</span>
          </h2>
          <div>
            <p className="text-gray-600 text-[16px] leading-7 mt-8">
              From Accounting Transactions like Vouchers to Ledgers to Trial Balance & Balance sheets,
              everything is available at the click of a button by using Busy Accounting Software.
              Manage your inventory with additional details like Batch No. (with expiry), Serial Nos.,
              and Parameters (Colour, Size, Style, etc.). Maintain multiple go-downs & locations smoothly
              with this Inventory management Software. Create GST-compliant professional invoices easily
              as per business requirements. Maintain Party / Item-wise & Date-wise product prices with
              this GST Accounting Software. Manage GST from Billing to Return Filing with features like
              GSTIN Validation, GST Reconciliation, E-Way Bill & E-Invoice Generation, and other GST
              Accounting Software features. Manage all your business operations like Indent, Quotation,
              Order, Challan, Invoicing, Receivable, Payable along with Payroll & Customer Support swiftly
              with this GST Billing Software. Stay connected with your business data anywhere and anytime
              directly through your Mobile Phone. Timely access to data with accounting software can help
              you make smart business decisions.
            </p>
          </div>
          </Card>
        </div>
      </section>

      {/* ===== Other Services Section ===== */}
      <section className="py-10 bg-white relative">
        <div className="px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="text-center mb-12">
           <h2 className="text-[28px] sm:text-[32px] font-bold text-[#1a3d7c]  font-bold underline underline-offset-6 leading-snug">
              Other 
              <span className="text-orange-600">Services</span>
            </h2>
          </div>

          {/* ==== Carousel ==== */}
          <div className="relative">
            <Button
              type="text"
              icon={<LeftOutlined />}
              className="!absolute -left-8 top-1/2 -translate-y-1/2 z-20 !bg-white shadow-md hover:!bg-gray-100"
              onClick={() => sliderRef.current?.slickPrev()}
            />
            <Button
              type="text"
              icon={<RightOutlined />}
              className="!absolute -right-8 top-1/2 -translate-y-1/2 z-20 !bg-white shadow-md hover:!bg-gray-100"
              onClick={() => sliderRef.current?.slickNext()}
            />

            <Slider ref={sliderRef} {...settings}>
              {services.map((item, index) => (
                <div key={index} className="px-4">
                  <Card
                    hoverable
                    className="rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 transition-all duration-300 shadow-md"
                  >
                    <div className="h-[200px] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h2 className="text-lg font-bold text-[#1a3d7c] mb-2">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {item.description}
                      </p>
                      <a
                        href="#"
                        className="mt-3 inline-block text-sm underline text-[#1a3d7c] font-semibold"
                      >
                        {item.role}
                      </a>
                    </div>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}
