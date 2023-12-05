import { DOUBT_FAILED, DOUBT_REQUEST, DOUBT_SUCCESS } from "./actionType";

const initialState = {
  doubt: [],
  isLoading:false,
  isError:false
};


export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DOUBT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DOUBT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        doubt: [...state.doubt, payload],
      };
    case DOUBT_FAILED:
      return {
        ...state,
        isLoading: false,
        isError:true
      };
    default:
      return state;
  }
};
