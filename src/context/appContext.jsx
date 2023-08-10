import { useReducer, useContext, useEffect } from "react";

import reducer from "./reducer";
import axios from "axios";

import {
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
} from "./action";

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
    // baseURL: "/api/v1",
    baseURL: "http://localhost:3000/api/",
  });

  const setupUser = async ({ currentUser, endPoint }) => {
    dispatch({ type: SETUP_USER_BEGIN });
  };
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
