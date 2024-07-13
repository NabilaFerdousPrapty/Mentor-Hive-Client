import React from "react";
import curvy from "../../../assets/Images/curvy.svg";
import Slider from "./Slider/Slider";

const Hero = () => {
  return (
    <div className="rounded-xl border-t-4 border-[#000b76] ">
      <div className="bg-gradient-to-t flex lg:flex-row flex-col-reverse justify-between items-center py-6 lg:px-8 from-[#F8FCDA] to-[#F8FAAA] rounded-t-2xl pt-16   ">
        <div className=" lg:max-w-3xl md:max-w-2xl max-w-sm border-b-4 border-[#000b76] pb-28 rounded-3xl">
          <p className="text-lg font-medium text-[#3b478f]">
            Affordable High Quality{" "}
            <span className="font-bold ">Education</span>
          </p>
          <h1 className="text-5xl font-bold text-[#000b76]">
            Learn quickly, <br /> Learn effectively
          </h1>
          <p className="text-center text-[#3b478f] mt-4">
            Connect with experienced tutors to help you achieve your academic
            goals. <br />
            We offer a wide range of subjects and courses to choose from.
          </p>
          <div className="flex mt-6 space-x-4 justify-center items-center gap-3">
            <button className="bg-[#000b76] text-white px-4 py-2 rounded-lg">
              Find a Tutor
            </button>
            <button className="bg-[#000c76df] text-white px-4 py-2 rounded-lg">
              Become a Tutor
            </button>
          </div>
        </div>
        <div className="lg:w-[28%] md:w-[43%] w-[80%] text-center mx-auto  my-5 lg:my-0 p-4 rounded-xl  border-b-4 border-blue-900">
          <Slider />
        </div>
      </div>
      <div className="w-full ">
        <img src={curvy} alt="Curvy background" />
      </div>
    </div>
  );
};

export default Hero;
