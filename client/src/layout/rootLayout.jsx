import React from "react";
import { Outlet } from "react-router-dom";
import FooterBar from "./footerBar";
function RootLayout() {
  return (
    <>
      {/* <NavBar /> */}
      <Outlet />
      <FooterBar />
    </>
  );
}

export default RootLayout;