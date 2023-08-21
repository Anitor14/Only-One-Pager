import React from "react";
import navLogo from "../assets/images/nav_logo.png";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import landingPageImage from "../assets/images/landing-page-image.png";
import { useAppContext } from "../context/appContext";
import { useTranslation } from "react-i18next";
import { CountriesDropdown } from "../components";
import notificationBell from "../assets/images/notification.svg";

const Landing = () => {
  const { t } = useTranslation();
  const { user } = useAppContext();
  return (
    <>
      {user && <Navigate to="/" />}
      <div className="h-screen overflow-scroll w-screen bg-background_grey_color">
        <div className="w-full px-20 max-sm:px-6 flex justify-center items-center">
          <div className="h-[5.5rem] w-full flex items-center justify-between">
            <NavLink to={"/"}>
              <img src={navLogo} className="w-20 h-8" />
            </NavLink>
            <div className="flex items-center gap-5 relative">
              <CountriesDropdown />
              {user && (
                <img
                  src={notificationBell}
                  alt="notification-bell"
                  className="cursor-pointer"
                />
              )}

              {user && (
                <div
                  className="w-[2.4rem] h-[2.4rem] rounded-full bg-black grid place-items-center cursor-pointer"
                  onClick={() => setShowSubMenu((prev) => !prev)}
                >
                  <p className="text-[1rem] text-white font-bold">
                    {firstChar}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full px-20 max-sm:px-6 flex justify-center items-center">
          <div className="w-full xl:max-w-[1280px] mt-12  grid sm:grid-cols-[1fr,1fr] gap-6 ">
            <div className="flex flex-col gap-4 justify-start w-full">
              <h1 className="font-inter font-[700] text-[2rem] text-black_color">
                {`${t("CreateYour")} `}
                {""}
                <span className="text-purple_color">{`${t("OnePage")}`}</span>{" "}
                {`${t("Website")}`}
              </h1>
              <p className="font-inter leading-normal text-light_gray_color text-[1rem]">
                {`${t("LandingMsg")}`}
              </p>
              <NavLink
                to={"/register"}
                className=" text-center cursor-pointer p-2 rounded-[0.25rem] bg-purple_color text-white font-inter font-[500] w-fit grid place-items-center text-[0.875rem] leading-normal "
              >
                {`${t("LoginRegister")}`}
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
      </div>
    </>
  );
};

export default Landing;
