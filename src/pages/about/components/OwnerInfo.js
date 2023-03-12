import React from "react";
import { ownerdata } from "../componentsdata/AboutData";


const OwnerInfo = () => {
  
  return (
    <section className="ownerinfo">
      <div className="container">
        <div className="ownerlist">
          {ownerdata.map((item, index) => (
            <div className="owner-item">
              <img src={item.image} alt="" />
              <h3 className="doe">{item.title}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OwnerInfo;
