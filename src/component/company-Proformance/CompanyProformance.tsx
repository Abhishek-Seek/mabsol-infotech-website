"use client"

import { Button, Progress } from 'antd'
import React, { useEffect, useState } from 'react'

const CompanyProformance = () => {

    const targetPercents = [92, 85, 70, 75];
    const years = [2024,2023,2022,2021];


    const [percents, setPercents] = useState(Array(targetPercents.length).fill(0));

    useEffect(() => {
        const timer = setTimeout(() => {
            setPercents(targetPercents);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:px-20 px-6 bg-gray-50 mt-20 py-10 gap-6'>
            <div  data-aos="fade-right" className=''>
                <h1 className='text-4xl font-bold text-blue-800 py-6'>
                    Results For The Last 3 Years
                </h1>
                <p className='text-lg italic'>
                    We will strive to meet all your business necessities and plans. You can rely on easy accessibility to our qualified staff.
                </p>
                <p className='text-lg italic py-6'>
                    Feel free to have a look at the services we are providing and to contact us for a detailed review of your case and a quote. Stay up-to-date and receive professional advice on specific regulatory requirements.
                </p>
                <Button type='primary' className='!px-10 !py-5 !font-bold'>
                    Contact Us
                </Button>
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
                            className="smooth-progress w-full"
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CompanyProformance