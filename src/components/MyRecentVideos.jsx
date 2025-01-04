import React from "react";
import { Link } from "react-router-dom";

import { format } from "timeago.js";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PublicOffOutlinedIcon from "@mui/icons-material/PublicOffOutlined";

import Button from "./Button";

function MyRecentVideos({ props }) {
  return (
    <div className="relative p-6 w-full bg-secondary my-4 rounded-xl">
      {/* Thumbnail */}
      <div className="relative flex  pb-6 space-x-8 max-w-4xl">
        <Link to={`/watch/${props?._id}`}>
          <img
            src={props?.thumbnail} // Replace with dynamic thumbnail URL
            alt="Video Thumbnail"
            className=" h-48 md:min-w-[330px] inline-block object-cover rounded-xl"
          />
        </Link>
        <div>
          <h3 className="text-2xl font-semibold text-gray-300 line-clamp-2 mb-4">
            {props?.title.substring(0, 80)}
          </h3>
          <p className="text-gray-400 line-clamp-3">{props?.description}</p>
        </div>
      </div>

      <div className="flex justify-between pt-4 space-x-3 border-t border-slate-600">
        <div className="flex items-center text-sm text-gray-300 mt-1 gap-x-5">
          <p className="flex items-center gap-x-2">
            {" "}
            <EqualizerOutlinedIcon /> {props?.views}
          </p>
          <span className="flex items-center justify-center ml-4 gap-x-2">
            <ThumbUpOutlinedIcon /> 0
          </span>
          <span className="flex items-center justify-center ml-4 gap-x-2">
            <CommentOutlinedIcon /> 0
          </span>
        </div>
        <p className="flex items-center gap-x-2">
          {props.isPublished ? (
            <>
              <span className="text-green-400 text-sm">Published</span>{" "}
              <PublicOutlinedIcon />{" "}
            </>
          ) : (
            <>
              <span className="text-red-600 text-sm">Unpublished</span>
              <PublicOffOutlinedIcon />
            </>
          )}

          <span className="text-sm font-semibold text-gray-400 ml-2 ">
            first {format(props?.createdAt).split("ago")[0]}
          </span>
        </p>
      </div>

      <Link to={`/edit-video/${props?._id}`}>
        <Button
          className="mt-4 absolute  top-0 right-2 bg-secondary text-white flex items-center gap-x-1"
          py={1}
          px={4}
        >
          {" "}
          <EditOutlinedIcon />
          <span>Edit</span>
        </Button>
      </Link>
    </div>
  );
}

export default MyRecentVideos;
