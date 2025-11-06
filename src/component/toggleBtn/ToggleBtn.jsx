import React from "react";
const ToggleBtn = ({ toggle, setToggle }) => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];

  return (
    <div className="text-right m-5 space-x-5">
      {btns.map((btn, ind) => {
        return (
          <button
            key={ind}
            className={`toggle-btn 
              ${toggle == btn && "bg-purple-500! text-white!"}
            `}
            onClick={() => setToggle(btn)}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default ToggleBtn;
