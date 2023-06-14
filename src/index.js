import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Home} from "./pages/Home/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomProvider } from "rsuite";
import { ParallaxProvider } from 'react-scroll-parallax';

import "rsuite/styles/index.less"; // or 'rsuite/dist/rsuite.min.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CustomProvider theme="light">
      <BrowserRouter>
        <ParallaxProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home/" element={<Home />} />
          </Routes>
        </ParallaxProvider>
      </BrowserRouter>
    </CustomProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
