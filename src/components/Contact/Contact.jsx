import React from "react";
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiTwitterXLine,
} from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT US</h1>

        <p>
          Have questions about bookings, rooms, or holiday rentals? We’re here to
          help make your stay smooth and stress-free.
        </p>

        <p>
          Reach out to Elite Rentals anytime — our support team is ready to assist
          you with reservations and property details.
        </p>

        <div className="container">
          <img src="/about.jpg" alt="Elite Rentals" />

          <div className="content">
            <h3>Let’s connect</h3>

            <div>
              <p>Phone</p>
              <span>+91 6565652233</span>
            </div>

            <div>
              <p>Email</p>
              <span>eliterentalservices@gmail.com</span>
            </div>

            <div>
              <p>Address</p>
              <span>Elite Rentals, Sector A-1, City Center</span>
            </div>

            <ul>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <RiFacebookBoxLine />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <RiInstagramLine />
              </a>

              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <RiTwitterXLine />
              </a>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
