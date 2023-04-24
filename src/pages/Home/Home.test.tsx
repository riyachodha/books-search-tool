import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "../../context";

describe("Index", () => {
  it("renders Home component", () => {
    const { getByText } = render(
      <AppProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </AppProvider>
    );
    const heading = getByText("Find your book title of choice");
    expect(heading).toBeInTheDocument();
  });
});
