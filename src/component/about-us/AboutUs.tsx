import { Card } from 'antd'
import React from 'react'

const AboutUs = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat min-h-screen pt-20 px-60"
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
                </div>
                <Card bodyStyle={{ padding: 0, }} bordered={false}
                    className="rounded-2xl overflow-hidden shadow-2xl border-none"
                >
                    <img src="images/section1.webp" alt="" className='object-cover transition duration-300 ease-in-out hover:scale-110 shadow-2xl' />
                </Card>
            </div>

        </div>
    )
}

export default AboutUs