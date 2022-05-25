import React from "react";
import { AppState } from "../../Context";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Home.css";
import CoverText from "../CoverText/CoverText";
import Footer from "../Footer/Footer";

const Home = () => {
  let { products, searchTerm } = AppState();

  return (
    <>
      <CoverText />
      <div className="products-container">
        {products
          .filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map((prod) => (
            <SingleProduct prod={prod} key={prod.url} />
          ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
