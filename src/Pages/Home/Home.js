import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <div className="px-12">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
      </div>
      <MakeAppointment></MakeAppointment>{" "}
    </>
  );
};

export default Home;
