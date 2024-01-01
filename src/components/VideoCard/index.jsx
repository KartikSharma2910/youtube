import React from "react";
import convertToInternationalCurrencySystem from "../../constants";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div>
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg" />
      <div className="text-gray-500">{title}</div>
      <div className="font-semibold">{channelTitle}</div>
      <div className="text-gray-500">
        {convertToInternationalCurrencySystem(statistics.viewCount)} views
      </div>
    </div>
  );
};

export default VideoCard;
