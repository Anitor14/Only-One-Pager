import { Textarea } from "@mantine/core";
import { TextInput } from "@mantine/core";
const Business = ({
  formData,
  handleInputChange,
  nameIsValid,
  businessDetailsIsValid,
}) => {
  return (
    <div className="flex max-w-[55rem] w-full flex-col items-start gap-12">
      <div className="flex w-full flex-col items-start text-left gap-[10px]">
        <p className="text-[#171717] font-inter text-[2.25rem] font-[600] leading-normal">
          About Business
        </p>
        <p className="text-[#8f8f8f] font-inter text-[1rem] leading-normal">
          This information will be used to customize the best interface tailored
          for your business need
        </p>
      </div>

      <div className="flex flex-col gap-5 w-full ">
        <TextInput
          type="text"
          name="name"
          label="Website Name"
          value={formData.name}
          className="flex flex-col gap-3"
          onChange={handleInputChange}
          withAsterisk
          error={nameIsValid !== true ? "field cannot be empty" : ""} // Add error prop to show error state if the name is invalid
        />
        <Textarea
          name="business_details"
          value={formData.business_details}
          onChange={handleInputChange}
          label="Tell us all about your business"
          className="flex flex-col gap-3"
          radius="md"
          withAsterisk
          minRows={7}
          error={businessDetailsIsValid !== true ? "field cannot be empty" : ""}
        />
      </div>
    </div>
  );
};

export default Business;
