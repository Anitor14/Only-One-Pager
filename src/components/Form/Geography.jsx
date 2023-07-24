import React from "react";

export const Geography = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex max-w-[700px] p-[20px] w-full  border-[1px] flex-col items-start gap-[20px]">
        <div className="flex flex-col items-start gap-[10px]">
          <p className="text-[#171717] font-inter text-[34px] font-[600] leading-normal">
            Geography
          </p>
          <p className="text-[#8f8f8f] font-inter text-[16px] leading-normal">
            Tell us your location and target audience location
          </p>
        </div>

        <div className="w-full">
          <select
            className="border-[1px] text-[#8f8f8f] w-full h-[69px]"
            name=""
            id=""
          >
            <option className="text-center" value="">
              --Select language--
            </option>
          </select>
        </div>

        <div className="w-full border-[1px] h-[69px] justify-between flex flex-col sm:flex-row items-center px-[20px] rounded-[8px] bg-[#fff]">
          <p className="text-center font-inter text-[16px]">
            Do you need google map integration
          </p>
          <div className="flex items-center gap-[44px]">
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="" id="" />
              <p>Yes</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="" id="" />
              <p>No</p>
            </div>
          </div>
        </div>

        <div className="w-full border-[1px] h-[69px] justify-between flex flex-col sm:flex-row items-center px-[20px] rounded-[8px] bg-[#fff]">
          <p className="text-center text-[#171717] font-inter text-[16px]">
            Do you have a domain
          </p>
          <div className="flex items-center gap-[44px]">
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="" id="" />
              <p>Yes</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="" id="" />
              <p>No</p>
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
