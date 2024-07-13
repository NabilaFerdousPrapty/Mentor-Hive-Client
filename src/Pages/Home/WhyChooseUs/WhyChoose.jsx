import ChooseBanner from "../../../assets/Images/tutorfinal.avif";
import 'animate.css';
const WhyChoose = () => {
  return (
    <div className=" mx-auto mt-6 ">
      <div className="flex lg:flex-row flex-col  items-center">
        <div className="flex-1">
          <img
            className="h-[500px] w-auto border-y-4 rounded-xl border-[#3b478f]"
            src={ChooseBanner}
            alt=""
          />
        </div>
        <div className="flex-1 space-y-5 md:space-y-10 lg:px-5 px-1">
          <h1 className="lg:text-5xl md:text-4xl text-3xl mt-6 md:mt-0 text-center font-bold text-[#3b478f]">
            Why Choose Us!
          </h1>
          <p className=" text-[#3b478f] text-justify">
            At <span className="font-bold">Mentor Hive</span>, we are dedicated
            to transforming education through seamless and user-friendly
            technology. Our platform connects students with top-tier educators,
            offering personalized learning plans and a vast library of
            resources. <br />
            <br />
            Interactive tools and real-time feedback create an engaging and
            supportive environment, making learning more effective and
            enjoyable. Choose us for a reliable, innovative, and comprehensive
            approach to education.
          </p>
          <div className="flex md:flex-row flex-col justify-evenly items-center gap-2 ">
            <h1  className="border-2 p-2 border-blue-600 rounded-2xl animate__animated animate__tada">
              <span className="font-bold md:text-5xl text-3xl text-[#3b478f]">
                3000+
              </span>{" "}
              <br /> <span className="font-bold">Authentic Tuitions</span>{" "}
            </h1>
            <h1 className="border-2 px-6 py-2 border-blue-600 rounded-2xl animate__animated animate__tada">
              <span className="font-bold  md:text-5xl text-3xl text-[#3b478f]">
                130+
              </span>{" "}
              <br /> <span className="font-bold">Verified Tutor</span>{" "}
            </h1>
            <h1 className="border-2 px-6 py-2 border-blue-600 rounded-2xl animate__animated animate__tada">
              <span className="font-bold  md:text-5xl text-3xl text-[#3b478f]">
                10000+
              </span>{" "}
              <br /> <span className="font-bold">Monthly Users</span>{" "}
            </h1>
          </div>
          <div className="flex gap-7 justify-center">
            <button className="btn bg-[#3b478f] text-white">Learn More</button>
            <button className="btn text-[#3b478f] bg-white font-bold border-2 border-[#3b478f]">
              Get Started With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
