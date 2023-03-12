import React from 'react'
import { Link } from 'react-router-dom'
import AcmeSvg from "../assets/svg/AcmeSvg";
import FacebookSvg from "../assets/svg/FacebookSvg";
import InstagramSvg from "../assets/svg/InstagramSvg";
import TwitterSvg from "../assets/svg/TwitterSvg";

const Footer = () => {
  return (
    <section className="footer">
        <div className="container">
            <div className="footer-menu">
                <div className="footer-logo">
                    <Link to="/">
                        < AcmeSvg/>
                    </Link>
                </div>
                <div className="footer-socialinks">
                    <a href="https://twitter.com/">
                        <TwitterSvg/>
                    </a>
                    <a href="https://www.facebook.com/">
                        <FacebookSvg/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <InstagramSvg/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer