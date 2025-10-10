import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingSocialBar from "@/component/floating-sidebaar/FloatingSocialBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Complete SEO Metadata for Mabsol Infotech (.com)
export const metadata: Metadata = {
  title: {
    default: "Mabsol Infotech Pvt.Ltd - Software Company in Chandigarh, Mohali & Panchkula",
    template: "%s | Mabsol Infotech",
  },
  description:
    "Mabsol Infotech is a leading software company in Chandigarh, Panchkula & Mohali, offering ERP, CRM, web development, mobile apps, and IT solutions for businesses.",
  keywords:
    "Mabsol Infotech, software company Chandigarh, IT solutions, ERP software, Marg ERP partner, Marg software, Marg accounting software, Tally software, Tally ERP, Tally GST, GreytHR software, GreytHR payroll, HRMS software, web development, CRM software, business automation, software development company, mobile app development, digital solutions, IT services, Mohali software company, Panchkula IT solutions, best software company Tricity, business software solutions, customized ERP, online business tools, enterprise software, technology solutions India, IT consulting, software support services, Marg Tally integration, Tally Marg ERP, GreytHR payroll solutions, payroll management software, accounting solutions, Marg GST compliance, Tally ERP solutions, ABM Info Solutions, ABM Infotech, ABM Info ERP, ABM Info Tally, ABM Infotech services, ABM Info CRM, ABM Infotech payroll software, ABM Info web development, ABM Infotech IT solutions, ABM Info Mohali, ABM Infotech Panchkula, ABM Info Tricity software, ABM Infotech IT services",
  metadataBase: new URL("https://mabsolinfotech.com"),
  alternates: {
    canonical: "https://mabsolinfotech.com",
  },
  openGraph: {
    title: "Mabsol Infotech Pvt.Ltd - Leading Software Company",
    description:
      "ERP, CRM, Web & Mobile App Development, IT Consulting, and Business Automation Solutions — all under one roof.",
    url: "https://mabsolinfotech.com",
    siteName: "Mabsol Infotech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://mabsolinfotech.com/og-image.jpg", // 👈 अपनी social preview image डालो
        width: 1200,
        height: 630,
        alt: "Mabsol Infotech Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mabsol Infotech Pvt.Ltd - Software & IT Solutions",
    description:
      "Top Software Company in Chandigarh, Mohali & Panchkula providing ERP, CRM, HRMS & Web Solutions.",
    images: ["https://mabsolinfotech.com/5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingSocialBar />
      </body>
    </html>
  );
}
