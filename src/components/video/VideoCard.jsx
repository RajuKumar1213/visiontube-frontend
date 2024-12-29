import React from "react";
import { Avatar } from "@mui/material";

const VideoCard = ({ props }) => {
  return (
    <div className="p-4 w-96 shadow-lg hover:shadow-xl transition duration-300 rounded-lg transform hover:scale-105">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src="https://cdn.pixabay.com/photo/2024/05/25/15/36/ai-generated-8787304_1280.jpg" // Replace with dynamic thumbnail URL
          alt="Video Thumbnail"
          className="w-full rounded-t-lg"
        />
        {/* Video Duration */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-0.5 rounded-md">
          12:34
        </div>
      </div>

      {/* Video Info */}
      <div className="flex p-2 space-x-3">
        {/* Channel Avatar */}
        <Avatar
          alt="Channel Name"
          src="https://via.placeholder.com/50" // Replace with dynamic channel avatar URL
          className="h-10 w-10"
        />
        <div>
          {/* Video Title */}
          <h3 className="text-sm font-semibold text-gray-300 line-clamp-2">
            this is the first video i uploaded.
          </h3>

          {/* Channel Name */}
          <p className="text-xs text-gray-500 mt-1">Channel Name</p>

          {/* Views and Upload Time */}
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <p>1M views</p>
            <span className="mx-1">•</span>
            <p>3 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
