import * as c from "./constants";

// SIGN IN ACTIONS
export const userSignInRequestAction = () => ({
  type: c.USER_SIGNIN_REQUEST,
  payload: {},
  error: false,
});

export const userSignInSuccessAction = (account) => ({
  type: c.USER_SIGNIN_SUCCESS,
  payload: { account },
  error: false,
});

export const userSignInFailureAction = (message) => ({
  type: c.USER_SIGNIN_FAILURE,
  payload: {
    message,
  },
  error: true,
});
