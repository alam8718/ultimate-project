import {useGlobalContext} from "@/context/Context";
import React from "react";

function LeftSideBar() {
  const {mobileMenu} = useGlobalContext();
  const sideBarList = [
    {
      title: "Home",
    },
  ];
  return (
    <>
      <div
        className={`w-[240px] h-full lg:block overflow-y-auto py-4 absolute md:relative z-10 transition-all bg-white md:translate-x-0  ${
          mobileMenu ? "translate-x-[-240px]" : "translate-x-0"
        }`}>
        <div className=" w-full">
          {sideBarList.map((item) => (
            <h1 className="w-full text-lg font-semibold border hover:bg-gray-200 pl-10 py-2">
              {item.title}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
}

export default LeftSideBar;
