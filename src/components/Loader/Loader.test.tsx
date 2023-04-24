import React from "react";
import { render } from "@testing-library/react";
import Loader from "./Loader";
import { AppProvider } from "../../context";
import { BrowserRouter } from "react-router-dom";

describe("Loader", () => {
  it("should render Loader component", () => {
    const { getByAltText } = render(
      <AppProvider>
        <BrowserRouter>
          <Loader />
        </BrowserRouter>
      </AppProvider>
    );
    expect(getByAltText("loader")).toBeInTheDocument();
  });

  
});
