"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Typography,
  Row,
  Col,
  Table,
  DatePicker,
  Popconfirm,
  message,
} from "antd";

export interface JobType {
  _id: string;
  title: string;
  company: string;
  location: string;
  positions: number;
  qualification: string;
  jobType: string;
  timings: string;
  description: string;
  responsibilities: string[];
  requiredSkills: string[];
  preferredSkills: string[];
  category: string;
  expireAt: string;
  createdAt: string;
  updatedAt: string;
}

const { Title } = Typography;
const { TextArea } = Input;

export default function AdminDashboard() {
const [jobs, setJobs] = useState<JobType[]>([]);
  const [showForm, setShowForm] = useState(false);
 const [editingJob, setEditingJob] = useState<JobType | null>(null);
  const [form] = Form.useForm();

  const fetchJobs = async () => {
    const res = await fetch("http://localhost:3000/api/jobs");
    const data = await res.json();
      console.log("API Response:", data);
    setJobs(data);
  
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const onFinish = async (values: any) => {
    const payload = {
      ...values,
      responsibilities: values.responsibilities.split(","),
      requiredSkills: values.requiredSkills.split(","),
      preferredSkills: values.preferredSkills
        ? values.preferredSkills.split(",")
        : [],
      positions: Number(values.positions),
      expireAt: values.expireAt.toISOString(),
    };

    try {
      let res;

      // UPDATE JOB
      if (editingJob) {
        res = await fetch(`http://localhost:3000/api/jobs/${editingJob._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        // CREATE JOB
        res = await fetch("http://localhost:3000/api/jobs/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) throw new Error("Failed");

      message.success(
        editingJob ? "Job updated successfully!" : "Job created successfully!"
      );

      form.resetFields();
      setShowForm(false);
      setEditingJob(null);
      fetchJobs();
    } catch (error) {
      message.error("Something went wrong!");
    }
  };

  // DELETE JOB
  const deleteJob = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/jobs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();

      message.success("Job deleted!");
      fetchJobs();
    } catch {
      message.error("Delete failed");
    }
  };

  // EDIT JOB
  const editJob = (job: any) => {
    setEditingJob(job);
    setShowForm(true);

    form.setFieldsValue({
      ...job,
      responsibilities: job.responsibilities.join(","),
      requiredSkills: job.requiredSkills.join(","),
      preferredSkills: job.preferredSkills?.join(","),
      expireAt: job.expireAt ? new Date(job.expireAt) : null,
    });
  };

  const columns = [
    { title: "Job Title", dataIndex: "title", key: "title" },
    { title: "Positions", dataIndex: "positions", key: "positions" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Expiry Date",
      dataIndex: "expireAt",
      render: (val: string) => new Date(val).toLocaleDateString(),
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <div className="flex gap-2">
          <Button type="link" onClick={() => editJob(record)}>
            Edit
          </Button>

          <Popconfirm
            title="Are you sure?"
            onConfirm={() => deleteJob(record._id)}
          >
            <Button danger type="link">
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* HEADER */}
      <Card
        style={{ maxWidth: 1200, margin: "0 auto", marginBottom: 40 }}
        className="shadow-xl"
      >
        <Title level={3} style={{ textAlign: "left" }}>
          Create Job
        </Title>

        <div className="flex justify-left my-4">
          {!showForm && (
            <Button type="primary" onClick={() => setShowForm(true)}>
              + Create Job
            </Button>
          )}
        </div>

        {/* FORM SECTION */}
        {showForm && (
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Job Title"
                  name="title"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter job title" />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label="Company"
                  name="company"
                  initialValue="Mabsol Infotech"
                >
                  <Input placeholder="Company" />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label="Location"
                  name="location"
                  initialValue="Panchkula"
                >
                  <Input placeholder="Location" />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label="Positions"
                  name="positions"
                  rules={[{ required: true }]}
                >
                  <Input type="number" min={0} placeholder="No. of positions" />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label="Qualification"
                  name="qualification"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Qualification" />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label="Job Type"
                  name="jobType"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Full-time / Internship" />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label="Office Timings"
                  name="timings"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="10 AM - 6 PM" />
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item
                  label="Position Overview"
                  name="description"
                  rules={[{ required: true }]}
                >
                  <TextArea rows={3} placeholder="Job description" />
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item
                  label="Key Responsibilities"
                  name="responsibilities"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="e.g. Manage team, Write reports" />
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item
                  label="Required Skills"
                  name="requiredSkills"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="e.g. HTML, CSS, React" />
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item label="Preferred Skills" name="preferredSkills">
                  <Input placeholder="e.g. Next.js, UI/UX" />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label="Job Category"
                  name="category"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Developer / Designer" />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label="Expire Date"
                  name="expireAt"
                  rules={[{ required: true }]}
                >
                  <DatePicker className="w-full" />
                </Form.Item>
              </Col>

           <Col 
  xs={24} 
  className="flex justify-end gap-3 mt-3"
>
  <Button 
    type="primary"
    htmlType="submit"
    style={{ backgroundColor: "#28a745", borderColor: "#28a745", marginRight: "3px" }} // Green
  >
    {editingJob ? "Update Job" : "Create Job"}
  </Button>

  <Button
    onClick={() => {
      setShowForm(false);
      setEditingJob(null);
      form.resetFields();
    }}
    style={{ backgroundColor: "#dc3545", color: "white", borderColor: "#dc3545" }} // Red
  >
    Cancel
  </Button>
</Col>

            </Row>
          </Form>
        )}
      </Card>

      {/* JOBS LIST TABLE */}
      <Card style={{ maxWidth: 1200, margin: "0 auto" }} className="shadow-xl">
        <Title level={4} style={{ marginBottom: 20 }}>
          Jobs List
        </Title>

        <Table
          columns={columns}
          dataSource={jobs}
          rowKey="_id"
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </div>
  );
}