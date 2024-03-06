import React from "react";
import Header from "./Pages/AboutUs/Header";
import Navbar from "./Pages/AboutUs/Navbar";
import Banner from "./Pages/AboutUs/Banner";
import Mission from "./Pages/AboutUs/Mission";
import Faqs from "./Pages/AboutUs/Faqs";
import Pioneering from "./Pages/AboutUs/Pioneering";
import RecentNews from "./Pages/AboutUs/RecentNews";
import AwardsandCertification from "./Pages/AboutUs/AwardsandCertification";
import Footer from "./Pages/AboutUs/Footer";
import Testing from "./Pages/AboutUs/Testing";


export default function Home() {
  return (
    <div>
      <Header />
      {/* <Header /> */}
      <Navbar />
      <Banner />
      <Mission />
      <Faqs />
      <Pioneering />
      <RecentNews />
      <AwardsandCertification />
      <Footer />
    </div>
  );
}
