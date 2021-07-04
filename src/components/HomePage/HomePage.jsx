import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="wrapper">
      <div className="statistical">
        <h1>Total Products:</h1>
        <hr />
        <p><span className="number">1000</span> products</p>
      </div>
      <div className="statistical-2">
        <h1>Total Categories:</h1>
        <hr />
        <div className="categories">
          <div className="one-category">
            <h3>T-shirt</h3>
            <hr />
            <p>100</p>
          </div>
          <div className="one-category">
            <h3>T-shirt</h3>
            <hr />
            <p>100</p>
          </div>
          <div className="one-category">
            <h3>T-shirt</h3>
            <hr />
            <p>100</p>
          </div>
          <div className="one-category">
            <h3>T-shirt</h3>
            <hr />
            <p>100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
