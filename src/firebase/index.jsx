import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDopd94fZnabuITPcURJ53G3ME2Lt5vccY",
    authDomain: "carrito-62001.firebaseapp.com",
    projectId: "carrito-62001",
    storageBucket: "carrito-62001.appspot.com",
    messagingSenderId: "96188028994",
    appId: "1:96188028994:web:5b03db885068494e4535db"
};

initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);