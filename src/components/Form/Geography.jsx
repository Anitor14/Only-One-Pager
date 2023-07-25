import { Select, Radio } from "@mantine/core";
const Geography = ({ formData, handleInputChange, handleSelectLanguage }) => {
  return (
    <div className="flex max-w-[55rem] w-full flex-col items-start gap-12">
      <div className="flex flex-col items-start gap-[10px]">
        <p className="text-[#171717] font-inter text-[34px] font-[600] leading-normal">
          Geography
        </p>
        <p className="text-[#8f8f8f] font-inter text-[16px] leading-normal">
          Tell us your location and target audience location
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
          />
        </div>

        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="font-inter text-[1rem] font-[400] leading-normal">
            Do you need google map integration
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
            Do you have a business email for contact
          </p>
          <div className="flex items-center gap-10">
            <Radio
              value="yes"
              label="Yes"
              name="email"
              onChange={handleInputChange}
              checked={formData.email === "yes"}
            />
            <Radio
              value="no"
              label="No"
              name="email"
              onChange={handleInputChange}
              checked={formData.email === "no"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geography;
