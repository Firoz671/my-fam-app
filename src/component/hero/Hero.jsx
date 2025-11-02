import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-3 gap-15 py-5 m-5">
      <div className="bg-[#4A5565] w-full flex flex-col justify-center items-center p-20 rounded-lg font-bold text-white text-2xl">
        <h1>Pending</h1>
        <span>0</span>
      </div>
      <div className="bg-[#AD46FF] w-full flex flex-col justify-center items-center rounded-lg font-bold text-white text-2xl">
        <h1>Submitted</h1>
        <span>0</span>
      </div>
      <div className="bg-[#00BBA7] w-full flex flex-col justify-center items-center rounded-lg font-bold text-white text-2xl">
        <h1>Reviewed</h1>
        <span>0</span>
      </div>
    </div>
  );
};

export default Hero;
