"use client"

import { DownOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Button, Drawer } from 'antd'
import Aos from 'aos'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'



const Header = () => {
    const [open, setOpen] = useState(false)
    const img = "/images/logo.webp"

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const handleClick = () => {
        setOpen(true)
    }

    return (
        <div className=' bg-blue-900 sticky top-0 z-50'>
            <div className='flex justify-around items-center gap-16 px-6 lg:px-20 py-4'>
                <div>
                    <Image src={img} alt="imgs" height={150} width={150} />
                </div>
                <nav data-aos="fade-up" className='lg:flex hidden justify-center items-center gap-10 text-white text-sm font-bold'>
                    <a href="">Home <DownOutlined /></a>
                    <a href="">About Us <DownOutlined /></a>
                    <a href="">Service <DownOutlined /></a>
                    <a href="">Software Products <DownOutlined /></a>
                    <a href="">Mabsol Portal <DownOutlined /></a>
                </nav>
                <div className='lg:flex hidden gap-4 items-center'>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="700" >
                        <Button className='!bg-green-700 !text-white !py-5 !px-5'>
                            Raise a Support Ticket
                        </Button>
                    </div>

                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="700">
                        <Button className=' !text-white !py-5 !bg-blue-950'>
                            contact Us
                        </Button>
                    </div>
                </div>


                <div className='lg:hidden text-white' onClick={handleClick}>
                    <MenuFoldOutlined className='text-2xl' />
                </div>
            </div>

            <Drawer
                title="Menu"
                placement='right'
                open={open}
                onClose={() => { setOpen(false) }}
                // className='px-4'
            >
                <nav data-aos="fade-up" className='flex flex-col gap-6 text-sm font-bold'>
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Service</a>
                    <a href="">Software Product</a>
                    <a href="">Mabsol Portal</a>
                </nav>
                <div className='flex justify-center items-center pt-10 gap-6 '>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="700" >
                        <Button className='!bg-green-700 !text-white !py-5 !px-5'>
                            Raise a Support Ticket
                        </Button>
                    </div>

                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="700">
                        <Button className=' !text-white !py-5 !bg-blue-950'>
                            contact Us
                        </Button>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Header