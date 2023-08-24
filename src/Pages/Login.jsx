import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import loginImage from "../assets/images/login-image.png";
import navLogo from "../assets/images/nav_logo.png";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader, PasswordInput, TextInput } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { CountriesDropdown } from "../components";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { setupUser, user, isLoading } = useAppContext();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      toast.error("please provide all the values");
      return;
    }
    const currentUser = { email, password };
    console.log("we are just getting started.");
    setupUser({
      currentUser,
      endPoint: "login",
    });
  };
  useEffect(() => {
    if (user) {
      console.log("this user is present", user);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user, navigate]);

  return (
    <div className="w-full h-screen px-20 max-sm:px-6 grid grid-cols-[1fr,1fr] max-md:grid-cols-[1fr] place-items-center bg-background_grey_color">
      <div className="absolute top-3 right-5">
        <CountriesDropdown />
      </div>
      <div className="flex flex-col max-w-[26rem] w-full p-6 rounded-md sm:p-10 border border-solid border-border_color shadow-md  bg-white_color text-gray-800 font-inter">
        <img src={navLogo} className="w-20 h-8 mx-auto" />
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-inter font-bold">{`${t(
            "Login"
          )}`}</h1>
          <p className="text-sm font-inter text-gray-600">{`${t(
            "LoginText"
          )}`}</p>
        </div>
        <form className="space-y-12" onSubmit={onSubmit}>
          <div className="space-y-4">
            <div>
              <TextInput
                placeholder={`${t("PlaceholderEmail")}`}
                label={`${t("LabelEmail")}`}
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                disabled={isLoading}
                required
                styles={{
                  label: {
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    marginBottom: "0.5rem",
                  },
                }}
              />
            </div>
            <div>
              <PasswordInput
                label={`${t("LabelPassword")}`}
                name="password"
                placeholder={`${t("PlaceholderPassword")}`}
                value={values.password}
                onChange={handleChange}
                required
                disabled={isLoading}
                styles={{
                  label: {
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    marginBottom: "0.5rem",
                  },
                }}
              />
              <div className="flex justify-between mt-2">
                {/* <label htmlFo="password" className="text-sm">
                  Password
                </label> */}
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs w-full text-right hover:underline text-gray-600"
                >
                  {`${t("ForgotPassword")}`}
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-purple_color rounded-md">
              <button
                type="submit"
                className="w-full flex justify-center items-center px-8 py-3 font-semibold text-white"
                disabled={isLoading}
              >
                {!isLoading ? "Log In" : <Loader color="gray" size="xs" />}
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              {`${t("LoginAccount")}`}{" "}
              <NavLink
                to={"/register"}
                className="hover:underline text-violet-600"
              >
                {`${t("SignUp")}`}
              </NavLink>
            </p>
          </div>
        </form>
      </div>
      <img
        src={loginImage}
        className="w-full h-full object-contain max-sm:hidden"
        alt="login-image"
      />
    </div>
  );
};

export default Login;
