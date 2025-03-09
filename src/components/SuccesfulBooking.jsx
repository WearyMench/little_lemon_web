import React from "react";
import { Link } from "react-router-dom";
import "../styles/succesfulBook.css";

const SuccessfulBooking = ({ goingBack }) => {
  return (
    <div className="successful-booking">
      <h1>Booking Confirmed!</h1>
      <p>Thank you for your booking. We look forward to serving you.</p>
      <Link to="/booking" onClick={() => goingBack(null)}>
        Go Back
      </Link>
    </div>
  );
};

export default SuccessfulBooking;
