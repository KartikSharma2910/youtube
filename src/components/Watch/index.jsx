import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import convertToInternationalCurrencySystem, {
  YOUTUBE_VIDEO_BY_ID,
} from "../../constants";
import { closeMenu } from "../../utils/appSlice";
import CommentsContainer from "../CommentsContainer";
import LiveChat from "../LiveChat";
import { addMessage } from "../../utils/chatSlice";

const Watch = () => {
  const [message, setMessage] = useState("");
  const [video, setVideo] = useState([]);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");

  const getVideoByID = async (id) => {
    const response = await fetch(YOUTUBE_VIDEO_BY_ID + id);
    const data = await response.json();
    setVideo(data?.items[0]);
  };

  // useEffect(() => {
  //   getVideoByID(videoId);
  // }, [videoId]);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex w-[full]">
      <div className="p-5 w-[900px]">
        <iframe
          width="860"
          height="500"
          src={"https://www.youtube.com/embed/" + videoId}
          title="Youtube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        {/* <div className="font-bold text-xl mt-1 text-slate-500">
        {video?.snippet?.title}
      </div> */}
        {/* <div className="flex mt-2 align-text-bottom gap-2">
        <img
        src={video?.snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
        className="h-12 rounded-full w-12 bg-contain"
        />
        <div className="mt-1">
        <div className="text-sm text-slate-600">
        {video?.snippet?.channelTitle}
        </div>
        <div className="text-sm text-slate-700">
        {convertToInternationalCurrencySystem(video?.statistics?.viewCount)}{" "}
        views
        </div>
        </div>
      </div> */}
        <CommentsContainer />
      </div>
      <div>
        <LiveChat />
        <form className="mt-2 flex gap-3" onSubmit={(e) => e.preventDefault()}>
          <input
            className="w-[420px] border border-black p-2"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="p-2 border border-black w-[70px]"
            onClick={() => {
              dispatch(addMessage({ name: "Kartik Sharma", message: message }));
              setMessage("");
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Watch;
