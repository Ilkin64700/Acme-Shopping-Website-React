import React from "react";
import BlackBanner from "../../common/BlackBanner";
import Feature from "./components/Feature";
import Shopping from "./components/Shopping";

const Shoppage = ({ bgcolor }) => {
  return (
    <>
      <BlackBanner text={"Shop Our Products"} />
      <Feature />
      <Shopping />
    </>
  );
};

export default Shoppage;
