const Design = () => {
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
          <p className="text-left font-inter text-[16px] text-black">
            Do you already have a logo?
          </p>
          <div className="flex items-center gap-[44px]">
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" value="Yes" name="map" id="" />
              <p>Yes</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" value="No" name="map" id="" />
              <p>No</p>
            </div>
          </div>
        </div>

        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="text-left font-inter text-[16px] text-black">
            Do you have a brand color already
          </p>
          <div className="flex items-center gap-[44px]">
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" value="yes" name="domain" id="" />
              <p>Yes</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" value="no" name="domain" id="" />
              <p>No</p>
            </div>
          </div>
        </div>

        <div className="w-full border-[1px] justify-between flex flex-row items-center px-6 py-6 rounded-[8px] bg-[#fff]">
          <p className="text-left font-inter text-[16px] text-black">
            Do you already have a Preferred font?
          </p>
          <div className="flex items-center gap-[44px]">
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" value="yes" name="domain" id="" />
              <p>Yes</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" value="no" name="domain" id="" />
              <p>No</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
