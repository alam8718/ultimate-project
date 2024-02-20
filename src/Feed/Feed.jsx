import VideoCard from "@/Cards/VideoCard";
import {useGlobalContext} from "@/context/Context";
import LeftSideBar from "@/navBar/LeftSideBar";
import React from "react";

function Feed() {
  const {allData} = useGlobalContext();
  return (
    <>
      <div className="flex flow-row h-[calc(100vh-56px)]">
        <LeftSideBar />
        <div className="pt-10 grow bg-black w-[calc(100%-240px)] h-full overflow-y-auto ">
          <div className="flex flex-wrap flex-col sm:flex-row gap-5 justify-center  items-center">
            {allData.map((item, index) => {
              if (item.type !== "video") return false;
              // if their is no video type than it will not go further
              return <VideoCard key={index} video={item?.video} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
