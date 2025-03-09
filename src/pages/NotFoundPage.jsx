import React from "react";
import { Link } from "react-router-dom";
import "../styles/notfoundpage.css";

const NotFoundPage = () => {
  return (
    <main className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go to Home</Link>
    </main>
  );
};

export default NotFoundPage;
