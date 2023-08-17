import { Radio } from "@mantine/core";
import { useTranslation } from "react-i18next";
const Communication = ({
  formData,
  handleInputChange,
  emailIsValid,
  socialIsValid,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex max-w-[55rem] w-full flex-col items-start gap-12">
      <div className="flex flex-col items-start gap-[10px]">
        <p className="text-[#171717] font-inter text-left text-[34px] font-[600] leading-normal">
          {`${t("CommunicationHeader")}`}
        </p>
        <p className="text-[#8f8f8f] font-inter text-left text-[16px] leading-normal">
          {`${t("CommunicationSubHeader")}`}
        </p>
      </div>

      <div className="flex flex-col w-full items-center justify-center gap-5">
        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="font-inter text-[1rem] font-[400] leading-normal">
            {`${t("CommunicationQOne")}`}
          </p>
          <div className="flex items-center gap-10">
            <Radio
              value="yes"
              label={`${t("Yes")}`}
              name="email"
              onChange={handleInputChange}
              checked={formData.email === "yes"}
            />
            <Radio
              value="no"
              label={`${t("No")}`}
              name="email"
              onChange={handleInputChange}
              checked={formData.email === "no"}
            />
          </div>
        </div>
        {emailIsValid === false ? (
          <p className=" w-full mt-[-15px]  text-left text-red-500 text-sm">
            select a field
          </p>
        ) : (
          ""
        )}

        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="font-inter text-[1rem] font-[400] leading-normal">
            {`${t("CommunicationQTwo")}`}
          </p>
          <div className="flex items-center gap-10">
            <Radio
              value="yes"
              label={`${t("Yes")}`}
              name="social"
              onChange={handleInputChange}
              checked={formData.social === "yes"}
            />
            <Radio
              value="no"
              label={`${t("No")}`}
              name="social"
              onChange={handleInputChange}
              checked={formData.social === "no"}
            />
          </div>
        </div>
        {socialIsValid === false ? (
          <p className=" w-full mt-[-15px] text-left text-red-500 text-sm">
            select a field
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Communication;
