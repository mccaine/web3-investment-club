import * as c from "./constants";

const initialState = {
  account: "",
  loading: false,
  updatedAt: 0,
};

const userReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case c.USER_SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case c.USER_SIGNIN_SUCCESS:
      return {
        ...state,
        account: payload.account,
        loading: false,
        updatedAt: Date.now(),
      };
    case c.USER_SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
