import React from "react";
import check from "../assets/check.svg";
import paypal from "../assets/paypal.svg";
import stripe from "../assets/stripe.svg";
import crypto from "../assets/crypto.svg";

export const SitePlan = () => {
  return (
    <div className=" h-screen  flex justify-center items-center">
      <div className="flex max-w-[500px] p-[20px] w-full  flex-col items-start gap-[20px]">
        <div className="flex flex-col items-start gap-[10px]">
          <p className="text-[#171717] font-inter text-[34px] font-[600] leading-normal">
            Site Plan
          </p>
        </div>

        <div className="w-full  p-[30px] border-[1px] ">
          <div className="flex justify-between items-center">
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
            <div className="border-[1px] h-[40px] rounded-[5px] bg-[#fff]  flex items-center justify-center gap-[10px] w-full">
              <img src={paypal} alt="" />
              <p className="font-inter text-[14px] font-[500]">Paypal</p>
            </div>
            <div className="border-[1px] h-[40px] rounded-[5px] bg-[#fff]  flex items-center justify-center gap-[10px] w-full">
              <img src={stripe} alt="" />
              <p className="font-inter text-[14px]">Stripe</p>
            </div>
            <div className="border-[1px] h-[40px] rounded-[5px] bg-[#fff] flex items-center justify-center gap-[10px] w-full">
              <img src={crypto} alt="" />
              <p className="font-inter text-[14px]">Crypto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
