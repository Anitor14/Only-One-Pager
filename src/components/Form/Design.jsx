import { Radio } from "@mantine/core";
import { useTranslation } from "react-i18next";
const Design = ({
  formData,
  handleInputChange,
  logoIsValid,
  colorIsValid,
  fontIsValid,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex max-w-[55rem] w-full flex-col items-start gap-12">
      <div className="flex flex-col items-start gap-[10px]">
        <p className="text-[#171717] font-inter text-left text-[34px] font-[600] leading-normal">
          {`${t("DesignHeader")}`}
        </p>
        <p className="text-[#8f8f8f] font-inter text-left text-[16px] leading-normal">
          {`${t("DesignSubHeader")}`}
        </p>
      </div>

      <div className="flex flex-col w-full items-center justify-center gap-5">
        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="font-inter text-[1rem] font-[400] leading-normal">
            {`${t("DesignQOne")}`}
          </p>
          <div className="flex items-center gap-10">
            <Radio
              value="yes"
              label={`${t("Yes")}`}
              name="logo"
              onChange={handleInputChange}
              checked={formData.logo === "yes"}
              className="cursor-pointer"
            />
            <Radio
              value="no"
              label={`${t("No")}`}
              name="logo"
              onChange={handleInputChange}
              checked={formData.logo === "no"}
              className="cursor-pointer"
            />
          </div>
        </div>
        {logoIsValid === false ? (
          <p className=" w-full mt-[-15px]  text-left text-red-500 text-sm">
            select a field
          </p>
        ) : (
          ""
        )}

        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="font-inter text-[1rem] font-[400] leading-normal">
            {`${t("DesignQTwo")}`}
          </p>
          <div className="flex items-center gap-10">
            <Radio
              value="yes"
              label={`${t("Yes")}`}
              name="color"
              onChange={handleInputChange}
              checked={formData.color === "yes"}
            />
            <Radio
              value="no"
              label={`${t("No")}`}
              name="color"
              onChange={handleInputChange}
              checked={formData.color === "no"}
            />
          </div>
        </div>
        {colorIsValid === false ? (
          <p className="w-full mt-[-15px] text-left text-red-500 text-sm">
            select a field
          </p>
        ) : (
          ""
        )}

        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="font-inter text-[1rem] font-[400] leading-normal">
            {`${t("DesignQThree")}`}
          </p>
          <div className="flex items-center gap-10">
            <Radio
              value="yes"
              label={`${t("Yes")}`}
              name="font"
              onChange={handleInputChange}
              checked={formData.font === "yes"}
            />
            <Radio
              value="no"
              label={`${t("No")}`}
              name="font"
              onChange={handleInputChange}
              checked={formData.font === "no"}
            />
          </div>
        </div>
        {fontIsValid === false ? (
          <p className="w-full mt-[-15px] text-left text-red-500 text-sm">
            select a field
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Design;
