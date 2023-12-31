import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import check from "../../assets/check.svg";
import paypal from "../../assets/paypal.svg";
import stripe from "../../assets/stripe.svg";
import crypto from "../../assets/crypto.svg";
import arrow from "../../assets/arrow.svg";
import paymentAnimation from "../../assets/gifs/payment_animation.gif";
import Motivation from "../../components/Form/Motivation";
import yippieGifs from "../../assets/gifs/yippie-gifs.gif";
import teddyBearGif from "../../assets/gifs/teddy-bear-gif.gif";

// import paymentAnimation from "../assets/lottieFiles/animation_lks558m6.json";

const SitePlan = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // add this comment
  return (
    <div className="w-full px-20 max-sm:px-6 flex justify-center items-center relative bg-background_grey_color">
      <div
        className="w-8 h-8 rounded-[50%] bg-light_gray_color hover:opacity-70 flex items-center justify-between cursor-pointer absolute top-[150px] left-7 "
        onClick={() => navigate(-1)}
      >
        <img src={arrow} className="mx-auto" />
      </div>

      <div className="flex max-w-[34rem] relative w-full  flex-col items-center gap-[20px] mt-[11rem] mb-[11rem]">
        <Motivation
          image={teddyBearGif}
          quote={
            "Yippie!!! you have taken a bold step to building your website."
          }
          payment
        />

        <div className="flex w-full text-left flex-col items-start gap-[10px]">
          <p className="text-[#171717] font-inter text-[34px] font-[600] leading-normal">
            {`${t("SitePlanHeader")}`}
          </p>
        </div>
        <div className="w-full max-w-[34rem] p-[30px] border-[1px] rounded-lg bg-white border-border_color ">
          <img
            src={paymentAnimation}
            className="w-[200px] h-[200px] absolute top-[260px] max-sm:hidden right-[50px]"
          />
          <div className="flex w-full justify-between items-center">
            <p className="text-[#171717]  font-inter text-[24px] leading-normal">
              {`${t("BasicPlan")}`}
            </p>
            <p className="text-[#171717] font-inter font-[600] text-[34px] leading-normal">
              $159
            </p>
          </div>

          <p className="font-inter font-[400] mt-4 text-[1rem] text-black ">
            {`${t("SitePlanSubHeader")}`}
          </p>

          <div className="flex flex-col items-start mt-[2rem] gap-[20px]">
            <div className="flex items-center gap-[9px]">
              <img src={check} alt="" />
              <p>{`${t("SitePlanF1")}`} </p>
            </div>

            <div className="flex items-center gap-[9px]">
              <img src={check} alt="" />
              <p>{`${t("SitePlanF2")}`}</p>
            </div>
            <div className="flex items-center gap-[9px]">
              <img src={check} alt="" />
              <p>{`${t("SitePlanF3")}`}</p>
            </div>
            <div className="flex items-center gap-[9px]">
              <img src={check} alt="" />
              <p>{`${t("SitePlanF4")}`}</p>
            </div>
            <div className="flex items-center gap-[9px]">
              <img src={check} alt="" />
              <p>{`${t("SitePlanF5")}`}</p>
            </div>
            <div className="flex items-center gap-[9px]">
              <img src={check} alt="" />
              <p>{`${t("SitePlanF6")}`}</p>
            </div>
            <div className="flex items-center gap-[9px]">
              <img src={check} alt="" />
              <p>{`${t("SitePlanF7")}`}</p>
            </div>
            <div className="flex items-center gap-[9px]">
              <img src={check} alt="" />
              <p>{`${t("SitePlanF8")}`}</p>
            </div>
            <div className="flex items-center gap-[9px]">
              <img src={check} alt="" />
              <p> {`${t("SitePlanF9")}`}</p>
            </div>
          </div>

          <div className="mt-[50px] flex w-full gap-[12px] justify-center items-center flex-col">
            <button className="border-[1px] h-[40px] rounded-[5px] bg-[#fff]  flex items-center justify-center gap-[10px] w-full shadow-sm">
              <img src={paypal} alt="" />
              <p className="font-inter text-[14px] font-[500]">Paypal</p>
            </button>
            <button className="border-[1px] h-[40px] rounded-[5px] bg-[#fff]  flex items-center justify-center gap-[10px] w-full shadow-sm">
              <img src={stripe} alt="" />
              <p className="font-inter text-[14px]">Stripe</p>
            </button>
            <button className="border-[1px] h-[40px] rounded-[5px] bg-[#fff] flex items-center justify-center gap-[10px] w-full shadow-sm">
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
