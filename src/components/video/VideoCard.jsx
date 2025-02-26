import React from "react";
import { Avatar } from "@mui/material";
import { format } from "timeago.js";
import authService from "../../services/auth.service";
import videoService from "../../services/video.service";
import { Link, useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useSelector } from "react-redux";

const VideoCard = ({
  props,
  className = "",
  flexcol = "",
  hidden = "",
  padding = 2,
}) => {
  const userStatus = useSelector((state) => state.auth.status);
  console.log(userStatus);

  const navigate = useNavigate();
  const handleMakeVideoWatchAndHistory = () => {
    if (userStatus) {
      authService
        .addToWatchHistory(props?._id)
        .then((res) => {
          if (res.statusCode === 200) {
            navigate(`/watch/${props?._id}`);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      navigate(`/watch/${props?._id}`);
    }
    // Increment views count
    videoService.incrementViewsCount(props?._id);
  };

  const handleAlert = () => {};

  return (
    <div
      className={`${flexcol} p-${padding} cursor-pointer md:min-w-[300px] w-full max-w-xl shadow-lg hover:shadow-xl transition duration-300 rounded-lg transform hover:scale-[1.02]`}
      onClick={handleAlert}
    >
      <div className="relative rounded-xl">
        <img
          onClick={handleMakeVideoWatchAndHistory}
          src={props?.thumbnail} // Replace with dynamic thumbnail URL
          alt="Video Thumbnail"
          className={` ${className} object-cover min-h-56 rounded-lg w-full`}
        />
        {/* Video Duration */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-55 text-white text-sm px-2.5 py-0.5 rounded-md">
          {(props?.duration / 60).toFixed(2)}
        </div>
      </div>

      <div className="flex space-x-3 mt-2 ">
        <Link to={`profile/${props?.owner[0]?.username}`}>
          <div className={`${hidden}`}>
            <Avatar
              alt="Channel Name"
              src={props?.owner[0]?.avatar} // Replace with dynamic channel avatar URL
              className={` h-10 w-10 `}
            />
          </div>
        </Link>
        <div>
          {/* Video Title */}
          <h3 className="text-md font-semibold text-gray-300 line-clamp-2">
            {props?.title.substring(0, 50)}{" "}
          </h3>

          {/* Channel Name */}

          {/* Views and Upload Time */}
          <div className="flex items-center text-sm text-gray-500 ">
            {props?.owner[0]?.fullName}
            <div className="hidden md:block">
              <span className="flex items-center ">
                <CheckCircleIcon
                  className="text-gray-500 ml-1 "
                  style={{ fontSize: "15px" }}
                />
              </span>
            </div>
            <span className="mx-1">•</span>
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
