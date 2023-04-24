import React from "react";
import { Link } from "react-router-dom";
import "./BookList.scss";

const Book = (book: any) => {
  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <img src={book?.cover_img} alt="cover" />
      </div>
      <div className="book-item-info text-center">
        <Link className="link-title" to={`/book/${book?.id}`} {...book} tabIndex={0} >
            <div className="book-item-info-item title fw-7 fs-18" >
                <span>{book?.title}</span>
            </div>
        </Link>
        <div className="book-item-info-item author fs-15">
            <span className="text-capitalize fw-7">Author : </span>
            <span>{book?.author?.join(", ")}</span>
        </div>
        <div className="book-item-info-item publish-year fs-15">
            <span className="text-capitalize fw-7">Published Date : </span>
            <span>{book?.first_publish_year}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
