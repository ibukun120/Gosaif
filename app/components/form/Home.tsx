import Image from "next/image";
import React from "react";
import Label from "./Labelandform";

const Home = () => {
  return (
    <div className=" bg-white">
      <div className="bg-[#C1F7E0] py-10 md:py-18 lg:py-24">
        <h1 className="text-3xl md:text-5xl text-[#2D7F5A] font-semibold text-center">
          Car Rental Services
        </h1>
        <p className="text-[#353535] text-center mt-6">
          Please complete the form below carefully, Our team will review your
          submission <br /> and respond shortly.
        </p>
      </div>

      {/* form div */}

      <div className="pb-24">
        <div className="bg-white w-full md:w-3/4 mx-auto shadow-2xl rounded-lg p-2 flex flex-col  md:flex-row  mt-[-28px] gap-12">
          {/* image */}
          <div className="w-full md:w-2/5">
            <Image
              src="/images/events/rectangle17.png"
              alt="form image"
              width={400}
              height={400}
            />
          </div>

          {/* form */}
          <div className="w-full md:w-3/5 my-12 px-4">
            <Label/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
