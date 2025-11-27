import AboutUs from "../components/about-us/AboutUs";
import CompanyProformance from "../components/company-Proformance/CompanyProformance";
import ContactUs from "../components/contact-us/ContactUs";
import ExecutiveTeam from "../components/executive-team/ExecutiveTeam";
import Footer from "../components/footer/Footer";
import GoogleReview from "../components/google-review/GoogleReview";
import Header from "../components/header/Header";
import HomePage from "../components/homepage/HomePage";
import OurProduct from "../components/our-product/OurProduct";
import OurService from "../components/our-service/OurService";
import OurTestimonial from "../components/ourtes-timonial/OurTestimonial";
import Technology from "../components/technology/Technology";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <HomePage />
      {/* <Service /> */}
      <AboutUs />
      <OurProduct />
      <CompanyProformance />
      <Technology />
      <OurService />
      {/* <CaseStudy /> */}
      {/* <OurUsp/> */}
      <ExecutiveTeam />
      {/* <OurCustomer /> */}
      <OurTestimonial/>
      <ContactUs/>
      <GoogleReview/>
      {/* <UserLocation/> */}
      {/* <Footer/> */}
    </>
  );
}
