"use client";
import React from "react";
import {
  FacebookFilled,
  TwitterSquareFilled,
  YoutubeFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();

  const handleScroll = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="relative bg-blue-950 text-white pt-16 pb-8 px-4 sm:px-8 lg:px-16">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-60"
        style={{ backgroundImage: `url(/footer.png)` }}
      ></div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 opacity-100 z-20">
        <div>
          <div className="h-[80px] w-[200px]">
            <img src="/footerlogo.webp" alt="" className="h-[100%] w-[100%]" />
          </div>
          <p className="text-sm text-gray-300 pt-6">
            MABSOL INFOTECH PRIVATE LIMITED is the leading and reliable ERP
            software vendor, aiding various industries with cost-effective and
            efficient software solutions.
          </p>

          <div className="flex gap-4 mt-6 text-2xl text-white">
            <a href="#">
              <FacebookFilled />
            </a>
            <a href="#">
              <TwitterSquareFilled />
            </a>
            <a href="#">
              <YoutubeFilled />
            </a>
            <a href="#">
              <InstagramFilled />
            </a>
            <a href="#">
              <LinkedinFilled />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">
            Stay updated with our latest news and offers.
          </p>
          <form>
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full px-4 py-2 rounded mb-3 text-white "
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Our Products</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Tally</li>
            <li>MARG ERP 9+</li>
            <li>M R Reporting</li>
            <li>Order Tracking</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Website Development</li>
            <li>Accounting Software</li>
            <li>Payroll Software</li>
            <li>ERP Software</li>
            <li>SFA Software</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("about");
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("contact");
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            {/* <li>
              <a href="#" onClick={handleClick}>
                FAQ
              </a>
            </li> */}

            <li>
              <Link href="/faq">FAQ</Link>
            </li>

            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("Team");
                }}
              >
                Team
              </a>
            </li>
            <li>
              <a href="#">Portfolio Single</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Refund and Cancellation Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MABSOL INFOTECH PRIVATE LIMITED. All Rights
        Reserved.
      </div>
    </div>
  );
};

export default Footer;
