const Footer = () => {
  return (
    <div className="border-t-2 fixed  bg-[#fff] bottom-0 left-0 right-0">
      <div className=" max-w-[1512px]   px-[100px]">
        <div className="flex mt-[10px] w-full gap-[25px] mx-auto   ">
          <div>
            <img
              className="w-[60px] h-[33px]"
              src="../../src/assets/logo.svg"
              alt=""
            />
          </div>
          <div className="text-[#8F8F8F] text-[13px] font-[400] leading-normal">
            Copyright © 2023 Only web. All rights reserved.
          </div>
        </div>
        <div className="flex text-[#8F8F8F] text-[13px] gap-[90px]">
          <div>Home</div>
          <div>Home</div>
          <div>Home</div>
          <div>Home</div>
          <div>Home</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
