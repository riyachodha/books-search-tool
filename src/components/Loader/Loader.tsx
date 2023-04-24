import React from 'react';
import LoaderImg from "../../images/loader.svg";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader flex flex-c" data-testid="loader-content">
      <img src= {LoaderImg} alt= "loader"/>
    </div>
  );
};

export default Loader;
