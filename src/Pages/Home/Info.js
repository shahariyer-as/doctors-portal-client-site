import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";
const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass=" bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Visit Our Location"
        bgClass="bg-accent"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contract Us"
        bgClass=" bg-gradient-to-r from-secondary to-primary"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
