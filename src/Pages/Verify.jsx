import React, { useState, useEffect } from "react";
import navLogo from "../assets/images/nav_logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { PinInput, Loader } from "@mantine/core";
import { useTranslation } from "react-i18next";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Verify = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const { verifyEmail, user, isLoading } = useAppContext();
  const query = useQuery();
  const verificationToken = query.get("token");
  const email = query.get("email");
  console.log(verificationToken, email);
  const handleChange = (value) => {
    console.log(value);
    setValue(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    verifyEmail({ verificationToken, email, navigate });
  };
  useEffect(() => {
    if (verificationToken) {
      setValue(verificationToken);
    }
  }, []);
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user, navigate]);
  return (
    <div className="w-full h-screen px-20 max-sm:px-6 grid place-items-center bg-background_grey_color">
      <div className="flex flex-col max-w-[26rem] w-full p-6 rounded-md sm:p-10 border border-solid border-border_color shadow-md bg-white_color text-gray-800 font-inter">
        <img src={navLogo} className="w-20 h-8 mx-auto" />
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-inter font-bold">{`${t(
            "VerifyEmail"
          )}`}</h1>
          <p className="text-sm font-inter text-gray-600">
            Verify your email to access your account
          </p>
        </div>
        <form className="space-y-12" onSubmit={onSubmit}>
          <div className="space-y-4">
            <div className="grid place-items-center">
              <PinInput
                length={6}
                type="alphanumeric"
                size="lg"
                value={value}
                name="token"
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-purple_color rounded-md">
              <button
                type="submit"
                className="w-full flex justify-center items-center px-8 py-3 font-semibold text-white"
                disabled={isLoading}
              >
                {!isLoading ? (
                  `${t("VerifyEmail")}`
                ) : (
                  <Loader color="gray" size="xs" />
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;
