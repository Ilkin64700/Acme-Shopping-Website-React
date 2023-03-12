import React from "react";
import { Link } from "react-router-dom";

const Announcement = () => {
  return (
    <div className="banner">
      <Link to="/covidinfo">
        <span className="pinkannounce">Announcement</span> How we're responding
        to COVID-19
      </Link>
    </div>
  );
};

export default Announcement;
