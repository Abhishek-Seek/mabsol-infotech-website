import AboutUs from "@/component/about-us/AboutUs";
import Header from "@/component/header/Header";
import HomePage from "@/component/homepage/HomePage";
import Service from "@/component/services/Service";
import Image from "next/image";

export default function Home() {
  return (
   <>
     <Header/>
     <HomePage/>
     <Service/>
     <AboutUs/>
   </>
  );
}
