import React from "react";
import navLogo from "../assets/images/nav_logo.png";
import { NavLink } from "react-router-dom";
import landingPageImage from "../assets/images/landing-page-image.png";

const Landing = () => {
  return (
    <div className="h-screen overflow-scroll w-screen bg-background_grey_color">
      <div className="h-32 w-full px-20 max-sm:px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full flex justify-start items-center">
          <img src={navLogo} className="w-[10rem] h-[10rem] object-contain" />
        </div>
      </div>
      <div className="w-full px-20 max-sm:px-6 grid sm:grid-cols-[1fr,1fr] gap-6 ">
        <div className="flex flex-col gap-4 justify-start w-full">
          <h1 className="font-inter font-[700] text-[2rem] text-black_color">
            Create Your <span className="text-purple_color">One-Page</span>{" "}
            Website
          </h1>
          <p className="font-inter leading-normal text-light_gray_color text-[1rem]">
            Unlock the power of simplicity and impact with Only-One-Pager the
            premier online tool for crafting stunning one-pagers that captivate,
            inform, and leave a lasting impression. Whether you're an
            entrepreneur, a creative professional, a freelancer, or simply
            someone with a message to share, our platform empowers you to
            distill your content into a single, visually striking page that
            tells your story like never before.
          </p>
          <NavLink
            to={"/register"}
            className="max-w-[8rem] text-center cursor-pointer p-2 rounded-[0.25rem] bg-purple_color text-white font-inter font-[500] text-[0.875rem] leading-normal "
          >
            Login/Register
          </NavLink>
        </div>
        <div className="w-full h-[32rem] max-sm:hidden">
          <img
            className="w-full h-full object-contain relative top-[-80px]"
            src={landingPageImage}
            alt="landing-page"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
