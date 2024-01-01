import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../../constants";
import { toggleMenu } from "../../utils/appSlice";
import { cacheResults } from "../../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [show, setShow] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const toggleMenuHandeler = () => dispatch(toggleMenu());

  const getSearchSuggestion = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    setSearchResults(data[1]);

    dispatch(cacheResults({ [searchQuery]: data[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchResults(searchCache[searchQuery]);
      } else getSearchSuggestion();
    }, 200);

    return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-3 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandeler()}
          src="/hamburger.png"
          alt="menu"
          className="h-6 cursor-pointer mt-1"
        />
        <img
          src="/youtube.png"
          alt="youtube"
          className="h-8 cursor-pointer ml-5"
        />
      </div>
      <div className="col-span-10 m-auto">
        <input
          type="text"
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
          className="w-[450px] border border-gray-400 p-1 rounded-l-full pl-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 p-1 rounded-r-full bg-gray-100">
          Search
        </button>
        {searchQuery.length !== 0 && show && (
          <div className="absolute bg-white w-[450px] pt-2 pb-2 shadow-lg mt-1 rounded-sm">
            {searchResults?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="text-md cursor-pointer hover:bg-slate-200 pl-3 pt-1 pb-1"
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img src="/user.png" alt="user" className="w-22 h-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
