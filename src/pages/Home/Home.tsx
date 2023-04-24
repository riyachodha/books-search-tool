import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import './Home.scss';

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <section className="home-container">
        <div className="about-text home-container">
          <h2 className="about-title fs-26 ls-1">
            Find your book of choice in the search box above...
          </h2>
        </div>
      </section>
    </main>
  );
};

export default Home;
