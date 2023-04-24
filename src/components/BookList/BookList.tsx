import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";
import Loader from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.webp";
import "./BookList.scss";
import Book from "./Book";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const [booksWithCoverArr, setBooksWithCoverArr] = useState([] as any);
  const [buttonSelected, setButtonSelected] = useState("TITLE");
  useEffect(() => {
    let booksWithCover = books.map((singleBook: any) => {
      return {
        ...singleBook,
        id: singleBook?.id.replace("/works/", ""),
        cover_img: singleBook.cover_id
          ? `https://covers.openlibrary.org/b/id/${singleBook?.cover_id}-L.jpg`
          : coverImg,
      };
    });

    setBooksWithCoverArr(booksWithCover);
  }, [books]);

  const handleMostRecentSort = () => {
    setButtonSelected("YEAR");
    const newC = [...booksWithCoverArr].sort(
      (a: any, b: any) => b?.first_publish_year - a?.first_publish_year
    );
    setBooksWithCoverArr(newC);
  };

  const handleTitleSort = () => {
    setButtonSelected("TITLE");
    const newC = [...booksWithCoverArr].sort((a, b) =>
      a?.title.localeCompare(b.title)
    );
    setBooksWithCoverArr(newC);
  };

  if (loading) return <Loader  />;

  return (
    <section className="booklist" data-testid="booklist-content">
      <div className="container">
        <div className="section-title flex flex-sb">
          <div>
            <h2>{resultTitle}</h2>
          </div>
          <div>
            <button
              type="button"
              tabIndex={0}
              className={`sort-button flex flex-c ${
                buttonSelected === "TITLE" ? "-selected" : ""
              }`}
              onClick={handleTitleSort}
            >
              Sort By Title
            </button>
            <button
              type="button"
              tabIndex={0}
              className={`sort-button flex flex-c ${
                buttonSelected === "YEAR" ? "-selected" : ""
              }`}
              onClick={handleMostRecentSort}
            >
              Sort by publish date
            </button>
          </div>
        </div>
        <div className="booklist-content grid">
          {booksWithCoverArr.slice(0, 30).map((item: any, index: any) => {
            return <Book key={index} {...item}></Book>;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;
