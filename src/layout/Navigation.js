import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CommerceCart from "./CommerceCart";
import { RxHamburgerMenu } from "react-icons/rx";
import AcmeSvg from "../assets/svg/AcmeSvg";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [openCart, setOpenCart] = useState(false);
  const [hideLightbox, setHideLightBox] = useState(true);
  const [bgColor, setBgColor] = useState(false);
  const [openNavMobile, setOpenNavMobile] = useState(false); 


  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="container">
          <Link to="/">
            <AcmeSvg />
          </Link>
          <div className="navmenu">
            <nav>
              <a href="/">Home</a>
              <a href="/aboutpage">About</a>
              <a href="/shoppage">Shop</a>
              <a href="/donatepage">Donate</a>
              <a href="/contactpage">Contact</a>
            </nav>
            <div
              className="cart"
              onClick={() => {
                setOpenCart(!openCart);
                setHideLightBox(!hideLightbox);
              }}
            >
              <a>
                <AiOutlineShoppingCart className="shoppingcart" />
                <span>0</span>
              </a>
            </div>
            <div
              onClick={(e) => {
                setBgColor(!bgColor);
                setHideLightBox(!hideLightbox);
                setOpenNavMobile(!openNavMobile);
              }}
              className={`nav-mobile ${bgColor ? "bgcolor" : ""}`}
            >
              <RxHamburgerMenu className="hamburger-menu" />
            </div>
          </div>
        </div>
        {openCart ? <CommerceCart closeCart={setOpenCart} /> : null}
      </div>
      {openNavMobile ? (
        <div
          className={`nav-overlay lightbox ${
            hideLightbox ? "hide-lightbox" : ""
          }`}
        >
          <nav>
            <a href="/">Home</a>
            <a href="/aboutpage">About</a>
            <a href="/shoppage">Shop</a>
            <a href="/donatepage">Donate</a>
            <a href="/contactpage">Contact</a>
          </nav>
        </div>
      ) : null}
    </div>
  );
};

export default Navigation;
