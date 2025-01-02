import React from "react";
import { Avatar } from "@mui/material";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const VideoCard = ({ props, className = "", flexcol = "", hidden = "" }) => {
  return (
    <div
      className={`${flexcol} cursor-pointer p-2 md:min-w-[300px] w-full max-w-xl shadow-lg hover:shadow-xl transition duration-300 rounded-lg transform hover:scale-[1.02]`}
    >
      {/* Thumbnail */}
      <Link to={`/watch/${props?._id}`}>
        <div className="relative rounded-xl">
          <img
            src={props?.thumbnail} // Replace with dynamic thumbnail URL
            alt="Video Thumbnail"
            className={` ${className} object-cover rounded-2xl`}
          />
          {/* Video Duration */}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-55 text-white text-sm px-2.5 py-0.5 rounded-md">
            {(props?.duration / 60).toFixed(2)}
          </div>
        </div>
      </Link>

      {/* Video Info */}
      <div className="flex p-2 space-x-3 ">
        {/* Channel Avatar */}
        <div className={`${hidden}`}>
          <Avatar
            alt="Channel Name"
            src={props?.owner[0]?.avatar} // Replace with dynamic channel avatar URL
            className={` h-10 w-10 `}
          />
        </div>
        <div>
          {/* Video Title */}
          <h3 className="text-md font-semibold text-gray-300 line-clamp-2">
            {props?.title.substring(0, 50)}
          </h3>

          {/* Channel Name */}
          <p className="text-sm text-gray-500 mt-1">
            {props?.owner[0]?.fullName}
          </p>

          {/* Views and Upload Time */}
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <p>{props?.views} views</p>
            <span className="mx-1">•</span>
            <p>{format(props?.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
