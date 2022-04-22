import * as c from "./constants";

// AUTH STATUS ACTIONS
export const authStatusSetAction = (status) => ({
  type: c.AUTH_STATUS_SET,
  payload: {
    status,
  },
  error: false,
});

// SIGN OUT ACTIONS
export const authSignOutRequestAction = () => ({
  type: c.AUTH_SIGN_OUT_REQUEST,
  payload: {},
  error: false,
});

export const authSignOutSuccessAction = () => ({
  type: c.AUTH_SIGN_OUT_SUCCESS,
  payload: {},
  error: false,
});

export const authSignOutFailureAction = (message) => ({
  type: c.AUTH_SIGN_OUT_FAILURE,
  payload: {
    message,
  },
  error: true,
});
