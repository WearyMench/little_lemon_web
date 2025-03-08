import React from "react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "This is the best service I have ever used!",
    image: "https://placehold.co/240",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Amazing experience, highly recommend!",
    image: "https://placehold.co/240",
    rating: 4,
  },
  {
    id: 3,
    name: "Sam Wilson",
    text: "Exceptional quality and customer service.",
    image: "https://placehold.co/240",
    rating: 5,
  },
  {
    id: 4,
    name: "Sarah Johnson",
    text: "I will definitely be using this service again!",
    image: "https://placehold.co/240",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="testimonials-container">
        <div className="section-title">
          <h2>Testimonials</h2>
        </div>
        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p>Rating: {testimonial.rating} 🌟</p>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
