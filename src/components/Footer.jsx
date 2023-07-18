const Footer = () => {
  // return (
  //   <div className="mx-auto max-w-[1512px] px-[50px]">
  //     <div className="absolute bottom-0 ">
  //       <div className="flex mb-10 gap-[20px] mx-auto">
  //         <div>
  //           <img src="../../src/assets/logo.svg" alt="" />
  //         </div>
  //         <div className="text-[#8F8F8F]">
  //           Copyright © 2023 Only web. All rights reserved.
  //         </div>
  //       </div>
  //       <div className="flex gap-[60px] w-full mb-10 text-[#8F8F8F] mt-[20px]">
  //         <div>Home</div>
  //         <div>Home</div>
  //         <div>Home</div>
  //         <div>Home</div>
  //         <div>Home</div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="border-t-2  absolute bottom-0 left-0 right-0">
      <div className=" max-w-[1512px]   px-[100px]">
        <div className="flex mt-[35px] w-full gap-[25px] mx-auto   ">
          <div>
            <img
              className="w-[45px] h-[33px]"
              src="../../src/assets/logo.svg"
              alt=""
            />
          </div>
          <div className="text-[#8F8F8F] text-[14px] font-[400] leading-normal">
            Copyright © 2023 Only web. All rights reserved.
          </div>
        </div>
        <div className="flex text-[#8F8F8F] text-[14px] h-[46px] mt-[50px] gap-[90px]">
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
