import React from "react";
import { AppState } from "../../Context";
import "./SingleProduct.css";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = AppState();

  return (
    <div className="single-product">
      <img src={prod.url} alt={prod.name} />

      <div className="product-info">
        <h3 className="title">{prod.name}</h3>
        <span className="price">{prod.price}€</span>
        <span>{prod.description}</span>
      </div>
      {cart.map((p) => p.url).includes(prod.url) ? (
        <button
          className="button-remove"
          onClick={() => setCart(cart.filter((c) => c.url !== prod.url))}
        >
          Remove from cart
        </button>
      ) : (
        <button className="button-add" onClick={() => setCart([...cart, prod])}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
