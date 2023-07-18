import firstTemplateImage from "../assets/images/template_image_1.jpg";
import secondTemplateImage from "../assets/images/template_image_2.jpg";
import thirdTemplateImage from "../assets/images/template_image_3.jpg";
const imagesDatum = [
  { name: "firstImage", image: firstTemplateImage },
  { name: "secondImage", image: secondTemplateImage },
  { name: "thirdImage", image: thirdTemplateImage },
];

const Template = () => {
  return (
    <div className="w-full sm:px-20 px-6 flex justify-center items-center bg-background_grey_color">
      <div className="w-full max-w-[66rem] my-24 flex flex-col justify-center items-center bg-white text-center py-14 px-20 rounded-lg border border-border_color ">
        <p className="text-black_color font-inter font-[600] text-[1.5rem] leading-normal pb-5">
          Select Template
        </p>
        <p className="text-light_gray_color font-inter">
          Create no-code websites with templates that suits your business
          requirements
        </p>
        <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,1fr,1fr] justify-between gap-5 mt-7 ">
          {imagesDatum.map((imageData, index) => {
            return (
              <div
                className="bg-white rounded-lg overflow-hidden min-h-[13rem] shadow-md"
                key={index}
              >
                <img
                  src={imageData.image}
                  alt={imageData.name}
                  className="w-full h-[10rem] object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Template;
