import { all } from "redux-saga/effects";

// sagas
import watchAppActions from "@containers/app/sagas";
import watchAuthActions from "@containers/auth/sagas";
import watchUserActions from "@containers/user/sagas";

export default function* root() {
  yield all([watchAppActions(), watchAuthActions(), watchUserActions()]);
}
