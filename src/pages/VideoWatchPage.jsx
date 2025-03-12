import React, { useEffect, useState } from "react";
import { VideoCard, VideoPage } from "../components";
import videoService from "../services/video.service";
import { useDispatch } from "react-redux";
import spinner from "/spinner.svg";

function VideoWatchPage() {
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    videoService
      .getAllVideos(
        { limit: 20, page: 1, sortType: "desc", sortBy: "views" },
        dispatch
      )
      .then((videos) => {
        if (videos.length === 0) return;
        setVideos(videos.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [videoService]);

  return (
    <div className="md:mt-14 mt-10 grid grid-cols-1 md:grid-cols-12 gap-2">
      {/* Left Section - VideoPage */}
      <div className="md:col-span-7">
        <VideoPage />
      </div>

      {/* Right Section - Related Videos */}
      <div className="md:col-span-5">
        <h1 className="mt-6 text-2xl font-semibold">
          Watch more related videos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mt-4 mb-16">
          {loading ? (
            <img
              className="h-8 w-8 mx-auto mt-4"
              src={spinner}
              alt="loading..."
            />
          ) : (
            videos &&
            videos.map((video) => (
              <div
                onClick={() => (window.location.href = `/watch/${video._id}`)}
                key={video._id}
              >
                <VideoCard
                  className=" h-24 md:h-28 md:min-w-44 min-w-40"
                  flexcol="flex flex-row"
                  hidden="hidden"
                  props={video}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoWatchPage;
