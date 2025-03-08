import React, { useState } from "react";
import BookingForm from "../components/BookingForm";
import SuccessfulBooking from "../components/SuccesfulBooking";
import "../styles/bookingpage.css";

const BookingPage = () => {
  const [formData, setFormData] = useState(null);
  return (
    <main className="container">
      {formData === null ? (
        <>
          <h1>Booking Page</h1>
          <p>
            Welcome to the booking page. Please fill out the form below to book
            your reservation.
          </p>
          <BookingForm onSubmit={setFormData} />
        </>
      ) : (
        <SuccessfulBooking goingBack={setFormData} />
      )}
    </main>
  );
};

export default BookingPage;
