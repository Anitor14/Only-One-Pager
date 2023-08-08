import { NavLink } from "react-router-dom";
import firstTemplateImage from "../../assets/images/firstTemplate.png";
import secondTemplateImage from "../../assets/images/secondTemplate.png";
import thirdTemplateImage from "../../assets/images/thirdTemplate.png";
import fourthTemplateImage from "../../assets/images/fourthTemplate.png";
import fifthTemplateImage from "../../assets/images/fifthTemplate.png";
import sixthTemplateImage from "../../assets/images/sixthTemplate.png";

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
  return (
    <div className="w-full px-20 max-sm:px-6 flex justify-center items-center bg-background_grey_color">
      <div className="w-full max-w-[66rem]  flex flex-col justify-center items-center bg-white text-center py-7 md:py-14 px-20 max-sm:px-6  rounded-lg border   my-[12rem]   border-border_color ">
        <p className="text-black_color font-inter  text-[1.5rem] leading-normal font-[600] pb-5">
          Select Template
        </p>
        <p className="text-light_gray_color font-inter">
          Create no-code websites with templates that suits your business
          requirements
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
                      Preview
                    </NavLink>
                  </div>
                  <NavLink
                    to={"/form"}
                    className="transform transition-[all_0.25s] active:translate-y-[-0.25em] cursor-pointer p-2 active:shadow-[0_0.5em_0.5em_-0.4em_#7a5af8] rounded-[0.25rem] bg-[#eee] hover:bg-purple_color hover:text-[#fff] font-inter font-[500] text-[0.875rem] leading-normal text-black"
                  >
                    Select template
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" w-full flex justify-center mt-[50px]  text-[#fff]  ">
          <button className="hover:bg-[#7a5af8] hover:text-[#fff] transform transition-[all_0.25s] active:translate-y-[-0.25em] active:shadow-[0_0.5em_0.5em_-0.4em_#7a5af8] bg-[#fff] text-[#7a5af8] border-[1.5px] hover:border-purple_color rounded-[0.5rem] py-[0.3rem] px-[1.625rem] w-[8rem]">
            <p className="text-[1rem] font-inter leading-normal font-[500]">
              See More
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Template;
