import ButtonHero from "../components/userinterface/ButtonHero";
import React from "react";

const Hero = ({bgimage,herostat,alignment,widthadjustment,bgcolor,path}) => {
  // console.log(herostat.title)
  return (
    <section className={`hero ${bgimage}`}>
      <div className="container">
        <div className={`hero-info ${alignment}`}>
          <h1 className={`hero-header ${widthadjustment}`}>{herostat[0].title}</h1>
          <p className="hero-paragraph">{herostat[0].description}</p>
          <ButtonHero to={path} buttoncolor={bgcolor} text={herostat[0].buttontext} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
