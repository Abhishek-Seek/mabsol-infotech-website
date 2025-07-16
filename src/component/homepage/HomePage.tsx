import { Button, Card } from 'antd'
import React from 'react'

const image = [
    {
        image: "/1.webp"
    },
    {
        image: "/2.webp"
    },
    {
        image: "/3.webp"
    },
    {
        image: "/4.png"
    },
    {
        image: "/5.jpg"
    },
    {
        image: "/1.webp"
    },
    {
        image: "/1.webp"
    },
    {
        image: "/1.webp"
    }

]


const HomePage = () => {
    return (
        <div className='flex flex-col h-[600px] justify-center items-center gap-6 '>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-5xl text-center font-bold max-w-[700px]'>
                    Smart Solutions for Smarter Business Management
                </h1>

                <p className='text-center max-w-[800px] w-full leading-8'>
                    Mabsol Infotech empowers businesses with cutting-edge software solutions like Marg, Tally, MR Reporting, and greytHR. From accounting to HR management, we simplify your operations and ensure seamless workflows with top-notch customer support.
                </p>
            </div>

            <div className='flex gap-6'>
                <Button className='
                      !py-6 !px-10 !rounded-full bg-transparent
                    '>
                    About Us
                </Button>

                <Button className='!bg-green-600  !py-6 !px-10 !rounded-full !text-white'>
                    Contact Us
                </Button>
            </div>

            <div className='flex justify-center items-center gap-10 lg:px-40'>
                {image.map((item, index) => (
                    <Card key={index} className='h-[200px] w-[200px]'>
                        <img src={item.image} alt="" />
                    </Card>

                ))}
            </div>
        </div>
    )
}

export default HomePage