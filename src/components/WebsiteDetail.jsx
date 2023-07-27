import pen from "../assets/images/pen.svg";
import view from "../assets/images/view.svg";
import message from "../assets/images/inbox.svg";
import copy from "../assets/images/copy.svg";
import { Tooltip } from "@mantine/core";
import { NavLink } from "react-router-dom";

const WebsiteDetail = ({ webPicture, webName, date, preview }) => {
  return (
    <div className="w-full  max-w-[66rem] gap-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border border-border_color bg-white py-5 px-5 rounded-[0.5rem] hover:scale-105 ease-in duration-300">
      <div className="flex items-center  gap-6">
        <div className="w-6 h-6 bg-[#eee] cursor-pointer">
          <img
            src={webPicture}
            alt={webName}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col items-left justify-between">
          <p className="font-inter font-[500] text-[0.875rem] leading-normal text-black">
            {webName}
          </p>
          <p className="font-inter font-[400] text-[0.75rem] leading-normal text-light_gray_color">
            {date}
          </p>
        </div>
      </div>
      <div className="flex max-sm:w-full py-3 max-sm:overflow-x-auto items-center gap-5">
        <Tooltip
          label={"Message a developer"}
          color="violet"
          withArrow
          offset={10}
        >
          <button
            className=" transform transition-[all_0.25s] hover:translate-y-[-0.25em]           inline-flex w-[8rem] items-center justify-center gap-2 px-3 py-2 rounded-[0.25rem] bg-[#eee] font-inter font-[500] text-[0.875rem] leading-normal text-black
          "
          >
            <span>
              <img src={message} alt="message" />
            </span>
            Message
          </button>
        </Tooltip>
        <Tooltip
          label={"Continue editing website."}
          color="violet"
          withArrow
          offset={10}
        >
          <NavLink
            to={"/upload"}
            className="inline-flex transform transition-[all_0.25s] hover:translate-y-[-0.25em] items-center justify-center w-[8rem] gap-2 px-3 py-2 rounded-[0.25rem] bg-[#eee] font-inter font-[500] text-[0.875rem] leading-normal text-black"
          >
            <span>
              <img src={pen} alt="pen" />
            </span>
            Edit
          </NavLink>
        </Tooltip>

        <Tooltip
          label={"View your website."}
          color="violet"
          withArrow
          offset={10}
        >
          <button
            disabled={preview === false}
            className={`inline-flex enabled:transform enabled:transition-[all_0.25s] enabled:hover:translate-y-[-0.25em] items-center justify-center w-[8rem] gap-2 px-3 py-2 rounded-[0.25rem] bg-[#eee] font-inter font-[500] text-[0.875rem] leading-normal text-black disabled:opacity-[40%] disabled:cursor-not-allowed`}
          >
            <span>
              <img src={view} alt="pen" />
            </span>
            View
          </button>
        </Tooltip>

        <Tooltip
          label={"Copy your website url."}
          color="violet"
          withArrow
          offset={10}
        >
          <button
            disabled={preview === false}
            className="inline-flex enabled:transform enabled:transition-[all_0.25s] enabled:hover:translate-y-[-0.25em] items-center justify-center w-[8rem] gap-2 px-3 py-2 rounded-[0.25rem] bg-[#eee] font-inter font-[500] text-[0.875rem] leading-normal text-black disabled:opacity-[40%] disabled:cursor-not-allowed"
          >
            <span>
              <img src={copy} alt="pen" />
            </span>
            Copy
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default WebsiteDetail;
