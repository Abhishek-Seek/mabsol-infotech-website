"use client"
import Link from 'next/link'
import { Button, Progress } from 'antd'
import React, { useEffect, useState } from 'react'

const CompanyProformance = () => {

    const targetPercents = [96, 92, 85, 70, 75];
    const years = [2025,2024,2023,2022,2021];


    const [percents, setPercents] = useState(Array(targetPercents.length).fill(0));

    useEffect(() => {
        const timer = setTimeout(() => {
            setPercents(targetPercents);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:px-20 px-6 mt-10 py-10 gap-6 bg-[#f8fafc]"'>
           <div className="space-y-3">

    {/* Small Top Label */}
    <div className="flex items-center gap-3">
        <span className="h-1 w-10 bg-[#185e9a] rounded-full"></span>
        <p className="text-orange-600 text-xl font-bold tracking-wide">
            Company Performance
        </p>
    </div>

    {/* Title */}
    <h1 className="text-4xl lg:text-5xl font-semibold text-[#0b3a74] leading-tight">
        Results For The Last 4 Years
    </h1>

    {/* Paragraphs */}
    <p className="text-gray-600 text-lg leading-relaxed">
        We will strive to meet all your business necessities and plans. 
        You can rely on easy accessibility to our qualified staff.
    </p>

    <p className="text-gray-600 text-lg leading-relaxed">
        Feel free to have a look at the services we are providing and 
        to contact us for a detailed review of your case and a quote. 
        Stay up-to-date and receive professional advice on specific regulatory requirements.
    </p>

    {/* Button */}
    <Link href="/contact-us">
    <Button className="!px-8 !py-6 !rounded-md !bg-[#185e9a] !text-white !text-lg !font-semibold hover:!bg-[#0b3a74] transition-all duration-300">
        Contact Us
    </Button>
    </Link>

</div>


            <div style={{ width: '100%' }} className="flex flex-col gap-10 justify-center items-center">
                {percents.map((item, index) => (
                    <div key={index} className='w-full'>
                        <p className="text-sm font-semibold mb-1 text-gray-700">{years[index]}</p>
                        <Progress
                            strokeLinecap="butt"
                            percent={item}
                            size={['undefined', 30]}
                            showInfo={true}
                            strokeColor="#185e9a"
                            className="smooth-progress w-full"
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CompanyProformance