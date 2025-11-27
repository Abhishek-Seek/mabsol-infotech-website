"use client";

import React, { useEffect, useState } from "react";
import { Form, Input, Button, Typography, Card } from "antd";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";


const { Title, Text } = Typography;

const LoginPage = () => {
  const router = useRouter();
//   const { setUserData, userData } = useAuth();

  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const res = await fetch("http//localhost:3000",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        credentials: "include",
      });

      const apiData = await res.json();
      console.log("login-page", apiData);

      if (res.ok) {
        toast.success("Login successful!");
        router.replace("/selected-modules");
      } else {
        toast.error(apiData.message || "Login failed!");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center bg-gray-50 p-6">
          <Card
            className="w-full max-w-md bg-gray-50 p-8 border-none! text-black"
            data-aos="fade-right"
          >
            <div className="text-center mb-6">
              <Title level={2} className="text-black! text-4xl!">
                Mab Hotel Login
              </Title>
              <Text className="text-black! text-lg! opacity-80">
                Welcome back! Please login to continue.
              </Text>
            </div>

            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input size="large" placeholder="you@example.com" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password" },
                ]}
              >
                <Input.Password size="large" placeholder="••••••••" />
              </Form.Item>

              <div className="flex justify-between mb-4 text-md">
                
                <Link href="/forgotpassword">
                  <Text className="text-md! !font-bold! text-blue-600! hover:underline">
                    Forgot Password
                  </Text>
                </Link>
              </div>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  loading={loading}
                  className="text-sm!"
                >
                  Login
                </Button>
              </Form.Item>

              <div className="flex justify-center items-center gap-1">
                <Text className="text-gray-500!">For Demo Company</Text>

                <Link href="/signup" className="font-semibold">
                  Click here
                </Link>
              </div>
            </Form>
          </Card>
        </div>

        <div className="relative block" data-aos="fade-left">
          <img
            src="/hotel2.jpg"
            alt="Hotel"
            className="w-full h-72 md:h-full object-cover"
          />
          <div className="absolute bottom-6 right-6 bg-black/40 text-white p-6 rounded-xl max-w-lg backdrop-blur-xs">
            <h3 className="text-lg font-semibold">Your Luxury Escape Awaits</h3>
            <p className="text-md mt-2">
              Seamlessly book exquisite hotels and experience hospitality
              redefined
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default LoginPage;
