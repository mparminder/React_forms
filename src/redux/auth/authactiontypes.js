import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
} from "./authactions";

import { useHistory } from "react-router-dom";

import axios from "axios";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_SUCCESS,
    payload: error,
  };
};

export const loginSuccess = (users) => {
  return {
    type: LOGIN_FAILURE,
    payload: users,
  };
};

export const loginUser = (uname, pass, ownprops) => {
  return (dispatch) => {
    const data = {
      email: uname,
      password: pass,
    };
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    dispatch(loginRequest());
    axios
      .post("http://localhost:4000/api/login", data, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem("token", token);
        dispatch(loginSuccess("users"));
        ownprops.history.push("/Home");
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(loginError(errorMsg));
      });
  };
};

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
  };
};

export const registerFailure = () => {
  return {
    type: REGISTER_FAILURE,
  };
};

export const registerUser = (uname, pass) => {
  return (dispatch) => {
    const data = {
      email: uname,
      password: pass,
    };
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    dispatch(registerRequest());
    axios
      .post("http://localhost:4000/api/register", data, {
        headers: headers,
      })
      .then((response) => {
        const users = response.data;
        dispatch(registerSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(registerFailure(errorMsg));
      });
  };
};
