import { takeLatest, put, all, call } from "redux-saga/effects";

// import { hcn } from "services/hcn";

import Router from "next/router";

import { USER_SIGNIN_REQUEST } from "./constants";
// import { userSignInFailureAction, userSignInSuccessAction } from "./actions";

export function* userSignin(action) {
  // const { rethrow } = action.settings;
  try {
    // const authUser = yield call(hcn.goGetAuthUser);
    // const { user } = yield call(hcn.doLoginUser, authUser.uid);
    // yield put(userSignInSuccessAction(user));
    // return user;
  } catch (err) {
    //   if (err.message) {
    //     yield put(userSignInFailureAction(err.message));
    //   }
    //   if (rethrow) {
    //     throw err;
    //   }
  }
}

export default function* watchUser() {
  yield all([takeLatest(USER_SIGNIN_REQUEST, userSignin)]);
}
