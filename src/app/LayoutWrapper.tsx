"use client";

import { usePathname } from "next/navigation";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // agar dashboard ke andar ho to header/footer hide karo
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Header />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}
