import React, { useState } from "react";

const ContactInfo = ({myRef,secondRef}) => {
  const [showText, setshowText] = useState(false);

  return (
    <section ref={myRef} id="contactinfo" className="contactinfo">
      <div className="container">
        <div className="contact-content">
          <div className="contact-leftcontent">
            <h2>Contact Us</h2>
            <div className="contact-details">
              <p>Acme Outdoors</p>
              <p>123 Rainy Street</p>
              <p>Oklahoma City, OK 73129</p>
              <p className="generalinq">
                <strong>General Inquiries:</strong> (405) 555-5555
              </p>
              <p>
                <strong>Customer Support:</strong> (405) 555-5556
              </p>
            </div>
          </div>
          <div className="contact-rightcontent">
            <h2>Contact Form</h2>
            <p>
              Send us a message and we'll get back to you as soon as we can!{" "}
            </p>
            <div className="contact-form">
              {showText ? null : (
                <form onSubmit={() => setshowText(true)}>
                  <label>Name</label>
                  <input type="text" placeholder="Enter your name" />
                  <label>Email Address</label>
                  <input ref={secondRef} type="email" placeholder="Enter your email address" />
                  <label>Your Message</label>
                  <textarea placeholder="Enter your message" />
                  <input type="submit" value="Submit" />
                </form>
              )}
              {showText ? (
                <p className="successform">
                  Thank you! Your submission has been received! We'll be in
                  touch soon!
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
