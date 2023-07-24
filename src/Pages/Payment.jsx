import React from "react";

export const Payment = () => {
  return (
    <div className="mt-[100px] flex justify-center items-center">
      <div className="flex max-w-[700px] p-[20px] w-full  flex-col items-start gap-[20px]">
        <div className="flex flex-col items-start gap-[10px]">
          <p className="text-[#171717] font-inter text-[34px] font-[600] leading-normal">
            Payment Details
          </p>
        </div>

        <div className="w-full  p-[10px] bg-[#fff]">
          <p className="text-[#171717] pt-[20px] font-inter text-[16px] leading-normal">
            Payment Method
          </p>
          <div className="w-full flex-col mt-[30px] px-[5px] sm:flex-row flex items-center justify-center gap-[20px]">
            <div className=" max-w-[212px]   w-full h-[45px]  rounded-[5px] bg-[#D9D9D9]"></div>
            <div className=" max-w-[212px]   w-full h-[45px]  rounded-[5px] bg-[#D9D9D9]"></div>
            <div className=" max-w-[212px]   w-full h-[45px]  rounded-[5px] bg-[#D9D9D9]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
