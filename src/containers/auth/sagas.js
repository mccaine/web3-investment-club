import { takeLatest, put, all, call } from "redux-saga/effects";
import Router from "next/router";

import * as c from "./constants";
import { appResetStateAction } from "@containers/app/actions";
import { authSignOutFailureAction, authSignOutSuccessAction } from "@containers/auth/actions";

// TODO: disconnect wallet
async function signOut() {
  // return await signout function;
}

function* signOutRequest() {
  try {
    // yield call(signOut);
    yield put(appResetStateAction());
    yield put(authSignOutSuccessAction());
    yield Router.push("/");
  } catch (err) {
    yield put(authSignOutFailureAction(err.message));
  }
}

export default function* watchAuth() {
  yield all([takeLatest(c.AUTH_SIGN_OUT_REQUEST, signOutRequest)]);
}
