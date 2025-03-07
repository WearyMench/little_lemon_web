import React from "react";
import FoodImage from "../assets/restauranfood.jpg";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Welcome to Little Lemon! We are a family-owned business that has been
          serving the best lemonade in town for over 20 years. Our secret recipe
          has been passed down from generation to generation, and we take pride
          in using only the freshest ingredients. Come visit us and taste the
          difference!
        </p>
        <button>Reserve a Table</button>
      </div>
      <img src={FoodImage} alt="A delicious plate of food" />
    </section>
  );
};

export default Hero;
