import { Radio } from "@mantine/core";
const Communication = ({
  formData,
  handleInputChange,
  emailIsValid,
  socialIsValid,
}) => {
  return (
    <div className="flex max-w-[55rem] w-full flex-col items-start gap-12">
      <div className="flex flex-col items-start gap-[10px]">
        <p className="text-[#171717] font-inter text-left text-[34px] font-[600] leading-normal">
          Communication
        </p>
        <p className="text-[#8f8f8f] font-inter text-left text-[16px] leading-normal">
          Connect social handles to your website to improve your online presence
        </p>
      </div>

      <div className="flex flex-col w-full items-center justify-center gap-5">
        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="font-inter text-[1rem] font-[400] leading-normal">
            Do you have a business email for contact?
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
        {emailIsValid === false ? (
          <p className=" w-full  text-left text-red-500 text-sm">check a box</p>
        ) : (
          ""
        )}

        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="font-inter text-[1rem] font-[400] leading-normal">
            Would you like to link your business social handles to your website?
          </p>
          <div className="flex items-center gap-10">
            <Radio
              value="yes"
              label="Yes"
              name="social"
              onChange={handleInputChange}
              checked={formData.social === "yes"}
            />
            <Radio
              value="no"
              label="No"
              name="social"
              onChange={handleInputChange}
              checked={formData.social === "no"}
            />
          </div>
        </div>
        {socialIsValid === false ? (
          <p className=" w-full  text-left text-red-500 text-sm">check a box</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Communication;
