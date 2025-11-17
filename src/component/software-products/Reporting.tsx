"use client";

import { useState } from "react";
import {
  Button,
  InputNumber,
  Select,
  Typography,
  Rate,
  Form,
  Input,
  Checkbox,
} from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;
const { Option } = Select;

export default function MRReportingPage() {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/base-1.png')" }}
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex justify-center">
          <Image
            src="/images/product.webp"
            alt="M R Reporting"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* === RIGHT === */}
        <div>
          <div className="max-w-7xl mx-auto text-md text-gray-600 mb-6">
            <span
              className="cursor-pointer hover:text-[#1a3d7c]"
              onClick={() => router.push("/")}
            >
              Home
            </span>
            /
            <span
              className="cursor-pointer ml-1 hover:text-[#1a3d7c]"
              onClick={() => router.push("/reporting-page")}
            >
              M R Reporting
            </span>
          </div>

          <Title className="!text-[#1a3d7c] text-lg! !mb-2">
            M R Reporting
          </Title>

          {/* Price */}
          <Title level={4} className=" !mb-4 !font-bold">
            ₹1,500.00
          </Title>
          <Text className="text-gray-600 text-lg! font-medium block mb-1">Cloud</Text>
          <Select defaultValue text-lg="Choose an option" className="w-full h-12! mb-6">
            <Option value="cloud">Cloud</Option>
          </Select>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 border-t pt-5 pb-6 mt-8">
            <InputNumber
              min={1}
              max={10}
              value={quantity}
              onChange={(v) => setQuantity(v || 1)}
              className="w-24"
            />

            <Button
              type="primary"
              size="large"
              className="!bg-[#185e9a] hover:!bg-[#1a3d7c] !text-white !py-2 !px-6 !rounded"
            >
              Add to Cart
            </Button>
            <Button
              type="default"
              size="large"
              className="!bg-[#1a3d7c] hover:!bg-[#185e9a] !text-white !py-2 !px-6 !rounded !border-none"
              onClick={() => router.push("/login")}
            >
              Click If You Are Already Existing Customer
            </Button>
          </div>

          <div className="flex text-gray-600 text-md border-t pt-5 mt-6 gap-10">
            <p>
              <strong>SKU:</strong> 27705
            </p>

            <p>
              <strong>Category:</strong>
              <span
                className="text-blue-600 ml-1 cursor-pointer hover:text-[#1a3d7c]"
                onClick={() => router.push("/reporting-page")}
              >
                M R Reporting
              </span>
            </p>

            <p>
              <strong>Tag:</strong>
              <span
                className="text-blue-600 ml-1 cursor-pointer hover:text-[#1a3d7c]"
                onClick={() => router.push("/reporting-page")}
              >
                M R Reporting
              </span>
            </p>
          </div>

        </div>
      </div>

      {/* ==== TABS ==== */}
      <div className="max-w-7xl mx-auto mt-12 border-t">

        <div className="flex border-b mt-4">
          {["description", "additional", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm sm:text-base font-semibold uppercase transition-all mr-2
                ${activeTab === tab
                  ? "text-[#1a3d7c] border-b-2 border-[#1a3d7c]"
                  : "text-gray-500 hover:text-[#1a3d7c]"
                }`}
            >
              {tab === "description"
                ? "Description"
                : tab === "additional"
                  ? "Additional Information"
                  : `Reviews (0)`}
            </button>
          ))}
        </div>

        {/* ================= TAB CONTENT ================= */}
        <div className="mt-6 text-gray-700 leading-relaxed">

          {activeTab === "description" && (
            <>
              <h2 className="text-3xl font-bold"> MRR – Pharma CRM Software Is Easy To Use And Human Centric </h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                MRR is a basic, easy-to-use Pharma CRM software that does not need any computer skills. Anyone who is familiar with standard computer programmes may quickly complete his Daily Call Reports (DCR) and submit them to the corporation through the Internet, saving money on courier services. Simultaneously, Pharmaceutical CRM software enables managers to offer tasks and distribute duties to their team at any moment. </p>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                The DCR completed in the field by the sales representative is instantly updated in the firm’s Management Database System and can be viewed by the company both online and offline. All in all, Pharmaceutical CRM software saves a significant amount of vital resources in terms of TIME, MONEY, and EFFORT, making the whole marketing process more predictable, fiscally effective, and transparent. </p>

              <h2 className="text-3xl font-bold mt-10"> The Following Are Some Outstanding Features of MR Reporting Software:
              </h2>
              <ul className="text-lg list-disc pl-6 space-y-2 mt-4 text-gray-700">
                <li>User-friendly interface that saves time, money, and paper.</li>
                <li>GPS position tracking mobile app for Android.</li>
                <li>Each doctor/chemist visit, as well as the route location, is recorded and shown on a map.</li>
                <li>The mobile app works even when there is no internet connection.</li>
                <li>The E-Detailing App assists in lowering the cost of printing visual aids.</li>
                <li>DCR (Daily Call Report) submissions may be made at any time and from any location.</li>
                <li>Doctor calls, product details, samples, and gifts may all be sent at the same time.</li>
                <li>Miscellaneous expenses, chemist POB visits, and stockist trips are also noted.</li>
                <li>Checks and validations are maintained in MR Reporting Software to guarantee DCRs are submitted on time.</li>
                <li>The status of gifts and samples, as well as tracking data, are constantly kept up to date.</li>
                <li>MR Reporting Software generates monthly expense reports automatically.</li>
                <li>Data collection and analysis for sales.</li>
                <li>Managers and administrators may see consolidated stock and sales reports.</li> </ul>

              <h2 className="text-3xl font-bold mt-10">
                Integrates with MR-KnowIT, a Pharma ERP software,
                to provide real-time information on primary sales and a Stock-In-Transit Approval
                Management System for approving DCRs, Expenses, Leaves, and so on. </h2>
              <ul className=" text-lg list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>Internal Mailing System: Mail may be sent to all employees by name; no mail Id is necessary.</li>
                <li>Analyze doctor and chemist visits.</li>
                <li>Target Vs Achievement Analysis using Graphical Reports.</li>
                <li>Calculate target, primary, and secondary sales automatically.</li>
                <li>Sending Bulk SMS to Field Staff, Doctors, Chemists, and Stockists has never been easier.</li>
                <li>Personalized URL with Company Name, For Example (www.xyz.com).</li>
                <li>The client’s logo will appear on all pages.</li>
                <li>To assist users in understanding the programme, MR Reporting Software includes simple-to-follow Training Manuals.</li> </ul>
            </>
          )}

          {activeTab === "additional" && (
            <div className="text-gray-700 w-full md:w-2/3">
              <div className="flex border border-gray-300">
                <div className="w-1/2 md:w-1/3 p-3 bg-gray-50 border-r border-gray-300 font-semibold text-sm">
                  Cloud
                </div>
                <div className="flex-1 p-3 text-sm">
                  Cloud
                </div>
              </div>
            </div>
          )}


          {activeTab === "reviews" && (
            <div className="w-full py-6">
              <p className="text-gray-700 text-lg mb-4">There are no reviews yet.</p>

              <div className="bg-white p-6 md:p-10 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-5 text-[#1a3d7c]">
                  Be the first to review “M R Reporting”
                </h3>

                <Form layout="vertical" className="!w-full space-y-4">

                  {/* Rating */}
                  <Form.Item label="Your rating *" name="rating" className="font-medium">
                    <Rate />
                  </Form.Item>

                  {/* Review */}
                  <Form.Item
                    label="Your review *"
                    name="review"
                    className="font-medium"
                    rules={[{ required: true, message: "Please enter your review." }]}
                  >
                    <Input.TextArea
                      rows={5}
                      className="text-base"
                      placeholder="Write your review..."
                    />
                  </Form.Item>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* Name */}
                    <Form.Item
                      label="Name *"
                      name="name"
                      className="font-medium"
                      rules={[{ required: true, message: "Enter your name" }]}
                    >
                      <Input
                        className="h-12 text-base px-4"
                        placeholder="Enter Name"
                      />
                    </Form.Item>

                    {/* Email */}
                    <Form.Item
                      label="Email *"
                      name="email"
                      className="font-medium"
                      rules={[
                        { required: true, message: "Enter your email" },
                        { type: "email", message: "Enter a valid email" },
                      ]}
                    >
                      <Input
                        className="h-12 text-base px-4"
                        placeholder="Enter Email"
                      />
                    </Form.Item>

                  </div>
                  <Form.Item name="save" valuePropName="checked">
                    <div className="flex items-center !space-x-6">
                      <Checkbox
                        className="scale-130"
                        style={{ transformOrigin: "top left" }}
                      />
                      <span className="text-lg font-medium ">Save my information for next time.</span>
                    </div>
                  </Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="!bg-[#1a3d7c] hover:!bg-[#185e9a] !text-white !py-2 !px-8 !rounded"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>

  );
}
