"use client"

import { DownOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-center items-center bg-blue-900 gap-14 sticky top-0 z-50'>
            <div className='h-[100px] w-[150px] p-6'>
                <img src="images/logo.webp" alt="" className='h-[100%] w-[100%]'/>
            </div>

            <ul className='flex justify-center items-center gap-6 text-white text-sm font-bold'>
                <li><a href="">Home <DownOutlined /></a></li>
                <li><a href="">About Us <DownOutlined /></a></li>
                <li><a href="">Service <DownOutlined /></a></li>
                <li><a href="">Software Products <DownOutlined /></a></li>
                <li><a href="">Mabsol Portal <DownOutlined /></a></li>
            </ul>


            <div className='flex gap-4'>
                <div>
                    <Button className='!bg-green-700 !text-white !py-5'>
                        Raise a Support Ticket
                    </Button>
                </div>

                <div>
                    <Button className=' !text-white !py-5 !bg-blue-950'>
                        contact Us
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header