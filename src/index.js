import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ApplicationIndex from "./components/applicationindex";

const INITIAL_DATA = {
  user: [],
  album: [],
  photo: [],
};

const store = createStore(reducer);

function reducer(state = INITIAL_DATA, action) {
  if (action.type === "User_data") {
    state["user"] = action.payload;
    var new_state = { ...state };
    return new_state;
  } else if (action.type === "Album_data") {
    state["album"] = action.payload;
    var new_state = { ...state };
    return new_state;
  } else if (action.type === "Photo_data") {
    state["photo"] = action.payload;
    var new_state = { ...state };
    return new_state;
  } else {
    return state;
  }
}
const jsx = (
  <Provider store={store}>
    <ApplicationIndex />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
