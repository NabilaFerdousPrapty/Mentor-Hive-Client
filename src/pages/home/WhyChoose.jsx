import ChooseBanner from "../../assets/Images/tutorfinal.avif";

const WhyChoose = () => {
  return (
    <section className="md:mt-20 container mx-auto">
      <div className="md:flex justify-evenly items-center">
        <div className="flex-1">
          <img className="w-[500px]" src={ChooseBanner} alt="" />
        </div>
        <div className="flex-1 space-y-5">
          <h1 className="text-3xl text-center font-bold text-primary">
            Why Choose Us!
          </h1>
          <p className="text-left">
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
          <div className="flex justify-evenly items-center">
            <h1>
              <span className="font-bold text-5xl text-primary">3000+</span>{" "}
              <br /> <span className="font-bold">Authentic Tuitions</span>{" "}
            </h1>
            <h1>
              <span className="font-bold text-5xl text-primary">130+</span>{" "}
              <br /> <span className="font-bold">Verified Tutor</span>{" "}
            </h1>
            <h1>
              <span className="font-bold text-5xl text-primary">10000+</span>{" "}
              <br /> <span className="font-bold">Monthly Users</span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
