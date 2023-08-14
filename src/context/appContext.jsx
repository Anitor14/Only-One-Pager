import React, { useReducer, useContext, useEffect } from "react";

import reducer from "./reducer";
import axios from "axios";
axios.defaults.withCredentials = true;

import {
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
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
  const [state, dispatch] = useReducer(reducer, initialState);
  // axios
  const authFetch = axios.create({
    baseURL: "http://localhost:3000/api",
  });

  //response
  // authFetch.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   (error) => {
  //     // console.log(error.response)
  //     if (error.response.status === 401) {
  //       logoutUser();
  //     }
  //     return Promise.reject(error);
  //   }
  // );

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

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        setupUser,
        logoutUser,
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
