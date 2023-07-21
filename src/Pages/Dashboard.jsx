import windowGrid from "../assets/images/window-grid.svg";
import plusIcon from "../assets/images/plus.svg";
import pen from "../assets/images/pen.svg";
import view from "../assets/images/view.svg";
import message from "../assets/images/message.svg";
import copy from "../assets/images/copy.svg";
const Dashboard = () => {
  return (
    <div className="w-full sm:px-20 px-6 flex flex-col justify-center items-center bg-background_grey_color">
      <div className="w-full max-w-[66rem] mt-[11.5rem]">
        <p className="text-left font-inter font-[500] leading-normal text-black text-[1.25rem] mb-5">
          Hello Norman,
        </p>
        <p className="text-left font-inter font-[500] leading-normal text-[#8F8F8F] text-[1rem]">
          Start a new project from scratch or from our template list
        </p>
      </div>
      <div className="w-full max-w-[66rem] mt-12 border border-border_color  place-items-center grid gap-5 grid-cols-[1fr] sm:grid-cols-[1fr,1fr] py-12 px-16 rounded-[0.5rem]">
        <div className=" h-48 w-full grid place-items-center border border-border_color px-6 py-6">
          <img src={plusIcon} />
          <p className="font-inter font-[400] text-[0.875rem] leading-normal text-black">
            Create new website
          </p>
        </div>
        <div className=" h-48 w-full grid place-items-center border border-border_color px-6 py-6">
          <img src={windowGrid} />
          <p className="font-inter font-[400] text-[0.875rem] leading-normal text-black">
            Template
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full mt-12 mb-16 gap-4 items-center justify-center">
        <div className="w-full max-w-[66rem] gap-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border border-border_color py-5 px-5 rounded-[0.5rem]">
          <div className="flex items-center  gap-6">
            <div className="w-6 h-6 bg-[#eee]"></div>
            <div className="flex flex-col items-left justify-between">
              <p className="font-inter font-[500] text-[0.875rem] leading-normal text-black">
                Website name
              </p>
              <p className="font-inter font-[400] text-[0.75rem] leading-normal text-light_gray_color">
                27/04/2023
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="inline-flex items-center gap-2 p-3 rounded-[0.25rem] bg-[#eee] font-inter font-[500] text-[0.875rem] leading-normal text-black">
              <span>
                <img src={message} alt="pen" />
              </span>
              Message
            </button>
            <button className="inline-flex items-center gap-2 p-3 rounded-[0.25rem] bg-[#eee] font-inter font-[500] text-[0.875rem] leading-normal text-black">
              <span>
                <img src={pen} alt="pen" />
              </span>
              Edit
            </button>
            <button
              className="inline-flex items-center gap-2 p-3 rounded-[0.25rem] bg-[#eee] font-inter font-[500] text-[0.875rem] leading-normal text-black"
              disabled
            >
              <span>
                <img src={view} alt="pen" />
              </span>
              View
            </button>
            <button className="inline-flex items-center gap-2 p-3 rounded-[0.25rem] bg-[#eee] font-inter font-[500] text-[0.875rem] leading-normal text-black">
              <span>
                <img src={copy} alt="pen" />
              </span>
              Copy
            </button>
          </div>
        </div>
        <div className="w-full max-w-[66rem] gap-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border border-border_color py-5 px-5 rounded-[0.5rem]">
          <div className="flex items-center  gap-6">
            <div className="w-6 h-6 bg-[#eee]"></div>
            <div className="flex flex-col items-left justify-between">
              <p className="font-inter font-[500] text-[0.875rem] leading-normal text-black">
                Website name
              </p>
              <p className="font-inter font-[400] text-[0.75rem] leading-normal text-light_gray_color">
                27/04/2023
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="inline-flex items-center gap-2 p-3 rounded-[0.25rem] bg-[#eee] font-inter font-[500] text-[0.875rem] leading-normal text-black">
              <span>
                <img src={message} alt="pen" />
              </span>
              Message
            </button>
            <button className="inline-flex items-center gap-2 p-3 rounded-[0.25rem] bg-[#eee] font-inter font-[500] text-[0.875rem] leading-normal text-black">
              <span>
                <img src={pen} alt="pen" />
              </span>
              Edit
            </button>
            <button
              className="inline-flex items-center gap-2 p-3 rounded-[0.25rem] bg-[#eee] font-inter font-[500] text-[0.875rem] leading-normal text-black"
              disabled
            >
              <span>
                <img src={view} alt="pen" />
              </span>
              View
            </button>
            <button className="inline-flex items-center gap-2 p-3 rounded-[0.25rem] bg-[#eee] font-inter font-[500] text-[0.875rem] leading-normal text-black">
              <span>
                <img src={copy} alt="pen" />
              </span>
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
