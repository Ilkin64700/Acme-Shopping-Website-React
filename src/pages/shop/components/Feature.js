import React from "react";
import { Link } from "react-router-dom";
import WhiteTent from "../../../assets/images//WhiteTent.jpg";

const Feature = ({ item }) => {
  return (
    <section className="feature">
      <div className="container">
        <div className="feature-product">
          <Link
            to="/productitem"
            state={
              (item = {
                backgroundimagepath: WhiteTent,
                productclasses: ["product-imagefirst"],
                title: "White Tent",
                price: "$ 200.00 USD",
              })
            }
          >
            <div className="feauture-item">Featured Item</div>
            <div className="feature-info">
              <h3>White Tent</h3>
              <p>$ 200.00 USD</p>
            </div>
            <div className="feature-imageoverlay"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Feature;
