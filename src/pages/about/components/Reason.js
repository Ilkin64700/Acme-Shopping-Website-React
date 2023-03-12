import React from "react";
import { reasondata } from "../componentsdata/AboutData";

const Reason = () => {
  return (
    <section className="reason">
      <div className="container">
        <div className="reason-entryinfo">
          <p className="aboveheading">Why Acme Outdoors?</p>
          <h2>We’re the best in the business.</h2>
          <p className="belowheading">
            From more than 30 years, we’ve been leading the way across Oklahoma
            — creating the best possible customer experience since 1989.
          </p>
        </div>
        <div className="reasonlist">
          {reasondata.map((item, index) => (
            <div className="reason-item">
              {item.icon}
              <h3>{item.title}</h3>
              <p>
                All our products — whether we make them or not — are backed by
                our lifetime warranty.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reason;
