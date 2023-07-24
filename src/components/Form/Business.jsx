const Business = () => {
  return (
    <div className="flex max-w-[55rem] w-full flex-col items-start gap-12">
      <div className="flex w-full flex-col items-start text-left gap-[10px]">
        <p className="text-[#171717] font-inter text-[2.25rem] font-[600] leading-normal">
          Tell us about your business
        </p>
        <p className="text-[#8f8f8f] font-inter text-[1rem] leading-normal">
          This information will be used to customize the best interface tailored
          for your business need
        </p>
      </div>

      <div className="flex flex-col gap-1.5 w-full ">
        <label
          htmlFor="business_details"
          className="font-inter text-[0.875rem] font-[400] leading-normal text-black"
        >
          Tell us all about your business
        </label>
        <textarea
          type="text"
          name="business_details"
          id="business_details"
          className="w-full border border-border_color rounded-[0.5rem] p-6"
        />
      </div>
    </div>
  );
};

export default Business;
