import React, { useEffect, useState } from "react";
import { VideoCard } from "../components";
import videoService from "../services/video.service";
import { useDispatch, useSelector } from "react-redux";
import { setProgress } from "../redux/features/progressSlice";

function HomePage() {
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");

  const searchQuery = useSelector((state) => state.search.searchQuery);

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    dispatch(setProgress(30));
    window.scrollTo(0, 0);
    dispatch(setProgress(70));
    dispatch(setProgress(100));
    videoService
      .getAllVideos(
        { limit: 20, page: 1, sortType: "desc", sortBy: "views" },
        dispatch
      )
      .then((videos) => {
        if (videos.length === 0) return;
        setVideos(videos.data);
      })

      .catch((err) => setError(err));
  }, []);

  return (
    <>
      {error && (
        <h1 className="text-center pt-20 text-2xl">
          {error} . Server is not running.
        </h1>
      )}
      <div className="pt-20 grid lg:grid-cols-3 md:grid-cols-2 gap-2 grid-cols-1">
        {filteredVideos.length === 0 ? (
          <h1 className="text-center text-2xl font-thin text-gray-500">
            {/* No videos found for "{searchQuery}" */}
          </h1>
        ) : (
          filteredVideos?.map((video) => (
            <VideoCard
              key={video._id}
              props={video}
              className="h-56 md:h-52 w-full"
            />
          ))
        )}
      </div>
    </>
  );
}

export default HomePage;
