import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, removeMessage } from "../../utils/chatSlice";
import ChatMessage from "../ChatMessage";
import { nameList, randomMessages } from "./data";

const LiveChat = () => {
  const messageData = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: nameList[Math.floor(Math.random() * nameList.length)],
          message:
            randomMessages[Math.floor(Math.random() * randomMessages.length)],
        })
      );
      dispatch(removeMessage());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="mt-5 p-2 w-[500px] h-[500px] border border-black bg-slate-100 rounded-lg overflow-x-scroll flex flex-col-reverse">
      {messageData?.map(({ name, message }, index) => {
        return <ChatMessage name={name} message={message} key={index} />;
      })}
    </div>
  );
};

export default LiveChat;
