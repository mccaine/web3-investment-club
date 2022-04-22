/* eslint-disable import/no-anonymous-default-export */
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  timeout: 0,
  stateReconciler: autoMergeLevel2,
  storage: AsyncStorage,
  whitelist: [],
};

export default (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  // saga middleware
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  // redux-persist
  const persistedReducer = persistReducer(persistConfig, rootReducer());

  const store = createStore(persistedReducer, composeWithDevTools(...enhancers));

  const persistor = persistStore(store, { manualPersist: false });

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
