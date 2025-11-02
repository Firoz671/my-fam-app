import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#F3E8FF] flex justify-between items-center p-5 ">
      <div>
        <h1 className="text-2xl font-bold">FAM University</h1>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-5">
          <li>Home</li>
          <li>Faculty</li>
          <li>Students</li>
          <li>Contact</li>
          <li>
            <button className="btn bg-[#9810FA] text-white rounded-lg">
              + New Assignment
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
