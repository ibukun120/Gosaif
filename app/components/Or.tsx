import Image from "next/image";
import React from "react";

const Or = () => {
  return (
    <div className="bg-white px-4 md:px-18 py-8 md:py:-12 text-[#353535]">
      <div className="flex justify-center items-center gap-10">
        <span className="h-0.5 rounded-full bg-[#353535] flex-1"></span>
        <span className="text-[#353535] font-bold text-3xl">OR</span>
        <span className="h-0.5 rounded-full bg-[#353535] flex-1"></span>
      </div>
      <p className="text-center text-[#353535] text-xl mt-6">
        Do you also want to?
      </p>

      <div className="flex justify-center flex-col md:flex-row items-center mt-10 gap-8 md:gap-28">
        <div className="flex flex-col">
          <Image
            src="/images/events/guard2.png"
            alt="guard2"
            width={400}
            height={300}
            className="w-[230px]"
          />
          <p className="text-xl font-medium mt-4">Join the GoSaif Team</p>
        </div>

        <div className="flex flex-col">
          <Image
            src="/images/events/guard1.png"
            alt="guard1"
            width={400}
            height={300}
            className="w-[230px]"
          />
          <p className="text-xl font-medium mt-4">Join as a service Provider</p>
        </div>
      </div>
    </div>
  );
};

export default Or;
