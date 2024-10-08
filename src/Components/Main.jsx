import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Navbar/Nav";
import CartBtn from "./CartBtn/CartBtn";
import NavModal from "./Modals/NavModal";
import CartModal from "./Modals/CartModals";
import LoginModal from "./Modals/loginModal";
import ProductDetailsModal from "./Modals/ProductDetails";
import SideBar from "./Sidebar/Sidebar";

function Main() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isProductOpen, setIsProductOpen] = React.useState(false);
  const [product, setProduct] = useState([]);

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

  const handleProductModal = (product) => {
    setIsProductOpen(true);
    setProduct(product);
  };

  const handleLoginModal = () => {
    setIsLoginOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsProductOpen(false);
  };

  const handleCloseLoginModal = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <Nav
        handleNavModal={handleNavModal}
        handleCartModal={handleCartModal}
        handleLoginModal={handleLoginModal}
      />
      <NavModal isNavOpen={isNavOpen} handleNavClose={handleNavClose} />
      <CartModal isCartOpen={isCartOpen} handleCartClose={handleCartClose} />
      <LoginModal
        isLoginOpen={isLoginOpen}
        handleCloseLoginModal={handleCloseLoginModal}
      />
      <ProductDetailsModal
        product={product}
        isProductOpen={isProductOpen}
        handleCloseProductModal={handleCloseProductModal}
      />

      <div className="mt-14 md:mt-10 grid grid-cols-1 md:grid-cols-10 h-[calc(100vh-56px)]">
        <div className="md:col-span-2 hidden md:block overflow-y-auto">
          <SideBar />
        </div>

        <div className="md:col-span-8 overflow-y-auto">
          <Outlet context={{ handleCartModal, handleProductModal }} />
        </div>
      </div>

      <CartBtn handleCartModal={handleCartModal} />
    </>
  );
}

export default Main;
