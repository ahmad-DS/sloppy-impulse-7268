<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
// import store from "./Redux/store";
// import { Provider } from "react-redux";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import {store} from "./Redux/store";
import { Provider } from "react-redux";
>>>>>>> 48e3ee77727f261acd6e499ba1c085b38b967209
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <ChakraProvider>
      <App />
    </ChakraProvider>
    {/* </Provider> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
