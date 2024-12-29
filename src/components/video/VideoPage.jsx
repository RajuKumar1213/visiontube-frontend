import React from "react";
import { Comment, Button } from "../../components";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import SortIcon from "@mui/icons-material/Sort";

import ShareIcon from "@mui/icons-material/Share";

const VideoPage = () => {
  return (
    <div className=" min-h-screen p-2 md:p-4">
      {/* Video Section */}
      <div className=" mx-auto  rounded-lg shadow-md overflow-hidden">
        {/* Video Player */}
        <div className="w-full h-64 sm:h-96 bg-black">
          <video
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
            controls
            className="w-full h-full rounded-lg"
          ></video>
        </div>
        {/* Video Info Section */}
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-2">
            Exploring the Wonders of the Universe 🌌
          </h1>
          <p className="text-gray-500 text-sm mb-4">
            1.2M views • Dec 29, 2024
          </p>

          <div className="flex items-center justify-between">
            {/* Left: Channel Info */}
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-lg font-medium">Science Channel</h3>
                <p className="text-sm text-gray-500">1.8M Subscribers</p>
              </div>

              <Button className="ml-6 bg-gray-200 text-black hover:bg-gray-400">
                Subscribe
              </Button>
            </div>

            {/* Right: Interaction Buttons */}
            <div className="flex items-center rounded-r-none">
              <Button className="flex items-center rounded-r-lg m-0">
                <ThumbUpAltOutlinedIcon />
                <span className="ml-1">1.2k</span>
              </Button>
              <Button className="flex items-center rounded-l-lg m-0">
                <ThumbDownAltOutlinedIcon />
                <span className="ml-1"></span>
              </Button>

              <Button className="ml-4">
                Share <ShareIcon />
              </Button>
            </div>
          </div>
        </div>
        {/* bg-[#272727]  bg for description*/}
        {/* Description Section */}
        <div className="bg-secondary p-4 rounded-xl text-gray-200">
          <h3 className="text-lg font-semibold">Description</h3>
          <p className="text-gray-200 mt-2">
            This video takes you on an incredible journey through the cosmos.
            Learn about the mysteries of black holes, distant galaxies, and the
            fundamental forces shaping our universe.
          </p>
        </div>
        {/* Comments Section */}
        <div className="pt-6 px-4">
          <div className="flex items-center space-x-10 pb-4 mb-4">
            <h3 className="text-xl font-semibold ">102 Comments</h3>
            <Button>
              <SortIcon />
              Sort by
            </Button>
          </div>

          <div className="relative flex items-center space-x-4 pb-8">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full  "
            />
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full bg-none border-b bg-transparent outline-none py-2 relative bottom-3 "
            />
            <div className="flex gap-x-2">
              <Button>Cancel</Button>
              <Button>Comment</Button>
            </div>
          </div>

          {/* Comment here  */}

          <Comment />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
