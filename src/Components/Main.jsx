import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Navbar/Nav";
import CartBtn from "./CartBtn/CartBtn";
import NavModal from "./Modals/NavModal";
import CartModal from "./Modals/CartModals";

function Main() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const handleNavModal = () => {
    setIsNavOpen(true);
    
  };
  const handleCartModal = () => {
    setIsCartOpen(true);
    
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <Nav handleNavModal={handleNavModal} handleCartModal={handleCartModal} />
      <NavModal isNavOpen={isNavOpen} handleNavClose={handleNavClose} />
      <CartModal isCartOpen={isCartOpen} handleCartClose={handleCartClose}/>
      <div className=" mt-36 md:mt-20">
        <Outlet />
      </div>
      <CartBtn />

    </>
  );
}

export default Main;
