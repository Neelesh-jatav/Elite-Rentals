import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? "homePage_footer otherPage_footer" : "otherPage_footer"}>
        <div className="container">
          <h4>ELITE RENTALS</h4>

          <p>
            Elite Rentals is your trusted platform for premium hotels, holiday
            homes, and short-term stays. We help travelers find comfortable,
            secure, and affordable accommodations — making every journey simple
            and memorable.
          </p>

          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms & Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="container">
          <h4>Connect with us</h4>
          <p>📞 +91 6565652233</p>
          <p>✉ eliterentalservices@gmail.com</p>
          <p>© {new Date().getFullYear()} Elite Rentals. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
