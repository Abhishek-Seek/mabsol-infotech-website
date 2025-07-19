import { SnippetsFilled } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

const Technoogy = () => {
    return (
        <div className='relative py-20 overflow-hidden px-6 lg:px-60'>
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-20"
                style={{ backgroundImage: `url(/bg5.jpeg)` }}
            >
            </div>

            <div className='relative z-20 opacity-100 grid grid-cols-1 lg:grid-cols-2'>
                <div data-aos="zoom-in-right">
                    <h1 className='text-3xl font-bold font-serif underline'>
                        # Innovation Hub
                    </h1>
                    <p className='text-4xl font-bold font-serif max-w-[500px] py-2'>
                        Where Technology Transforms Business
                    </p>
                    <Button className='!bg-transparent !py-6 !px-12 hover:!text-white hover:!bg-blue-800 !mt-6 !text-xl !border-black'>
                        Project <SnippetsFilled />
                    </Button>
                </div>
                <div data-aos="zoom-in-left">
                    <h1 className='text-3xl font-bold'>
                        Empowering Businesses with Leading Software Solutions
                    </h1>
                    <p className='text-lg italic leading-8'>
                        At Mabsol Infotech, our suite of advanced solutions—Marg, Tally, Busy, MR Reporting,
                        and GreyHR—drives efficiency, compliance, and growth for businesses across sectors.
                        Discover how our tools simplify operations, improve productivity, and support smarter decision-making.
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 pt-32'>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className='flex flex-col gap-10'>
                    <div>
                        <span className='text-2xl underline font-semibold'>Marg ERP</span>
                        <p className='text-lg italic pt-4'>Streamline inventory and distribution with features like batch tracking,
                            smart billing, and real-time updates, tailored for industries like pharmaceuticals and retail.
                        </p>
                    </div>
                    <div>
                        <span className='text-2xl underline font-semibold'>
                            Tally
                        </span>
                        <p className='text-lg italic pt-4'>
                            Simplify accounting and compliance with automated GST, integrated banking,
                            and powerful analytics to support financial clarity for SMBs.
                        </p>
                    </div>
                    <div>
                        <span className='text-2xl  underline font-semibold'>
                            HR Payroll
                        </span>
                        <p className='text-lg italic pt-4'>Comprehensive accounting and GST compliance, providing real-time insights and scalability for growing businesses.</p>

                    </div>
                    <div>
                        <span className='text-2xl  underline font-semibold'>
                            MR Reporting
                        </span>
                        <p className='text-lg italic pt-4'>
                            Empower sales teams with GPS tracking, call reporting, and analytics, enhancing field efficiency for healthcare companies.
                        </p>
                    </div>
                </div>
                <div className='h-[400px] lg:h-[600px] w-full overflow-hidden'>
                    <img
                        src="images/section1.webp"
                        alt=""
                        className='h-[100%] w-[100%] object-cover rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110'
                    />
                </div>


                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className='flex flex-col gap-10'>
                    <div>
                        <span className='text-2xl underline font-semibold'>GreyHR</span>
                        <p className='text-lg italic pt-4'>Automate HR tasks like payroll and compliance, freeing time for strategic functions with a user-friendly, cloud-based platform.
                        </p>
                    </div>
                    <div>
                        <span className='text-2xl underline font-semibold'>
                            Automated Compliance
                        </span>
                        <p className='text-lg italic pt-4'>
                            Each solution automates tax, payroll, and regulatory compliance, ensuring
                            seamless adherence to changing standards.
                        </p>
                    </div>
                    <div>
                        <span className='text-2xl underline font-semibold'>
                            Cloud-Enabled Access
                        </span>
                        <p className='text-lg italic pt-4'>Secure, scalable cloud solutions for real-time data access and collaboration across locations.</p>

                    </div>
                    <div>
                        <span className='text-2xl underline font-semibold'>
                            Insightful Analytics
                        </span>
                        <p className='text-lg italic pt-4'>
                            From financial reports to HR metrics, our tools provide actionable insights for smarter decision-making.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technoogy