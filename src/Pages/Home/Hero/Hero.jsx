import { GiTeacher } from "react-icons/gi";
import curvy from "../../../assets/Images/curvy.svg";
import Slider from "./Slider/Slider";
import { PiStudentDuotone } from "react-icons/pi";
import 'animate.css';
const Hero = () => {
  return (
    <div className="rounded-xl border-t-4 border-[#000b76] ">
      <div className="bg-gradient-to-t flex lg:flex-row flex-col-reverse lg:justify-between md:justify-center items-center py-6 lg:px-8 from-[#F8FCDA] to-[#F8FAAA] rounded-t-2xl lg:pt-16 md:pt-10 pt-4 ">
        <div className=" lg:max-w-3xl md:max-w-2xl w-auto border-b-4 border-[#000b76] pb-28 rounded-3xl">
          <p className="text-lg font-medium text-[#3b478f]">
            Affordable High Quality{" "}
            <span className="font-bold ">Education</span>
          </p>
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#000b76] animate__animated animate__pulse animate__infinite	infinite ">
            Learn quickly, <br /> Learn effectively
          </h1>
          <p className="text-center text-[#3b478f] mt-4 lg:text-lg text-wrap text-sm ">
            Connect with experienced tutors to help you achieve your academic
            goals. <br />
            We offer a wide range of subjects and courses to choose from.
          </p>
          <div className="flex md:flex-row flex-col mt-6 lg:space-x-4 justify-center items-center gap-3">
            <button className="bg-[#000b76] text-white px-4 py-2 rounded-lg flex justify-center items-center gap-1">
              Find a Tutor <PiStudentDuotone />
            </button>
            <button className="bg-[#000c76df] text-white px-4 py-2 rounded-lg flex justify-center items-center gap-1">
              Become a Tutor <GiTeacher />
            </button>
          </div>
        </div>
        <div className="lg:w-[28%] md:w-[43%] w-[65%] text-center mx-auto  my-5 lg:my-0 p-4 rounded-xl  border-b-4 border-blue-900">
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
