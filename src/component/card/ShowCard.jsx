import React from "react";

const ShowCard = ({ datas }) => {
  const { requestedBy, subject, description, priority, status, userImg } =
    datas;
  return (
    <div className="">
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
