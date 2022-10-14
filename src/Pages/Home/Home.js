import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Info from "./Info";
import Footer from "../Shared/Footer";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default Home;
