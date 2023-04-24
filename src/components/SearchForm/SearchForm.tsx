import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchForm.scss";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("" as any);
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something....");
    } else {
      setSearchTerm(searchText.current.value);
    }
    navigate("/book");
  };

  return (
    <div className="search-form" id="search-form" data-testid="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                role="textbox"
                className="form-control"
                placeholder="Search the book here..."
                ref={searchText}
              />
              <button
                type="submit" 
                className="flex flex-c"
                aria-label="Search the book title here"
                onClick={handleSubmit}
              >
                <FaSearch className="text-light-black" size={32}></FaSearch>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
