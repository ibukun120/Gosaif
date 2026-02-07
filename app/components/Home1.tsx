import Image from "next/image";
import React from "react";

const Home1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#07583C] via-[#0A6847] to-[#009964] flex flex-col items-center justify-center text-white px-4 md:px-32 pt-32 gap-10">
      <h1 className="text-[55px] font-medium text-center">
        Professional Security. Guaranteed
      </h1>

      <div className="text-[20px]">
        <p className="text-center">
          {" "}
          See exactly who's coming. Track their arrival. Get instant backup
        </p>
        <p className="text-center">if anything goes wrong.</p>
      </div>

      {/* appstore and playstore Link */}
      <div className="flex items-center gap-3">
        <div className="flex space-x-2 justify-center items-center bg-white py-2 px-3 rounded-lg cursor-pointer text-black">
          <Image
            src="/images/playstore.png"
            alt="App Store"
            width={50}
            height={50}
            className="w-8 h-8"
          />
          <h1 className="text-lg">Download on Google Play</h1>
        </div>

        <div className="flex space-x-2 justify-center items-center bg-white py-2 px-3 rounded-lg cursor-pointer text-black">
          <Image
            src="/images/applestore.png"
            alt="App Store"
            width={50}
            height={50}
            className="w-8 h-8"
          />
          <h1 className="text-lg">Download on App store</h1>
        </div>
      </div>

      <div className="mt-20">
        <Image
          src="/images/guardhome.png"
          alt="Landing Page Image"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default Home1;
