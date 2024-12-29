// PlaylistComponent.jsx
import React from "react";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";

const Playlist = () => {
  return (
    <div className="relative flex flex-col w-64 mb-2">
      <img
        src="https://cdn.pixabay.com/photo/2020/06/03/15/11/tree-5255288_1280.jpg"
        alt="Playlist Cover"
        className="w-full h-40 rounded mr-4 object-cover"
      />
      <p className="bg-secondary px-2 rounded-md bg-opacity-75 text-xs  absolute bottom-14 right-2 ">
        {" "}
        <PlaylistPlayOutlinedIcon />
        <span>12 vidoes</span>
      </p>
      <div>
        <h3 className="text-md font-medium">Playlist Name</h3>
        <button className="text-slate-400">View full playlist</button>
      </div>
    </div>
  );
};

export default Playlist;
