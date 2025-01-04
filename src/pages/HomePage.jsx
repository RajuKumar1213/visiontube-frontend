import React, { useEffect, useState } from "react";
import { VideoCard } from "../components";
import videoService from "../services/video.service";
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/features/progressSlice";

function HomePage() {
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");

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
      <div className="pt-20 grid lg:grid-cols-3 md:grid-cols-2 gap-3 grid-cols-1">
        {videos?.map((video) => (
          <VideoCard key={video._id} props={video} className="h-52 - w-full" />
        ))}
      </div>
    </>
  );
}

export default HomePage;
