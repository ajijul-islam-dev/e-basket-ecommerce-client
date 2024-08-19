import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Navbar/Nav";
import CartBtn from "./CartBtn/CartBtn";

function Main() {
  return (
    <>
      <Nav />
      <div className=" my-36 md:my-20">
        <Outlet />
      </div>
      <CartBtn />
    </>
  );
}

export default Main;
