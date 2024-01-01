import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../constants";
import VideoCard from "../VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    setVideos(data.items);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="flex flex-wrap gap-5 justify-between mt-5">
      {videos?.map((video, index) => {
        return (
          <Link
            key={index}
            to={"/watch?v=" + video.id}
            className="w-72 shadow-lg p-2 rounded-lg cursor-pointer"
          >
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
