import { Button, Card } from 'antd'
import React from 'react'

const OurProduct = () => {
    return (
        <div className='py-10 lg:py-20 lg:px-20 px-6'>
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className='text-center text-4xl font-bold text-blue-800 underline'>Our Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10'>
                <Card className=' shadow-2xl'>
                    <img src="product1.webp" alt="img" className='h-[100%] w-[100%] bg-cover transition duration-300 ease-in-out hover:scale-110' />
                    <div className='text-center pt-4'>
                        <a className='text-blue-700 text-xl font-bold font-serif'>M R Reporting</a>
                        <h1 className='py-1'>M R Reporting</h1>
                        <p className='text-green-700'>₹1,500.00</p>
                        <Button type='primary' className='!rounded-none !px-10 !py-5 mt-2'>
                            Select options
                        </Button>
                    </div>
                </Card>

                <Card className=' shadow-2xl'>
                    <img src="product1.webp" alt="" className='h-[100%] w-[100%]  transition duration-300 ease-in-out hover:scale-110' />
                    <div className='text-center pt-4'>
                        <a className='text-blue-700 text-xl font-bold font-serif'>M R Reporting</a>
                        <h1 className='py-1'>M R Reporting</h1>
                        <p className='text-green-700'>₹1,500.00</p>
                        <Button type='primary' className='!rounded-none !px-10 !py-5 mt-2'>
                            Select options
                        </Button>
                    </div>
                </Card>

                <Card className='shadow-2xl'>
                    <img src="product1.webp" alt="" className='h-[100%] w-[100%]  transition duration-300 ease-in-out hover:scale-110' />
                    <div className='text-center pt-4'>
                        <a className='text-blue-700 text-xl font-bold font-serif'>M R Reporting</a>
                        <h1 className='py-1'>M R Reporting</h1>
                        <p className='text-green-700'>₹1,500.00</p>
                        <Button type='primary' className='!rounded-none !px-10 !py-5 mt-2'>
                            Select options
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default OurProduct