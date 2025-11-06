import React, { use, useState } from "react";
import ShowCard from "./ShowCard";
import Hero from "../hero/Hero";

const FetchData = ({ fetchPromise, toggle, setToggle }) => {
  const data = use(fetchPromise);
  const [newData, setNewData] = useState(data);

  const filteredData =
    toggle == "All"
      ? newData
      : newData.filter((element) => element.status === toggle);
  return (
    <div>
      <Hero newData={newData}></Hero>
      <div className="m-5 items-center">
        {filteredData.length == 0 ? (
          <h1 className="text-center font-bold text-3xl">No Data</h1>
        ) : (
          <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 space-y-10 p-5">
            {filteredData.map((datas) => (
              <ShowCard
                key={datas.ticketId}
                datas={datas}
                newData={newData}
                setNewData={setNewData}
              ></ShowCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FetchData;
