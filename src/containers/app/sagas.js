import { takeLatest, put, all, call } from "redux-saga/effects";
// import { push } from "connected-react-router";

// import { userSignin } from "containers/user/sagas";
// import { spacesGetRequest } from "containers/space/sagas";
// import { SPACE_CREATE } from "navigation/constants";

import { APP_INIT_REQUEST } from "./constants";
// import { SPACES } from "navigation/constants";
// import { appInitFailureAction, appInitSuccessAction } from "./actions";

function isMetaMaskInstalled() {
  return Boolean(window.ethereum && window.ethereum.isMetaMask);
}

async function isMetaMaskConnected() {
  const { ethereum } = window;
  const accounts = await ethereum.request({ method: "eth_accounts" });
  return accounts && accounts.length > 0;
}

function* appInitRequest() {
  //get user and settings
  try {
    const connected = yield call(isMetaMaskConnected);
    const installed = yield call(isMetaMaskInstalled);
    console.log({ connected, installed });
    // yield call(userSignin, { settings: { rethrow: true } });
    // const spaces = yield call(spacesGetRequest, {
    //   settings: { rethrow: true },
    // });
    // if (!spaces) {
    //   yield put(push(SPACE_CREATE));
    // } else {
    //   yield put(push(SPACES));
    // }
    // yield put(appInitSuccessAction());
  } catch (err) {
    // yield put(appInitFailureAction(err.message));
  }
}

export default function* watchApp() {
  yield all([takeLatest(APP_INIT_REQUEST, appInitRequest)]);
}
