import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Home} from "./pages/Home";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CustomProvider } from "rsuite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CustomProvider theme="light">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home/" element={<Home />} />
          {/* <Route path="/users/*" element={<UserApp />} /> */}
        </Routes>
      </BrowserRouter>
    </CustomProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
