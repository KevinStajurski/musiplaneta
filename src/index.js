import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from 'react-router-dom';
import {router} from "./router"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjUt5em4YVGWS48bLy9BWkIyNBuWsfiC0",
  authDomain: "musiplaneta-9ec88.firebaseapp.com",
  projectId: "musiplaneta-9ec88",
  storageBucket: "musiplaneta-9ec88.appspot.com",
  messagingSenderId: "967329637402",
  appId: "1:967329637402:web:15371a618b1610b6f25da3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
