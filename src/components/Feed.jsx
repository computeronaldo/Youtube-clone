import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import Leftnav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults, reFetchData, selectCategories } =
    useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row h-[calc(100% - 56px)]">
      <Leftnav />
      <div className="grow w-[90%] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            searchResults &&
            searchResults?.map((item) => {
              if (item.type !== "video") return false;
              return (
                <VideoCard key={item.video?.videoId} video={item?.video} />
              );
            })}
        </div>
        {!loading && !searchResults && (
          <div className="flex flex-col items-center gap-5 ml-4">
            <div className="text-white text-3xl">{`Couldn't fetch data for ${selectCategories.toLowerCase()} category.`}</div>
            <button
              className="border-2 border-solid text-white rounded-xl px-4 py-2 w-[10%]"
              onClick={() => {
                reFetchData();
              }}
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
