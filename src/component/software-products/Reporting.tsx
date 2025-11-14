"use client";

import { useState } from "react";
import { Button, InputNumber, Select, Rate, Input, Typography } from "antd";
import Image from "next/image";

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

export default function MRReportingPage() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [rating, setRating] = useState(0);

  return (
    <div className="min-h-screen bg-[#f5f9ff] px-4 sm:px-8 md:px-16 py-10">
      {/* Breadcrumb */}
      <div className="text-gray-500 text-sm mb-6">
        Home / <span className="text-[#1a3d7c] font-medium">M R Reporting</span> / M R Reporting
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6 sm:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Product Image + Tabs */}
          <div>
            <div className="flex justify-center items-start mb-6">
              <Image
                src="/images/product.webp"
                alt="M R Reporting"
                width={450}
                height={450}
                className="rounded-lg shadow-sm object-contain"
              />
            </div>

            {/* Tabs */}
            <div className="border-t border-gray-300">
              <div className="flex flex-wrap border-b">
                {["description", "additional", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm sm:text-base font-medium transition-all ${
                      activeTab === tab
                        ? "text-[#1a3d7c] border-b-2 border-[#1a3d7c]"
                        : "text-gray-500 hover:text-[#1a3d7c]"
                    }`}
                  >
                    {tab === "description"
                      ? "Description"
                      : tab === "additional"
                      ? "Additional information"
                      : "Reviews (0)"}
                  </button>
                ))}
              </div>

              <div className="mt-6 text-gray-700 leading-relaxed">
                {/* Description Tab */}
                {activeTab === "description" && (
                  <>
                    <Paragraph>
                      <strong>MRR – Pharma CRM Software Is Easy To Use And Human Centric</strong>
                    </Paragraph>
                    <Paragraph>
                      MRR is a basic, easy-to-use Pharma CRM software that does not need any
                      computer skills. Anyone familiar with standard computer programs can easily
                      complete their ‘Daily Call Reports’ (DCR) and submit them online, saving money
                      on courier services. Managers can assign tasks anytime and monitor progress in
                      real-time.
                    </Paragraph>
                    <Paragraph>
                      The DCR completed by sales representatives instantly updates in the company’s
                      management database, viewable both online and offline. Overall, this saves
                      time, money, and effort, making marketing more predictable and transparent.
                    </Paragraph>

                    <Title level={5} className="!text-[#1a3d7c] mt-6 mb-3">
                      Outstanding Features of MR Reporting Software:
                    </Title>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>User-friendly interface that saves time and paper.</li>
                      <li>GPS tracking mobile app for Android.</li>
                      <li>Offline DCR entry support.</li>
                      <li>E-Detailing app reduces printing costs.</li>
                      <li>Expense and stockist trip management.</li>
                      <li>Automatic monthly expense reports.</li>
                      <li>Integration with MR-KnowIT ERP system.</li>
                      <li>Internal mailing system without email IDs.</li>
                      <li>Target vs Achievement analysis with charts.</li>
                      <li>Bulk SMS support for staff and clients.</li>
                    </ul>
                  </>
                )}

                {/* Additional Info Tab */}
                {activeTab === "additional" && (
                  <div className="text-gray-700">
                    <div className="flex justify-between border-b border-gray-200 py-3">
                      <span className="font-medium">Cloud</span>
                      <span>Cloud</span>
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === "reviews" && (
                  <div>
                    <Paragraph className="text-gray-600 italic">
                      There are no reviews yet.
                    </Paragraph>
                    <Title level={5} className="!text-[#1a3d7c] mt-6">
                      Be the first to review “M R Reporting”
                    </Title>
                    <Paragraph className="text-sm text-gray-500 mb-2">
                      Your email address will not be published. Required fields are marked *
                    </Paragraph>

                    <div className="mb-3">
                      <Text className="font-medium text-gray-700">Your Rating *</Text>
                      <br />
                      <Rate
                        allowHalf
                        value={rating}
                        onChange={(value) => setRating(value)}
                        className="mt-1"
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Text className="font-medium text-gray-700">Your Review *</Text>
                        <TextArea rows={4} placeholder="Write your review here..." />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input placeholder="Name *" />
                        <Input placeholder="Email *" />
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" id="saveInfo" className="w-4 h-4" />
                        <label htmlFor="saveInfo">
                          Save my name, email, and website for next time.
                        </label>
                      </div>

                      <Button
                        type="primary"
                        className="!bg-[#1a3d7c] mt-3"
                        size="large"
                      >
                        Submit Review
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col">
            <Title level={2} className="!text-[#1a3d7c] mb-1">
              M R Reporting
            </Title>
            <Title level={4} className="!text-orange-600 mb-3">
              ₹1,500.00
            </Title>

            <Text className="text-gray-600 font-medium mb-2 block">Cloud</Text>
            <Select defaultValue="Choose an option" className="w-60 mb-4">
              <Option value="cloud">Cloud</Option>
              <Option value="desktop">Desktop</Option>
            </Select>

            <div className="flex items-center gap-4 mb-5">
              <Text className="text-gray-600">Quantity:</Text>
              <InputNumber
                min={1}
                max={10}
                value={quantity}
                onChange={(value) => setQuantity(value || 1)}
              />
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <Button type="primary" size="large" className="!bg-[#1a3d7c]">
                Add to Cart
              </Button>
              <Button type="default" size="large">
                Click If You Are Already Existing Customer
              </Button>
            </div>

            <div className="text-gray-600 text-sm space-y-1 border-t pt-4">
              <p>
                <strong>SKU:</strong> 27705
              </p>
              <p>
                <strong>Category:</strong> M R Reporting
              </p>
              <p>
                <strong>Tag:</strong> M R Reporting
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
