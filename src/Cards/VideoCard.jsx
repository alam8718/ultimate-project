import Link from 'next/link';
import React from 'react'
import {BsFillCheckCircleFill} from "react-icons/bs";


function VideoCard({video}) {
  return (
    <>
    <div className="w-[90%] sm:w-[80%] md:w-[350px] ">
      <Link href={`/video/${video?.videoId}`}>
        <div className="flex flex-col mb-8 ">
          <div className="relative h-60 md:h-44 overflow-hidden rounded-xl">
            <img
              className="h-full w-full object-center"
              src={video?.thumbnails?.[0]?.url}
              alt="video image"
            />
            {/* {video?.lengthSeconds && (
              <VideoLength time={video?.lengthSeconds} />
            )} */}
          </div>
          {/* video details  */}
          <div className="flex text-white mt-3  ">
            {/* channel image  */}
            <div className="flex items-start ">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={video?.author?.avatar?.[0]?.url}
                  alt="channel image"
                />
              </div>
            </div>
            {/* channel other details  */}
            <div className=" flex flex-col ml-3 overflow-hidden">
              <h1 className="line-clamp-2 font-bold">{video.title}</h1>
              <p className="flex items-center  text-white/70 text-sm font-semibold mt-2 ">
                {video?.author?.title}
                {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-[12px] ml-1 text-white/50" />
                )}
              </p>
              {/* <div className="flex text-[14px] text-white/70 overflow-hidden font-semibold truncate ">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex text-[24px] leading-none text-white/70 relative mx-1 top-[-10px]">
                  .
                </span>
                <span className="truncate"> {video?.publishedTimeText}</span>
              </div> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
    </>
  )
}

export default VideoCard