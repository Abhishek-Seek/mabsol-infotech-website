import { SnippetsFilled } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const Technology = () => {
  return (
<div className="relative py-24 px-6 lg:px-20 text-white bg-gradient-to-br from-[#080d1f] via-[#0f234a] to-[#070b1a] overflow-hidden">
  <p className="text-orange-400 text-xl text-center font-semibold mb-2">Innovation Hub</p>
<h2 className="text-4xl text-white text-center font-bold mb-4">
  Transforming Ideas into Intelligent Digital Experiences.
</h2>

  {/* GRID (Left Cards - Right Image - Right Cards) */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start pt-10">

    {/* LEFT CARDS */}
    <div className="flex flex-col gap-10 order-1" data-aos="fade-right">
      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-center border border-white/10">
        <h3 className="text-2xl font-semibold text-white ">Marg Erp</h3>  
      </div>

       <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-center border border-white/10">
        <h3 className="text-2xl font-semibold text-white ">Tally</h3>  
      </div>

      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-center border border-white/10">
        <h3 className="text-2xl font-semibold text-white ">HR Payroll</h3>  
      </div>

     <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-center border border-white/10">
        <h3 className="text-2xl font-semibold text-white ">MR Reporting</h3>  
      </div>

    </div>

    {/* IMAGE — NOW ON RIGHT SIDE (desktop) */}
    <div className="order-3 lg:order-2 flex justify-center relative z-20">
      <div className="h-[260px] md:h-[350px] lg:h-[480px] w-full max-w-[420px] overflow-hidden  ">
        <img
          src="/homePage/audiocallimg.webp"
          alt="center img"
          className="h-full w-full object-cover "
        />
      </div>
    </div>

    {/* RIGHT CARDS */}
    <div className="flex flex-col gap-10 order-2 lg:order-3" data-aos="fade-left">
      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md border text-center border-white/10">
        <h3 className="text-2xl font-semibold text-white ">GreyHR</h3>
       
      </div>

      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-center border border-white/10">
        <h3 className="text-2xl font-semibold text-white ">Automated Compliance</h3>  
      </div>

     <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-center border border-white/10">
        <h3 className="text-2xl font-semibold text-white ">Cloud-Enabled Access</h3>  
      </div>

      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-center border border-white/10">
        <h3 className="text-2xl font-semibold text-white ">Insightful Analytics</h3>  
      </div>
    </div>

  </div>
</div>


  );
};

export default Technology;
