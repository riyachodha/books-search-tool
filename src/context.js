import React, { useEffect, useState, useContext, useCallback } from "react";

const URL = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("The Great Gatsby");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooksData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { docs } = data;
      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });
        const alphabeticallySortedTitleData = newBooks.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setBooks(alphabeticallySortedTitleData);
        if (alphabeticallySortedTitleData.length > 1) {
          setResultTitle("Your Search result");
        } else {
          setResultTitle("No Search Result Was Found.");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found.");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooksData();
  }, [searchTerm, fetchBooksData]);

  return (
    <AppContext.Provider
      value={{ loading, books, setSearchTerm, resultTitle, setResultTitle }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
