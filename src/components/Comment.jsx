import React from "react";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

function Comment({ props }) {
  return (
    <div className="space-y-4">
      {/* Comment */}
      <div className="flex items-start space-x-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4 className="font-medium">John Doe</h4>
          <p className="text-gray-600 text-sm mb-2">
            Absolutely mind-blowing! Thanks for this amazing content. 🌟
          </p>
          <span className="items-center space-x-2 mr-4 text-sm">
            <ThumbUpAltOutlinedIcon style={{ fontSize: "20px" }} /> 220
          </span>
          <span>
            <ThumbDownAltOutlinedIcon style={{ fontSize: "20px" }} />
          </span>
        </div>
      </div>
      {/* Another Comment */}
      <div className="flex items-start space-x-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4 className="font-medium">Jane Smith</h4>
          <p className="text-gray-600 text-sm">
            I learned so much about space. Keep up the great work! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
