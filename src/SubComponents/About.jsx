import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
            <h1>ABOUT US</h1>

            <p>
              Elite Rentals is a premium room, hotel, and holiday rental platform
              built to help travelers discover comfortable stays with ease. 
            </p>
            <br />
            <p>
              We bring together carefully curated properties that combine style,
              convenience, and affordability.
            </p>
            <br />
           
            <p>
              At Elite Rentals, we believe great stays create great memories —
              and we’re here to help you experience both.
            </p>
          </div>

          <button>We strive to offer you the best possible homes to stay!</button>
        </div>

        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="guests enjoying stay" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="happy travelers" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
