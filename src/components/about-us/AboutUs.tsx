"use client";
import React from "react";
import Image from "next/image";
import { CheckOutlined } from "@mui/icons-material";
import { Card } from "antd";

export default function AboutUs() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Top Section - About Us */}
      <section className="max-w-7xl w-full grid md:grid-cols-2 gap-15 px-8 py-20">
        <div>
          <p className="text-orange-600 text-xl font-semibold mb-2">About Us</p>
          <h2 className="text-5xl text-[#0b3a74] font-bold mb-4">It all started with a simple idea.</h2>
          <p className="text-gray-800 text-md leading-relaxed">
            At Mabsol Infotech, we are committed to delivering innovative software solutions
            that empower businesses to thrive in a competitive world. Specializing in Web
            Development, Accounting Software, ERP Software, and Payroll Software, we offer
            tailored services to streamline your operations and drive growth. With a focus on
            quality and customer satisfaction, we ensure seamless experiences and lasting
            partnerships.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="relative h-40 w-full rounded-lg overflow-hidden shadow-md">
            <Image src="/homePage/account.jpg" alt="idea" fill className="object-cover" />
          </div>
          <div className="relative h-40 w-full rounded-lg overflow-hidden shadow-md">
            <Image src="/homePage/graph.jpg" alt="team" fill className="object-cover" />
          </div>
           <div className="relative h-40 w-full rounded-lg overflow-hidden shadow-md">
            <Image src="/homePage/notes.jpg" alt="team" fill className="object-cover" />
          </div>
            <div className="relative h-40 w-full rounded-lg overflow-hidden shadow-md">
            <Image src="/homePage/mabsol.jpg" alt="idea" fill className="object-cover" />
          </div>
         
         
        </div>
      </section>

      {/* Why Choose Mabsol Section */}
      <section className="max-w-9xl w-full px-36 py-16 bg-[#f8fafc]">
        <p className="text-orange-600 text-xl text-center font-semibold mb-2">Why Choose Us</p>
        <h2 className="text-5xl font-bold text-center text-[#0b3a74] mb-4">Why Choose Mabsol Infotech?</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          People choose Mabsol Infotech for our expertise, reliability, and commitment to
          excellence. We deliver customized solutions like Accounting Software, ERP, Payroll,
          and Web Development, backed by exceptional customer support to ensure your success.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-10">

  {/* Card 1 */}
  <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition relative overflow-hidden">
    
    {/* Icon Circle */}
    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
      <img src="/homePage/idea.png" alt="Tailored Solutions" className="text-blue-600 text-2xl" />
    </div>

    <h3 className="text-xl text-[#0b3a74] font-semibold text-gray-800">Tailored Solutions</h3>
    <p className="text-gray-800 text-sm mt-2 leading-relaxed">
      Customized software and services crafted to fit your exact business needs.
    </p>
  </div>

  {/* Card 2 */}
  <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition relative overflow-hidden">
    
    {/* Icon Circle */}
    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
       <img src="/homePage/support.png" alt="Reliable Support" className="text-blue-600 text-2xl" />
    </div>

    <h3 className="text-xl text-[#0b3a74] font-semibold text-gray-800">Reliable Support</h3>
    <p className="text-gray-800 text-sm mt-2 leading-relaxed">
      Prompt, responsive support ensuring smooth and uninterrupted operations.
    </p>
  </div>

  {/* Card 3 */}
  <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition relative overflow-hidden">
    
    {/* Icon Circle */}
    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
       <img src="/homePage/technology.png" alt="Advanced Technology" className="text-blue-600 text-2xl" />
    </div>

    <h3 className="text-xl text-[#0b3a74] font-semibold text-gray-800">Advanced Technology</h3>
    <p className="text-gray-800 text-sm mt-2 leading-relaxed">
      Leveraging modern tools and technologies to drive innovation and growth.
    </p>
  </div>

</div>

      </section>

      {/* our vision section */}
      <section className="max-w-7xl w-full grid md:grid-cols-2 gap-12 px-8 py-20">

  {/* LEFT : Image Grid */}
  <div
    data-aos="fade-right"
    data-aos-duration="1500"
  >
    <div className="relative h-[600px] w-full overflow-hidden ">
      <Image src="/homePage/payroll-management.webp" alt="vision" fill className="object-cover" />
    </div>
  </div>

  {/* RIGHT : Vision Content */}
  <div
    data-aos="fade-left"
    data-aos-duration="1500"
    className="flex flex-col justify-center"
  >
    <div>
          <p className="text-orange-600 text-xl font-semibold mb-2">Our Vision</p>
          <h2 className="text-5xl text-[#0b3a74] font-bold mb-4">Driving Innovation for a Smarter Future.</h2>
          <p className="text-gray-800 text-md leading-relaxed mb-5">
            At Mabsol Infotech, our vision is to be a catalyst for digital transformation, enabling
  businesses to achieve their fullest potential through cutting-edge technology. We aim
  to create intelligent software solutions that simplify complex processes, enhance
  productivity, and foster sustainable growth. By embracing innovation and maintaining
  excellence, we strive to shape a smarter, more connected future for our clients and
  communities.
          </p>
        </div>

    <ul className="space-y-3">
      {[
        "Empower businesses through advanced technology.",
        "Become a trusted partner for growth and success.",
        "Drive innovation with customer-centric solutions.",
        "Foster long-term relationships built on trust and excellence.",
      ].map((text, index) => (
        <li key={index} className="flex items-start gap-2">
          <CheckOutlined className="bg-[#185e9a] text-white p-1 rounded-full text-sm" />
          <span className="text-base italic text-black">{text}</span>
        </li>
      ))}
    </ul>
  </div>

</section>

{/* our mission section */}
<section className="max-w-7xl w-full grid md:grid-cols-2 gap-5 px-5 py-10">

  {/* LEFT : Mission Content */}
  <div
    data-aos="fade-right"
    data-aos-duration="1500"
    className="flex flex-col justify-center"
  >
    <div>
      <p className="text-orange-600 text-xl font-semibold mb-2">Our Mission</p>
      <h2 className="text-5xl text-[#0b3a74] font-bold mb-4">Empowering Businesses with Technology.</h2>
      <p className="text-gray-800 text-md leading-relaxed mb-5">
        Our mission at Mabsol Infotech is to empower businesses with cutting-edge technology
        solutions that simplify processes, enhance efficiency, and foster growth. We are
        dedicated to delivering innovative, reliable, and scalable tools that meet the evolving
        needs of our clients while maintaining a focus on excellence and customer satisfaction.
      </p>
    </div>

    <ul className="space-y-3">
      {[
        "Deliver innovative and scalable software solutions.",
        "Simplify business processes to boost efficiency.",
        "Focus on customer satisfaction and long-term success.",
        "Stay committed to quality and technological excellence.",
      ].map((text, index) => (
        <li key={index} className="flex items-start gap-2">
          <CheckOutlined className="bg-[#185e9a] text-white p-1 rounded-full text-sm" />
          <span className="text-base italic text-black">{text}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* RIGHT : Image */}
  <div
    data-aos="fade-left"
    data-aos-duration="1500"
  >
    <div className="relative h-[600px] w-full overflow-hidden">
      <Image src="/homePage/mens-mission.webp" alt="mission" fill className="object-cover" />
    </div>
  </div>

</section>





    </div>
  );
}
