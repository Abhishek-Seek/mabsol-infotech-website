"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Form, Input, Button, Upload, message, Checkbox } from "antd";
import { UploadOutlined } from "@ant-design/icons";

interface Job {
  _id: string;
  title: string;
  company?: string;
  location?: string;
  experience?: string;
  positions?: number;
  qualification?: string;
  jobType?: string;
  timings?: string;
  aboutUs?: string;
  positionOverview?: string;
  responsibilities?: string[];
  requiredSkills?: string[];
  preferredSkills?: string[];
  whatWeOffer?: string[];
  howToApply?: string;
  category?: string;
  createdAt?: Date;
  updatedAt?: Date;
  expireAt?: Date;
}

export default function CareerJobsForm() {
  const { id } = useParams(); // get job ID from URL
  const [job, setJob] = useState<Job | null>(null);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3000/api/jobs/${id}`)
      .then((res) => res.json())
      .then((data) =>setJob(data.job))
      .catch((err) => console.error(err));
  }, [id]);

  if (!job) return <p className="text-center mt-20">Loading job details...</p>;

//   form submission logic here
const handleSubmit = async (values: any) => {
  const formData = new FormData();
  formData.append("fullName", values.fullName);
  formData.append("email", values.email);
  formData.append("phone", values.phone);
  formData.append("coverLetter", values.coverLetter);

  // file
  if (values.resume && values.resume[0]) {
    formData.append("resume", values.resume[0].originFileObj);
  }

  try {
    const res = await fetch("http://localhost:3000/api/apply", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      message.success("Application submitted successfully!");
    } else {
      message.error(data.message || "Submission failed");
    }
  } catch (error) {
    console.error(error);
    message.error("Server error, try again later.");
  }
};

  return (
    <div className="max-w-7xl mx-auto p-8">
    <div>
      {/* Job Header */}
      <h1 className="text-4xl font-bold text-[#185e9a] mb-4">{job.title}</h1>
      <p className="text-gray-700 mb-2"><strong>Company:</strong> {job.company || "N/A"}</p>
      <p className="text-gray-700 mb-2"><strong>Location:</strong> {job.location || "N/A"}</p>
      <p className="text-gray-700 mb-2"><strong>Experience:</strong> {job.experience || "N/A"}</p>
      <p className="text-gray-700 mb-2"><strong>Positions:</strong> {job.positions ?? "N/A"}</p>
      <p className="text-gray-700 mb-4"><strong>Qualification:</strong> {job.qualification || "N/A"}</p>

      {/* Position Overview */}
      <h2 className="text-2xl font-semibold text-[#185e9a] mb-2">Position Overview</h2>
      <p className="text-gray-700 mb-4">{job.positionOverview || "No overview provided."}</p>

      {/* Responsibilities */}
      <h2 className="text-2xl font-semibold text-[#185e9a] mb-2">Responsibilities</h2>
      <ul className="list-disc list-inside mb-4">
        {job.responsibilities?.length
          ? job.responsibilities.map((res, idx) => <li key={idx}>{res}</li>)
          : <li>No responsibilities listed.</li>}
      </ul>

      {/* Required Skills */}
      <h2 className="text-2xl font-semibold text-[#185e9a] mb-2">Required Skills</h2>
      <ul className="list-disc list-inside mb-4">
        {job.requiredSkills?.length
          ? job.requiredSkills.map((skill, idx) => <li key={idx}>{skill}</li>)
          : <li>No required skills listed.</li>}
      </ul>

      {/* Preferred Skills */}
      <h2 className="text-2xl font-semibold text-[#185e9a] mb-2">Preferred Skills</h2>
      <ul className="list-disc list-inside mb-4">
        {job.preferredSkills?.length
          ? job.preferredSkills.map((skill, idx) => <li key={idx}>{skill}</li>)
          : <li>No preferred skills listed.</li>}
      </ul>

      {/* What We Offer */}
      <h2 className="text-2xl font-semibold text-[#185e9a] mb-2">What We Offer</h2>
      <ul className="list-disc list-inside mb-4">
        {job.whatWeOffer?.length
          ? job.whatWeOffer.map((offer, idx) => <li key={idx}>{offer}</li>)
          : <li>No offerings listed.</li>}
      </ul>

      {/* How to Apply */}
      <h2 className="text-2xl font-semibold text-[#185e9a] mb-2">How to Apply</h2>
      <p>{job.howToApply || "Instructions not provided."}</p>
    </div>
      {/* Add a form below for applying */}
      <div className="mt-12">

      {/* APPLY NOW BUTTON */}
      {!openForm && (
        <button
          onClick={() => setOpenForm(true)}
          className="bg-[#185e9a] text-white px-8 py-3 hover:bg-blue-400 transition"
        >
          Apply Now
        </button>
      )}

      {/* FORM SECTION */}
      {openForm && (
        <div className="mt-8 bg-white p-6 md:p-10 rounded-xl shadow-lg border animate__animated animate__fadeIn">
          <h2 className="text-2xl font-semibold text-[#185e9a] mb-6">
            Apply for this Job
          </h2>

          <Form
            layout="vertical"
            className="grid grid-cols-1 gap-6"
            onFinish={handleSubmit}
          >
            {/* Full Name */}
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: "Please enter your full name" }]}
            >
              <Input placeholder="Enter your full name" size="large" />
            </Form.Item>

            {/* Phone Number */}
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number" },
                { min: 10, message: "Enter a valid phone number" },
              ]}
            >
              <Input placeholder="Enter phone number" size="large" />
            </Form.Item>

            {/* Email */}
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email!" },
              ]}
            >
              <Input placeholder="Enter email address" size="large" />
            </Form.Item>

            {/* Cover Letter */}
            <Form.Item
              label="Cover Letter"
              name="coverLetter"
              
            >
              <Input.TextArea
                placeholder="Write your cover letter here..."
                size="large"
                rows={5}
              />
            </Form.Item>

            {/* Resume Upload */}
           <Form.Item
  label="Upload Resume / Documents"
  name="resume"
  valuePropName="fileList"
  getValueFromEvent={(e) => e.fileList}
  rules={[{ required: true, message: "Please upload your resume" }]}
>
  <Upload
    beforeUpload={() => false}   // 👈 VERY IMPORTANT — disables auto upload
  >
    <Button icon={<UploadOutlined />} size="large">Choose File</Button>
  </Upload>
</Form.Item>

           {/* Disclaimer Checkbox */}
<Form.Item
  name="agree"
  valuePropName="checked"
  rules={[
    {
      validator: (_, value) =>
        value
          ? Promise.resolve()
          : Promise.reject("You must agree before submitting."),
    },
  ]}
>
  <Checkbox>
    <span className="text-sm text-gray-600">
      I agree with the storage and handling of my data by this website. *
    </span>
  </Checkbox>
</Form.Item>
            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="bg-[#185e9a] hover:bg-blue-500 px-8 py-5 rounded-full"
              >
                Submit Application
              </Button>

              <Button
                size="large"
                className="px-8 py-5 rounded-full border"
                onClick={() => setOpenForm(false)}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      )}
    </div>
    </div>
  );
}
