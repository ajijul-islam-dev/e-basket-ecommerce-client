import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Navbar/Nav";
import CartBtn from "./CartBtn/CartBtn";
import NavModal from "./Modals/NavModal";
import CartModal from "./Modals/CartModals";
import LoginModal from "./Modals/loginModal";

function Main() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);


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


  const handleLoginModal = ()=>{
    setIsLoginOpen(true)
  }

  const handleCloseLoginModal = ()=>{
    setIsLoginOpen(false)
  }

  return (
    <>
      <Nav handleNavModal={handleNavModal} handleCartModal={handleCartModal} handleLoginModal={handleLoginModal} />
      <NavModal isNavOpen={isNavOpen} handleNavClose={handleNavClose} />
      <CartModal isCartOpen={isCartOpen} handleCartClose={handleCartClose}/>
      <LoginModal isLoginOpen={isLoginOpen} handleCloseLoginModal={handleCloseLoginModal}/>
      <div className="mt-20">
        <Outlet context={{handleCartModal}} />
      </div>
      <CartBtn handleCartModal={handleCartModal} />

    </>
  );
}

export default Main;
