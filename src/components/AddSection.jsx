import React from "react";
import add from "../assets/add.svg";

export const AddSection = () => {
  return (
    <div className="flex my-[20px] justify-evenly items-center gap-[11px]">
      <div className="w-full  bg-[#dadada] h-[1px]"></div>
      <div className="w-full">
        <div className="w-[100%] flex gap-[10px] items-center justify-center text-center">
          <img src={add} alt="" />
          <p className="text-[#171717]  font-roboto text-[14px]">
            Add new section
          </p>
        </div>
      </div>
      <div className="w-full bg-[#dadada] h-[1px]"></div>
    </div>
  );
};
