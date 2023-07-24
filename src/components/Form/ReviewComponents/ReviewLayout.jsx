import imgIcon from "../../../assets/images/image_icon.svg";
const ReviewLayout = ({ section, sectionData }) => {
  const ReviewData = ({ text, image }) => {
    return (
      <div className="w-full grid items-center justify-center grid-cols-[1fr] gap-5 sm:grid-cols-[8fr,6fr]">
        <div className="px-5 py-3 border border-border_color h-[13rem] rounded-[0.5rem]">
          <p className="font-inter font-[500] text-[0.875rem] leading-normal text-light_gray_color">
            {text}
          </p>
        </div>
        <div className="border flex items-center justify-center border-border_color overflow-hidden h-[13rem] rounded-[0.5rem]">
          {image ? (
            <img
              src={image}
              alt="sunflower"
              className="w-full h-full object-cover"
            />
          ) : (
            // <div className="drop-area" onDragOver={(e) => e.preventDefault()}>
            //   <p>Drag and drop images here</p>
            //   <input type="file" multiple />
            // </div>
            <div className="text-center flex flex-col items-center justify-center">
              <img src={imgIcon} alt="image icon" />
              <p className="font-inter font-[500] text-[0.875rem] leading-normal text-light_gray_color mt-2">
                Drag and drop your image
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5">
      <div className=" w-full flex items-center justify-between border border-border_color rounded-[0.5rem] bg-[#F5F5F5] px-2 py-1">
        <p>{section}</p>
      </div>
      {section !== "Footer"
        ? sectionData.map((datum, index) => {
            return <ReviewData key={index} {...datum} />;
          })
        : ""}
    </div>
  );
};

export default ReviewLayout;
