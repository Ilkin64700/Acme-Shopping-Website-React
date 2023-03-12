import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Announcement from "./Announcement";

const Layout = ({ children }) => {
  return (
    <>
      <Announcement />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
