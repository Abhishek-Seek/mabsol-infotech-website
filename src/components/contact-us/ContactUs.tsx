import { HomeOutlined, PhoneFilled } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-10 lg:px-20 py-16 bg-gray-50"
    >
      {/* LEFT SIDE */}
      <div
        className="flex flex-col justify-center space-y-8"
      >
        {/* Heading */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0b3a74] ">
            Contact Us
          </h1>
          <p className="text-base md:text-md pt-4 text-gray-700 text-justify">
            At Mabsol Infotech, we’re here to assist you with your technology needs.
            Whether you have questions, need support, or are interested in our services,
            we’d love to hear from you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Telephone Card */}
          <div className="bg-white shadow-lg p-5 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2">
              <PhoneFilled className="text-2xl !text-green-600 !mb-4" />
              <p className="text-lg font-bold font-serif text-black mb-4">Telephone</p>
            </div>
            <div className="flex flex-col gap-1 text-sm text-gray-700">
              <a href="tel:9888914287" className="hover:text-blue-700 ">9888914287</a>
              <a href="tel:9888914283" className="hover:text-blue-700 ">9888914283</a>
              <a href="tel:9356042496" className="hover:text-blue-700 ">9356042496</a>
              <a href="tel:9357815181" className="hover:text-blue-700 ">9357815181</a>
              <a href="tel:9855605181" className="hover:text-blue-700 ">9855605181</a>
              <a href="tel:9023415181" className="hover:text-blue-700 ">9023415181</a>
            </div>
          </div>

            {/* Address Card */}
          <div className="bg-white shadow-lg p-5 rounded-xl border border-gray-200">
             <div className="flex items-center gap-2">
              <IoLocationSharp className="text-2xl !text-red-600 !mb-4" />
              <p className="text-lg font-bold font-serif text-black mb-4"> Address</p>
            </div>


             <Link
              href="https://www.google.com/maps/place/Mabsol+Infotech+Pvt.Ltd./@30.668727,76.834759,17z"
              target="_blank"
            >
              <p className=" text-sm text-gray-700">
                SCO-76, 2ND Floor, near railway Crossing, Shree Ram Atta Chakki,
                Ekta Vihar, Sector 19, Panchkula, Haryana 134113, India
              </p>
            </Link>
          </div>

          {/* Email Card */}
          <div className="bg-white shadow-lg p-5 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2">
              <AiOutlineMail className="text-2xl !text-red-600 !mb-4" />
              <p className="text-lg font-bold text-black mb-4">Email</p>
            </div>
            <p className="text-sm text-gray-700 hover:text-blue-600">
              <a href="mailto:mabsolinfotech@gmail.com">
                mabsolinfotech@gmail.com
              </a>
              <br />
              <a href="mailto:contact@mabsolinfotech.com">
                contact@mabsolinfotech.com
              </a>
            </p>
          </div>

          {/* Office Number */}
          <div className="bg-white shadow-lg p-5 rounded-xl border border-gray-200 text-center">
            <div className="flex items-center gap-2">
              <PhoneFilled className="text-2xl !text-green-600 !mb-4" />
              <p className="text-lg font-bold font-serif text-black mb-4"> Office Phone Number</p>
            </div>

            <p className="text-gray-700 hover:text-blue-600">
              +01722 575181
            </p>
          </div>
          {/* Working Hours */}
          <div className="bg-white shadow-lg p-5 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2">
              <HomeOutlined className="text-2xl !text-blue-700 !mb-4" />
              <p className="text-lg font-bold font-serif text-black mb-4"> Working Hours</p>
            </div>
            <p className="text-sm text-gray-700">
              Monday to Saturday <br />
              10:00 am to 6:30 pm (Except Holidays)
            </p>
          </div>

        </div>
      </div>


      {/* RIGHT SIDE MAP */}
      <div
        className="w-full h-[350px] md:h-[450px] lg:h-[550px]"
      >
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.7655040841573!2d76.83218437613026!3d30.668731088722033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f937aaaaaaaab%3A0x90dbfaf2e8ded010!2sMabsol%20Infotech%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1752842731021!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
