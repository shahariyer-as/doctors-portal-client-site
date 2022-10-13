import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavityFilling from "../../assets/images/fluoride.png";
import teethWhitening from "../../assets/images/fluoride.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      _id: 1,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavityFilling,
    },
    {
      _id: 1,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: teethWhitening,
    },
  ];
  return (
    <div className="my-28">
      <div className=" text-center  ">
        <h3 className="text-primary text-xl font-bold uppercase ">
          Our Services
        </h3>
        <h2 className="text-4xl">Services we Provide</h2>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
