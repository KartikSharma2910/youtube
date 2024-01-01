import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { data } from "./data";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-[160px] shadow-lg h-screen">
      {data.map(({ heading, labels, link }, index) => {
        return (
          <div key={index} className="flex flex-col gap-2 mt-5">
            <div className="text-xl font-bold pl-5">{heading}</div>
            <div className="flex flex-col gap-1">
              {labels.map(({ name: labelName }, index) => {
                return (
                  <Link to={link} key={index}>
                    <div className="pl-5 text-sm cursor-pointer hover:bg-gray-300">
                      {labelName}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
