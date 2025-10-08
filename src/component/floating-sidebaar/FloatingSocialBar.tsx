"use client";

import {
  FacebookFilled,
  YoutubeFilled,
  InstagramFilled,
  LinkedinFilled,
  PhoneFilled,
  TwitterSquareFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";

export default function FloatingSocialBar() {
  return (
    <div className="fixed left-0 flex flex-col gap-3 z-50 
                    md:top-1/3 top-24">
      {/* Phone */}
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/91722575181"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-2.5 rounded-r-lg shadow-md hover:bg-green-600 transition-all duration-200"
        title="WhatsApp"
      >
        <WhatsAppOutlined className="text-xl" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/people/Mabsol-Infotech-Pvt-Ltd-Haryana/61578120662281/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-2.5 rounded-r-lg shadow-md hover:bg-blue-700 transition-all duration-200"
        title="Facebook"
      >
        <FacebookFilled className="text-xl" />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/your_twitter_handle"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 text-white p-2.5 rounded-r-lg shadow-md hover:bg-blue-500 transition-all duration-200"
        title="Twitter"
      >
        <TwitterSquareFilled className="text-xl" />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@ABMINFOTECHPanchkula"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 text-white p-2.5 rounded-r-lg shadow-md hover:bg-red-700 transition-all duration-200"
        title="YouTube"
      >
        <YoutubeFilled className="text-xl" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/mabsol_infotech_pvt_ltd/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-600 text-white p-2.5 rounded-r-lg shadow-md hover:bg-pink-700 transition-all duration-200"
        title="Instagram"
      >
        <InstagramFilled className="text-xl" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/mabsol-infotech-pvt-ltd/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 text-white p-2.5 rounded-r-lg shadow-md hover:bg-blue-900 transition-all duration-200"
        title="LinkedIn"
      >
        <LinkedinFilled className="text-xl" />
      </a>
    </div>
  );
}
