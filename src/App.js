import {Footer, NavbarMain} from "./components";
import React from "react";
import {Outlet} from "react-router-dom";

export const App = () => {
  return (
    <>
      <NavbarMain />
      <Outlet/>
      <Footer />
    </>
  )
}