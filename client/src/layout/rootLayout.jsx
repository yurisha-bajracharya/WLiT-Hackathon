import React from "react";
import { Outlet } from "react-router-dom";
// import FooterBar from "./footerBar";
import NavBar from "./navBar";
function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet /> 
      {/* <FooterBar />  */}
    </>
  );
}

export default RootLayout;
