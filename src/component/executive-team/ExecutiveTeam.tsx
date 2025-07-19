import { FacebookFilled, GoogleOutlined, TwitterOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';

const executiveTeam = [
  {
    image: "images/Anjani-Kumar.webp",
    role: "CEO & Founder",
    name: "Anjani Kumar Pathak",
    description:
      "Anjani's passion for technology and commitment to excellence are the cornerstones of Mabsol Infotech. Under his guidance, the company has expanded its product offerings and grown its client base, achieving significant milestones in the tech industry.",
  },
  {
    image: "images/Bhupendra-Chaubey.webp",
    role: "CTO & Co-Founder",
    name: "Bhupendra Chaubey",
    description:
      "Bhupendra's deep understanding of technical architecture and scalable systems has been instrumental in building Mabsol’s robust platforms. He leads the engineering team with innovation and precision.",
  },
];

const ExecutiveTeam = () => {
  return (
    <div className="h-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-20">
      <div>
        <h1 data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" className="text-3xl sm:text-4xl text-center font-bold text-blue-800 font-serif">
          Executive <span className="text-black">Team</span>
        </h1>
        <div className="pt-4 w-full flex justify-center items-center">
          <hr className="w-[80%] border-t-4 border-blue-800" />
        </div>
      </div>

      {/* Team Cards */}
      <div data-aos="zoom-in-left" className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
        {executiveTeam.map((member, index) => (
          <Card
            key={index}
            className="!bg-gray-100 shadow-md rounded-2xl"
            bodyStyle={{ padding: 0 }}
          >
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              {/* Image */}
              <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[500px] w-full flex justify-center items-center overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="flex flex-col justify-between items-center">
                <div className="flex flex-col justify-center items-center gap-1 sm:gap-2">
                  <span className="text-lg sm:text-xl font-bold pt-6">{member.role}</span>
                  <span className="text-lg sm:text-xl font-bold">{member.name}</span>
                </div>

                <p className="text-center italic pt-4 text-sm sm:text-base">
                  {member.description}
                </p>

                <div className="pt-6 w-full flex justify-center items-center">
                  <hr className="w-[80%] border-t-2 border-blue-800" />
                </div>

                {/* Social Icons */}
                <div className="flex justify-center items-center gap-4 text-xl sm:text-2xl pt-6">
                  <a href="#"><FacebookFilled /></a>
                  <a href="#"><GoogleOutlined /></a>
                  <a href="#"><TwitterOutlined /></a>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExecutiveTeam;
