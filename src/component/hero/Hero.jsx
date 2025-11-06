import React from "react";

const Hero = ({ newData }) => {
  const submittedData = newData.filter(
    (element) => element.status === "Submitted"
  );
  const pendingData = newData.filter((element) => element.status === "Pending");
  const reviewedData = newData.filter(
    (element) => element.status === "Reviewed"
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5 m-5">
      <div className="bg-[#4A5565] w-full flex flex-col justify-center items-center p-20 rounded-lg font-bold text-white text-2xl">
        <h1>Pending</h1>
        <span>{pendingData.length}</span>
      </div>
      <div className="bg-[#AD46FF] w-full flex flex-col justify-center items-center rounded-lg font-bold text-white text-2xl p-20">
        <h1>Submitted</h1>
        <span>{submittedData.length}</span>
      </div>
      <div className="bg-[#00BBA7] w-full flex flex-col justify-center items-center rounded-lg font-bold text-white text-2xl p-20">
        <h1>Reviewed</h1>
        <span>{reviewedData.length}</span>
      </div>
    </div>
  );
};

export default Hero;
