import React from "react";
import "../styles/specials.css";
import Bruchetta from "../assets/bruchetta.svg";
import GreekSalad from "../assets/greek salad.jpg";
import LemonDessert from "../assets/lemon dessert.jpg";

const Specials = () => {
  const specials = [
    {
      id: 1,
      name: "Greek Salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      price: 10.99,
      imageUrl: GreekSalad,
    },
    {
      id: 2,
      name: "Bruchetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: 12.99,
      imageUrl: Bruchetta,
    },
    {
      id: 3,
      name: "Lemon Dessert",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: 14.99,
      imageUrl: LemonDessert,
    },
  ];
  return (
    <div className="specials">
      <div className="specials-header">
        <h2>Specials</h2>
        <button>Online menu</button>
      </div>
      <ul className="specials-list">
        {specials.map((special) => (
          <li key={special.id} className="specials-item">
            <img src={special.imageUrl} alt={special.name} loading="lazy" />
            <div className="specials-item-info">
              <h3>{special.name}</h3>
              <p>{special.description}</p>
              <p className="price">${special.price}</p>
              <a href="/">Order a delivery </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Specials;
