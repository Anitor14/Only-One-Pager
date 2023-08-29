import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import notificationBell from "../assets/images/notification.svg";
import nLogo from "../assets/images/n_logo.svg";
import navLogo from "../assets/images/nav_logo.png";
import { NavLink } from "react-router-dom";
import { Submenu, CountriesDropdown } from "../components";
import { useAppContext } from "../context/appContext";

const Navbar = () => {
  const { t } = useTranslation();
  const { user } = useAppContext();
  const userName = user.name;
  const firstChar = userName.charAt(0);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleSubMenuClose = (e) => {
    setShowSubMenu(false);
  };
  return (
    <nav className="h-32 border-b fixed border-border_color w-full sm:px-20 px-6 flex justify-center items-center z-50 bg-white">
      <div className="xl:max-w-[1280px] w-full flex flex-col justify-center items-center">
        <div className="h-[5.5rem] w-full flex items-center gap-4 justify-between">
          <NavLink to={"/"}>
            <img src={navLogo} className="w-20 h-8" />
          </NavLink>
          <div className="flex items-center gap-5 relative">
            <CountriesDropdown />
            <img
              src={notificationBell}
              alt="notification-bell"
              className="cursor-pointer"
            />

            <div
              className="w-[2.4rem] h-[2.4rem] rounded-full bg-black grid place-items-center cursor-pointer"
              onClick={() => setShowSubMenu((prev) => !prev)}
            >
              <p className="text-[1rem] text-white font-bold">{firstChar}</p>
            </div>
            {showSubMenu && <Submenu onClose={handleSubMenuClose} />}
          </div>
        </div>
        <div className="h-[2.5rem] w-full flex justify-center items-center gap-5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-inter font-[400] text-[0.875rem] leading-normal  text-black relative active-highlight"
                : "font-inter font-[400] text-[0.875rem] leading-normal text-light_gray_color"
            }
            to="/"
          >
            {t("Dashboard")}
          </NavLink>
          {/* <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-inter font-[400] text-[0.875rem] leading-normal text-black relative active-highlight"
                : "font-inter font-[400] text-[0.875rem] leading-normal text-light_gray_color"
            }
            to="/template"
          >
            {t("Template")}
          </NavLink> */}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-inter font-[400] text-[0.875rem] leading-normal text-black relative active-highlight"
                : "font-inter font-[400] text-[0.875rem] leading-normal text-light_gray_color"
            }
            to="/analysis"
          >
            {t("Analysis")}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
