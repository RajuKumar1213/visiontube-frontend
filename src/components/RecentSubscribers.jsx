import React from "react";

function RecentSubscribers({ name }) {
  return (
    <div className="text-center cursor-pointer">
      <img
        src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg"
        alt="Subscriber Avatar"
        className="w-16 h-16 rounded-full mx-auto object-cover"
      />
      <h1 className="mt-1 text-sm  text-gray-500">@{name}</h1>
      <p className="mt-1 text-lg">{name}</p>
    </div>
  );
}

export default RecentSubscribers;
