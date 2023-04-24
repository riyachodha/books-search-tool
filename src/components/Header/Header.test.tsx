import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { AppProvider } from "../../context";
import { BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";

describe("Header component", () => {
  it("renders Navbar component", () => {
    render(
      <AppProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AppProvider>
    );
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
  });

  it("renders header title", () => {
    render(
      <AppProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AppProvider>
    );
    const titleElement = screen.getByText("Find your book title of choice");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders header text", () => {
    render(
      <AppProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AppProvider>
    );
    const textElement = screen.getByText(
      "Welcome to Toronto Book Depot, a cool online platform for book lovers and avid readers, providing comprehensive and convenient solution for finding, exploring and discovering new books and authors."
    );
    expect(textElement).toBeInTheDocument();
  });

  it("renders SearchForm component", () => {
    render(
      <AppProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AppProvider>
    );
    const searchFormElement = screen.getByTestId("search-form");
    expect(searchFormElement).toBeInTheDocument();
  });
});
