import { Button} from 'antd'
import React from 'react'


const service = [
    {
        image: "images/our.webp",
        title: "Website Development",
        Descriptions: "Website Development Services to Build Your Digital Identity Our expert website development  services are designed to help businesses establish a...",
        role: "Read More"
    },
    {
        image: "images/our2.webp",
        title: "Accounting Software",
        Descriptions: "Accounting Software Solutions to Streamline Your Financial Operations Our accounting software solutions provide seamless business accounting, automated accounting, and payroll...",
        role: "Read More"
    },
    {
        image: "images/our3.webp",
        title: "Payroll Software",
        Descriptions: "Advanced Payroll Software for Efficient Salary and HR Management Our advanced payroll software is designed to simplify and automate every...",
        role: "Read More"
    },
    {
        image: "images/our4.webp",
        title: "ERP Software",
        Descriptions: "Smart ERP Software for Complete Business Management Our powerful ERP software provides everything you need to manage your business efficiently....",
        role: "Read More"
    },
    {
        image: "images/our5.webp",
        title: "SFA Software",
        Descriptions: "Powerful SFA Software to Automate and Optimize Sales Operations Our robust SFA software is designed to automate and streamline your...",
        role: "Read More"
    }
]

const OurService = () => {
    return (
        <div className='relative w-full py-20 overflow-hidden'>

            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-10"
                style={{ backgroundImage: `url(/bg.avif)` }}
            ></div>

            <div className='relative z-10 opacity-100 px-6 lg:px-20'>
                <div>
                    <h1 className='text-center text-4xl font-bold underline'>
                        Our Services
                    </h1>
                    <div className='flex justify-center items-center gap-4 pt-4'>
                        <Button className='!bg-gray-100 !py-5 !px-4 !border-none'>
                            All Posts
                        </Button>
                        <Button className='!bg-gray-100 !py-5 !px-4 !border-none'>
                            Services
                        </Button>
                    </div>

                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 pt-10'>
                    {service.map((item, index) => (
                        <div key={index} className='overflow-hidden'>
                            <div className='h-[300px] sm:h-[350px] md:h-[400px] lg:h-[300px] xl:h-[400px] w-full border-white rounded-2xl overflow-hidden'>
                                <img src={item.image} alt="" className='h-[100%] w-[100%] bg-contain bg-center rounded-2xl transition duration-300 ease-in-out hover:scale-110' />
                            </div>
                            <span className='text-3xl inline-block underline font-bold font-serif hover:text-blue-600 transition-colors duration-300 py-6'>
                                {item.title}
                            </span>
                            <p className='pb-3'>
                                {item.Descriptions}
                            </p>
                            <a className='underline' href="">{item.role}</a>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurService