import axios from "axios";
import { USER_ERROR, USER_REQUEST, USER_SUCCESS } from "./actionType";

const userReq = () => {
  return { type: USER_REQUEST };
};
const userSuc = (payload) => {
  return { type: USER_SUCCESS, payload };
};
const userFail = () => {
  return { type: USER_ERROR };
};
// register---------------------------------
const userSignReq = () => {
  return { type: USER_REQUEST };
};
// const userSignSuc = (payload) => {
//   return { type: USER_SUCCESS, payload };
// };
const userSignFail = () => {
  return { type: USER_ERROR };
};

export const login = (userData) => async (dispatch) => {
  dispatch(userReq());

  try {
    const response = await axios.post(
      "http://localhost:8080/user/login",
      userData
    );
    console.log(response);
    dispatch(userSuc(response));
    localStorage.setItem("userDetail", JSON.stringify(response.data));
  } catch (error) {
    dispatch(userFail(error.message));
  }
};

export const signup = (userData) => async (dispatch) => {
  dispatch(userSignReq());

  try {
    const response = await axios.post(
     "http://localhost:8080/user/register",
      userData
    );
    console.log(response.data);
    // dispatch(userSignSuc(response.data));
  } catch (error) {
    dispatch(userSignFail(error.message));
  }
};

