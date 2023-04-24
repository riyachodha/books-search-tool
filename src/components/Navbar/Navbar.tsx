import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logoImg from "../../images/ezgif.com-webp-to-jpg.jpg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar" data-testid="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <div className="flex flex-sb">
            <Link to="/" className="navbar-brand flex">
              <img src={logoImg} alt="site logo" />
              <span></span>
            </Link>
            <span className="navbar-title text-uppercase fw-7 fs-24 ls-1">
              Toronto Book Depot
            </span>
          </div>

          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
            data-testid="menu-button"
            aria-label="Toogle to select options"
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>

        <div
          data-testid="nav-collapse"
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="book"
                className="nav-title nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-title nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                about
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
