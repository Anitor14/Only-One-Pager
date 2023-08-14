import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import loginImage from "../assets/images/login-image.png";
import navLogo from "../assets/images/nav_logo.png";
import { toast } from "react-toastify";
import { IconX, IconCheck } from "@tabler/icons-react";
import { Loader } from "@mantine/core";
import {
  PasswordInput,
  Progress,
  Text,
  Popover,
  Box,
  TextInput,
} from "@mantine/core";

const initialState = {
  name: "",
  email: "",
  password: "",
};

function PasswordRequirement({ meets, label }) {
  return (
    <Text
      color={meets ? "teal" : "red"}
      sx={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size="0.9rem" /> : <IconX size="0.9rem" />}{" "}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getStrength(password) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [popoverOpened, setPopoverOpened] = useState(false);
  const { setupUser, user, isLoading } = useAppContext();
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(values.password)}
    />
  ));
  const strength = getStrength(values.password);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";
  const handleChange = (e) => {
    console.log("we are typing");
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    if (!email || !password || !name) {
      toast.error("please provide all the values");
      return;
    }
    const currentUser = { name, email, password };
    console.log("we are just getting started.");
    setupUser({
      currentUser,
      endPoint: "register",
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
    <div className="w-full h-screen overflow-scroll px-20 max-sm:px-6 py-6 grid grid-cols-[1fr,1fr] max-md:grid-cols-[1fr] place-items-center bg-background_grey_color">
      <div className="flex flex-col max-w-[26rem] w-full p-6 rounded-md sm:p-10  bg-white_color text-gray-800 font-inter">
        <img src={navLogo} className="w-20 h-8 mx-auto" />
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-inter font-bold">Register</h1>
          <p className="text-sm font-inter text-gray-600">
            Register to create your account.
          </p>
        </div>
        <form className="space-y-12" onSubmit={onSubmit}>
          <div className="space-y-4">
            <div>
              <TextInput
                placeholder="Your name"
                label="Full name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
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
              <TextInput
                placeholder="Your email"
                label="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
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
            <Popover
              opened={popoverOpened}
              position="bottom"
              width="target"
              transitionProps={{ transition: "pop" }}
            >
              <Popover.Target>
                <div
                  onFocusCapture={() => setPopoverOpened(true)}
                  onBlurCapture={() => setPopoverOpened(false)}
                >
                  <PasswordInput
                    label="Your password"
                    name="password"
                    placeholder="Your password"
                    value={values.password}
                    onChange={handleChange}
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
              </Popover.Target>
              <Popover.Dropdown>
                <Progress color={color} value={strength} size={5} mb="xs" />
                <PasswordRequirement
                  label="Includes at least 6 characters"
                  meets={values.password.length > 5}
                />
                {checks}
              </Popover.Dropdown>
            </Popover>
          </div>
          <div className="space-y-2">
            <div className="bg-purple_color rounded-md">
              <button
                type="submit"
                className="w-full flex justify-center items-center px-8 py-3 font-semibold text-white"
                disabled={isLoading}
              >
                {!isLoading ? "Sign up" : <Loader color="gray" size="xs" />}
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <NavLink
                to={"/login"}
                className="hover:underline text-violet-600"
              >
                Sign in
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

export default Register;
