import React, { useEffect, useState } from "react";
import { VideoCard } from "../components";
import videoService from "../services/video.service";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";

function HomePage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";

  console.log(query);

  useEffect(() => {
    videoService
      .getAllVideos(
        { limit: 20, page: 1, sortType: "desc", sortBy: "views", query },
        dispatch
      )
      .then((videos) => {
        if (videos.length === 0) return;
        setVideos(videos.data);
        setLoading(false);
      })

      .catch((err) => setError(err));
  }, [query]);

  return (
    <>
      {error && (
        <h1 className="text-center pt-20 text-2xl">
          {error} . Server is not running.
        </h1>
      )}
      <div>
        {loading ? (
          <Spinner />
        ) : videos.length === 0 ? (
          <h1 className="text-center text-2xl font-thin text-gray-500 mt-20 p-2">
            {query
              ? `No results found for "${query}". Try searching for something else.`
              : "No videos found."}
          </h1>
        ) : (
          <div className="md:pt-20 pt-14 pb-16 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1">
            {videos?.map((video) => (
              <VideoCard
                key={video._id}
                props={video}
                className="h-56 md:h-52 w-full"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
