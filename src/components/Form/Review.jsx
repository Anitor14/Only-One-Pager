import imageIcon from "../../assets/images/image_icon.svg";
import sunflower from "../../assets/images/sunflower.png";
import ReviewLayout from "./ReviewComponents/ReviewLayout";
import daisyFlower from "../../assets/images/flower_daisy.png";
import roseFlower from "../../assets/images/flower_rose.png";

const previewData = [
  {
    section: "hero",
    sectionData: [
      { text: "Tell us all about your business", image: sunflower },
    ],
  },
  {
    section: "Cards",
    sectionData: [
      {
        text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu",
        image: daisyFlower,
      },
      {
        text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu",
        image: roseFlower,
      },
    ],
  },
  {
    section: "Reviews",
    sectionData: [{ text: "Flower Shop" }],
  },
  {
    section: "Pricing",
    sectionData: [{ text: "2$/pot" }],
  },
];
const Review = () => {
  return (
    <div className="max-w-[66rem] w-full flex flex-col gap-10 items-center justify-center">
      <div className="text-left w-full">
        <p className="font-inter font-[600] text-[2.125rem] leading-normal text-black mb-2">
          Review
        </p>
        <p className="font-inter font-[400] leading-normal text-light_gray_color">
          Preview all your presets
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-full gap-5">
        <div className="w-full p-8 rounded-[0.5rem] flex flex-col items-center justify-center border border-border_color">
          <div className="w-full mb-3">
            <p className="text-left font-inter font-[500] text-[1rem] text-black">
              Tell us all about your business
            </p>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-5">
            <div className="flex items-center border border-border_color rounded-[0.5rem] justify-between px-5 py-6 w-full">
              <p className="text-left font-inter font-[500] text-[1rem] text-black">
                Logo
              </p>
              <div className="w-14  h-14 rounded-[50%] bg-[#F5F5F5] flex items-center justify-center">
                <img src={imageIcon} alt="image-icon" />
              </div>
            </div>
            <div className="flex items-center border border-border_color rounded-[0.5rem] justify-between px-5 py-6 w-full">
              <p className="text-left font-inter font-[500] text-[1rem] text-black">
                Preferred color
              </p>
              <div className="flex justify-center items-center gap-2">
                <div className="w-[2.125rem] h-[2.125rem] rounded-[0.125rem] bg-[#D9D9D9] "></div>
                <div className="w-[2.125rem] h-[2.125rem] rounded-[0.125rem] bg-[#D9D9D9] "></div>
              </div>
            </div>
            <div className="flex items-center border border-border_color rounded-[0.5rem] justify-between px-5 py-6 w-full">
              <p className="text-left font-inter font-[500] text-[1rem] text-black">
                Preferred email
              </p>
              <div className="max-w-[18.7rem] w-full p-2 rounded-[0.25rem] bg-[#F5F5F5] ">
                <p className="text-center">user@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center border border-border_color rounded-[0.5rem] justify-between px-5 py-6 w-full">
              <p className="text-left font-inter font-[500] text-[1rem] text-black">
                Preferred Language
              </p>
              <div className="max-w-[18.7rem] w-full p-2 rounded-[0.25rem] bg-[#F5F5F5] ">
                <p className="text-center">English</p>
              </div>
            </div>
            <div className="flex items-center border border-border_color rounded-[0.5rem] justify-between px-5 py-6 w-full">
              <p className="text-left font-inter font-[500] text-[1rem] text-black">
                Target audience
              </p>
              <div className="max-w-[18.7rem] w-full p-2 rounded-[0.25rem] bg-[#F5F5F5] ">
                <p className="text-center">Global</p>
              </div>
            </div>
            <div className="flex items-center border border-border_color rounded-[0.5rem] justify-between px-5 py-6 w-full">
              <p className="text-left font-inter font-[500] text-[1rem] text-black">
                Map integration
              </p>
              <div className="max-w-[18.7rem] w-full p-2 rounded-[0.25rem] bg-[#F5F5F5] ">
                <p className="text-center">Office address</p>
              </div>
            </div>
            <div className="flex items-center border border-border_color rounded-[0.5rem] justify-between px-5 py-6 w-full">
              <p className="text-left font-inter font-[500] text-[1rem] text-black">
                Domain
              </p>
              <div className="max-w-[18.7rem] w-full p-2 rounded-[0.25rem] bg-[#F5F5F5] ">
                <p className="text-center">Domain Details</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-8 rounded-[0.5rem] flex flex-col gap-5 items-center justify-center border border-border_color">
          {previewData.map((previewDatum, index) => {
            return <ReviewLayout key={index} {...previewDatum} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Review;
