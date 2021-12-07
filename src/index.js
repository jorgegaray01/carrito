import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDopd94fZnabuITPcURJ53G3ME2Lt5vccY",
  authDomain: "carrito-62001.firebaseapp.com",
  projectId: "carrito-62001",
  storageBucket: "carrito-62001.appspot.com",
  messagingSenderId: "96188028994",
  appId: "1:96188028994:web:5b03db885068494e4535db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
