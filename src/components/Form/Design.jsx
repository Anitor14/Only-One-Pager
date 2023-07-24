import React from "react";

export const Design = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex max-w-[600px] p-[10px] w-full  border-[1px] flex-col items-start gap-[20px]">
        <div className="flex flex-col items-start gap-[10px]">
          <p className="text-[#171717] font-inter text-[34px] font-[600] leading-normal">
            Design
          </p>
          <p className="text-[#8f8f8f] font-inter text-[16px] leading-normal">
            Customize your website in just a few clicks, select colors and
            preferred fonts
          </p>
        </div>

        <div className="w-full h-[69px] border-[1px] justify-between flex flex-col sm:flex-row items-center px-[10px] rounded-[8px] bg-[#fff]">
          <p className="text-[#171717] font-inter">Do you have a logo?</p>
          <div className="flex items-center gap-[44px]">
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="" id="" />
              <p className="text-[#171717] font-inter">Yes</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="" id="" />
              <p className="text-[#171717] font-inter">No</p>
            </div>
          </div>
        </div>

        <div className="w-full border-[1px] h-[69px] justify-between flex flex-col sm:flex-row items-center px-[10px] rounded-[8px] bg-[#fff]">
          <p className="text-[#171717] font-inter">
            Do you have a brand color already
          </p>
          <div className="flex items-center gap-[44px]">
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="" id="" />
              <p className="text-[#171717] font-inter">Yes</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="" id="" />
              <p className="text-[#171717] font-inter">No</p>
            </div>
          </div>
        </div>

        <div className="w-full border-[1px] h-[69px] justify-between flex flex-col sm:flex-row items-center px-[10px] rounded-[8px] bg-[#fff]">
          <p className="text-[#171717] font-inter">
            Do you already have a Preferred font?
          </p>
          <div className="flex items-center gap-[44px]">
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="" id="" />
              <p className="text-[#171717] font-inter">Yes</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="" id="" />
              <p className="text-[#171717] font-inter">No</p>
            </div>
          </div>
        </div>

        <div className="flex  items-start w-full justify-between">
          <button className=" bg-[#fff] rounded-[8px] flex py-[14px] px-[25px] items-start gap-[10px]">
            <p className="text-[#8f8f8f] font-inter text-[16px] font-normal leading-normal">
              Previous
            </p>
          </button>
          <button className="flex py-[11px] px-[25px] items-start gap-[10px] rounded-[8px] bg-[#7a5af8]">
            <p className="text-[#fff] font-inter text-[16px] font-normal leading-normal">
              Continue
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
