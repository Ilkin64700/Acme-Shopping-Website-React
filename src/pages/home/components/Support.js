import React from "react";
import { SupportData } from "../componentsdata/HomeData";

const Support = () => {
  return (
    <section className="support">
      <div className="container">
        <div className="support-text">
          <div className="support-leftext">
            <h6 className="support-ways">Ways to support</h6>
            <h2 className="support-outdoors">Support Acme Outdoors.</h2>
          </div>
          <div className="support-rightext">
            <p className="support-covidtext">
              COVID-19 has forced us to close our retail space, but we need
              support from patrons like yourself now more than ever. Below,
              we’ve listed the best ways to help us through this season.
            </p>
          </div>
        </div>
        <div className="support-choices">
          {SupportData.map((item, index) => (
            <div key={index} className="support-option">
              <div className="support-cart">
                <div className="support-product">
                  <div className="support-productnumber">{item.number}</div>
                  <div className="support-producttext">
                  {item.title}
                  </div>
                  {item.icon}
                </div>
                <p className="support-productdescription">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
