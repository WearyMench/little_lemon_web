import React from "react";
import "../styles/about.css";
import Restaurant from "../assets/restaurant.jpg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-text">
            <h1>About Us</h1>
            <p>
              Welcome to Little Lemon! We are a small, family-owned restaurant
              dedicated to serving delicious and fresh meals. Our mission is to
              provide our customers with a memorable dining experience through
              our passion for food and exceptional service.
            </p>
          </div>
          <div className="about-image">
            <img src={Restaurant} alt="restaurante" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
