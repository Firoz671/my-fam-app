import React from "react";

const ShowCard = ({ datas, newData, setNewData }) => {
  const { requestedBy, subject, description, priority, status, userImg } =
    datas;
  const handleClick = () => {
    const expectedData = newData.find(
      (elem) => elem.ticketId === datas.ticketId
    );
    if (expectedData.status === "Pending") {
      expectedData.status = "Submitted";
    } else if (expectedData.status === "Submitted") {
      expectedData.status = "Reviewed";
    }

    const restData = newData.filter((elem) => elem.ticketId !== datas.ticketId);
    setNewData([expectedData, ...restData]);
  };
  return (
    <div className="" onClick={handleClick}>
      <div className="">
        <div className="card size-[300px] bg-base-100 w-96 shadow-lg">
          <figure>
            <img
              className="h-[150px] w-[150px] rounded-full"
              src={userImg}
              alt="UserImage"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {requestedBy}
              <div
                className={`badge  ${
                  priority === "High"
                    ? "badge-secondary"
                    : priority === "Medium"
                    ? "badge-warning"
                    : priority === "Low"
                    ? "badge-success"
                    : ""
                }`}
              >
                {priority}
              </div>
              <div className="badge badge-outline">{status}</div>
            </h2>
            <p>{subject}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
