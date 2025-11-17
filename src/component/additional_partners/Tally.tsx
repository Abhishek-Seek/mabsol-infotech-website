// "use client";
// import { Card, Typography, Button } from "antd";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const { Title, Paragraph } = Typography;

// export default function Tally() {
//   const router = useRouter();
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const features = [
//     {
//       id: 1,
//       title: "01. Simple to learn, easier to use.",
//       content:
//         "Getting started with TallyPrime is extremely simple. You can setup the application in less than a minute and get started with invoicing even faster. It just works the way you expect it to. And with the consistency and intuitiveness in design, you will be able to discover more and learn easily, as you are using TallyPrime.",
//     },
//     {
//       id: 2,
//       title: "02. Insightful, actionable & customizable reports.",
//       content:
//         "TallyPrime comes with a diverse set of readily available business reports with powerful and actionable insights, helping you make informed decisions for your business growth. Be it business relationships, cash or inventory, these reports will help you manage all these aspects better with extremely easy discovery and navigation.",
//     },
//     {
//       id: 3,
//       title: "03. Anywhere, anytime and secure access.",
//       content:
//         "With TallyPrime, you can access business reports from web browser, wherever you are, and with the promise that your data is available only to you. This comes along with multiple user and feature based security levels. And an additional layer of security called TallyVault, that ensures encryption which no one in the world can break, not even us at Tally.",
//     },
//     {
//       id: 4,
//       title: "04. Do more with TallyPrime!",
//       content:
//         "TallyPrime is enhanced to simplify MSME payments and drive your payment processes compliant to MSME rule. Registered MSMEs can effortlessly print UDYAM registration number, track upcoming or delayed receivables, and send timely reminders. Businesses transacting with MSMEs can quickly identify the upcoming payables to MSMEs along with due days and use ‘MSME Form -1’ to report overdue bills.\n\nTallyPrime brings you a powerful reports dashboard, presenting your business information in intuitive visual formats. You can add tiles, hide, configure, organise, and display the information the way it suits your preferences and business needs.\n\nEasily import the ledgers and transactions from Excel to TallyPrime in just a few simple steps. It is so flexible that you can import your data to Tally regardless of how your data is organised or structured in Excel.\n\nUsing TallyPrime’s fully connected service, you can generate e-way bills and e-invoices instantly for a single invoice or multiple invoices. TallyPrime directly integrates with the portal to seamlessly generate e-invoices and e-way bills for you, without manual intervention.",
//     },
//   ];

//   const toggleFeature = (id: number) => {
//     setActiveIndex(activeIndex === id ? null : id);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800"
//       style={{ backgroundImage: "url('/base-1.png')" }} >
//       {/* ===== Header Section ===== */}
//       <div className="relative text-white text-center py-40 overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-fixed"
//           style={{ backgroundImage: "url('/images/bg.jpg')" }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#001F54]/80 to-[#004AAD]/70"></div>
//         <div className="relative z-10">
//           <Title className="!text-white !mb-4 drop-shadow-lg !text-6xl font-bold">
//             Tally
//           </Title>
//           <Button
//             className="!py-6 !px-8 !rounded-none !text-md !text-white hover:!bg-blue-800 !bg-transparent mt-6"
//             onClick={() => router.push("/")}
//           >
//             Home
//           </Button>
//         </div>
//       </div>

//       {/* ===== What is Tally ===== */}
//       <section className="max-w-5xl mx-auto px-10 py-10">
//         <div className="">
//           <img src="/2.webp" alt="Tally Logo" className="mx-auto mb-6 w-60" />
//           <Title className=" text-start  !text-blue-800 !text-4xl">
//             What is <span className="text-[#F97316]">Tally?</span>
//           </Title>
//           <Paragraph className="text-gray-600 leading-relaxed text-justify text-lg!">
//             Tally is an accounting and business management software that provides
//             a range of features for small and medium-sized businesses. It offers
//             tools for financial accounting, inventory management, payroll
//             management, sales and purchase management, and more. Tally is known
//             for its ease of use and is designed to be user-friendly, even for
//             those with limited accounting experience. The software can help
//             businesses automate many of their financial and operational
//             processes, reduce the likelihood of errors, and provide real-time
//             financial data and insights. In addition, Tally can integrate with
//             other tools, such as point-of-sale systems and e-commerce platforms,
//             making it a comprehensive solution for businesses looking to
//             streamline their operations and manage their finances more
//             efficiently. Tally also provides customer support to help businesses
//             get the most out of the software and resolve any issues they may
//             encounter.
//           </Paragraph>
//           <img
//             src="/images/tally-logo.jpg"
//             alt="TallyPrime 4.1"
//             className="mx-auto mt-20 w-60"
//           />
//         </div>
//       </section>

//       {/* ===== Why TallyPrime ===== */}
//       <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-6 -mt-8">

//         <Card
//           variant="borderless"
//           className="shadow-lg hover:shadow-2xl transition rounded-2xl"
//         >
//           <Title className="!text-[#F97316] !text-4xl">
//             Why <span className="text-blue-800">TallyPrime?</span>
//           </Title>
//           <Paragraph className="text-gray-600 leading-relaxed text-justify text-lg!">
//             At Tally, we believe in the power of technology to make business
//             owners efficient, empowered and happier, so they can focus on what
//             matters most for their business. We design our products to focus on
//             just that – to make our products work for you, and not the other way
//             around.
//             <br />
//             <br />
//             TallyPrime takes this to a new level, making your start to
//             automation, or your switch to Tally simpler than ever before. You
//             can discover the product much more easily and make the product do
//             more for you, without learning anything new. There is greater
//             flexibility as the product adapts to your business and your way of
//             working. And the overall look and feel will only make you love the
//             product even more.
//           </Paragraph>
//         </Card>

//         <img
//           src="/images/simple.webp"
//           alt="simple"
//           className="w-full max-w-sm h-64 md:h-100 object-cover mx-auto"
//         />
//       </section>

//       {/* ===== Accordion Features Section ===== */}
//       <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-12">
//         <Card
//           variant="borderless"
//           className="shadow-lg hover:shadow-2xl transition rounded-2xl"
//         >
//           <Title className="!text-[#F97316] !text-4xl mb-6">
//             Features of <span className="text-blue-800">TallyPrime ?</span>
//           </Title>

//           <div className="space-y-4">
//             {features.map((item) => (
//               <div key={item.id} className="border-b border-gray-200 pb-4">
//                 <h2
//                   onClick={() => toggleFeature(item.id)}
//                   className={`cursor-pointer text-2xl md:text-xl font-semibold ${activeIndex === item.id
//                     ? "text-blue-800"
//                     : "text-blue-800 hover:text-[#F97316]"
//                     } transition-colors duration-300`}
//                 >
//                   {item.title}
//                 </h2>

//                 {activeIndex === item.id && (
//                   <p className="text-gray-700 mt-4 text-lg leading-relaxed text-justify whitespace-pre-line">
//                     {item.content}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </Card>

//         <img
//           src="/images/any.webp"
//           alt="any"
//           className="w-full max-w-sm h-64 md:h-100 object-cover mx-auto"
//         />
//       </section>
//     </div>
//   );
// }

"use client";
import { Card, Typography, Button } from "antd";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircleOutlined,
  InfoCircleOutlined,
  ThunderboltOutlined,
  LockOutlined,
  RightOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function Tally() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: <CheckCircleOutlined className="text-3xl! text-white" />,
      title: "01. Simple to learn, easier to use.",
      content:
        <p className="text-lg">"  "Getting started with TallyPrime is extremely simple. You can setup the application in less than a minute and get started with invoicing even faster. It just works the way you expect it to. And with the consistency and intuitiveness in design, you will be able to discover more and learn easily, as you are using TallyPrime.",
        </p>

    },
    {
      id: 2,
      icon: <InfoCircleOutlined className="text-3xl! text-white" />,
      title: "02. Insightful, actionable & customizable reports.",
      content:
        <p className="text-lg">"TallyPrime comes with a diverse set of readily available business reports with powerful and actionable insights, helping you make informed decisions for your business growth. Be it business relationships, cash or inventory, these reports will help you manage all these aspects better with extremely easy discovery and navigation",
        </p>
    },
    {
      id: 3,
      icon: <LockOutlined className="text-3xl! text-white" />,
      title: "03. Anywhere, anytime and secure access.",
      content:
        <p className="text-lg">
          "With TallyPrime, you can access business reports from web browser, wherever you are, and with the promise that your data is available only to you. This comes along with multiple user and feature based security levels. And an additional layer of security called TallyVault, that ensures encryption which no one in the world can break, not even us at Tally"
        </p>
    },
    {
      id: 4,
      icon: <ThunderboltOutlined className="text-3xl! text-white" />,
      title: "04. Do more with TallyPrime!",
      content:
        <>
          <div className="text-lg">
            <p>
              TallyPrime is enhanced to simplify MSME payments and drive your payment processes compliant to MSME rule. Registered MSMEs can effortlessly print UDYAM registration number, track upcoming or delayed receivables, and send timely reminders. Businesses transacting with MSMEs can quickly identify the upcoming payables to MSMEs along with due days and use ‘MSME Form -1’ to report overdue bills.
            </p>

            <p>
              TallyPrime brings you a powerful reports dashboard, presenting your business information in intuitive visual formats. You can add tiles, hide, configure, organise, and display the information the way it suits your preferences and business needs.
            </p>

            <p>
              Easily import the ledgers and transactions from Excel to TallyPrime in just a few simple steps. It is so flexible that you can import your data to Tally regardless of how your data is organised or structured in Excel.
            </p>

            <p>
              Using TallyPrime’s fully connected service, you can generate e-way bills and e-invoices instantly for a single invoice or multiple invoices. TallyPrime directly integrates with the portal to seamlessly generate e-invoices and e-way bills for you, without manual intervention.
            </p>
          </div>
        </>
    },
  ];

  const toggleFeature = (id: number) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      <header className="relative text-white text-center py-40 overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F54] to-[#1447A0] opacity-90" />

        <div className="relative z-10 max-w-4xl mx-auto px-8">
          <Title className="!text-white !mb-4 drop-shadow-lg !text-7xl font-extrabold tracking-tight">
            Tally
          </Title>

          <Button
            className="
    group 
    flex items-center gap-2
    py-6! px-6! 
    rounded-none! 
    text-md text-white! 
    bg-transparent!
    mt-6 

    border border-transparent!       
    hover:border-white!               
    hover:bg-white/10             

    transition-all duration-300
  "
            onClick={() => router.push("/")}
          >
            <RightOutlined
            />

            <span className="text-lg">Home</span>
          </Button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8 md:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Card className="bg-white border-t-4 border-[#F97316] p-6 order-2 md:order-1">
            <Title level={2} className="!text-start !text-blue-800 !text-5xl font-bold mb-6">
              What is <span className="text-[#F97316]">Tally?</span>
            </Title>

            <Paragraph className="text-lg! text-gray-700 leading-relaxed text-justify">
              Tally is an accounting and business management software that provides a range of features for small and medium-sized businesses. It offers tools for financial accounting, inventory management, payroll management, sales and purchase management, and more. Tally is known for its ease of use and is designed to be user-friendly, even for those with limited accounting experience. The software can help businesses automate many of their financial and operational processes, reduce the likelihood of errors, and provide real-time financial data and insights. In addition, Tally can integrate with other tools, such as point-of-sale systems and e-commerce platforms, making it a comprehensive solution for businesses looking to streamline their operations and manage their finances more efficiently. Tally also provides customer support to help businesses get the most out of the software and resolve any issues they may encounter.
            </Paragraph>
          </Card>
          <div className="order-1 md:order-2">
            <img
              src="/images/Tally.webp"
              alt="Tally Software Interface"
              className="w-full max-w-xl mx-auto rounded-xl shadow-2xl transition transform hover:scale-[1.01] duration-500"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto px-8 md:px-12 grid md:grid-cols-2 gap-16 items-center mt-4">
          <Card className="bg-white border-t-4 border-[#F97316] p-6">
            <Title level={2} className="!text-[#F97316] !text-4xl font-bold mb-4">
              Why Choose <span className="text-blue-800">TallyPrime?</span>
            </Title>

            <Paragraph className="text-gray-700 leading-relaxed text-lg! text-justify">
              At Tally, we believe in the power of technology to make business owners efficient, empowered and happier, so they can focus on what matters most for their business. We design our products to focus on just that – to make our products work for you, and not the other way around.
            </Paragraph>

            <Paragraph className="text-gray-700 leading-relaxed text-lg! text-justify mt-4">

              TallyPrime takes this to a new level, making your start to automation, or your switch to Tally simpler than ever before. You can discover the product much more easily and make the product do more for you, without learning anything new. There is greater flexibility as the product adapts to your business and your way of working. And the overall look and feel will only make you love the product even more.
            </Paragraph>
          </Card>

          <img
            src="/images/prime.png"
            alt="TallyPrime Simple Interface"
            className="w-full max-w-lg h-auto object-cover mx-auto rounded-xl shadow-2xl transition transform hover:scale-[1.01] duration-500"
          />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-8 md:px-12 grid md:grid-cols-2 gap-16 items-start py-24">
        <div className="order-2 md:order-1">
          <Title level={2} className="!text-[#F97316] text-4xl! font-bold mb-12">
            Key Features of <span className="text-blue-800">TallyPrime</span>
          </Title>

          <div className="space-y-6">
            {features.map((item) => (
              <Card
                key={item.id}
                className={`p-6 border-l-4 rounded-lg transition-all duration-500 ${activeIndex === item.id
                  ? "border-[#F97316] shadow-xl bg-blue-50"
                  : "border-blue-100 hover:border-blue-400 bg-white"
                  }`}
              >
                <div
                  onClick={() => toggleFeature(item.id)}
                  className="cursor-pointer flex items-start gap-4"
                >
                  <div
                    className={`flex-shrink-0 p-3 rounded-full ${activeIndex === item.id ? "bg-[#F97316]" : "bg-gray-50"
                      }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`flex-grow text-xl font-extrabold ${activeIndex === item.id
                      ? "text-[#F97316]"
                      : "text-blue-800 hover:text-[#004AAD]"
                      } transition-colors duration-300`}
                  >
                    {item.title}
                  </h3>

                  <span
                    className={`text-2xl font-bold ${activeIndex === item.id ? "text-[#F97316]" : "text-gray-500"
                      }`}
                  >
                    {activeIndex === item.id ? "−" : "+"}
                  </span>
                </div>

                {activeIndex === item.id && (
                  <Paragraph className="text-gray-600 mt-4 text-base leading-relaxed text-justify whitespace-pre-line border-t border-gray-200 pt-4">
                    {item.content}
                  </Paragraph>
                )}
              </Card>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2 sticky top-4 md:pt-16">
          <img
            src="/images/any.webp"
            alt="Secure Web Access"
            className="w-full max-w-lg h-auto object-cover mx-auto rounded-xl shadow-2xl transition transform hover:scale-[1.01] duration-500"
          />
        </div>
      </section>
    </div>
  );
}
