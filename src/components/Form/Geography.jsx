import { Select, Radio } from "@mantine/core";
const Geography = ({
  formData,
  handleInputChange,
  handleSelectLanguage,
  languageIsValid,
}) => {
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
            placeholder="Select Language"
            name="language"
            value={formData.language}
            data={[
              { value: "spanish", label: "Spanish" },
              { value: "english", label: "English" },
              { value: "german", label: "German" },
              { value: "dutch", label: "Dutch" },
              { value: "italian", label: "Italian" },
            ]}
            onChange={handleSelectLanguage}
            error={languageIsValid !== true ? "pick a language" : ""}
          />
        </div>

        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="font-inter text-[1rem] font-[400] leading-normal">
            Do you need google map integration?
          </p>
          <div className="flex items-center gap-10">
            <Radio
              value="yes"
              label="Yes"
              name="map"
              onChange={handleInputChange}
              checked={formData.map === "yes"}
            />
            <Radio
              value="no"
              label="No"
              name="map"
              onChange={handleInputChange}
              checked={formData.map === "no"}
            />
          </div>
        </div>

        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="font-inter text-[1rem] font-[400] leading-normal">
            Do you have a domain?
          </p>
          <div className="flex items-center gap-10">
            <Radio
              value="yes"
              label="Yes"
              name="domain"
              onChange={handleInputChange}
              checked={formData.domain === "yes"}
            />
            <Radio
              value="no"
              label="No"
              name="domain"
              onChange={handleInputChange}
              checked={formData.domain === "no"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geography;
