import wallet from "../assets/images/wallet.svg";
import paypal from "../assets/images/paypal.svg";
import bitcoin from "../assets/images/bitcoin.svg";
import download from "../assets/images/download.svg";
const Profile = () => {
  return (
    <section className="w-full px-20 max-sm:px-6 flex flex-col justify-center items-center bg-background_grey_color">
      <div className="w-full max-w-[66rem] items-start justify-start flex flex-col gap-5 mt-[11.5rem] mb-[17rem]">
        <div className="w-full max-w-[38rem] flex flex-col items-start justify-center gap-4">
          <p className="text-left font-inter text-black font-[600] text-[1.5rem] leading-normal">
            Profile
          </p>
          <p className="text-left font-inter text-light_gray_color font-[400] text-[0.875rem] leading-normal">
            Manage your account here
          </p>
          <div className="w-full grid grid-cols-[1fr] sm:grid-cols-[1fr,1fr] gap-5 items-center">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="nameInput"
                className="font-inter text-[0.875rem] font-[400] leading-normal text-black"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="nameInput"
                className="w-full border border-border_color rounded-[0.5rem] p-1"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="nameEmail"
                className="font-inter text-[0.875rem] font-[400] leading-normal text-black"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="nameEmail"
                className="w-full border border-border_color rounded-[0.5rem] p-1"
              />
            </div>
          </div>
          <p className="text-left font-inter text-purple_color font-[400] text-[1rem] leading-normal">
            Change Email
          </p>
          <p className="text-left font-inter text-purple_color font-[400] text-[1rem] leading-normal">
            Change Password
          </p>
          <div className="w-full h-[0.0625rem] bg-border_color" />
        </div>
        <div className="w-full max-w-[38rem] flex flex-col items-start justify-center gap-4">
          <p className="text-left font-inter text-black font-[600] text-[1.5rem] leading-normal">
            Billing address
          </p>
          <p className="text-left font-inter text-light_gray_color font-[400] text-[0.875rem] leading-normal">
            Manage your account here
          </p>
          <div className="w-full grid grid-cols-[1fr]  items-center">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="company_name"
                className="font-inter text-[0.875rem] font-[400] leading-normal text-black"
              >
                Company Name
              </label>
              <input
                type="text"
                name="company_name"
                id="company_name"
                className="w-full border border-border_color rounded-[0.5rem] p-1"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-[1fr] sm:grid-cols-[1fr,1fr] gap-5 items-center">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="address_line_one"
                className="font-inter text-[0.875rem] font-[400] leading-normal text-black"
              >
                Address Line 1
              </label>
              <input
                type="text"
                name="address_line_one"
                id="address_line_one"
                className="w-full border border-border_color rounded-[0.5rem] p-1"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="address_line_two"
                className="font-inter text-[0.875rem] font-[400] leading-normal text-black"
              >
                Address Line 2
              </label>
              <input
                type="text"
                name="address_line_two"
                id="address_line_two"
                className="w-full border border-border_color rounded-[0.5rem] p-1"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-[1fr] sm:grid-cols-[1fr,1fr] gap-5 items-center">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="zip"
                className="font-inter text-[0.875rem] font-[400] leading-normal text-black"
              >
                Zip
              </label>
              <input
                type="text"
                name="zip"
                id="zip"
                className="w-full border border-border_color rounded-[0.5rem] p-1"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="country"
                className="font-inter text-[0.875rem] font-[400] leading-normal text-black"
              >
                country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className="w-full border border-border_color rounded-[0.5rem] p-1"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-[1fr] sm:grid-cols-[1fr,1fr] gap-5 items-center">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="city"
                className="font-inter text-[0.875rem] font-[400] leading-normal text-black"
              >
                city
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="w-full border border-border_color rounded-[0.5rem] p-1"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="vat_number"
                className="font-inter text-[0.875rem] font-[400] leading-normal text-black"
              >
                Vat Number
              </label>
              <input
                type="vat"
                name="vat_number"
                id="vat_number"
                className="w-full border border-border_color rounded-[0.5rem] p-1"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-[1fr] sm:grid-cols-[1fr,1fr] gap-5 items-center">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="phone_number_one"
                className="font-inter text-[0.875rem] font-[400] leading-normal text-black"
              >
                Phone Number 1
              </label>
              <input
                type="tel"
                name="phone_number_one"
                id="phone_number_one"
                className="w-full border border-border_color rounded-[0.5rem] p-1"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="phone_number_two"
                className="font-inter text-[0.875rem] font-[400] leading-normal text-black"
              >
                Phone Number 2
              </label>
              <input
                type="tel"
                name="phone_number_two"
                id="phone_number_two"
                className="w-full border border-border_color rounded-[0.5rem] p-1"
              />
            </div>
          </div>
          <p className="text-left font-inter text-purple_color font-[400] text-[1rem] leading-normal">
            Change Email
          </p>
          <p className="text-left font-inter text-purple_color font-[400] text-[1rem] leading-normal">
            Change Password
          </p>
          <div className="w-full h-[0.0625rem] bg-border_color" />
        </div>
        <div className="w-full max-w-[38rem] flex flex-col items-start justify-center gap-4">
          <p className="text-left font-inter text-black font-[600] text-[1.5rem] leading-normal">
            Payment Information
          </p>
          <p className="text-left font-inter text-light_gray_color font-[400] text-[0.875rem] leading-normal">
            Manage your account here
          </p>
          <div className="w-full flex justify-between items-center">
            <button className="w-42  px-8 py-2 inline-flex gap-2 items-center justify-center bg-purple_color rounded-[0.375rem]  font-inter text-white font-[500] text-[0.875rem] leading-normal">
              <span>
                <img src={paypal} alt="paypal" />
              </span>
              Paypal
            </button>
            <button className="w-42  px-8 py-2 inline-flex gap-2 items-center justify-center bg-background_grey_color rounded-[0.375rem] border border-border_color  font-inter text-black font-[500] text-[0.875rem] leading-normal">
              <span>
                <img src={wallet} alt="credit cards" />
              </span>
              Credit Cards
            </button>
            <button className="w-42  px-8 py-2 inline-flex gap-2 items-center justify-center bg-background_grey_color rounded-[0.375rem] border border-border_color  font-inter text-black font-[500] text-[0.875rem] leading-normal">
              <span>
                <img src={bitcoin} alt="crypto" />
              </span>
              Crypto
            </button>
          </div>
          <div className="w-full h-[0.0625rem] bg-border_color" />
        </div>
        <div className="w-full max-w-[38rem] flex flex-col items-start justify-center gap-4">
          <p className="text-left font-inter text-black font-[600] text-[1.5rem] leading-normal">
            Invoice
          </p>
          <p className="text-left font-inter text-light_gray_color font-[400] text-[0.875rem] leading-normal">
            Manage your account here
          </p>
          <div className="w-full flex justify-between items-center rounded-[0.375rem] py-2 px-5 bg-[#EFEFEF]">
            <p className="font-inter text-purple_color font-[500] text-[0.875rem] leading-normal">
              Date
            </p>
            <p className="font-inter text-purple_color font-[500] text-[0.875rem] leading-normal">
              Product
            </p>
            <p className="font-inter text-purple_color font-[500] text-[0.875rem] leading-normal">
              Interaction
            </p>
            <p className="font-inter text-purple_color font-[500] text-[0.875rem] leading-normal">
              payment
            </p>
            <p className="font-inter text-purple_color font-[500] text-[0.875rem] leading-normal">
              Download
            </p>
          </div>
          <div className="w-full flex justify-between items-center rounded-[0.375rem] py-2 px-5 bg-white">
            <p className="font-inter text-[#4B4B4B] font-[400] text-[0.875rem] leading-normal">
              30-05-2003
            </p>
            <p className="font-inter text-[#4B4B4B] font-[400] text-[0.875rem] leading-normal">
              One Pager
            </p>
            <p className="font-inter text-[#4B4B4B] font-[400] text-[0.875rem] leading-normal">
              89,000
            </p>
            <p className="font-inter text-[#4B4B4B] font-[400] text-[0.875rem] leading-normal">
              Credit card
            </p>
            {/* <p className="font-inter text-[#4B4B4B] font-[400] text-[0.875rem] leading-normal">
              Download
            </p> */}
            <img src={download} className="cursor-pointer" alt="download svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
