"use client";

import { CloseOutlined, DownOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Drawer, Dropdown, Popover } from "antd";
import Aos from "aos";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import Image from 'next/image'
import React, { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const img = "/images/logo.webp";

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  const Content = () => (
    <div className="bg-blue-900 text-white flex flex-col gap-4 p-8 ">
      <div className="text-sm font-bold flex flex-col gap-4 font-serif">
        <a
          href="https://mabsolinfotech.com/product/tally-software-solutions/"
          className="!text-blue-300 select-none"
        >
          Tally
        </a>
        <a
          href="https://mabsolinfotech.com/product/marg-erp-software/"
          className="!text-blue-300 select-none"
        >
          MArg ERP 9+
        </a>
        <a
          href="https://mabsolinfotech.com/product/mr-reporting-pharma-crm-software/"
          className="!text-blue-300 select-none"
        >
          MR Reporting
        </a>
        <a
          href="https://mabsolinfotech.com/human-resources-demo-portal/"
          className="!text-blue- select-none"
        >
          HR Payroll Portal
        </a>
        <a
          href="https://mabsolinfotech.com/dcr-portal-demo-form/"
          className="!text-blue-300 select-none"
        >
          DCR Portal
        </a>
        <a
          href="https://mabsolinfotech.com/institute-portal-demo-form/"
          className="!text-blue-300 select-none"
        >
          Institute Portal
        </a>
        <a
          href="https://mabsolinfotech.com/school-portal-demo/"
          className="!text-blue-300 select-none"
        >
          School Portal
        </a>
      </div>
    </div>
  );

  const Mega = () => (
    <div className="bg-blue-900 text-white flex flex-col gap-0 p-8 ">
      <div className="text-sm font-bold flex flex-col gap-4 font-serif">
        <a
          href="https://mabsolinfotech.com/website-development/"
          className="!text-blue-300 select-none"
        >
          Website Development
        </a>
        <a
          href="https://mabsolinfotech.com/accounting-software-services/"
          className="!text-blue-300 select-none"
        >
          Accounting Software
        </a>
        <a
          href="https://mabsolinfotech.com/payroll-software-services/"
          className="!text-blue-300 select-none"
        >
          PayRoll Software
        </a>
        <a
          href="https://mabsolinfotech.com/erp-software-services/"
          className="!text-blue-300 select-none"
        >
          ERP Software
        </a>
        <a
          href="https://mabsolinfotech.com/sfa-software/"
          className="!text-blue-300 select-none"
        >
          SFA Software
        </a>
      </div>
    </div>
  );

  const MegaMenu = () => (
    <div className="bg-blue-900 text-white grid grid-cols-2 gap-0 p-14 ">
      <div className="text-sm font-bold flex flex-col gap-4 font-serif">
        <span className="">Gallery</span>
        <a href="#" className="!text-blue-300">
          Gallery
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-4 font-serif">
        <span>Additional Partners</span>
        <a href="https://mabsolinfotech.com/marg/" className="!text-blue-300">
          Marg
        </a>
        <a href="https://mabsolinfotech.com/tally/" className="!text-blue-300">
          Tally
        </a>
        <a
          href="https://mabsolinfotech.com/mr-reporting/"
          className="!text-blue-300"
        >
          MR Reporting
        </a>
        <a
          href="https://mabsolinfotech.com/greythr/"
          className="!text-blue-300"
        >
          Greythr
        </a>
        <a
          href="https://mabsolinfotech.com/clinic-management/"
          className="!text-blue-300"
        >
          Clinic Managment
        </a>
      </div>
    </div>
  );

  // const click = () => (
  //   <div className="flex flex-col gap-2 text-blue-600 text-sm font-normal">
  //     <a
  //       href="https://mabsolinfotech.com/product/tally-software-solutions/"
  //     >
  //       Tally
  //     </a>
  //     <a
  //       href="https://mabsolinfotech.com/product/marg-erp-software/"
  //     >
  //       MArg ERP 9+
  //     </a>
  //     <a
  //       href="https://mabsolinfotech.com/product/mr-reporting-pharma-crm-software/"
  //     >
  //       MR Reporting
  //     </a>
  //     <a
  //       href="https://mabsolinfotech.com/human-resources-demo-portal/"
  //     >
  //       HR Payroll Portal
  //     </a>
  //     <a
  //       href="https://mabsolinfotech.com/dcr-portal-demo-form/"
  //     >
  //       DCR Portal
  //     </a>
  //     <a
  //       href="https://mabsolinfotech.com/institute-portal-demo-form/"
  //     >
  //       Institute Portal
  //     </a>
  //     <a
  //       href="https://mabsolinfotech.com/school-portal-demo/"
  //     >
  //       School Portal
  //     </a>
  //   </div>)

  const contents = () => (
    <div
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className="flex flex-col gap-4 text-blue-600 text-sm font-normal"
    >
      <a
        href="https://mabsolinfotech.com/crmtest/employee/employee_register.php"
        // className="!text-white"
      >
        Employee Attendance
      </a>
      <a
        href="https://demo.mabsolinfotech.com/crm/admin/admin_login.php"
        // className="!text-blue-300"
      >
        Admin Portal
      </a>
      <a
        href="https://demo.mabsolinfotech.com/crm/employee/employee_register.php"
        // className="!text-blue-300"
      >
        Employee Portal
      </a>
      <a
        href="https://demo.mabsolinfotech.com/crm/"
        // className="!text-blue-300"
      >
        Users Portal
      </a>
      <a
        href="https://demo.mabsolinfotech.com/hr/admin/index"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        HR Admin
      </a>
      {/* <a
        href="https://demo.mabsolinfotech.com/hr/employee/"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        Employee Portal
      </a> */}
      <a
        href="https://demo.mabsolinfotech.com/crm/admin/admin_login.php"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        CRM Admin
      </a>
      <a
        href="https://demo.mabsolinfotech.com/institute/admin/"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        Institute Admin
      </a>

      <a href="https://humanresources.mabsolinfotech.com/admin/index.php">
        Admin Login
      </a>
      <a href="https://humanresources.mabsolinfotech.com/employee/">
        Employee Login
      </a>
    </div>
  );

  const MegaMenuContent = () => (
    <div className="bg-blue-900 text-white grid grid-cols-5 gap-10 p-14">
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <a
          href="https://mabsolinfotech.com/crmtest/employee/employee_register.php"
          className="!text-white select-none"
        >
          Employee Attendance
        </a>
      </div>

      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span className="">HR Payroll</span>
        <a
          href="https://humanresources.mabsolinfotech.com/admin/index.php"
          className="!text-blue-300 select-none"
        >
          Admin Login
        </a>
        <a
          href="https://humanresources.mabsolinfotech.com/employee/"
          className="!text-blue-300 select-none"
        >
          Employee Login
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>HR Payroll Demo</span>
        <a
          href="https://demo.mabsolinfotech.com/hr/admin/index"
          className="!text-blue-300 select-none"
        >
          Admin Portal
        </a>
        <a
          href="https://demo.mabsolinfotech.com/hr/employee/"
          className="!text-blue-300 select-none"
        >
          Empoyee Portal
        </a>
        <a
          href="https://mabsolinfotech.com/human-resources-demo-portal/"
          className="!text-blue-300 select-none"
        >
          Get Demo
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>DCR</span>
        <a
          href="https://mabsolinfotech.com/crmtest/employee/employee_register.php"
          className="!text-blue-300 select-none"
        >
          Employee Login
        </a>
        <a
          href="https://mabsolinfotech.com/crmtest/admin/admin_login.php"
          className="!text-blue-300 select-none"
        >
          Report
        </a>
        {/* <a href="#">Blog</a> */}
      </div>

      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>DCR Demo</span>
        <a
          href="https://demo.mabsolinfotech.com/crm/admin/admin_login.php"
          className="!text-blue-300 select-none"
        >
          Admin Portal
        </a>
        <a
          href="https://demo.mabsolinfotech.com/crm/employee/employee_register.php"
          className="!text-blue-300 select-none"
        >
          Employee Portal
        </a>
        <a
          href="https://demo.mabsolinfotech.com/crm/"
          className="!text-blue-300 select-none"
        >
          Users Portal
        </a>
        <a
          href="https://mabsolinfotech.com/dcr-portal-demo-form/"
          className="!text-blue-300 select-none"
        >
          Get DCR Demo
        </a>
        <a
          href="https://mabsolinfotech.com/pricing-contact-form/"
          className="!text-blue-300 select-none"
        >
          Get Demo Or Pricing Detail
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>Customer Portal</span>
        <a
          href="https://mabsolinfotech.com/crmtest/"
          className="!text-blue-300 select-none"
        >
          Raise A Ticket
        </a>
        <a
          href="https://mabsolinfotech.com/crmtest/admin/admin_login.php"
          className="!text-blue-300 select-none"
        >
          Report
        </a>
        {/* <a href="#">Get Demo</a> */}
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>Testing Portal</span>
        <a
          href="https://mabsolinfotech.com/crmtest/employee/employee_register.php"
          className="!text-blue-300 select-none"
        >
          DCR Portal
        </a>
        <a
          href="https://mabsolinfotech.com/crmtest/admin/admin_login.php"
          className="!text-blue-300 select-none"
        >
          Customer Portal
        </a>
        {/* <a href="#">Blog</a> */}
      </div>

      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>Download Merg ERP Setup</span>
        <a href="#" className="!text-blue-300 select-none">
          Download Merg ERP Setup
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>Institute Portal Demo</span>
        <a
          href="https://demo.mabsolinfotech.com/institute/admin/"
          className="!text-blue-300 select-none"
        >
          Admin Portal
        </a>
        <a
          href="https://demo.mabsolinfotech.com/institute/staff/"
          className="!text-blue-300 select-none"
        >
          Staff Portal
        </a>
        <a
          href="https://demo.mabsolinfotech.com/institute/student/"
          className="!text-blue-300 select-none"
        >
          Student Portal
        </a>
        <a
          href="https://mabsolinfotech.com/institute-portal-demo-form/"
          className="!text-blue-300 select-none"
        >
          Get Demo
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>School Portal</span>
        <a
          href="https://mabsolinfotech.com/institute-portal-demo-form/"
          className="!text-blue-300 select-none"
        >
          Admin Portal
        </a>
        <a href="#" className="!text-blue-30 select-none0">
          Student Portal
        </a>
        <a
          href="https://sms.mabsolinfotech.com/dashboard/teachers/"
          className="!text-blue-300 select-none"
        >
          Teacher Portal
        </a>
        <a
          href="https://sms.mabsolinfotech.com/dashboard/reception/"
          className="!text-blue-300 select-none"
        >
          Reception Portal
        </a>
        <a
          href="https://mabsolinfotech.com/school-portal-demo/"
          className="!text-blue-300 select-none"
        >
          Get Demo
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <a href="" className="!text-white select-none">
          GST File Download
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>Hospital Information System</span>
        <a
          href="https://mabsolinfotech.com/his-portal-demo-form/"
          className="!text-blue-300 select-none"
        >
          Get Demo
        </a>
      </div>
    </div>
  );

  const router = useRouter();

  const handleSupportClick = () => {
    router.push("https://mabsolinfotech.com/crmtest/");
  };

  const handleCRMClick = () => {
    router.push("https://mabsolinfotech.com/contact-us/");
  };

  return (
    <div className=" bg-blue-900 sticky top-0 z-50">
      <div className="flex justify-around items-center gap-0 px-6 lg:px-20 py-4">
        <div>
          <img
            src={img}
            alt="imgs"
            className="h-[50px] w-[160px] md:h-[80px] md:w-[180px] lg:h-[80px] lg:w-[200px]"
          />
        </div>
        <div className="flex justify-center items-center gap-20">
          <nav
            data-aos="fade-up"
            className="lg:flex hidden justify-center items-center gap-0 text-white text-sm font-bold"
            style={{fontFamily:"Roboto,sans-serif"}}
          >
            <div>
              {/* <a href="" className='text-lg font-extrabold text-green-600 font-serif'>Home</a> */}
              <Link href="/">
                <Button
                  type="link"
                  className="text-lg !font-extrabold !text-green-600"
                  style={{fontFamily:"Roboto,sans-serif"}}
                >
                  Home
                </Button>
              </Link>
              <div className="w-full">
                <hr className="border-t-4 border-green-600" />
              </div>
            </div>

            <Popover
              content={MegaMenu()}
              trigger="hover"
              placement="bottomLeft"
              styles={{ body: { padding: 0, borderRadius: 8 } }}
            >
              <Button
                type="text"
                className="!text-white !text-sm !font-extrabold"
                style={{fontFamily:"Roboto,sans-serif"}}
              >
                About Us
                <DownOutlined />
              </Button>
            </Popover>

            <Popover
              content={Mega()}
              trigger="hover"
              placement="bottomLeft"
              styles={{ body: { padding: 0, borderRadius: 8 } }}
            >
              <Button
                type="text"
                className="!text-white !text-sm !font-extrabold "
                style={{fontFamily:"Roboto,sans-serif"}}
              >
                Service
                <DownOutlined />
              </Button>
            </Popover>

            {/* <a href="">Service <DownOutlined /></a> */}
            <Popover
              content={Content()}
              trigger="hover"
              placement="bottomLeft"
              styles={{ body: { padding: 0, borderRadius: 8 } }}
            >
              <Button
                type="text"
                className="!text-white !text-sm !font-extrabold"
                style={{fontFamily:"Roboto,sans-serif"}}
              >
                Software Products
                <DownOutlined />
              </Button>
            </Popover>

            <Popover
              content={MegaMenuContent()}
              trigger="hover"
              placement="bottomLeft"
              styles={{ body: { padding: 0, borderRadius: 8 } }}
            >
              <Button
                type="text"
                className="!text-white !text-sm !font-extrabold"
                style={{fontFamily:"Roboto,sans-serif"}}
              >
                Mabsol Portal
                <DownOutlined />
              </Button>
            </Popover>
          </nav>
          <div className="lg:flex hidden gap-4 items-center">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <Button
                onClick={handleSupportClick}
                className="!bg-green-700 !text-white !py-6 !px-5 !rounded-none"
              >
                Raise a Support Ticket
              </Button>
            </div>

            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <Button
                onClick={handleCRMClick}
                className=" !text-white !rounded-none !py-6 !bg-blue-950"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:hidden text-white" onClick={handleClick}>
          <MenuFoldOutlined className="text-2xl" />
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        closeIcon={<CloseOutlined style={{color:"white"}}/>}
        className="!bg-blue-500 text-white"
      >
        <nav
          data-aos="fade-up"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="flex flex-col gap-6 text-sm font-bold !text-white"
        >
          <a href="/" className="!text-white">
            Home
          </a>
          
          <a className="!text-white">
            About Us
          </a>
          <a className="!text-white">
            Service
          </a>
          {/* <Popover content={click} title="Software Product" trigger="click" placement="topRight">
            <div className="cursor-pointer font-semibold text-sm text-blue-600">
              Software Product<DownOutlined />
            </div>
          </Popover> */}
          <a className="!text-white">
            Software Product
          </a>
          {/* <a href="">Mabsol Portal</a> */}
          <Popover
            content={contents}
            title="Mabsol Portal"
            trigger="click"
            placement="topRight"
          >
            <div className="cursor-pointer font-semibold text-sm text-white">
              Mabsol Portal <DownOutlined />
            </div>
          </Popover>
        </nav>
        <div className="flex justify-center items-center pt-10 gap-6 ">
          <Link href="https://mabsolinfotech.com/crmtest/">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <Button className="!bg-orange-500 !text-white !rounded-none !py-6 !px-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                Raise a Support Ticket
              </Button>
            </div>
          </Link>

          <Link href="https://mabsolinfotech.com/contact-us/">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <Button className="!text-white !py-6 !rounded-none !bg-transparent border border-white hover:!bg-white hover:!text-blue-950 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                Contact Us
              </Button>
            </div>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
