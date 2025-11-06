import React, { use } from "react";
import ShowCard from "./ShowCard";

const FetchData = ({ fetchPromise }) => {
  const data = use(fetchPromise);
  return (
    <div className="m-5 items-center">
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 space-y-10 p-5">
        {data.map((datas) => (
          <ShowCard key={datas.ticketId} datas={datas}></ShowCard>
        ))}
      </div>
    </div>
  );
};

export default FetchData;
