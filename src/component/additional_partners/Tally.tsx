"use client";
import { Card, Typography, Button } from "antd";
import { useState } from "react";
import { useRouter } from "next/navigation";

const { Title, Paragraph } = Typography;

export default function Tally() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "01. Simple to learn, easier to use.",
      content:
        "Getting started with TallyPrime is extremely simple. You can setup the application in less than a minute and get started with invoicing even faster. It just works the way you expect it to. And with the consistency and intuitiveness in design, you will be able to discover more and learn easily, as you are using TallyPrime.",
    },
    {
      id: 2,
      title: "02. Insightful, actionable & customizable reports.",
      content:
        "TallyPrime comes with a diverse set of readily available business reports with powerful and actionable insights, helping you make informed decisions for your business growth. Be it business relationships, cash or inventory, these reports will help you manage all these aspects better with extremely easy discovery and navigation.",
    },
    {
      id: 3,
      title: "03. Anywhere, anytime and secure access.",
      content:
        "With TallyPrime, you can access business reports from web browser, wherever you are, and with the promise that your data is available only to you. This comes along with multiple user and feature based security levels. And an additional layer of security called TallyVault, that ensures encryption which no one in the world can break, not even us at Tally.",
    },
    {
      id: 4,
      title: "04. Do more with TallyPrime!",
      content:
        "TallyPrime is enhanced to simplify MSME payments and drive your payment processes compliant to MSME rule. Registered MSMEs can effortlessly print UDYAM registration number, track upcoming or delayed receivables, and send timely reminders. Businesses transacting with MSMEs can quickly identify the upcoming payables to MSMEs along with due days and use ‘MSME Form -1’ to report overdue bills.\n\nTallyPrime brings you a powerful reports dashboard, presenting your business information in intuitive visual formats. You can add tiles, hide, configure, organise, and display the information the way it suits your preferences and business needs.\n\nEasily import the ledgers and transactions from Excel to TallyPrime in just a few simple steps. It is so flexible that you can import your data to Tally regardless of how your data is organised or structured in Excel.\n\nUsing TallyPrime’s fully connected service, you can generate e-way bills and e-invoices instantly for a single invoice or multiple invoices. TallyPrime directly integrates with the portal to seamlessly generate e-invoices and e-way bills for you, without manual intervention.",
    },
  ];

  const toggleFeature = (id: number) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* ===== Header Section ===== */}
      <div className="relative text-white text-center py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F54]/80 to-[#004AAD]/70"></div>
        <div className="relative z-10">
          <Title className="!text-white !mb-4 drop-shadow-lg !text-6xl font-bold">
            Tally
          </Title>
          <Button
            className="!py-6 !px-8 !rounded-none !text-md !text-white hover:!bg-blue-800 !bg-transparent mt-6"
            onClick={() => router.push("/")}
          >
            Home
          </Button>
        </div>
      </div>

      {/* ===== What is Tally ===== */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <img src="/2.webp" alt="Tally Logo" className="mx-auto mb-6 w-40" />
          <Title className=" text-start  !text-blue-800 !text-4xl">
            What is <span className="text-[#F97316]">Tally?</span>
          </Title>
          <Paragraph className="text-gray-600 leading-relaxed text-justify text-lg">
            Tally is an accounting and business management software that provides
            a range of features for small and medium-sized businesses. It offers
            tools for financial accounting, inventory management, payroll
            management, sales and purchase management, and more. Tally is known
            for its ease of use and is designed to be user-friendly, even for
            those with limited accounting experience. The software can help
            businesses automate many of their financial and operational
            processes, reduce the likelihood of errors, and provide real-time
            financial data and insights. In addition, Tally can integrate with
            other tools, such as point-of-sale systems and e-commerce platforms,
            making it a comprehensive solution for businesses looking to
            streamline their operations and manage their finances more
            efficiently. Tally also provides customer support to help businesses
            get the most out of the software and resolve any issues they may
            encounter.
          </Paragraph>
          <img
            src="/images/tally-logo.jpg"
            alt="TallyPrime 4.1"
            className="mx-auto mt-20 w-60"
          />
        </div>
      </section>

      {/* ===== Why TallyPrime ===== */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-6 -mt-8">

        <Card
          variant="borderless"
          className="shadow-lg hover:shadow-2xl transition rounded-2xl"
        >
          <Title className="!text-[#F97316] !text-4xl">
            Why <span className="text-blue-800">TallyPrime?</span>
          </Title>
          <Paragraph className="text-gray-600 leading-relaxed text-justify text-lg">
            At Tally, we believe in the power of technology to make business
            owners efficient, empowered and happier, so they can focus on what
            matters most for their business. We design our products to focus on
            just that – to make our products work for you, and not the other way
            around.
            <br />
            <br />
            TallyPrime takes this to a new level, making your start to
            automation, or your switch to Tally simpler than ever before. You
            can discover the product much more easily and make the product do
            more for you, without learning anything new. There is greater
            flexibility as the product adapts to your business and your way of
            working. And the overall look and feel will only make you love the
            product even more.
          </Paragraph>
        </Card>

        <img
          src="/images/simple.webp"
          alt="simple"
          className="w-full max-w-sm h-64 md:h-100 object-cover mx-auto"
        />
      </section>

      {/* ===== Accordion Features Section ===== */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-12">
        <Card
          variant="borderless"
          className="shadow-lg hover:shadow-2xl transition rounded-2xl"
        >
          <Title className="!text-[#F97316] !text-4xl mb-6">
            Features of <span className="text-blue-800">TallyPrime ?</span>
          </Title>

          <div className="space-y-4">
            {features.map((item) => (
              <div key={item.id} className="border-b border-gray-200 pb-4">
                <h2
                  onClick={() => toggleFeature(item.id)}
                  className={`cursor-pointer text-2xl md:text-2xl font-semibold ${activeIndex === item.id
                      ? "text-blue-800"
                      : "text-blue-800 hover:text-[#F97316]"
                    } transition-colors duration-300`}
                >
                  {item.title}
                </h2>

                {activeIndex === item.id && (
                  <p className="text-gray-700 mt-4 text-lg leading-relaxed text-justify whitespace-pre-line">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Card>

        <img
          src="/images/any.webp"
          alt="any"
          className="w-full max-w-sm h-64 md:h-100 object-cover mx-auto"
        />
      </section>
    </div>
  );
}