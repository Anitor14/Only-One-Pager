import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import firstTemplateImage from "../../assets/images/firstTemplate.png";
import secondTemplateImage from "../../assets/images/secondTemplate.png";
import thirdTemplateImage from "../../assets/images/thirdTemplate.png";
import fourthTemplateImage from "../../assets/images/fourthTemplate.png";
import fifthTemplateImage from "../../assets/images/fifthTemplate.png";
import sixthTemplateImage from "../../assets/images/sixthTemplate.png";
import { useTranslation } from "react-i18next";

const imagesDatum = [
  {
    name: "firstTemplate",
    image: firstTemplateImage,
    url: "https://www.elegantthemes.com/layouts/hvac/hvac-landing-page/live-demo",
  },
  {
    name: "secondTemplate",
    image: secondTemplateImage,
    url: "https://www.elegantthemes.com/layouts/veterinarian/veterinarian-landing-page/live-demo",
  },
  {
    name: "thirdTemplate",
    image: thirdTemplateImage,
    url: "https://www.elegantthemes.com/layouts/poke-restaurant/poke-restaurant-landing-page/live-demo",
  },
  {
    name: "fourthTemplate",
    image: fourthTemplateImage,
    url: "https://beresin.tokotema.com/",
  },
  {
    name: "fifthTemplate",
    image: fifthTemplateImage,
    url: "https://htmldesigntemplates.com/eventen/template-kit/home/",
  },
  {
    name: "sixTemplate",
    image: sixthTemplateImage,
    url: "https://kitdemo.moxcreative.com/chattera/template-kit/homepage/",
  },
];

const Template = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="w-full px-20 max-sm:px-6 flex flex-col gap-8 justify-center items-center bg-background_grey_color">
      <div className="w-full max-w-[66rem] flex flex-col items-start justify-center text-left gap-12 mt-[12rem] ">
        <div className="w-full flex gap-4 items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <path
              d="M6.82414 0.900691L-2.98702e-07 7.4663L6.82414 14.0319C6.88577 14.1094 6.96408 14.1733 7.05374 14.2192C7.14341 14.2652 7.24236 14.2922 7.34388 14.2984C7.4454 14.3046 7.54713 14.2899 7.64218 14.2552C7.73723 14.2205 7.82338 14.1666 7.89479 14.0973C7.96621 14.0279 8.02123 13.9447 8.05612 13.8533C8.09102 13.7618 8.10497 13.6642 8.09705 13.5672C8.08912 13.4701 8.05949 13.3758 8.01018 13.2906C7.96086 13.2055 7.893 13.1314 7.81119 13.0736L2.70551 8.14597L16.2899 8.14597C16.4782 8.14597 16.6588 8.07436 16.792 7.9469C16.9252 7.81943 17 7.64656 17 7.4663C17 7.28604 16.9252 7.11316 16.792 6.9857C16.6588 6.85824 16.4782 6.78663 16.2899 6.78663L2.70551 6.78663L7.81119 1.85902C7.94397 1.73104 8.01819 1.55781 8.01752 1.37745C8.01685 1.19709 7.94136 1.02437 7.80764 0.897292C7.67393 0.770209 7.49294 0.699173 7.30451 0.69981C7.11607 0.700447 6.93561 0.772707 6.80284 0.900691L6.82414 0.900691Z"
              fill="#171717"
            />
          </svg>
          <p>Back</p>
        </div>
        <div className="w-full flex flex-col gap-1">
          <p className="text-black text-[1.5rem] font-[600]">
            Select a template
          </p>
          <p className="font-[400] text-[1rem] text-light_gray_color">
            Jumpstart your website development process with our pre-built
            templates.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[66rem]  flex flex-col justify-center items-center bg-white shadow-sm text-center py-7 md:py-14 px-20 max-sm:px-6  rounded-lg border border-border_color sm:mb-[12rem] mb-[7rem] ">
        <p className="text-black_color font-inter  text-[1.5rem] leading-normal font-[600] pb-5">
          {`${t("TemplateHeader")}`}
        </p>
        <p className="text-light_gray_color font-inter">
          {`${t("TemplateSubHeader")}`}
        </p>
        <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr,1fr] justify-between gap-5 gap-y-[3rem] mt-7 ">
          {imagesDatum.map((imageData, index) => {
            return (
              <div
                className="bg-white  w-full rounded-lg overflow-hidden min-h-[13rem] max-w-72 shadow-md hover:scale-105 ease-in duration-300"
                key={index}
              >
                <img
                  src={imageData.image}
                  alt={imageData.name}
                  className="w-full h-[10rem] object-cover"
                />
                <div className="w-full flex items-center  justify-between p-3 ">
                  <div className="transform transition-[all_0.25s] hover:translate-y-[-0.25em] hover:shadow-[0_0.5em_0.5em_-0.4em_#7a5af8] cursor-pointer">
                    <NavLink
                      to={imageData.url}
                      target="_blank"
                      className="p-2 rounded-[0.25rem]   bg-[#fff] hover:bg-purple_color hover:text-[#fff] font-inter font-[500] text-[0.875rem] leading-normal text-purple_color"
                    >
                      {`${t("TemplatePreview")}`}
                    </NavLink>
                  </div>
                  <NavLink
                    to={"/form"}
                    className="transform transition-[all_0.25s] active:translate-y-[-0.25em] cursor-pointer p-2 active:shadow-[0_0.5em_0.5em_-0.4em_#7a5af8] rounded-[0.25rem] bg-[#eee] hover:bg-purple_color hover:text-[#fff] font-inter font-[500] text-[0.875rem] leading-normal text-black"
                  >
                    {`${t("TemplateSelect")}`}
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" w-full flex justify-center mt-[50px]  text-[#fff]  ">
          <button className="hover:bg-[#7a5af8] hover:text-[#fff] transform transition-[all_0.25s] active:translate-y-[-0.25em] active:shadow-[0_0.5em_0.5em_-0.4em_#7a5af8] bg-[#fff] text-[#7a5af8] border-[1.5px] hover:border-purple_color rounded-[0.5rem] py-[0.3rem] px-[1.625rem] w-fit">
            <p className="text-[1rem] font-inter leading-normal font-[500]">
              {`${t("SeeMore")}`}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Template;
