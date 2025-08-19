"use client";

import {
  CloseOutlined,
  DollarCircleFilled,
  DownOutlined,
  ExperimentOutlined,
  MenuFoldOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Dropdown, MenuProps, Popover, Space } from "antd";
import Aos from "aos";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
// import Image from 'next/image'
import React, { useEffect, useState } from "react";
import {
  AiFillSafetyCertificate,
  AiOutlineAim,
  AiOutlineSolution,
  AiOutlineSync,
  AiOutlineTeam,
  AiOutlineUser,
} from "react-icons/ai";
import { IoBagHandleOutline, IoSchool } from "react-icons/io5";
import {
  SiCivicrm,
  SiLinuxprofessionalinstitute,
  SiSimplelogin,
} from "react-icons/si";
import {
  MdCrisisAlert,
  MdOutlineAdminPanelSettings,
  MdSchool,
} from "react-icons/md";
import { FcBusinessman, FcComboChart, FcCustomerSupport } from "react-icons/fc";
import { HiOutlineChartBar } from "react-icons/hi";
import { RiBarChartGroupedLine } from "react-icons/ri";
import { BiMapPin } from "react-icons/bi";
import { LiaCalendarDaySolid } from "react-icons/lia";

const Header = () => {
  const [open, setOpen] = useState(false);
  const img = "/images/logo.webp";

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  // const items: MenuProps['items'] = [
  //   {
  //     label: (
  //       <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
  //         1st menu item
  //       </a>
  //     ),
  //     key: '0',
  //   },
  //   {
  //     label: (
  //       <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
  //         2nd menu item
  //       </a>
  //     ),
  //     key: '1',
  //   },
  //   {
  //     type: 'divider',
  //   },
  //   {
  //     label: '3rd menu item',
  //     key: '3',
  //   },
  // ];

  const Content = () => (
    <div className="bg-[#185e9a] text-white flex flex-col gap-4 p-8 ">
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
          className="!text-blue-300 select-none"
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
    <div className="bg-[#185e9a] text-white flex flex-col gap-0 p-8 ">
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
    <div className="bg-[#185e9a] text-white grid grid-cols-2 gap-0 p-14 ">
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

  // const contents = () => (
  //   <div
  //     style={{ fontFamily: "Montserrat, sans-serif" }}
  //     className="flex flex-col gap-4 text-blue-600 text-sm font-normal"
  //   >
  //     <a
  //       href="https://mabsolinfotech.com/crmtest/employee/employee_register.php"
  //     // className="!text-white"
  //     >
  //       Employee Attendance
  //     </a>
  //     <a
  //       href="https://demo.mabsolinfotech.com/crm/admin/admin_login.php"
  //     // className="!text-blue-300"
  //     >
  //       Admin Portal
  //     </a>
  //     <a
  //       href="https://demo.mabsolinfotech.com/crm/employee/employee_register.php"
  //     // className="!text-blue-300"
  //     >
  //       Employee Portal
  //     </a>
  //     <a
  //       href="https://demo.mabsolinfotech.com/crm/"
  //     // className="!text-blue-300"
  //     >
  //       Users Portal
  //     </a>
  //     <a
  //       href="https://demo.mabsolinfotech.com/hr/admin/index"
  //     // target="_blank"
  //     // rel="noopener noreferrer"
  //     >
  //       HR Admin
  //     </a>
  //     {/* <a
  //       href="https://demo.mabsolinfotech.com/hr/employee/"
  //       // target="_blank"
  //       // rel="noopener noreferrer"
  //     >
  //       Employee Portal
  //     </a> */}
  //     <a
  //       href="https://demo.mabsolinfotech.com/crm/admin/admin_login.php"
  //     // target="_blank"
  //     // rel="noopener noreferrer"
  //     >
  //       CRM Admin
  //     </a>
  //     <a
  //       href="https://demo.mabsolinfotech.com/institute/admin/"
  //     // target="_blank"
  //     // rel="noopener noreferrer"
  //     >
  //       Institute Admin
  //     </a>

  //     <a href="https://humanresources.mabsolinfotech.com/admin/index.php">
  //       Admin Login
  //     </a>
  //     <a href="https://humanresources.mabsolinfotech.com/employee/">
  //       Employee Login
  //     </a>
  //   </div>
  // );

  const MegaMenuContent = () => (
    <div className=" text-white grid grid-cols-3 xl:grid-cols-4 gap-2 2xl:gap-10 p-14" style={{backgroundColor:"#185e9a"}}>
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
          href="https://mabsolinfotech.com/crmtest/demo_contact_hr.php"
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
          href="https://mabsolinfotech.com/crmtest/demo_contact_dcr.php"
          className="!text-blue-300 select-none"
        >
          Get DCR Demo
        </a>
        <a
          href="https://mabsolinfotech.com/crmtest/pricing_contacts.php"
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
          href="https://mabsolinfotech.com/crmtest/demo_contact.php"
          className="!text-blue-300 select-none"
        >
          Get Demo
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>School Portal</span>
        <a
          href="https://sms.mabsolinfotech.com/dashboard/admin/"
          className="!text-blue-300 select-none"
        >
          Admin Portal
        </a>
        <a
          href="https://sms.mabsolinfotech.com/dashboard/students/"
          className="!text-blue-300 select-none"
        >
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
          href="https://mabsolinfotech.com/crmtest/demo_contact_school.php"
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
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [isDcrSubOpen, setIsDcrSubOpen] = useState(false);
  const [isHRSubOpen, setIsHRSubOpen] = useState(false);
  const [isHrPayrollSubOpen, setIsHrPayrollSubOpen] = useState(false);
  const [isDCRSubOpen, setIsDCRSubOpen] = useState(false);
  const [isDCRPortalSubOpen, setIsDCRPortalSubOpen] = useState(false);
  const [isCustomerPortalSubOpen, setIsCustomerPortalSubOpen] = useState(false);
  const [isInstituteSubOpen, setIsInstituteSubOpen] = useState(false);
  const [isSchoolSubOpen, setIsSchoolSubOpen] = useState(false);

  const toggleMainDropdown = () => setIsMainOpen(!isMainOpen);
  const toggleDcrDemoSubmenu = () => setIsDcrSubOpen(!isDcrSubOpen);
  const toggleHRSubmenu = () => setIsHRSubOpen(!isHRSubOpen);
  const togglePayrollSubmenu = () => setIsHrPayrollSubOpen(!isHrPayrollSubOpen);
  const toggleDCRSubmenu = () => setIsDCRSubOpen(!isDCRSubOpen);
  const toggleDCRPortalSubmenu = () =>
    setIsDCRPortalSubOpen(!isDCRPortalSubOpen);
  const toggleCustomerSubmenu = () =>
    setIsCustomerPortalSubOpen(!isCustomerPortalSubOpen);
  const toggleInstituteSubmenu = () =>
    setIsInstituteSubOpen(!isInstituteSubOpen);
  const toggleSchoolSubmenu = () => setIsSchoolSubOpen(!isSchoolSubOpen);

  const handleSupportClick = () => {
    router.push("https://mabsolinfotech.com/crmtest/");
  };

  const handleCRMClick = () => {
    router.push("https://next-auth-email-verification-h7sd.vercel.app/");
  };

  return (
    <div className=" bg-[#185e9a] sticky top-0 z-50">
      <div className="flex justify-around items-center gap-10 px-6 py-4">
        <div>
          <img
            src={img}
            alt="imgs"
            className="h-[50px] w-[130px] md:h-[70px] md:w-[150px] lg:h-[70px] lg:w-[170px]"
          />
        </div>
        <div className="flex justify-center items-center gap-8 xl:gap-16 min-w-0 overflow-hidden">
          <nav
            data-aos="fade-up"
            className="lg:flex flex-wrap hidden justify-center gap-4 xl:gap-6 items-center text-white text-sm font-bold"
            style={{ fontFamily: "Roboto,sans-serif" }}
          >
            <div>
              {/* <a href="" className='text-lg font-extrabold text-green-600 font-serif'>Home</a> */}
              <Link href="/">
                <Button
                  type="link"
                  className="text-lg !font-extrabold !text-green-600"
                  style={{ fontFamily: "Roboto,sans-serif" }}
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
                style={{
                  fontFamily: "Roboto,sans-serif",
                  padding: "0px",
                  gap: "5px",
                }}
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
                style={{
                  fontFamily: "Roboto,sans-serif",
                  padding: "0px",
                 gap: "5px",
                }}
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
                style={{
                  fontFamily: "Roboto,sans-serif",
                  padding: "0px",
                  gap: "5px",
                }}
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
                style={{
                  fontFamily: "Roboto,sans-serif",
                  padding: "0px",
                  gap: "5px",
                }}
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
        title={
          <div className="flex justify-center gap-2">
            <img src="/images/logo.webp" alt="Logo" className="h-14 w-auto" />
            {/* <span className="text-lg font-semibold text-black">Menu</span> */}
          </div>
        }
        placement="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        closeIcon={<CloseOutlined style={{ color: "white" }} />}
        style={{ backgroundColor: "#185e9a", width: "100%" }}
      >
        <nav
          data-aos="fade-up"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="flex flex-col text-lg font-medium"
        >
          <a
            href="/"
            className="!text-white font-medium border-b border-gray-300 py-3 p-2"
          >
            Home
          </a>

          <a className="!text-white border-b border-gray-300 py-3 p-2">
            About Us
          </a>
          <a className="!text-white border-b border-gray-300 py-3 p-2">
            Service
          </a>
          {/* <Popover content={click} title="Software Product" trigger="click" placement="topRight">
            <div className="cursor-pointer font-semibold text-sm text-blue-600">
              Software Product<DownOutlined />
            </div>
          </Popover> */}
          <a className="!text-white border-b border-gray-300 py-3 p-2">
            Software Product
          </a>
          {/* <a href="">Mabsol Portal</a> */}
          {/* <Popover
            content={contents}
            title="Mabsol Portal"
            trigger="click"
            placement="topRight"
          >
            <div className="cursor-pointer font-semibold text-sm text-white">
              Mabsol Portal <DownOutlined />
            </div>
          </Popover> */}
          {/* <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Space className="cursor-pointer font-semibold text-sm text-white w-full">
                Mabsol Portal 
                <DownOutlined />
              </Space>
            </a>
          </Dropdown> */}

          <div className="relative w-full">
            {/* Trigger */}
            <div
              onClick={toggleMainDropdown}
              className="cursor-pointer font-medium text-lg !text-white  pt-4 p-2"
            >
              <div className="flex justify-between items-center">
                <div>Mabsol Portal</div>
                {isMainOpen ? (
                  <UpOutlined className="text-sm" />
                ) : (
                  <DownOutlined className="text-sm" />
                )}
              </div>
            </div>

            {/* Inline Dropdown Menu */}
            <AnimatePresence initial={false}>
              {isMainOpen && (
                <motion.div
                  layout
                  key="dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-sky-blue-900  border-none rounded pb-4 text-sm"
                >
                  <a
                    href="https://mabsolinfotech.com/crmtest/employee/employee_register.php"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <AiOutlineSolution />
                      Employee Attendance
                    </div>
                  </a>

                  {/* <a
                    href="https://demo.mabsolinfotech.com/hr/admin/index"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <IoBagHandleOutline />
                      HR Admin
                    </div>
                  </a>
                  <a
                    href="https://demo.mabsolinfotech.com/crm/admin/admin_login.php"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <SiCivicrm />
                      CRM Admin
                    </div>
                  </a>
                  <a
                    href="https://demo.mabsolinfotech.com/institute/admin/"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <IoSchool />
                      Institute Admin
                    </div>
                  </a> */}

                  {/* *******************************************sub menu******************************************** */}

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={toggleDcrDemoSubmenu}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className=" pt-4 py-2 text-[16px] font-medium flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <FcComboChart />
                          DCR Demo
                        </div>

                        {isDcrSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {isDcrSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 700 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-sky-blue-900 border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://demo.mabsolinfotech.com/crm/admin/admin_login.php"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <AiOutlineUser />
                              Admin Portal
                            </div>
                          </a>
                          <a
                            href="https://demo.mabsolinfotech.com/crm/employee/employee_register.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <AiOutlineTeam />
                              Employee Portal
                            </div>
                          </a>
                          <a
                            href="https://demo.mabsolinfotech.com/crm/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <AiOutlineSync />
                              Users Portal
                            </div>
                          </a>
                          <a
                            href="https://mabsolinfotech.com/crmtest/pricing_contacts.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <ExperimentOutlined />
                              Get Demo OR Pricing details
                            </div>
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={togglePayrollSubmenu}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className="py-2 text-[16px] font-medium flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <FcBusinessman />
                          HR Payroll
                        </div>

                        {isHrPayrollSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {/* <motion.div> */}
                      {isHrPayrollSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 500 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-sky-blue-900 border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://humanresources.mabsolinfotech.com/admin/index.php"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <MdOutlineAdminPanelSettings />
                              Admin Login
                            </div>
                          </a>
                          <a
                            href="https://humanresources.mabsolinfotech.com/employee/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Employee Login
                            </div>
                          </a>
                          {/* <a
                            href="https://mabsolinfotech.com/crmtest/demo_contact_dcr.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <ExperimentOutlined />
                              Get Demo
                            </div>
                          </a> */}
                        </motion.div>
                      )}
                      {/* </motion.div> */}
                    </AnimatePresence>
                  </div>

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={toggleDCRSubmenu}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className="py-2 text-[16px] font-medium flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <DollarCircleFilled
                            style={{ fontSize: "14px", color: "#16A34A" }}
                          />
                          HR Payroll Demo
                        </div>

                        {isDCRSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {/* <motion.div> */}
                      {isDCRSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 500 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-sky-blue-900 border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://demo.mabsolinfotech.com/hr/admin/index"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <MdOutlineAdminPanelSettings />
                              Admin Portal
                            </div>
                          </a>
                          <a
                            href="https://demo.mabsolinfotech.com/hr/employee/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Employee Portal
                            </div>
                          </a>
                          <a
                            href="https://mabsolinfotech.com/crmtest/demo_contact_hr.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <ExperimentOutlined />
                              Get Demo
                            </div>
                          </a>
                        </motion.div>
                      )}
                      {/* </motion.div> */}
                    </AnimatePresence>
                  </div>

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={toggleHRSubmenu}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className="py-2 text-[16px] font-medium flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <MdCrisisAlert className=" text-blue-200" />
                          DCR
                        </div>

                        {isHRSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {/* <motion.div> */}
                      {isHRSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 500 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-sky-blue-900 border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://mabsolinfotech.com/crmtest/employee/employee_register.php"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <MdOutlineAdminPanelSettings />
                              Employee Login
                            </div>
                          </a>
                          <a
                            href="https://mabsolinfotech.com/crmtest/admin/admin_login.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Report
                            </div>
                          </a>
                        </motion.div>
                      )}
                      {/* </motion.div> */}
                    </AnimatePresence>
                  </div>

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={toggleDCRPortalSubmenu}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className="py-2 text-[16px] font-medium flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <AiFillSafetyCertificate />
                          DCR Portal Demo
                        </div>

                        {isDCRPortalSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {/* <motion.div> */}
                      {isDCRPortalSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 500 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-sky-blue-900 border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://demo.mabsolinfotech.com/crm/admin/admin_login.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <MdOutlineAdminPanelSettings />
                              Admin Portal
                            </div>
                          </a>
                          <a
                            href="https://demo.mabsolinfotech.com/crm/employee/employee_register.php"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Employee Portal
                            </div>
                          </a>
                          <a
                            href="https://demo.mabsolinfotech.com/crm/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              User Portal
                            </div>
                          </a>

                          <a
                            href="https://mabsolinfotech.com/crmtest/demo_contact_dcr.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Get Demo
                            </div>
                          </a>

                          <a
                            href="https://mabsolinfotech.com/crmtest/pricing_contacts.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Get Demo Or Pricing Details
                            </div>
                          </a>
                        </motion.div>
                      )}
                      {/* </motion.div> */}
                    </AnimatePresence>
                  </div>

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={toggleCustomerSubmenu}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className="py-2 text-[16px] font-medium flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <FcCustomerSupport />
                          Customer Portal
                        </div>

                        {isCustomerPortalSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {/* <motion.div> */}
                      {isCustomerPortalSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 500 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-sky-blue-900 border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://mabsolinfotech.com/crmtest/"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <MdOutlineAdminPanelSettings />
                              Raise A Ticket
                            </div>
                          </a>
                          <a
                            href="https://mabsolinfotech.com/crmtest/admin/admin_login.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Report
                            </div>
                          </a>
                        </motion.div>
                      )}
                      {/* </motion.div> */}
                    </AnimatePresence>
                  </div>

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={toggleInstituteSubmenu}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className="py-2 text-[16px] font-medium flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <SiLinuxprofessionalinstitute />
                          Institute Portal
                        </div>

                        {isInstituteSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {/* <motion.div> */}
                      {isInstituteSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 500 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-sky-blue-900 border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://demo.mabsolinfotech.com/institute/admin/"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <MdOutlineAdminPanelSettings />
                              Admin Portal
                            </div>
                          </a>
                          <a
                            href="https://demo.mabsolinfotech.com/institute/staff/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Staff Portal
                            </div>
                          </a>
                          <a
                            href="https://demo.mabsolinfotech.com/institute/student/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Student Portal
                            </div>
                          </a>
                          <a
                            href="https://mabsolinfotech.com/crmtest/demo_contact.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Get Demo
                            </div>
                          </a>
                        </motion.div>
                      )}
                      {/* </motion.div> */}
                    </AnimatePresence>
                  </div>

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={toggleSchoolSubmenu}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className="pt-2 text-[16px] font-medium flex items-center justify-between">
                        {/* Left Part */}
                        <div className="flex items-center gap-1">
                          <MdSchool className="text-yellow-600" />
                          School Portal
                        </div>

                        {/* Right Part (Arrow) */}
                        {isSchoolSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {/* <motion.div> */}
                      {isSchoolSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 500 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-sky-blue-900 border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://sms.mabsolinfotech.com/dashboard/admin/"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <MdOutlineAdminPanelSettings />
                              Admin Portal
                            </div>
                          </a>
                          <a
                            href="https://sms.mabsolinfotech.com/dashboard/teachers/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Teacher Portal
                            </div>
                          </a>
                          <a
                            href="https://sms.mabsolinfotech.com/dashboard/reception/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Reception Portal
                            </div>
                          </a>
                          <a
                            href="https://sms.mabsolinfotech.com/dashboard/students/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Student Portal
                            </div>
                          </a>
                          <a
                            href="https://sms.mabsolinfotech.com/dashboard/driver/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Driver Portal
                            </div>
                          </a>
                          <a
                            href="https://mabsolinfotech.com/crmtest/pricing_contacts.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Get Demo And Pricing Details
                            </div>
                          </a>
                        </motion.div>
                      )}
                      {/* </motion.div> */}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
        <div className="flex justify-center items-center pt-10 gap-6 ">
          <Link href="https://mabsolinfotech.com/crmtest/">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <Button className="!text-white !bg-green-600 !rounded-none !py-6 !px-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                Raise a Support Ticket
              </Button>
            </div>
          </Link>

          <Link href="https://next-auth-email-verification-h7sd.vercel.app/">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <Button
                type="primary"
                className="!text-white !py-6 !rounded-none border border-white hover:!bg-white hover:!text-blue-950 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
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
