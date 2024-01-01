import React from "react";
import { data } from "./data";

const ButtonList = () => {
  return (
    <div className="flex gap-3">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-gray-200 pl-3 pr-3 pt-1 pb-1 text-sm rounded-lg cursor-pointer"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
