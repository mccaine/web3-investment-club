import { combineReducers } from "redux";

// constants
import { APP_RESET_STATE } from "@containers/app/constants";

// reducers
import appReducer from "@containers/app/reducer";
import authReducer from "@containers/auth/reducer";
import userReducer from "@containers/user/reducer";

const rootReducer = () => {
  const combineReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    user: userReducer,
  });

  return (state, action) => {
    let $state = state;
    if (action.type === APP_RESET_STATE) {
      /**
       * resets reducer state, ref – https://stackoverflow.com/a/35641992
       *
       * keep passed state (action.payload) or reset completely,
       * undefined will reset everything
       */
      $state = action.payload ? action.payload : undefined;
    }

    return combineReducer($state, action);
  };
};

export default rootReducer;
