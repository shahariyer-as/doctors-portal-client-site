import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <>
      <div className="px-12">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <MakeAppointment></MakeAppointment>
        <Testimonial></Testimonial>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default Home;
