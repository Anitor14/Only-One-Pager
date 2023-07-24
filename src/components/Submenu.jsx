import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
const Submenu = ({ onClose }) => {
  const submenuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // we check if the submenuRef.current and submenuRef.current does not contain the event.target.
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [submenuRef, onClose]);
  return (
    <div
      className="absolute right-1 top-20 flex flex-col items-start justify-center gap-5  w-52 py-[1.8rem] px-[1.25rem] bg-white rounded-[0.5rem] shadow-md "
      ref={submenuRef}
    >
      <p className="font-inter font-[400] text-[1rem] leading-normal text-light_gray_color">
        Norman@gmail.com
      </p>
      <NavLink
        to="/profile"
        className="font-inter font-[400] text-[1rem] leading-normal text-black"
        onClick={onClose}
      >
        Profile
      </NavLink>
      <div className="w-full h-[0.0625rem] bg-[#DADADA]" />
      <p className="font-inter font-[400] text-[1rem] leading-normal text-black">
        Logout
      </p>
      <div className="w-full h-[0.0625rem] bg-[#DADADA]" />
      <button className="bg-purple_color text-center py-2 px-3 rounded-[0.375rem] font-inter font-[500] text-[1rem] leading-normal text-white w-full">
        Upgrade to pro
      </button>
    </div>
  );
};

export default Submenu;
