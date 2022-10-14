import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavityFilling from "../../assets/images/fluoride.png";
import teethWhitening from "../../assets/images/fluoride.png";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

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
      <div>
        <div className="hero min-h-screen ">
          <div className="hero-content grid lg:grid-cols-2 gap-4 ">
            <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="w-50% ">
              <h1 className="text-5xl font-bold text-clip overflow-hidden">
                Exceptional Dental <br /> Care, on Your Terms
              </h1>
              <p className="py-4 text-clip text-start ">
                It is a long established fact that a reader will be distracted{" "}
                <br />
                by the readable content of a page when looking <br />
                at its layout. The point of using Lorem Ipsumis that it <br />
                has a more-or-less normal distribution of letters,as
                <br /> opposed to using 'Content here, content
                <br /> here', making it look like readable English. Many desktop
                <br /> publishing packages and web page
              </p>
              <PrimaryButton> Get Started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
