import windowGrid from "../../assets/images/window-grid.svg";
import plusIcon from "../../assets/images/plus.svg";
import templateImage from "../../assets/images/template_image_2.jpg";
import templateImageTwo from "../../assets/images/template_image_3.jpg";
import { WebsiteDetail } from "../../components";
import { NavLink } from "react-router-dom";
import onlyLogo from "../../assets/images/Vector-removebg-preview.png";
import { useAppContext } from "../../context/appContext";
import { useTranslation } from "react-i18next";

const webData = [
  {
    webName: "Arosa Agriculture",
    webPicture: onlyLogo,
    date: "27/04/2023",
    preview: false,
  },
  {
    webName: "Origin Racing",
    webPicture: onlyLogo,
    date: "27/04/2023",
    preview: true,
  },
];

const Dashboard = () => {
  const { t } = useTranslation();
  const { user } = useAppContext();
  return (
    <div className="w-full px-20 max-sm:px-6  flex flex-col  justify-center items-center bg-background_grey_color">
      <div className="w-full max-w-[66rem] mt-[11.5rem]">
        <p className="text-left font-inter font-[500] leading-normal text-black text-[1.25rem] mb-2">
          {t("DashboardText")} {user.name},
        </p>
        <p className="text-left font-inter font-[500] leading-normal text-[#8F8F8F] text-[1rem]">
          {t("DashboardSubText")}
        </p>
      </div>
      <div className="w-full max-w-[66rem] mt-12 border border-border_color bg-white place-items-center grid gap-5 grid-cols-[1fr] sm:grid-cols-[1fr,1fr] py-12 px-16 rounded-[0.5rem]">
        <div className=" h-48 w-full grid place-items-center border border-border_color px-6 py-6">
          <NavLink
            to={"/form"}
            className="flex flex-col items-center justify-center gap-2"
          >
            <img src={plusIcon} />
            <p className="font-inter font-[400] text-[0.875rem] leading-normal text-black">
              {t("DashboardNewSite")}
            </p>
          </NavLink>
        </div>
        <div className=" h-48 w-full grid place-items-center border border-border_color px-6 py-6">
          <NavLink
            to={"/template"}
            className="flex flex-col items-center justify-center gap-2"
          >
            <img src={windowGrid} />
            <p className="font-inter font-[400]  leading-normal text-black text-[0.875rem]">
              {t("DashboardTemplate")}
            </p>
          </NavLink>
        </div>
      </div>

      <div className="flex flex-col w-full mt-12 mb-16 gap-4 items-center justify-center">
        {webData.map((webDatum, index) => {
          return <WebsiteDetail key={index} {...webDatum} />;
        })}
      </div>
    </div>
  );
};
export default Dashboard;
