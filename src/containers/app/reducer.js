import * as c from "./constants";

const initialState = {
  initialized: false,
  loading: false,
};

const appReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case c.APP_INIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case c.APP_INIT_SUCCESS:
      return {
        ...state,
        loading: false,
        initialized: true,
      };
    default:
      return state;
  }
};

export default appReducer;
