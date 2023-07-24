import React from "react";
import link from "../assets/link.svg";
import frame from "../assets/frame.svg";
import add from "../assets/add.svg";

export const UploadTemplate = () => {
  return (
    <div className="flex  flex-col items-start gap-[20px]">
      <div className="flex max-w-[942px] w-full py-[1px] px-[10px]  rounded-[8px] border-[1px] bg-[#f5f5f5]">
        <p className="font-[600] font-inter text-[14px] leading-[32px]">Hero</p>
      </div>

      <div className="w-full">
        <div className="flex md:w-full md:justify-evenly flex-col md:flex-row gap-[10px]">
          <div className="w-full">
            <div className=" max-w-[526px]  flex items-center justify-center w-full  h-[211px]  rounded-[8px] border-[1px]  border-[#DADADA] bg-[#FFF]">
              <p className="text-[#8f8f8f] w-full text-center font-inter text-[14px] leading-normal">
                Copy your texts and paste them here
              </p>
            </div>
            <div className="hidden mt-[20px] w-full items-center flex-col sm:flex-row gap-[16px]">
              <div className="max-w-[116px] border-[1px] rounded-[8px] flex items-center w-full">
                <div className="flex max-w-[58px] w-full py-[7px] px-[6px] justify-center items-center  rounded-[8px] bg-[#f5f5f5]">
                  <span className="text-[#171717] font-inter text-[14px] leading-normal font-[400]">
                    Image
                  </span>
                </div>

                <div className="flex max-w-[58px] w-full py-[7px] px-[6px] justify-center items-center  rounded-[8px] bg-[#fff]">
                  <span className="text-[#8f8f8f] font-inter text-[14px] leading-normal font-[400]">
                    Video
                  </span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <img className="w-[35px]" src={link} alt="" />
              </div>

              <div className="border-[1px] w-full rounded-[8px] py-[7px]">
                <p className="flex font-inter text-[#8f8f8f] text-[14px] justify-center">
                  Add a website link to your pictures
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" max-w-[386px] m-auto flex items-center justify-center w-full  h-[211px]  rounded-[8px] border-[1px]  border-[#DADADA] bg-[#FFF]">
              <div className="flex flex-col justify-center items-center">
                <img src={frame} alt="" />
                <p className="text-[#8f8f8f] w-full font-inter text-[14px] leading-normal">
                  Drag and drop your images
                </p>
              </div>
            </div>
            <div className="flex w-full items-center mt-[20px] flex-col sm:flex-row gap-[16px]">
              <div className="max-w-[116px] border-[1px] rounded-[8px] flex items-center w-full">
                <div className="flex max-w-[58px] w-full py-[7px] px-[6px] justify-center items-center  rounded-[8px] bg-[#f5f5f5]">
                  <span className="text-[#171717] font-inter text-[14px] leading-normal font-[400]">
                    Image
                  </span>
                </div>

                <div className="flex max-w-[58px] w-full py-[7px] px-[6px] justify-center items-center  rounded-[8px] bg-[#fff]">
                  <span className="text-[#8f8f8f] font-inter text-[14px] leading-normal font-[400]">
                    Video
                  </span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <img className="w-[35px]" src={link} alt="" />
              </div>

              <div className="border-[1px] w-full rounded-[8px]  py-[7px]">
                <p className="flex font-inter text-[#8f8f8f] text-[14px] justify-center">
                  Add a website link to your pictures
                </p>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};
