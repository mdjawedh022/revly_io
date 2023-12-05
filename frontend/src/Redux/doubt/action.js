import axios from "axios";
import { DOUBT_FAILED, DOUBT_REQUEST, DOUBT_SUCCESS } from "./actionType";

const doubtReq = () => {
  return { type: DOUBT_REQUEST };
};
const doubtSucc = (payload) => {
  return { type: DOUBT_SUCCESS, payload };
};
const doubtFailed = () => {
  return { type: DOUBT_FAILED };
};
const data = JSON.parse(localStorage.getItem("userDetail"));
console.log(data)
axios.defaults.headers={
        "content-Type":"application/json",
        "Authorization":data.token

    }

export const doubtRequest = (values) => async (dispatch) => {
  dispatch(doubtReq());
  try {
    const res = await axios.post("http://localhost:8080/api/doubt", values
    );
    console.log(res);
    dispatch(doubtSucc(res))
  } catch (err) {
    dispatch(doubtFailed(err));
  }
};
