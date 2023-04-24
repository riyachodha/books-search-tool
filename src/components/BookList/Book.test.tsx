import React from "react";
import { queryByText, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Book from "../BookList/Book";
import { AppProvider } from "../../context";

describe("Book component", () => {
  const book = {
    id: "test-id",
    cover_img: "test-cover-img-url",
    title: "Test Book Title",
    author: ["Test Author 1"],
    first_publish_year: "2021",
  };

  it("should render book details", () => {
    const { getByText, getByAltText } = render(
      <AppProvider>
        <BrowserRouter>
          <Book {...book} />
        </BrowserRouter>
      </AppProvider>
    );

    expect(getByAltText("cover")).toHaveAttribute("src", book.cover_img);
    expect(getByText(book.title)).toBeInTheDocument();
  });

  it("should contain a link to the book page", () => {
    const { getByText } = render(
      <AppProvider>
        <BrowserRouter>
          <Book {...book} />
        </BrowserRouter>
      </AppProvider>
    );

    const linkElement = getByText(book.title).closest("a");
    expect(linkElement).toHaveAttribute("href", `/book/${book.id}`);
  });
});
