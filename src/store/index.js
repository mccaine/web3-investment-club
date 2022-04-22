import configureStore from "./configureStore";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const { store, persistor } = configureStore(rootReducer, rootSaga);

export { store, persistor };
