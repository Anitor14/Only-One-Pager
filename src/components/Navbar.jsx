import { useState } from "react";
import notificationBell from "../assets/images/notification.svg";
import nLogo from "../assets/images/n_logo.svg";
import navLogo from "../assets/images/nav_logo.png";
import { NavLink } from "react-router-dom";
import { Submenu } from "../components";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleSubMenuClose = (e) => {
    setShowSubMenu(false);
  };
  return (
    <nav className="h-32 border-b fixed border-border_color w-full sm:px-20 px-6 flex justify-center items-center bg-white">
      <div className="xl:max-w-[1280px] w-full flex flex-col justify-center items-center">
        <div className="h-[5.5rem] w-full flex items-center justify-between">
          <img src={navLogo} className="w-20 h-8" />
          <div className="flex items-center gap-5">
            <img src={notificationBell} />
            <img src={nLogo} onClick={() => setShowSubMenu((prev) => !prev)} />
          </div>
        </div>
        <div className="h-[2.5rem] w-full flex justify-center items-center gap-5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-inter font-[400] text-[0.875rem] leading-normal text-black"
                : "font-inter font-[400] text-[0.875rem] leading-normal text-light_gray_color"
            }
            to="/"
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-inter font-[400] text-[0.875rem] leading-normal text-black"
                : "font-inter font-[400] text-[0.875rem] leading-normal text-light_gray_color"
            }
            to="/template"
          >
            Template
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-inter font-[400] text-[0.875rem] leading-normal text-black"
                : "font-inter font-[400] text-[0.875rem] leading-normal text-light_gray_color"
            }
            to="/analysis"
          >
            Analysis
          </NavLink>
        </div>
      </div>
      {showSubMenu && <Submenu onClose={handleSubMenuClose} />}
    </nav>
  );
};

export default Navbar;
