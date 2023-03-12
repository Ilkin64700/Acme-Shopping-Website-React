import React, { useRef } from "react";
import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";

const Contactpage = () => {
  const ref = useRef();
  return (
    <>
      <ContactHero myRef={ref} />
      <ContactInfo myRef={ref} />
    </>
  );
};

export default Contactpage;
