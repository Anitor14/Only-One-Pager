import React from "react";

export const Business = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen p-[10px]">
      <div className="inline-flex px-[10px] py-[10px]  flex-col border-[1px] max-w-[500px] w-full items-start gap-[50px]">
        <div className="flex flex-col items-start gap-[10px]">
          <p className="text-[#171717] font-inter text-[24px] font-[600] leading-normal">
            Tell us about your business
          </p>
          <p className="text-[#8F8F8F] font-inter text-[14px] font-[400] leading-normal">
            This information will be used to customize the best interface
            tailored for your business need
          </p>
        </div>

        <div className="flex flex-col w-full items-start gap-[10px]">
          <p className="text-[#171717] font-inter text-[14px] font-[400] leading-normal">
            Tell us about your business
          </p>
          <input
            className="flex w-[90%] flex-col py-[23px] px-[40] justify-center items-start gap-[10px] rounded-[8px] border-[1px] border-solid bg-[#fff]"
            name=""
            id=""
          />
        </div>

        <div className="flex justify-between w-full items-start">
          <button className="flex py-[11px] px-[25px] items-start gap-[10px] bg-[#fff]">
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
