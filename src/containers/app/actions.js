import * as c from "./constants";

export const appResetStateAction = () => ({
  type: c.APP_RESET_STATE,
  payload: {},
  error: false,
});

export const appInitRequestAction = () => ({
  type: c.APP_INIT_REQUEST,
  payload: {},
  error: false,
});

export const appInitSuccessAction = () => ({
  type: c.APP_INIT_SUCCESS,
  payload: {},
  error: false,
});

export const appInitFailureAction = (message) => ({
  type: c.APP_INIT_FAILURE,
  payload: {
    message,
  },
  error: true,
});
