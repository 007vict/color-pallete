import {Footer, NavbarAntd} from "./components";
import React from "react";
import {Outlet} from "react-router-dom";

export const App = () => {
  return (
    <>
      <NavbarAntd />
      <Outlet/>
      <Footer />
    </>
  )
}