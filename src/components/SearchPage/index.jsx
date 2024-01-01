import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  YOUTUBE_SEARCH_BY_KEYWORD,
  convertToReadableFormat,
} from "../../constants";

const SearchPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();

  const searchKey = searchParams.get("key");

  const fetchVideos = async () => {
    const response = await fetch(YOUTUBE_SEARCH_BY_KEYWORD + searchKey);
    const data = await response.json();
    setVideos(data.items);
  };

  useEffect(() => {
    fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-wrap gap-5 justify-between mt-5 pl-5 pr-5 pb-5">
      {videos?.map((video, index) => {
        return (
          <Link
            key={index}
            to={"/watch?v=" + video?.id?.videoId}
            className="w-72 shadow-lg p-2 rounded-lg cursor-pointer"
          >
            <img
              src={video?.snippet?.thumbnails.medium.url}
              alt="thumbnail"
              className="rounded-lg"
            />
            <div className="text-gray-500">{video?.snippet?.title}</div>
            <div className="font-semibold">{video?.snippet?.channelTitle}</div>
            <div className="font-semibold">{video?.snippet?.description}</div>
            <div className="text-gray-500">
              Published at:{" "}
              {convertToReadableFormat(video?.snippet?.publishTime)}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchPage;
