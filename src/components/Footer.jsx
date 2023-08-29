import { NavLink } from "react-router-dom";
import navLogo from "../assets/images/nav_logo.png";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="h-40 border-t border-border_color w-full sm:px-20 px-6 flex justify-center items-center bg-white">
      <div className="xl:max-w-[1280px] w-full flex flex-col justify-center items-start">
        <div className="flex flex-col sm:flex-row items-start w-full gap-5">
          <NavLink to={"/"}>
            <img src={navLogo} className="w-20 h-8" />
          </NavLink>
          <p className="font-inter text-[0.875rem] font-[400] leading normal">
            {`${t("FooterText")}`}
          </p>
        </div>
        {/* <div className="flex justify-between  items-center gap-10 sm:gap-20 mt-10">
          <p className=" xs:text-green text-light_gray_color font-inter text-[0.875rem] font-normal leading-normal">
            {`${t("FooterLink")}`}
          </p>
          <p className="text-light_gray_color font-inter text-[0.875rem] font-normal leading-normal">
            {`${t("FooterLink")}`}
          </p>
          <p className="text-light_gray_color font-inter text-[0.875rem] font-normal leading-normal">
            {`${t("FooterLink")}`}
          </p>
          <p className="text-light_gray_color font-inter text-[0.875rem] font-normal leading-normal">
            {`${t("FooterLink")}`}
          </p>
          <p className="text-light_gray_color font-inter text-[0.875rem] font-normal leading-normal">
            {`${t("FooterLink")}`}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
