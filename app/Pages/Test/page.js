import React from "react";
import Header from "../ContactUs/Header";
import Navbar from "../ContactUs/Navbar";
import Banner from "../ContactUs/Banner";
import Contact from "../ContactUs/Contact";
// import ContactUs from "../ContactUs/ContactUs";
import Location from "../ContactUs/Location";
import Faqs from "../ContactUs/Faqs";
import Footer from "../ContactUs/Footer";

export default function page() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      {/* <Contact /> */}
      {/* <ContactUs /> */}
      {/* <Faqs /> */}
      <Location />
      <Footer />
    </>
  );
}
