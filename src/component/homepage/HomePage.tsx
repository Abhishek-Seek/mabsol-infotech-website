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
        <div className='relative h-[80vh] w-full overflow-hidden'>

            <div
                style={{
                    backgroundImage: `url(images/background.jpg)`

                }}
                className='absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0'
            >
            </div>

            <div className='relative z-10 flex flex-col h-full justify-center items-center gap-6 px-4 text-center bg-black/50 text-white'>
                <h1 className='text-3xl lg:text-5xl text-center font-bold max-w-[700px] pt-6'>
                    Smart Solutions for Smarter Business Management
                </h1>

                <p className='text-center lg:max-w-[800px] w-full lg:leading-8'>
                    Mabsol Infotech empowers businesses with cutting-edge software solutions like Marg, Tally, MR Reporting, and greytHR. From accounting to HR management, we simplify your operations and ensure seamless workflows with top-notch customer support.
                </p>

                <div data-aos="fade-up" className='flex gap-6'>
                    <Button className='
                      !py-6 !px-10 !rounded-full bg-transparent hover:!bg-blue-900 hover:!text-white
                    '>
                        About Us
                    </Button>

                    <Button className='!bg-green-600  !py-6 !px-10 !rounded-full !text-white hover:!bg-blue-900 hover:!text-white'>
                        Contact Us
                    </Button>
                </div>

                <div data-aos="fade-up" className='absolute -bottom-32 lg:-bottom-20 flex justify-center items-center gap-4 lg:px-40'>
                    {image.map((item, index) => (
                        <Card key={index} className='h-[200px] w-[200px]'>
                            <img src={item.image} alt="" />
                        </Card>

                    ))}
                </div>
            </div>


        </div>
    )
}

export default HomePage