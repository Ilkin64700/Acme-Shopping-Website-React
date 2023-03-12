import React from "react";
import BestInClassServiceSvg from "../../../assets/svg/BestinclassServiceSvg";
import GetInSupportSvg from "../../../assets/svg/GetInSupportSvg";
import ButtonHero from "../../../components/userinterface/ButtonHero";

const ContactHero = ({myRef,secondRef}) => {
  const scrolLWithUseRef = () => {
    myRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  };


  return (
    <section className="contacthero">
      <div className="contactfullcontainer">
        <div className="container positoncontainer">
          <div className="contact-content">
            <h1>Contact Acme Outdoors</h1>
            <div className="contactlist">
              <div className="contact-item">
                <BestInClassServiceSvg  />
                <h2>Contact Us</h2>
                <p>
                  Just want to say hi? We'd love to hear from you. We love our
                  customers and community!{" "}
                </p>
                <ButtonHero onClick={scrolLWithUseRef}  to='#contactinfo' buttoncolor={'contactbutton-color'}  text={"Send Us A Message"} />
              </div>
              <div className="contact-item">
                <GetInSupportSvg stlyes={"myIcon"} />
                <h2>Get Support</h2>
                <p>
                  Have an issue with an order or with a product you purchased
                  from us? Fill out our support form.
                </p>
                <ButtonHero to={'https://university.webflow.com/support'}  buttoncolor={'contactbutton-color'} text={"Contact Support"} target={'_blank'} />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-image"></div>
      </div>
    </section>
  );
};

export default ContactHero;
