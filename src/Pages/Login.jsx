import { NavLink } from "react-router-dom";
import loginImage from "../assets/images/login-image.png";
import navLogo from "../assets/images/nav_logo.png";
const Login = () => {
  return (
    <div className="w-full h-screen px-20 max-sm:px-6 grid grid-cols-[1fr,1fr] max-md:grid-cols-[1fr] place-items-center bg-background_grey_color">
      <div className="flex flex-col max-w-[26rem] w-full p-6 rounded-md sm:p-10  bg-white_color text-gray-800 font-inter">
        <img src={navLogo} className="w-20 h-8 mx-auto" />
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-inter font-bold">Login</h1>
          <p className="text-sm font-inter text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form novalidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label for="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-purple_color rounded-md">
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold text-white"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Don't have an account yet?{" "}
              <NavLink
                to={"/register"}
                className="hover:underline text-violet-600"
              >
                Sign up
              </NavLink>
              .
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
