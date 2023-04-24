import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { AppProvider } from "../../context";

describe("Navbar", () => {
  test("renders navbar correctly", () => {
    const { getByTestId } = render(
      <AppProvider>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </AppProvider>
    );
    expect(getByTestId("navbar")).toBeInTheDocument();
  });

  test("hamburger menu toggles on click", () => {
    const { getByTestId } = render(
      <AppProvider>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </AppProvider>
    );
    const menuButton = getByTestId("menu-button");
    const navCollapse = getByTestId("nav-collapse");

    expect(navCollapse).toHaveClass("navbar-collapse");
    fireEvent.click(menuButton);
    expect(navCollapse).toHaveClass("show-navbar-collapse");
    fireEvent.click(menuButton);
    expect(navCollapse).toHaveClass("navbar-collapse");
  });

  test("navigates to correct page on link click", () => {
    const { getByText } = render(
      <AppProvider>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </AppProvider>
    );
    const homeLink = getByText("Home");
    const aboutLink = getByText("about");

    expect(homeLink.getAttribute("href")).toEqual("/book");
    expect(aboutLink.getAttribute("href")).toEqual("/about");
  });
});
