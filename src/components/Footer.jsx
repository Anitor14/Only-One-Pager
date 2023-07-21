import navLogo from "../assets/images/nav_logo.png";
const Footer = () => {
  return (
    <div className="h-40 border-t border-border_color w-full sm:px-20 px-6 flex justify-center items-center bg-white">
      <div className="xl:max-w-[1280px] w-full flex flex-col justify-center items-start">
        <div className="flex items-center gap-5">
          <img src={navLogo} className="w-20 h-8" />
          <p className="font-inter text-[0.875rem] font-[400] leading normal">
            Copyright © 2023 Only web. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-20 mt-10">
          <p className="text-light_gray_color font-inter text-[0.875rem] font-normal leading-normal">
            Home
          </p>
          <p className="text-light_gray_color font-inter text-[0.875rem] font-normal leading-normal">
            Home
          </p>
          <p className="text-light_gray_color font-inter text-[0.875rem] font-normal leading-normal">
            Home
          </p>
          <p className="text-light_gray_color font-inter text-[0.875rem] font-normal leading-normal">
            Home
          </p>
          <p className="text-light_gray_color font-inter text-[0.875rem] font-normal leading-normal">
            Home
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
