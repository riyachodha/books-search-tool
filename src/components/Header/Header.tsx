import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.scss";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Find your book title of choice
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Welcome to Toronto Book Depot, a cool online platform for book
            lovers and avid readers, providing comprehensive and convenient
            solution for finding, exploring and discovering new books and
            authors.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
