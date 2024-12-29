import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";

function FixedSidebar() {
  return (
    <div className="hidden md:block ">
      {/* Sidebar */}
      <div className="fixed top-14 left-0 h-screen w-20 bg-secondary text-white  px-1 py-2 transition-transform duration-300 custom-scrollbar ">
        <div className="space-y-4">
          <ul className="space-y-1 flex flex-col  ">
            <li className="flex flex-col items-center justify-center hover:bg-slate-800 py-4 px-2 rounded-md">
              <a
                onClick={() => dispatch(closeSidebar())}
                href="#"
                className="flex items-center space-x-2 mb-1  rounded-md transition duration-200"
              >
                <HomeOutlinedIcon />
              </a>
              <span className="text-center text-xs">Home</span>
            </li>
            <li className="flex flex-col items-center justify-center   py-4 px-2 rounded-md hover:bg-slate-800">
              <a
                onClick={() => dispatch(closeSidebar())}
                href="#"
                className="flex items-center space-x-2 mb-1  rounded-md transition duration-200"
              >
                <HistoryOutlinedIcon />
              </a>
              <span className="text-center text-xs">History</span>
            </li>
            <li className="flex flex-col items-center justify-center  hover:bg-slate-800 py-4 px-2 rounded-md">
              <a
                onClick={() => dispatch(closeSidebar())}
                href="#"
                className="flex items-center space-x-2 mb-1  rounded-md transition duration-200"
              >
                <AccountCircleOutlinedIcon />
              </a>
              <span className="text-center text-xs">You</span>
            </li>
            <li className="flex flex-col items-center justify-center hover:bg-slate-800 py-4 px-1 rounded-md">
              <a
                onClick={() => dispatch(closeSidebar())}
                href="#"
                className="flex items-center space-x-2 mb-1 rounded-md transition duration-200"
              >
                <SubscriptionsOutlinedIcon />
              </a>
              <span className="text-center text-xs">Subscriptions</span>
            </li>
            <li className="flex flex-col items-center justify-center  hover:bg-slate-800 py-4 px-2 rounded-md">
              <a
                onClick={() => dispatch(closeSidebar())}
                href="#"
                className="flex items-center space-x-2 mb-1 rounded-md transition duration-200"
              >
                <ThumbUpAltOutlinedIcon />
              </a>
              <span className="text-center text-xs">Liked</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FixedSidebar;
