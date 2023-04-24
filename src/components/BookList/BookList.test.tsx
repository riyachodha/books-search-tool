import React from "react";
import { render, cleanup } from "@testing-library/react";
import BookList from "./BookList";
import { AppProvider } from "../../context";
import { BrowserRouter } from "react-router-dom";

describe("BookList Component", () => {
  afterEach(cleanup);

  it("should render Loader component when loading is true", async () => {
    const { getByTestId } = render(
      <AppProvider>
        <BrowserRouter>
          <BookList />
        </BrowserRouter>
      </AppProvider>
    );
    await expect(getByTestId("loader-content")).toBeInTheDocument();
  });
  
});
