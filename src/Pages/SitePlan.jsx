import check from "../assets/check.svg";
import paypal from "../assets/paypal.svg";
import stripe from "../assets/stripe.svg";
import crypto from "../assets/crypto.svg";
// import arrow from "../assets/arrow.svg";

const SitePlan = () => {
  return (
    <div className="w-full sm:px-20 px-6 flex justify-center items-center bg-background_grey_color">
      {/* <div className="w-20 h-20 rounded-[50%] bg-light_gray_color hover:opacity-25 flex items-center justify-between">
        <img src={arrow} />
      </div> */}
      <div className="flex max-w-[34rem]  w-full  flex-col items-center gap-[20px] mt-[11rem] mb-[11rem]">
        <div className="flex w-full text-left flex-col items-start gap-[10px]">
          <p className="text-[#171717] font-inter text-[34px] font-[600] leading-normal">
            Site Plan
          </p>
        </div>

        <div className="w-full max-w-[34rem] p-[30px] border-[1px] rounded-lg border-border_color ">
          <div className="flex w-full justify-between items-center">
            <p className="text-[#171717]  font-inter text-[24px] leading-normal">
              Basic Plan
            </p>
            <p className="text-[#171717] font-inter font-[600] text-[34px] leading-normal">
              $159
            </p>
          </div>

          <div className="inline-flex flex-col  items-start mt-[50px] gap-[20px]">
            <div className="flex items-center gap-[9px]">
              <img src={check} alt="" />
              <p>Custom Domain</p>
            </div>

            <div className="flex items-center gap-[9px]">
              <img src={check} alt="" />
              <p>Custom Domain</p>
            </div>
            <div className="flex items-center gap-[9px]">
              <img src={check} alt="" />
              <p>Custom Domain</p>
            </div>
            <div className="flex items-center gap-[9px]">
              <img src={check} alt="" />
              <p>Custom Domain</p>
            </div>
            <div className="flex items-center gap-[9px]">
              <img src={check} alt="" />
              <p>Custom Domain</p>
            </div>
          </div>

          <div className="mt-[50px] flex w-full gap-[12px] justify-center items-center flex-col">
            <button className="border-[1px] h-[40px] rounded-[5px] bg-[#fff]  flex items-center justify-center gap-[10px] w-full">
              <img src={paypal} alt="" />
              <p className="font-inter text-[14px] font-[500]">Paypal</p>
            </button>
            <button className="border-[1px] h-[40px] rounded-[5px] bg-[#fff]  flex items-center justify-center gap-[10px] w-full">
              <img src={stripe} alt="" />
              <p className="font-inter text-[14px]">Stripe</p>
            </button>
            <button className="border-[1px] h-[40px] rounded-[5px] bg-[#fff] flex items-center justify-center gap-[10px] w-full">
              <img src={crypto} alt="" />
              <p className="font-inter text-[14px]">Crypto</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitePlan;
