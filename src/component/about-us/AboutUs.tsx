import { CheckOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'

const AboutUs = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat min-h-screen pt-20 lg:px-20 px-6"
            style={{ backgroundImage: "url('/base-1.png')" }}>
            <div className=''>
                <h1 className='text-4xl font-bold underline text-blue-800'>
                    About Us
                </h1>
                <p className='text-lg italic py-4'>
                    At Mabsol Infotech, we are committed to delivering innovative software
                    solutions that empower businesses to thrive in a competitive world. Specializing in Web Development,
                    Accounting Software, ERP Software, and Payroll Software, we offer tailored services to streamline your
                    operations and drive growth. With a focus on quality and customer satisfaction, we ensure seamless experiences and lasting partnerships.
                </p>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 pt-20 gap-10'>
                <div>
                    <h1 className='text-4xl text-blue-800 underline font-bold'>
                        Why Choose Mabsol Infotech?
                    </h1>
                    <p className='text-lg italic py-6'>
                        People choose Mabsol Infotech for our expertise, reliability, and commitment to excellence. We deliver customized solutions like Accounting Software, ERP, Payroll, and Web Development, backed by exceptional customer support to ensure your success.
                    </p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2'>
                            <CheckOutlined className='h-6 w-6 bg-blue-800 rounded-full hover:text-black !text-white flex justify-center items-center !font-bold' />
                            <p className='text-lg italic text-black'>
                                Tailored Solutions - Customized software and services to fit your business needs.
                            </p>
                        </div>
                        <div className=' flex gap-2 '>
                            <CheckOutlined className='h-6 w-6 bg-blue-800 rounded-full hover:text-black !text-white flex justify-center items-center !font-bold' />
                            <p className='text-lg italic text-black'>
                                Reliable Support Prompt and responsive customer support for seamless operations.
                            </p>
                        </div>
                        <div className=' flex gap-2 '>
                            <CheckOutlined className='h-6 w-6 bg-blue-800 rounded-full hover:text-black !text-white flex justify-center items-center !font-bold' />
                            <p className='text-lg italic text-black'>
                                Reliable Support Prompt and responsive customer support for seamless operations.
                            </p>
                        </div>
                        <div className=' flex text-start gap-2 '>
                            <CheckOutlined className='h-6 w-6 bg-blue-800 rounded-full hover:text-black !text-white flex justify-center items-center !font-bold' />
                            <p className='text-lg italic text-black'>
                                Advanced Technology Leveraging the latest tools to drive innovation and growth.                        </p>
                        </div>
                    </div>
                </div>
                <Card data-aos="fade-right" bodyStyle={{ padding: 0, }} bordered={false}
                    className="rounded-2xl overflow-hidden shadow-2xl border-none"
                >
                    <img src="images/section1.webp" alt="" className='object-cover transition duration-300 ease-in-out hover:scale-110 shadow-2xl' />
                </Card>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 pt-20 gap-10'>
                <Card data-aos="fade-left" bodyStyle={{ padding: 0, }} bordered={false}
                    className="rounded-2xl overflow-hidden shadow-2xl border-none"
                >
                    <img src="images/section2.webp" alt="" className='object-cover transition duration-300 ease-in-out hover:scale-110 shadow-2xl' />
                </Card>
                <div>
                    <h1 data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className='text-4xl text-blue-800 underline font-bold'>
                        Our Mission
                    </h1>
                    <p className='text-lg italic py-6'>
                        Our mission at Mabsol Infotech is to empower businesses with cutting-edge technology
                        solutions that simplify processes, enhance efficiency, and foster growth. We are dedicated
                        to delivering innovative, reliable, and scalable tools that meet the evolving needs of our
                        clients while maintaining a focus on excellence and customer satisfaction.
                    </p>
                    <div className='flex flex-col gap-4'>
                        <div className=' flex  gap-2'>
                            <CheckOutlined className='h-6 w-6 bg-blue-800 rounded-full hover:text-black !text-white flex justify-center items-center !font-bold' />
                            <p className='text-lg italic text-black'>
                                Deliver innovative and scalable software solutions.                            </p>
                        </div>
                        <div className=' flex gap-2 '>
                            <CheckOutlined className='h-6 w-6 bg-blue-800 rounded-full hover:text-black !text-white flex justify-center items-center !font-bold' />
                            <p className='text-lg italic text-black'>
                                Simplify business processes to boost efficiency.
                            </p>
                        </div>
                        <div className=' flex gap-2 '>
                            <CheckOutlined className='h-6 w-6 bg-blue-800 rounded-full hover:text-black !text-white flex justify-center items-center !font-bold' />
                            <p className='text-lg italic text-black hover:text-black'>
                                Focus on customer satisfaction and long-term success.
                            </p>
                        </div>
                        <div className=' flex text-start gap-2 '>
                            <CheckOutlined className='h-6 w-6 bg-blue-800 rounded-full hover:text-black !text-white flex justify-center items-center !font-bold' />
                            <p className='text-lg italic text-black'>
                                Stay committed to quality and technological excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 pt-20 gap-10'>

                <div data-aos="fade-left">
                    <h1 data-aos="fade-up"
                        data-aos-duration="3000" className='text-4xl text-blue-800 underline font-bold'>
                        Our Vision
                    </h1>
                    <p className='text-lg italic py-6'>
                        At Mabsol Infotech, we envision a future where businesses of all sizes leverage technology to achieve their full potential.
                        We aim to be a trusted partner in this journey,
                        offering solutions that drive innovation, streamline operations, and build long-term success for our clients.
                    </p>
                    <div className='flex flex-col gap-4'>
                        <div className=' flex  gap-2'>
                            <CheckOutlined className='h-6 w-6 bg-blue-800 rounded-full hover:text-black !text-white flex justify-center items-center !font-bold' />
                            <p className='text-lg italic text-black'>
                                Empower businesses through advanced technology.
                            </p>
                        </div>
                        <div className=' flex gap-2 '>
                            <CheckOutlined className='h-6 w-6 bg-blue-800 rounded-full hover:text-black !text-white flex justify-center items-center !font-bold' />
                            <p className='text-lg italic text-black'>
                                Become a trusted partner for growth and success.
                            </p>
                        </div>
                        <div className=' flex gap-2 '>
                            <CheckOutlined className='h-6 w-6 bg-blue-800 rounded-full hover:text-black !text-white flex justify-center items-center !font-bold' />
                            <p className='text-lg italic text-black hover:text-black'>
                                Drive innovation with customer-centric solutions.
                            </p>
                        </div>
                        <div className=' flex text-start gap-2 '>
                            <CheckOutlined className='h-6 w-6 bg-blue-800 rounded-full hover:text-black !text-white flex justify-center items-center !font-bold' />
                            <p className='text-lg italic text-black'>
                                Foster long-term relationships built on trust and excellence.
                            </p>
                        </div>
                    </div>
                </div>
                <Card data-aos="fade-right" bodyStyle={{ padding: 0, }} bordered={false}
                    className="rounded-2xl overflow-hidden shadow-2xl border-none"
                >
                    <img src="images/section3.webp" alt="" className='object-cover transition duration-300 ease-in-out hover:scale-110 shadow-2xl' />
                </Card>
            </div>

        </div>
    )
}

export default AboutUs