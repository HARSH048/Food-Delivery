import React from "react";
import { assets } from "../../assets/assets";
import './Footer.css'

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit ratione ea quod reiciendis fugiat ad aliquam
            accusantium molestias doloribus quasi animi nulla amet placeat ipsa
            eum ut, dolorum exercitationem quaerat!
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon}></img>
            <img src={assets.twitter_icon}></img>
            <img src={assets.linkedin_icon}></img>
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>conatct@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 Tomato.com- All Right Reserved</p>
    </div>
  );
}

export default Footer;
