import { takeLatest, put, all, call } from "redux-saga/effects";
import Web3 from "web3";

import Router from "next/router";

import { USER_SIGNIN_REQUEST } from "./constants";
import { userSignInFailureAction, userSignInSuccessAction } from "./actions";

export function* userSignin() {
  try {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const accounts = yield call(web3.eth.requestAccounts);
    yield put(userSignInSuccessAction(accounts[0]));
    return accounts[0];
  } catch (err) {
    yield put(userSignInFailureAction(err.message));
  }
}

export default function* watchUser() {
  yield all([takeLatest(USER_SIGNIN_REQUEST, userSignin)]);
}
