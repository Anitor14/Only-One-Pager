// import frame from "../assets/frame.svg";
import { UploadTemplate } from "../components/UploadTemplate";
// import link from "../assets/link.svg";
import cross from "../assets/cross.svg";
import { AddSection } from "../components/AddSection";

const Upload = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex max-w-[850px] p-[20px] w-full flex-col items-start gap-[20px]">
        <div className="flex flex-col w-full items-start gap-[10px]">
          <div className="flex items-center justify-between w-full">
            <p className="text-[#171717] font-inter text-[34px] font-[600] leading-normal">
              Website Name
            </p>
            <button className="bg-[#dadada] items-center rounded-[6px]">
              <div className="flex items-center gap-[5px] px-[7px] py-[10px]">
                <img src={cross} alt="" />
                <p className="text-[#171717] font-inter text-[14px]">
                  Add extra features
                </p>
              </div>
            </button>
          </div>
          <p className="text-[#8f8f8f] font-inter text-[16px] leading-normal">
            Customize your preferred text and images that tells your business
            story
          </p>
        </div>

        <div>
          <p className="text-[#171717] font-inter text-[18px]">
            Upload your text with the corresponding images
          </p>
        </div>

        <div className="border-[1px] max-w-[] p-[5px] w-full">
          <UploadTemplate />
          <AddSection />
          <UploadTemplate />
          <AddSection />
          <UploadTemplate />

          <div className="w-full flex justify-end mt-[50px]">
            <button className="flex py-[14px] px-[25px] items-start rounded-[8px] bg-[#7a5af8]">
              <p className="text-[#fff] font-inter text-[16px]">
                Upload Contents
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
