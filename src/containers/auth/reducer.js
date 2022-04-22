import * as c from "./constants";

const initialState = {
  authenticated: false,
  loading: false,
  updatedAt: 0,
};

const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case c.AUTH_STATUS_SET:
      return {
        ...state,
        authenticated: payload.status,
      };
    default:
      return state;
  }
};

export default authReducer;
