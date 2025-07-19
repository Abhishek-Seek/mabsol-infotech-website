"use client"

import { DownOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Aos from 'aos'
import Image from 'next/image'
import React, { useEffect } from 'react'



const Header = () => {
    const img = "/images/logo.webp"

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className='flex justify-around items-center bg-blue-900 gap-16 sticky top-0 z-50'>
            <div className='p-6'>
                <Image src={img} alt="imgs" height={150} width={150} />
            </div>

            <div className='flex justify-center items-center gap-20'>
                <ul data-aos="fade-up" className='lg:flex justify-center items-center gap-10 text-white text-sm font-bold hidden'>
                    <li><a href="">Home <DownOutlined /></a></li>
                    <li><a href="">About Us <DownOutlined /></a></li>
                    <li><a href="">Service <DownOutlined /></a></li>
                    <li><a href="">Software Products <DownOutlined /></a></li>
                    <li><a href="">Mabsol Portal <DownOutlined /></a></li>
                </ul>
                <div className='flex gap-4'>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="700" >
                        <Button className='!bg-green-700 !text-white !py-5 !px-5'>
                            Raise a Support Ticket
                        </Button>
                    </div>

                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="700" className='hidden lg:block'>
                        <Button className=' !text-white !py-5 !bg-blue-950'>
                            contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header