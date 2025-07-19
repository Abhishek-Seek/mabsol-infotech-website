import { DownOutlined, MailFilled } from '@ant-design/icons'
import { Button, Card} from 'antd'
import React from 'react'


const Service = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 lg:px-20 px-6 pt-20'>
             <Card data-aos="fade-right"
                styles={{
                    body: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        alignItems: 'center',
                        textAlign: 'center',
                    }
                }}
            >
                <MailFilled className='text-6xl text-blue-700' />
                <h1 className='text-2xl font-bold text-blue-800'>Accounting Software</h1>
                <p className='text-lg italic'>Simplify financial management with tools like Tally, Marg, and Busy for invoicing, GST, and reporting.</p>
                <Button className='!bg-blue-950 !py-6 !px-8 !text-white'>
                    View <DownOutlined />
                </Button>

            </Card>
            <Card data-aos="fade-right"
                styles={{
                    body: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        alignItems: 'center',
                        textAlign: 'center',
                    }
                }}
            >
                <MailFilled className='text-6xl text-blue-700' />
                <h1 className='text-2xl font-bold text-blue-800'>Web Development</h1>
                <p className='text-lg italic'>Simplify financial management with tools like Tally, Marg, and Busy for invoicing, GST, and reporting.</p>
                <Button className='!bg-blue-950 !py-6 !px-8 !text-white'>
                    View <DownOutlined />
                </Button>

            </Card>
             <Card data-aos="fade-left"
                styles={{
                    body: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        alignItems: 'center',
                        textAlign: 'center',
                    }
                }}
            >
                <MailFilled className='text-6xl text-blue-700' />
                <h1 className='text-2xl font-bold text-blue-800'>ERP
                    Software</h1>
                <p className='text-lg italic'>Simplify financial management with tools like Tally, Marg, and Busy for invoicing, GST, and reporting.</p>
                <Button className='!bg-blue-950 !py-6 !px-8 !text-white'>
                    View <DownOutlined />
                </Button>

            </Card>
           <Card data-aos="fade-left"
                styles={{
                    body: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        alignItems: 'center',
                        textAlign: 'center',
                    }
                }}
            >
                <MailFilled className='text-6xl text-blue-700' />
                <h1 className='text-2xl font-bold text-blue-800'>Payroll Software</h1>
                <p className='text-lg italic'>Simplify financial management with tools like Tally, Marg, and Busy for invoicing, GST, and reporting.</p>
                <Button className='!bg-blue-950 !py-6 !px-8 !text-white'>
                    View <DownOutlined />
                </Button>

            </Card>
        </div>
    )
}

export default Service