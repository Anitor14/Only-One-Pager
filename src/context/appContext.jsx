import React, { useReducer, useContext, useEffect } from "react";
import { Buffer } from "buffer";

import reducer from "./reducer";
import axios from "axios";
// axios.defaults.withCredentials = true;

import {
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  VERIFY_USER_BEGIN,
  VERIFY_USER_SUCCESS,
  VERIFY_USER_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
  LOGOUT_USER,
} from "./action";
import { toast } from "react-toastify";

const initialState = {
  userLoading: true,
  isLoading: false,
  user: null,
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  // axios
  const authFetch = axios.create({
    baseURL: "https://seahorse-app-b4eqt.ondigitalocean.app/api",
    // baseURL: "http://localhost:3000/api",
    withCredentials: true,
  });
  // fresh desk
  const freshDeskApiKey = "ivu06vg8WJhdL1gwT13";
  const freshDeskDomain = "expectootechnologies";
  const freshDeskEmail = "support@only-onepager.com";

  const setupUser = async ({ currentUser, endPoint }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await authFetch.post(`/${endPoint}`, currentUser);
      console.log(data);
      const user = data.data;
      const message = data.description;
      dispatch({ type: SETUP_USER_SUCCESS, payload: { user } });
      toast.success(message);
    } catch (error) {
      dispatch({ type: SETUP_USER_ERROR });
      toast.error(
        error.response ? error.response.data.description : error.message
      );
    }
  };

  const registerUser = async ({ currentUser }) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const { data } = await authFetch.post(`/register`, currentUser);
      const message = data.description;
      dispatch({ type: REGISTER_USER_SUCCESS });
      toast.success(message);
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR });
      toast.error(
        error.response ? error.response.data.description : error.message
      );
    }
  };

  const logoutUser = async () => {
    try {
      const { data } = await authFetch.get("/logout");
      const user = data.data;
      const message = data.description;
      dispatch({ type: LOGOUT_USER });
      toast.success(message);
    } catch (error) {
      toast.error(
        error.response ? error.response.data.description : error.message
      );
    }
  };

  const verifyEmail = async ({ verificationToken, email, navigate }) => {
    dispatch({ type: VERIFY_USER_BEGIN });
    try {
      const { data } = await authFetch.post("/verify-email", {
        verificationToken,
        email,
      });
      console.log(data);
      const message = data.description;
      dispatch({ type: VERIFY_USER_SUCCESS });
      toast.success(message);
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      dispatch({ type: VERIFY_USER_ERROR });
      toast.error(
        error.response ? error.response.data.description : error.message
      );
    }
  };

  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
      const { data } = await authFetch.get(`/show-current-user`);
      const user = data.data;
      console.log(data);
      dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: { user } });
    } catch (error) {
      if (error.response.status === 401);
      dispatch({ type: GET_CURRENT_USER_ERROR });
      // logoutUser();
    }
  };

  const sendEmailToFreshDesk = async (email, webName) => {
    const subject = `Project Commencement of ${webName}`;
    const description = `I wanted to inform you that the project has officially commenced. This is my email: ${email}. Feel free to reach out if you have any questions or need further information.`;
    const data = {
      email: email,
      subject: subject,
      description: description,
      priority: 1,
      status: 2,
    };

    try {
      const response = await axios.post(
        `https://${freshDeskDomain}.freshdesk.com/api/v2/tickets`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa(freshDeskApiKey)}`,
          },
        }
      );
      toast.success(
        "successfully sent an email to the developers , check your email for corresponding communication."
      );
    } catch (error) {
      toast.error("There was an error in sending your email.");
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        // getBrowserLanguage,
        sendEmailToFreshDesk,
        setupUser,
        logoutUser,
        registerUser,
        verifyEmail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
