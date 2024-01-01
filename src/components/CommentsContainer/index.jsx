import React from "react";
import { commentsData } from "./commentsData";

const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex bg-gray-100 p-2 rounded-md mt-2">
      <img src="/user.png" alt="user" className="h-8 mr-2 mt-[0.35rem]" />
      <div>
        <div className="text-gray-500 font-bold">{name}</div>
        <div className="text-sm text-gray-600">{comment}</div>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment) => {
        return (
          <div>
            <Comment data={comment} />
            <div className="ml-5 border border-l-black">
              <CommentsList comments={comment?.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="mt-5">
      <h1 className="text-2xl font-bold text-gray-500 mb-3">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
