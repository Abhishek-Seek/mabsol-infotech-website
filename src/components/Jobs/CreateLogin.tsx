"use client";

import React from "react";
import { Form, Input, Button, Typography, notification, Card, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;

export default function CreateLogin() {

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      const res = await fetch("http://localhost:3000/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        return message.error(data.message || "Invalid username or password");
      }

      // 🔥 SUCCESS TOAST
      notification.success({
        message: "Login Successful",
        description: "Welcome Admin! Redirecting you to dashboard...",
        placement: "topRight",
      });

      // Save token
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // Redirect after 1 second
      setTimeout(() => {
        window.location.href = "/admin-jobs-dashboard";
      }, 1000);

    } catch (error) {
      message.error("Error while connecting to server");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl p-6">
        <Title level={3} className="text-center mb-6 font-semibold">
          Admin Login
        </Title>

        <Form layout="vertical" onFinish={onFinish}>
          
          <Form.Item
            name="email"
            label="User Email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input
              size="large"
              prefix={<UserOutlined />}
              placeholder="Enter user email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined />}
              placeholder="Enter password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large" className="rounded-xl">
              Login
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </div>
  );
}