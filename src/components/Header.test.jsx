import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import { describe, it, expect } from "@jest/globals";

describe("Header component", () => {
  it("renders without crashing", () => {
    const { getByAltText } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getByAltText("Logo")).toBeInTheDocument();
  });

  it("toggles the menu when burger icon is clicked", () => {
    const { getByAltText, getByRole } = render(
      <Router>
        <Header />
      </Router>
    );
    const burgerIcon = getByAltText("Burger");
    fireEvent.click(burgerIcon);
    expect(getByRole("navigation")).toHaveClass("active");
    fireEvent.click(burgerIcon);
    expect(getByRole("navigation")).not.toHaveClass("active");
  });

  it("closes the menu when clicking outside", () => {
    const { getByAltText, getByRole } = render(
      <Router>
        <Header />
      </Router>
    );
    const burgerIcon = getByAltText("Burger");
    fireEvent.click(burgerIcon);
    expect(getByRole("navigation")).toHaveClass("active");
    fireEvent.click(document);
    expect(getByRole("navigation")).not.toHaveClass("active");
  });

  it("navigates to the correct page when a link is clicked", () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );
    const homeLink = getByText("Home");
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe("/");
  });
});
