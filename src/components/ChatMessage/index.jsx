import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-1 mt-4 shadow-md p-2 bg-white">
      <img className="h-8" src="/user.png" alt="user" />
      <span className="font-bold">{name} - </span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
