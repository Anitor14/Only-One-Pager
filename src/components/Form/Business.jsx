import { Textarea } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Business = ({
  formData,
  handleInputChange,
  nameIsValid,
  businessDetailsIsValid,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex max-w-[55rem] w-full flex-col items-start gap-12">
      <div className="flex w-full flex-col items-start text-left gap-[10px]">
        <p className="text-[#171717] font-inter text-[2.25rem] font-[600] leading-normal">
          {`${t("BusinessHeader")}`}
        </p>
        <p className="text-[#8f8f8f] font-inter text-[1rem] leading-normal">
          {`${t("BusinessSubHeader")}`}
        </p>
      </div>

      <div className="flex flex-col gap-5 w-full ">
        <TextInput
          type="text"
          name="name"
          label={`${t("BusinessWebName")}`}
          value={formData.name}
          className="flex flex-col gap-3"
          onChange={handleInputChange}
          withAsterisk
          error={nameIsValid !== true ? `${t("FieldError")}` : ""} // Add error prop to show error state if the name is invalid
          styles={{
            error: {
              fontSize: "0.75rem",
              fontWeight: "400",
              marginTop: "-0.5rem",
            },
          }}
        />
        <Textarea
          name="business_details"
          value={formData.business_details}
          onChange={handleInputChange}
          label={`${t("BusinessInfo")}`}
          className="flex flex-col gap-3"
          radius="md"
          withAsterisk
          minRows={7}
          error={businessDetailsIsValid !== true ? `${t("FieldError")}` : ""}
          styles={{
            error: {
              fontSize: "0.75rem",
              fontWeight: "400",
              marginTop: "-0.5rem",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Business;
