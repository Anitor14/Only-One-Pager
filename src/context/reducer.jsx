import { toast } from "react-toastify";
import {
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  VERIFY_USER_BEGIN,
  VERIFY_USER_SUCCESS,
  VERIFY_USER_ERROR,
} from "./action";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return { ...state, isLoading: false, user: action.payload.user };
  }
  if (action.type === SETUP_USER_ERROR) {
    return { ...state, isLoading: false };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return { ...state, isLoading: false };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return { ...state, isLoading: false };
  }
  if (action.type === VERIFY_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === VERIFY_USER_SUCCESS) {
    return { ...state, isLoading: false };
  }
  if (action.type === VERIFY_USER_ERROR) {
    return { ...state, isLoading: false };
  }
  if (action.type === GET_CURRENT_USER_BEGIN) {
    return { ...state, userLoading: true };
  }
  if (action.type === GET_CURRENT_USER_SUCCESS) {
    return { ...state, userLoading: false, user: action.payload.user };
  }
  if (action.type === GET_CURRENT_USER_ERROR) {
    return { ...state, userLoading: false };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      userLoading: false,
    };
  }
  throw new Error(`No such action : ${action.type}`);
};

export default reducer;
