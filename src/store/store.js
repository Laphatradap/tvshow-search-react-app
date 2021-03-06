import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);
// persistor.purge()
export { store, persistor };


//Without redux-persist
// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "./rootReducer";
// import ReduxThunk from "redux-thunk";

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
//   ? window.__REDUX_DEVTOOLS_EXTENSION__()
//   : (x) => x;

// const enhancer = compose(applyMiddleware(ReduxThunk), devTools);
// const store = createStore(rootReducer, enhancer);

// export default store; 