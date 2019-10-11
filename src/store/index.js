import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

export default function configuresStore(preloadedState) {
  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
}
