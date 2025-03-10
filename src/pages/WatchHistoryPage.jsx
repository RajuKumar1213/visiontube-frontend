import React, { useEffect, useState } from "react";
import { VideoCard } from "../components";
import authService from "../services/auth.service";
import videoService from "../services/video.service";
import spinner from "/spinner.svg";

function WatchHistoryPage() {
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    authService
      .getWatchHistory()
      .then((res) => {
        if (res.statusCode === 200) {
          setVideo(res.data);
          setLoading(false);
        }
      })
      .catch((err) => console.error(err));
  }, [authService]);

  return (
    <div className="mt-20 min-h-fit">
      <h1 className="text-3xl font-bold mb-6 m-8">Watch History</h1>

      {loading ? (
        <img className="h-20 w-20 mx-auto" src={spinner} alt="" />
      ) : video?.length === 0 ? (
        <h1 className="text-center text-gray-500 pt-20 text-2xl font-thin">
          No watch history found, Start watching videos to make a beatiful watch
          history.
        </h1>
      ) : (
        video.map((video) => (
          <VideoCard
            key={video._id}
            props={video}
            className="md:h-48 h-24 min-w-36 md:min-w-80 "
            flexcol="flex"
            hidden="hidden"
          />
        ))
      )}
    </div>
  );
}

export default WatchHistoryPage;
