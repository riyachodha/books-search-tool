import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BookDetails from "../BookDetails/BookDetails";
import { AppProvider } from "../../context";
import { BrowserRouter, Route } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn().mockReturnValue({ id: "OL7353617M" }),
  useNavigate: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("BookDetails component", () => {
  test("renders book details", async () => {
    const mockBook = {
      description: "Test description",
      title: "Test title",
      cover_img: "http://test.com/img.jpg",
      subject_places: "Test place",
      subject_times: "Test time",
      subjects: "Test subject",
    };
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockBook),
    }) as any;

    render(
      <AppProvider>
        <BrowserRouter>
          <BookDetails />
        </BrowserRouter>
      </AppProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(mockBook.title)).toBeInTheDocument();
      expect(screen.getByText(mockBook.description)).toBeInTheDocument();
      expect(screen.getByText(mockBook.subject_places)).toBeInTheDocument();
      expect(screen.getByText(mockBook.subject_times)).toBeInTheDocument();
      expect(screen.getByText(mockBook.subjects)).toBeInTheDocument();
    });
  });

  test("renders loading spinner", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(),
    }) as any;

    const { getByTestId } = render(
      <AppProvider>
        <BrowserRouter>
          <BookDetails />
        </BrowserRouter>
      </AppProvider>
    );

    expect(getByTestId("loader")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
    });
  });

  test("handles error while fetching book details", async () => {
    console.log = jest.fn();

    global.fetch = jest.fn().mockRejectedValue("Fetch error") as any;

    render(
      <AppProvider>
        <BrowserRouter>
          <BookDetails />
        </BrowserRouter>
      </AppProvider>
    );

    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith("Fetch error");
    });
  });
});
