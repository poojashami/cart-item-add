import React from "react";
import "./App.css";
import mobleImg from "../src/assets/mobleImg.jpg";
import cartImg from "../src/assets/cartImg.jpg";
const Home = () => {
  return (
    <div>
      <div>
        <img
          src={cartImg}
          height={30}
          style={{ float: "right", marginRight: "30px", cursor: "pointer" }}
        />
      </div>
      <h1>Hii Pooja Shami here</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={mobleImg} height={50} />
        </div>
        <div className="text-wrapper item">
          <span>I phone</span>
          <span>Price $100</span>
        </div>
        <div className="btn-wrapper item">
          <button className="p-3 mb-2 bg-info text-danger">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
