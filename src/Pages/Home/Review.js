import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <div className="card lg:mx-w-lg bg-base-100 shadow-xl text-primary-content">
        <div className="card-body">
          <p>{review.reviews}</p>
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={review.img} />
              </div>
            </div>
            <div>
              <h4 className="text-xl">{review.name}</h4>
              <p>{review.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
