import React from "react";
import ReactDOM from "react-dom/client";
import Example from "./Example";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomProvider } from "rsuite";
import { ParallaxProvider } from 'react-scroll-parallax';

import "rsuite/styles/index.less"; // or 'rsuite/dist/rsuite.min.css'
import {House} from "./pages/House/House";
import {App} from "./App";
import {Home} from "./pages/Home/Home"
import {Roof} from "./pages/Roof/Roof";
import {Clinker} from "./pages/Clinker/Clinker";
import {Border} from "./pages/Border/Border";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CustomProvider theme="light">
      <BrowserRouter>
        <ParallaxProvider>
            <Routes>
              {/*<Route path="/example" element={<Example />} />*/}
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path='house' element={<House />} />
                <Route path='roof' element={<Roof />} />
                <Route path='clinkers' element={<Clinker />} />
                <Route path='border' element={<Border />} />
              </Route>
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
