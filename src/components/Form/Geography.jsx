import { Select, Radio } from "@mantine/core";
import { useTranslation } from "react-i18next";
const Geography = ({
  formData,
  handleInputChange,
  handleSelectLanguage,
  languageIsValid,
  mapIsValid,
  domainIsValid,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex max-w-[55rem] w-full flex-col items-start gap-12">
      <div className="flex flex-col items-start gap-[10px]">
        <p className="text-[#171717] font-inter text-[34px] font-[600] leading-normal">
          Geography
        </p>
        <p className="text-[#8f8f8f] font-inter text-[16px] leading-normal">
          Geo-enable your website, share your whereabouts
        </p>
      </div>

      <div className="flex flex-col w-full items-center justify-center gap-5">
        <div className="w-full">
          <Select
            placeholder={`${t("GeographySelect")}`}
            name="language"
            value={formData.language}
            data={[
              { value: "spanish", label: `${t("Spanish")}` },
              { value: "english", label: `${t("English")}` },
              { value: "german", label: `${t("German")}` },
              { value: "dutch", label: `${t("Dutch")}` },
              { value: "italian", label: `${t("Italian")}` },
            ]}
            onChange={handleSelectLanguage}
            size="xl"
            error={languageIsValid !== true ? "pick a language" : ""}
          />
        </div>

        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="font-inter text-[1rem] font-[400] leading-normal">
            {`${t("GeographyQOne")}`}
          </p>
          <div className="flex items-center gap-10">
            <Radio
              value="yes"
              label={`${t("Yes")}`}
              name="map"
              onChange={handleInputChange}
              checked={formData.map === "yes"}
            />
            <Radio
              value="no"
              label={`${t("No")}`}
              name="map"
              onChange={handleInputChange}
              checked={formData.map === "no"}
            />
          </div>
        </div>
        {mapIsValid === false ? (
          <p className=" w-full mt-[-15px]  text-left text-red-500 text-sm">
            select a field
          </p>
        ) : (
          ""
        )}

        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="font-inter text-[1rem] font-[400] leading-normal">
            Do you have a domain?
          </p>
          <div className="flex items-center gap-10">
            <Radio
              value="yes"
              label={`${t("Yes")}`}
              name="domain"
              onChange={handleInputChange}
              checked={formData.domain === "yes"}
            />
            <Radio
              value="no"
              label={`${t("No")}`}
              name="domain"
              onChange={handleInputChange}
              checked={formData.domain === "no"}
            />
          </div>
        </div>
        {domainIsValid === false ? (
          <p className=" w-full mt-[-15px]  text-left text-red-500 text-sm">
            select a field
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Geography;
