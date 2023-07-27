import { Radio } from "@mantine/core";
const Design = ({ formData, handleInputChange }) => {
  return (
    <div className="flex max-w-[55rem] w-full flex-col items-start gap-12">
      <div className="flex flex-col items-start gap-[10px]">
        <p className="text-[#171717] font-inter text-left text-[34px] font-[600] leading-normal">
          Design
        </p>
        <p className="text-[#8f8f8f] font-inter text-left text-[16px] leading-normal">
          Customize your website in just a few click, select colors and
          preferred fonts.
        </p>
      </div>

      <div className="flex flex-col w-full items-center justify-center gap-5">
        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="font-inter text-[1rem] font-[400] leading-normal">
            Do you already have a logo
          </p>
          <div className="flex items-center gap-10">
            <Radio
              value="yes"
              label="Yes"
              name="logo"
              onChange={handleInputChange}
              checked={formData.logo === "yes"}
            />
            <Radio
              value="no"
              label="No"
              name="logo"
              onChange={handleInputChange}
              checked={formData.logo === "no"}
            />
          </div>
        </div>

        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="font-inter text-[1rem] font-[400] leading-normal">
            Do you have a brand color already
          </p>
          <div className="flex items-center gap-10">
            <Radio
              value="yes"
              label="Yes"
              name="color"
              onChange={handleInputChange}
              checked={formData.color === "yes"}
            />
            <Radio
              value="no"
              label="No"
              name="color"
              onChange={handleInputChange}
              checked={formData.color === "no"}
            />
          </div>
        </div>

        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="font-inter text-[1rem] font-[400] leading-normal">
            Do you already have a preferred font?
          </p>
          <div className="flex items-center gap-10">
            <Radio
              value="yes"
              label="Yes"
              name="font"
              onChange={handleInputChange}
              checked={formData.font === "yes"}
            />
            <Radio
              value="no"
              label="No"
              name="font"
              onChange={handleInputChange}
              checked={formData.font === "no"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
