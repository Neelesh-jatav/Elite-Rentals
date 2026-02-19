import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="Elite Rentals" />
        <div className="content">
          <h3>Comfort stays, unforgettable holidays.</h3>

          <p>
            Elite Rentals is your trusted destination for premium hotel rooms,
            holiday homes, and short-term rentals designed to make every journey
            relaxing and memorable. From cozy city stays to peaceful vacation
            retreats, we connect travelers with carefully selected properties
            that offer comfort, style, and convenience.
          </p>

          <p>
            With transparent pricing, verified listings, and dedicated customer
            support, we ensure a smooth experience from reservation to checkout.
          </p>

          <p>
            At Elite Rentals, your comfort is our commitment — because every stay
            should feel like home.
          </p>
        </div>
      </div>

      <AboutComponentMini />
    </section>
  );
};


export default AboutUs;
