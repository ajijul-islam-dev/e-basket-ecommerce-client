import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Navbar/Nav";
import CartBtn from "./CartBtn/CartBtn";
import NavModal from "./Modals/NavModal";

function Main() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavModal = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Nav handleNavModal={handleNavModal} />
      <NavModal isOpen={isOpen} handleClose={handleClose} />
      <div className=" mt-36 md:mt-20">
        <Outlet />
      </div>
      <CartBtn />
    </>
  );
}

export default Main;
