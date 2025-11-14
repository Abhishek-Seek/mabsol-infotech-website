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
        "Website Development Services to Build Your Digital Identity...",
      path: "/website-development",
    },
    {
      image: "/images/our2.webp",
      title: "Accounting Software",
      description:
        "Accounting Software Solutions to Streamline Your Financial Operations...",
      path: "/accounting-software",
    },
    {
      image: "/images/our3.webp",
      title: "Payroll Software",
      description:
        "Advanced Payroll Software for Efficient Salary and HR Management...",
      path: "/payroll-software",
    },
    {
      image: "/images/our4.webp",
      title: "ERP Software",
      description:
        "Smart ERP Software for Complete Business Management...",
      path: "/erp-software",
    },
    {
      image: "/images/our5.webp",
      title: "SFA Software",
      description:
        "Powerful SFA Software to Automate and Optimize Sales Operations...",
      path: "/sfa-software",
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
          style={{ backgroundImage: "url('/images/sfa.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F54]/80 to-[#004AAD]/70" />
        <div className="relative z-10">
          <Title className="!text-white !mb-4 drop-shadow-lg !text-6xl font-bold">
            SFA Software
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
              What Is
              <span className="text-orange-600">Sales Force Automation?</span>
            </h2>
            <div>
              <p className="text-gray-600 text-[16px] leading-7 mt-8">
                Sales Force Automation (SFA) refers to the systems that automate sales activities and processes for sales professionals. It is one foundational software for organizations to manage and track all sales interactions and administrative activities between sales teams and customers. The primary aim of the Sales Force Automation System is to automate certain repetitive and time-consuming everyday tasks of the sales team. MabsolInfotech flagship Mobile Sales Force Automation Solution, ZooM, is focused on mobilizing and automating the routine activities of the sales force, customer executives, and field representatives who are on the move. It is exclusively designed to consider every important aspect of the sales activities and sales force management functions. This end-to-end mobile sales force automation software help businesses boost productivity and increase RoI by automating processes even while your sales team is on the field. This SFA Solution is tightly coupled with back-office and thereby offers reliable, secure, and real-time information exchange and easy accessibility of business-critical information at just a few fingertips.
              </p>
            </div>
          </Card>
        </div>
      </section>
      <section className="py-4 flex justify-center">
        <div className="w-full max-w-6xl px-6">
          <Card className="shadow-xl rounded-2xl border !p-10 bg-white">
            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#1a3d7c] leading-snug">
              Major Components Of
              <br />
              <span className="text-orange-600">
                Mobile Sales Force Automation Solution
              </span>
            </h2>
            <div>
              <p className="text-gray-600 text-[16px] leading-7 mt-8">
                Pre-sales & Order Taking · Direct Sales/Van Sales Automation · Marketing &
                BTL Activities · Customized Survey/Feedback
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
                    <div
                      className="h-[200px] w-full overflow-hidden cursor-pointer"
                      onClick={() => router.push(item.path)}
                    >
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
