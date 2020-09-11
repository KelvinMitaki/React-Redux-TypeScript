import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App color="red" />
  </Provider>,
  document.getElementById("root")
);
