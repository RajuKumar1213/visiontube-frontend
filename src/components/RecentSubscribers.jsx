import React from "react";

function RecentSubscribers({ props }) {
  return (
    <div className="text-center cursor-pointer">
      <img
        src={props?.subscriber?.avatar || "https://via.placeholder.com/150"}
        alt="Subscriber Avatar"
        className="w-16 h-16 rounded-full mx-auto object-cover"
      />
      <h1 className="mt-1 text-sm  text-gray-500">
        {props?.subscriber?.username}
      </h1>
      <p className="mt-1 text-lg">{props?.subscriber?.fullName}</p>
    </div>
  );
}

export default RecentSubscribers;
