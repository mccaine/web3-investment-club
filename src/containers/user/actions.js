import * as c from "./constants";

// SIGN IN ACTIONS
export const userSignInRequestAction = () => ({
  type: c.USER_SIGNIN_REQUEST,
  payload: {},
  error: false,
});

export const userSignInSuccessAction = (user) => ({
  type: c.USER_SIGNIN_SUCCESS,
  payload: { user },
  error: false,
});

export const userSignInFailureAction = (message) => ({
  type: c.USER_SIGNIN_FAILURE,
  payload: {
    message,
  },
  error: true,
});
