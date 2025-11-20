"use client"

import { Button, Col, Rate, Row } from 'antd'
import Image from 'next/image';
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { StoreMallDirectoryOutlined } from '@mui/icons-material';

const reviews = [
    {
        text: "Great experience working with Mabsol Infotech. The team is very professional and supportive.",
        author_name: "Abhishek prajapati",
        rating: 5,
        relative_time_description: "2 weeks ago"
    },
    {
        text: "Excellent service and timely delivery of my project. Highly recommended!",
        author_name: "shweta Verma",
        rating: 5,
        relative_time_description: "1 month ago"
    },
    {
        text: "Very good company. Helpful staff and good environment.",
        author_name: "manpreet singh",
        rating: 5,
        relative_time_description: "3 days ago"
    },
    {
        text: "Very good company. Helpful staff and good environment.",
        author_name: "Bhag singh",
        rating: 5,
        relative_time_description: "3 days ago"
    }

];


const GoogleReview = () => {
    const [value, setValue] = useState(5);
    return (
        <div className='lg:px-20 px-6 py-6 bg-white'>
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div className="elfsight-app-c5fe587d-7bbf-4c08-aaa3-cfd569414b2a" data-elfsight-app-lazy></div>


        </div>
    )
}

export default GoogleReview